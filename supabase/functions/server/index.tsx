import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Supabase admin client for user management
const getSupabaseAdmin = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );
};

// Helper to verify user authentication
const verifyUser = async (request: Request) => {
  const accessToken = request.headers.get('Authorization')?.split(' ')[1];
  if (!accessToken) {
    return { error: 'No authorization token', status: 401 };
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
  );

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) {
    return { error: 'Invalid or expired token', status: 401 };
  }

  return { user };
};

// Current silver price per gram (mock - in production, fetch from API)
const SILVER_PRICE_PER_GRAM = 340;

// Health check endpoint
app.get("/make-server-535ce1a9/health", (c) => {
  return c.json({ status: "ok" });
});

// User signup endpoint
app.post("/make-server-535ce1a9/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400);
    }

    const supabase = getSupabaseAdmin();
    
    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log('User signup error during main signup flow:', error);
      return c.json({ error: error.message }, 400);
    }

    // Initialize user portfolio in KV store
    await kv.set(`portfolio:${data.user.id}`, {
      totalInvested: 0,
      totalGrams: 0,
      pendingAmount: 0,
      pendingGrams: 0,
      deliveredGrams: 0,
      createdAt: new Date().toISOString()
    });

    return c.json({ 
      success: true, 
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata.name
      }
    });
  } catch (error) {
    console.log('Unexpected error during signup:', error);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// Get portfolio for authenticated user
app.get("/make-server-535ce1a9/portfolio", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  const portfolio = await kv.get(`portfolio:${auth.user.id}`);
  
  if (!portfolio) {
    // Initialize if doesn't exist
    const newPortfolio = {
      totalInvested: 0,
      totalGrams: 0,
      pendingAmount: 0,
      pendingGrams: 0,
      deliveredGrams: 0,
      createdAt: new Date().toISOString()
    };
    await kv.set(`portfolio:${auth.user.id}`, newPortfolio);
    return c.json(newPortfolio);
  }

  return c.json(portfolio);
});

// Add investment (minimum ₹10)
app.post("/make-server-535ce1a9/invest", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const { amount } = await c.req.json();

    if (!amount || amount < 10) {
      return c.json({ error: 'Minimum investment is ₹10' }, 400);
    }

    // Calculate silver grams
    const silverGrams = amount / SILVER_PRICE_PER_GRAM;

    // Get current portfolio
    const portfolio = await kv.get(`portfolio:${auth.user.id}`) || {
      totalInvested: 0,
      totalGrams: 0,
      pendingAmount: 0,
      pendingGrams: 0,
      deliveredGrams: 0
    };

    // Update portfolio
    const newPendingGrams = portfolio.pendingGrams + silverGrams;
    const updatedPortfolio = {
      ...portfolio,
      totalInvested: portfolio.totalInvested + amount,
      totalGrams: portfolio.totalGrams + silverGrams,
      pendingAmount: portfolio.pendingAmount + amount,
      pendingGrams: newPendingGrams
    };

    // Check if pending grams reached 10g for delivery
    let autoDelivery = null;
    if (newPendingGrams >= 10) {
      const deliverableGrams = Math.floor(newPendingGrams / 10) * 10;
      updatedPortfolio.pendingGrams = newPendingGrams - deliverableGrams;
      updatedPortfolio.deliveredGrams = portfolio.deliveredGrams + deliverableGrams;
      updatedPortfolio.pendingAmount = updatedPortfolio.pendingGrams * SILVER_PRICE_PER_GRAM;

      // Create delivery order
      const orderId = `order:${auth.user.id}:${Date.now()}`;
      autoDelivery = {
        orderId,
        weight: `${deliverableGrams}g`,
        status: 'processing',
        createdAt: new Date().toISOString()
      };
      
      await kv.set(orderId, {
        userId: auth.user.id,
        weight: deliverableGrams,
        price: deliverableGrams * SILVER_PRICE_PER_GRAM,
        status: 'processing',
        type: 'auto-delivery',
        createdAt: new Date().toISOString()
      });
    }

    await kv.set(`portfolio:${auth.user.id}`, updatedPortfolio);

    // Store investment transaction
    const transactionId = `investment:${auth.user.id}:${Date.now()}`;
    await kv.set(transactionId, {
      amount,
      silverGrams,
      pricePerGram: SILVER_PRICE_PER_GRAM,
      date: new Date().toISOString()
    });

    return c.json({ 
      success: true, 
      portfolio: updatedPortfolio,
      autoDelivery
    });
  } catch (error) {
    console.log('Investment error:', error);
    return c.json({ error: 'Investment processing failed' }, 500);
  }
});

// Place order for silver bar
app.post("/make-server-535ce1a9/order", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const { weight, price } = await c.req.json();

    if (!weight || !price) {
      return c.json({ error: 'Weight and price are required' }, 400);
    }

    const orderId = `order:${auth.user.id}:${Date.now()}`;
    const order = {
      userId: auth.user.id,
      weight,
      price,
      status: 'pending',
      type: 'direct-purchase',
      createdAt: new Date().toISOString()
    };

    await kv.set(orderId, order);

    return c.json({ 
      success: true, 
      orderId,
      order 
    });
  } catch (error) {
    console.log('Order placement error:', error);
    return c.json({ error: 'Order placement failed' }, 500);
  }
});

// Get user orders
app.get("/make-server-535ce1a9/orders", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const orderKeys = await kv.getByPrefix(`order:${auth.user.id}:`);
    const orders = orderKeys.map((order: any) => ({
      ...order,
      orderId: order.key
    }));

    // Sort by date, newest first
    orders.sort((a: any, b: any) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json(orders);
  } catch (error) {
    console.log('Fetch orders error:', error);
    return c.json({ error: 'Failed to fetch orders' }, 500);
  }
});

// Get investment history
app.get("/make-server-535ce1a9/investments", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const investments = await kv.getByPrefix(`investment:${auth.user.id}:`);
    
    // Sort by date, newest first
    investments.sort((a: any, b: any) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return c.json(investments);
  } catch (error) {
    console.log('Fetch investments error:', error);
    return c.json({ error: 'Failed to fetch investments' }, 500);
  }
});

// Submit bulk order request
app.post("/make-server-535ce1a9/bulk-order", async (c) => {
  try {
    const { name, email, phone, company, quantity, weight } = await c.req.json();

    if (!name || !email || !phone || !quantity) {
      return c.json({ error: 'Name, email, phone, and quantity are required' }, 400);
    }

    const requestId = `bulk:${Date.now()}`;
    const bulkOrder = {
      name,
      email,
      phone,
      company: company || '',
      quantity,
      weight: weight || '100g',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    await kv.set(requestId, bulkOrder);

    return c.json({ 
      success: true, 
      message: 'Bulk order request submitted successfully',
      requestId
    });
  } catch (error) {
    console.log('Bulk order submission error:', error);
    return c.json({ error: 'Failed to submit bulk order' }, 500);
  }
});

// Get current silver price
app.get("/make-server-535ce1a9/silver-price", (c) => {
  return c.json({ 
    pricePerGram: SILVER_PRICE_PER_GRAM,
    currency: 'INR',
    lastUpdated: new Date().toISOString()
  });
});

// Setup SIP (Systematic Investment Plan)
app.post("/make-server-535ce1a9/setup-sip", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const { amount, frequency, startDate, duration } = await c.req.json();

    if (!amount || !frequency || !startDate || !duration) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    if (parseFloat(amount) < 500) {
      return c.json({ error: 'Minimum SIP amount is ₹500' }, 400);
    }

    const sipId = `sip:${auth.user.id}:${Date.now()}`;
    const sipPlan = {
      userId: auth.user.id,
      amount: parseFloat(amount),
      frequency,
      startDate,
      duration: parseInt(duration),
      status: 'active',
      createdAt: new Date().toISOString(),
      nextInvestmentDate: startDate
    };

    await kv.set(sipId, sipPlan);

    return c.json({ 
      success: true, 
      message: 'SIP setup successful',
      sipId,
      sipPlan
    });
  } catch (error) {
    console.log('SIP setup error:', error);
    return c.json({ error: 'Failed to setup SIP' }, 500);
  }
});

// Newsletter subscription
app.post("/make-server-535ce1a9/newsletter", async (c) => {
  try {
    const { email } = await c.req.json();

    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Invalid email format' }, 400);
    }

    const subscriberId = `newsletter:${email}`;
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    await kv.set(subscriberId, subscription);

    return c.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.log('Newsletter subscription error:', error);
    return c.json({ error: 'Failed to subscribe' }, 500);
  }
});

// Price alert setup
app.post("/make-server-535ce1a9/price-alert", async (c) => {
  const auth = await verifyUser(c.req.raw);
  if (auth.error) {
    return c.json({ error: auth.error }, auth.status);
  }

  try {
    const { targetPrice, alertType, notification } = await c.req.json();

    if (!targetPrice || !alertType || !notification) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    const alertId = `alert:${auth.user.id}:${Date.now()}`;
    const priceAlert = {
      userId: auth.user.id,
      targetPrice: parseFloat(targetPrice),
      alertType, // 'above' or 'below'
      notification, // 'email', 'sms', 'both', 'push'
      status: 'active',
      createdAt: new Date().toISOString()
    };

    await kv.set(alertId, priceAlert);

    return c.json({ 
      success: true, 
      message: 'Price alert set successfully',
      alertId,
      priceAlert
    });
  } catch (error) {
    console.log('Price alert setup error:', error);
    return c.json({ error: 'Failed to set price alert' }, 500);
  }
});

Deno.serve(app.fetch);