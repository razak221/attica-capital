import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/app/components/ui/button';
import { X, ArrowRight, Package, TrendingUp, Clock, CheckCircle, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { projectId } from '/utils/supabase/info';
import logoImage from "figma:asset/8def851c9e2fd80d0b1afcfd33177d0e9fe3c17a.png";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'motion/react';
import { SILVER_PRICE_PER_GRAM } from "@/app/constants/config";

interface DashboardProps {
  onClose: () => void;
}

interface Portfolio {
  totalInvested: number;
  totalGrams: number;
  pendingAmount: number;
  pendingGrams: number;
  deliveredGrams: number;
}

interface Investment {
  amount: number;
  silverGrams: number;
  pricePerGram: number;
  date: string;
}

interface Order {
  orderId: string;
  weight: string | number;
  price: number;
  status: string;
  type: string;
  createdAt: string;
}

export function EnhancedDashboard({ onClose }: DashboardProps) {
  const { user, signOut, accessToken } = useAuth();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'invest' | 'analytics' | 'orders'>('overview');
  const [investAmount, setInvestAmount] = useState('');
  const [investing, setInvesting] = useState(false);
  const [investSuccess, setInvestSuccess] = useState(false);

  useEffect(() => {
    if (user && accessToken) {
      fetchPortfolioData();
    }
  }, [user, accessToken]);

  const fetchPortfolioData = async () => {
    try {
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      };

      const [portfolioRes, investmentsRes, ordersRes] = await Promise.all([
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/portfolio`, { headers }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/investments`, { headers }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/orders`, { headers })
      ]);

      if (portfolioRes.ok) {
        const portfolioData = await portfolioRes.json();
        setPortfolio(portfolioData);
      }

      if (investmentsRes.ok) {
        const investmentsData = await investmentsRes.json();
        setInvestments(investmentsData);
      }

      if (ordersRes.ok) {
        const ordersData = await ordersRes.json();
        setOrders(ordersData);
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInvest = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(investAmount);

    if (amount < 10) {
      alert('Minimum investment is ₹10');
      return;
    }

    setInvesting(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-535ce1a9/invest`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({ amount })
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPortfolio(data.portfolio);
        setInvestAmount('');
        setInvestSuccess(true);
        setTimeout(() => setInvestSuccess(false), 3000);
        
        if (data.autoDelivery) {
          alert(`Congratulations! Your investment reached 10g. Physical delivery of ${data.autoDelivery.weight} has been initiated!`);
        }
        
        fetchPortfolioData();
      } else {
        const error = await response.json();
        alert(error.error || 'Investment failed');
      }
    } catch (error) {
      console.error('Investment error:', error);
      alert('Failed to process investment');
    } finally {
      setInvesting(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  // Prepare chart data
  const investmentChartData = investments.slice(0, 10).reverse().map((inv, index) => ({
    name: `Inv ${index + 1}`,
    amount: inv.amount,
    silver: inv.silverGrams,
    date: new Date(inv.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
  }));

  const pieChartData = portfolio ? [
    { name: 'Delivered Silver', value: portfolio.deliveredGrams, color: '#006039' },
    { name: 'Pending Silver', value: portfolio.pendingGrams, color: '#4a7c5d' }
  ] : [];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-sm tracking-wide bg-white px-8 py-4 rounded-md shadow-xl text-[#002817]"
        >
          Loading portfolio...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white border border-[#002817]/10 shadow-2xl">
            {/* Header */}
            <div className="border-b border-[#002817]/10 p-8 bg-[#f5f5f7]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <img src={logoImage} alt="Attica Silver" className="h-10 filter invert contrast-150" />
                  <div>
                    <div className="text-[#002817] font-light text-sm tracking-wide mb-1">Welcome back,</div>
                    <div className="text-[#002817] text-lg font-light">{user?.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="border-[#002817]/20 text-[#002817] hover:bg-[#006039] hover:text-white rounded-none tracking-[0.2em] text-[10px] uppercase px-6 h-10 transition-colors"
                  >
                    Sign Out
                  </Button>
                  <button
                    onClick={onClose}
                    className="text-[#002817]/40 hover:text-[#002817] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#002817]/10 px-8 bg-white">
              <div className="flex gap-8">
                {[
                  { id: 'overview', label: 'Portfolio', icon: TrendingUp },
                  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                  { id: 'invest', label: 'Invest Now', icon: ArrowRight },
                  { id: 'orders', label: 'Orders', icon: Package }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-5 text-xs uppercase tracking-[0.2em] font-light transition-all border-b-2 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'text-[#006039] border-[#006039]'
                        : 'text-[#002817]/40 border-transparent hover:text-[#002817]/70'
                    }`}
                  >
                    <tab.icon className="h-3.5 w-3.5" strokeWidth={1} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 bg-white min-h-[600px]">
              {activeTab === 'overview' && portfolio && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-[#006039]/5 to-[#f5f5f7] border border-[#006039]/20 p-8"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Total Invested</div>
                      </div>
                      <div className="text-5xl font-extralight text-[#002817] mb-2">₹{portfolio.totalInvested.toLocaleString()}</div>
                      <div className="text-sm text-[#002817]/50 font-light">{portfolio.totalGrams.toFixed(2)}g Silver</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white border border-[#002817]/10 p-8 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Pending</div>
                      </div>
                      <div className="text-5xl font-extralight text-[#002817] mb-2">{portfolio.pendingGrams.toFixed(2)}g</div>
                      <div className="text-sm text-[#002817]/50 font-light">₹{portfolio.pendingAmount.toFixed(0)} value</div>
                      
                      {/* Progress to 10g */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-[#002817]/30 mb-2">
                          <span>Progress to delivery</span>
                          <span>{Math.min(Math.round((portfolio.pendingGrams / 10) * 100), 100)}%</span>
                        </div>
                        <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden border border-[#002817]/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((portfolio.pendingGrams / 10) * 100, 100)}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[#006039] to-[#4a7c5d]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white border border-[#002817]/10 p-8 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Package className="h-5 w-5 text-[#006039]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#002817]/40">Delivered</div>
                      </div>
                      <div className="text-5xl font-extralight text-[#002817] mb-2">{portfolio.deliveredGrams.toFixed(0)}g</div>
                      <div className="text-sm text-[#002817]/50 font-light">Physical Silver</div>
                    </motion.div>
                  </div>

                  {/* Recent Activity */}
                  {investments.length > 0 && (
                    <div>
                      <h3 className="text-xl font-extralight text-[#002817] mb-6 tracking-tight">Recent Investments</h3>
                      <div className="space-y-3">
                        {investments.slice(0, 5).map((inv, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-[#002817]/10 p-5 flex items-center justify-between hover:border-[#006039]/30 transition-all shadow-sm hover:shadow-md"
                          >
                            <div>
                              <div className="text-[#002817] font-light mb-1">₹{inv.amount.toLocaleString()}</div>
                              <div className="text-[#002817]/40 text-xs">{new Date(inv.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[#002817]/70 text-sm font-light">+{inv.silverGrams.toFixed(3)}g</div>
                              <div className="text-[#002817]/40 text-xs">@ ₹{inv.pricePerGram}/g</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-extralight text-[#002817] mb-8 tracking-tight">Portfolio Analytics</h2>
                  
                  {/* Investment Trend Chart */}
                  {investmentChartData.length > 0 && (
                    <div className="bg-white border border-[#002817]/10 p-8 shadow-sm">
                      <h3 className="text-xl font-light text-[#002817] mb-6">Investment History</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={investmentChartData}>
                          <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#006039" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#006039" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#002817" opacity={0.1} />
                          <XAxis dataKey="date" stroke="#002817" style={{ fontSize: '12px', opacity: 0.5 }} />
                          <YAxis stroke="#002817" style={{ fontSize: '12px', opacity: 0.5 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#fff',
                              border: '1px solid #e5e5e5',
                              borderRadius: '0',
                              color: '#002817'
                            }}
                          />
                          <Area type="monotone" dataKey="amount" stroke="#006039" fillOpacity={1} fill="url(#colorAmount)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Silver Distribution */}
                  {portfolio && pieChartData.length > 0 && (
                    <div className="bg-white border border-[#002817]/10 p-8 shadow-sm">
                      <h3 className="text-xl font-light text-[#002817] mb-6">Silver Distribution</h3>
                      <div className="flex items-center justify-center">
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={pieChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e5e5',
                                color: '#002817'
                              }}
                            />
                            <Legend
                              wrapperStyle={{ color: '#002817' }}
                              formatter={(value) => <span style={{ color: '#002817' }}>{value}</span>}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'invest' && (
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-extralight text-[#002817] mb-4 tracking-tight">Invest in Silver</h2>
                    <p className="text-[#002817]/50 font-light tracking-wide">Start from as low as ₹10</p>
                  </div>

                  <form onSubmit={handleInvest} className="space-y-8">
                    <div className="bg-[#f5f5f7] border border-[#002817]/10 p-10">
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#002817]/60 mb-5 font-light">
                        Investment Amount (INR)
                      </label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#002817]/40 text-xl">₹</span>
                        <input
                          type="number"
                          value={investAmount}
                          onChange={(e) => setInvestAmount(e.target.value)}
                          min="10"
                          step="10"
                          required
                          className="w-full bg-white border border-[#002817]/20 text-[#002817] pl-10 pr-5 py-5 text-2xl font-light focus:outline-none focus:border-[#006039] transition-colors placeholder:text-[#002817]/20"
                          placeholder="100"
                        />
                      </div>
                      {investAmount && parseFloat(investAmount) >= 10 && (
                        <div className="mt-5 text-[#002817]/60 text-sm font-light">
                          ≈ {(parseFloat(investAmount) / SILVER_PRICE_PER_GRAM).toFixed(3)}g of silver @ ₹{SILVER_PRICE_PER_GRAM}/g
                        </div>
                      )}
                    </div>

                    {investSuccess && (
                      <div className="bg-[#006039]/10 border border-[#006039]/20 text-[#006039] px-6 py-4 text-sm">
                        ✓ Investment successful! Your portfolio has been updated.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={investing || !investAmount || parseFloat(investAmount) < 10}
                      className="w-full bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-14 transition-all duration-500 border border-[#006039]/30 text-base"
                    >
                      {investing ? 'Processing...' : 'Invest Now'}
                      {!investing && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>

                  <div className="mt-10 grid grid-cols-4 gap-4">
                    {[100, 500, 1000, 5000].map(amount => (
                      <button
                        key={amount}
                        onClick={() => setInvestAmount(amount.toString())}
                        className="bg-white border border-[#002817]/10 hover:border-[#006039]/50 py-4 text-[#002817] font-light transition-all shadow-sm"
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-3xl font-extralight text-[#002817] mb-8 tracking-tight">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-16 bg-[#f5f5f7] border border-[#002817]/10">
                      <Package className="h-12 w-12 text-[#002817]/20 mx-auto mb-4" strokeWidth={1} />
                      <div className="text-[#002817]/40 font-light">No orders yet</div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order, index) => (
                        <motion.div
                          key={order.orderId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white border border-[#002817]/10 p-6 hover:border-[#006039]/30 transition-all shadow-sm"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-[#002817] font-light text-lg mb-1">
                                {typeof order.weight === 'number' ? `${order.weight}g` : order.weight} Silver Bar
                              </div>
                              <div className="text-[#002817]/40 text-xs">
                                {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} • {order.type === 'auto-delivery' ? 'Auto-Delivery' : 'Direct Purchase'}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[#002817] text-lg font-light">₹{order.price.toLocaleString()}</div>
                              <div className={`text-xs uppercase tracking-wider mt-1 ${
                                order.status === 'processing' ? 'text-yellow-600' :
                                order.status === 'delivered' ? 'text-green-600' :
                                'text-[#002817]/40'
                              }`}>
                                {order.status}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
