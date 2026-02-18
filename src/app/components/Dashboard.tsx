import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/app/components/ui/button';
import { X, ArrowRight, Package, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import logoImage from "figma:asset/8def851c9e2fd80d0b1afcfd33177d0e9fe3c17a.png";
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

export function Dashboard({ onClose }: DashboardProps) {
  const { user, signOut, accessToken } = useAuth();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'invest' | 'orders'>('overview');
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
        setInvestments(investmentsData.slice(0, 5)); // Show last 5
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
        
        fetchPortfolioData(); // Refresh all data
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

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#001a0e]/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-white text-sm tracking-wide">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#001a0e]/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#001a0e] border border-[#4a7c5d]/30">
            {/* Header */}
            <div className="border-b border-[#4a7c5d]/20 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <img src={logoImage} alt="Attica Silver" className="h-10" />
                  <div>
                    <div className="text-white font-light text-sm tracking-wide mb-1">Welcome back,</div>
                    <div className="text-white/90 text-lg font-light">{user?.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="border-[#4a7c5d]/30 text-white hover:bg-[#006039] rounded-none tracking-[0.2em] text-[10px] uppercase px-6 h-10"
                  >
                    Sign Out
                  </Button>
                  <button
                    onClick={onClose}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#4a7c5d]/20 px-8">
              <div className="flex gap-8">
                {[
                  { id: 'overview', label: 'Portfolio Overview' },
                  { id: 'invest', label: 'Invest Now' },
                  { id: 'orders', label: 'My Orders' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-5 text-xs uppercase tracking-[0.2em] font-light transition-all border-b-2 ${
                      activeTab === tab.id
                        ? 'text-white border-[#6b9d7a]'
                        : 'text-white/40 border-transparent hover:text-white/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {activeTab === 'overview' && portfolio && (
                <div className="space-y-8">
                  {/* Portfolio Stats */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#002817] border border-[#4a7c5d]/20 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="h-5 w-5 text-[#6b9d7a]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Total Invested</div>
                      </div>
                      <div className="text-4xl font-extralight text-white mb-2">₹{portfolio.totalInvested.toLocaleString()}</div>
                      <div className="text-sm text-white/50 font-light">{portfolio.totalGrams.toFixed(2)}g Silver</div>
                    </div>

                    <div className="bg-[#002817] border border-[#4a7c5d]/20 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-5 w-5 text-[#6b9d7a]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Pending</div>
                      </div>
                      <div className="text-4xl font-extralight text-white mb-2">{portfolio.pendingGrams.toFixed(2)}g</div>
                      <div className="text-sm text-white/50 font-light">₹{portfolio.pendingAmount.toFixed(0)} value</div>
                    </div>

                    <div className="bg-[#002817] border border-[#4a7c5d]/20 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Package className="h-5 w-5 text-[#6b9d7a]" strokeWidth={1} />
                        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Delivered</div>
                      </div>
                      <div className="text-4xl font-extralight text-white mb-2">{portfolio.deliveredGrams.toFixed(0)}g</div>
                      <div className="text-sm text-white/50 font-light">Physical Silver</div>
                    </div>
                  </div>

                  {/* Auto-delivery info */}
                  <div className="bg-[#006039]/20 border border-[#6b9d7a]/30 p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-5 w-5 text-[#6b9d7a] flex-shrink-0 mt-1" strokeWidth={1} />
                      <div>
                        <div className="text-white text-sm font-light mb-2">Auto-Delivery Enabled</div>
                        <div className="text-white/60 text-xs font-light leading-relaxed">
                          Your pending silver will automatically convert to physical delivery when it reaches 10g.
                          Current progress: {portfolio.pendingGrams.toFixed(2)}g / 10g
                        </div>
                        <div className="mt-3 h-2 bg-[#002817] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#6b9d7a] transition-all duration-500"
                            style={{ width: `${Math.min((portfolio.pendingGrams / 10) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Investments */}
                  {investments.length > 0 && (
                    <div>
                      <h3 className="text-xl font-extralight text-white mb-6 tracking-tight">Recent Investments</h3>
                      <div className="space-y-3">
                        {investments.map((inv, idx) => (
                          <div key={idx} className="bg-[#002817] border border-[#4a7c5d]/20 p-5 flex items-center justify-between">
                            <div>
                              <div className="text-white font-light mb-1">₹{inv.amount.toLocaleString()}</div>
                              <div className="text-white/40 text-xs">{new Date(inv.date).toLocaleDateString()}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-white/70 text-sm font-light">{inv.silverGrams.toFixed(3)}g</div>
                              <div className="text-white/40 text-xs">@ ₹{inv.pricePerGram}/g</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'invest' && (
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-extralight text-white mb-4 tracking-tight">Invest in Silver</h2>
                    <p className="text-white/50 font-light tracking-wide">Start from as low as ₹10</p>
                  </div>

                  <form onSubmit={handleInvest} className="space-y-8">
                    <div className="bg-[#002817] border border-[#4a7c5d]/20 p-10">
                      <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-5 font-light">
                        Investment Amount (INR)
                      </label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 text-xl">₹</span>
                        <input
                          type="number"
                          value={investAmount}
                          onChange={(e) => setInvestAmount(e.target.value)}
                          min="10"
                          step="10"
                          required
                          className="w-full bg-[#001a0e] border border-[#4a7c5d]/30 text-white pl-10 pr-5 py-5 text-2xl font-light focus:outline-none focus:border-[#6b9d7a] transition-colors"
                          placeholder="100"
                        />
                      </div>
                      {investAmount && parseFloat(investAmount) >= 10 && (
                        <div className="mt-5 text-white/60 text-sm font-light">
                          ≈ {(parseFloat(investAmount) / SILVER_PRICE_PER_GRAM).toFixed(3)}g of silver @ ₹{SILVER_PRICE_PER_GRAM}/g
                        </div>
                      )}
                    </div>

                    {investSuccess && (
                      <div className="bg-green-950/30 border border-green-900/50 text-green-200 px-6 py-4 text-sm">
                        Investment successful! Your portfolio has been updated.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={investing || !investAmount || parseFloat(investAmount) < 10}
                      className="w-full bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-14 transition-all duration-500 border border-[#4a7c5d]/30 text-base"
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
                        className="bg-[#002817] border border-[#4a7c5d]/20 hover:border-[#6b9d7a]/50 py-4 text-white font-light transition-all"
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-3xl font-extralight text-white mb-8 tracking-tight">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-16 bg-[#002817] border border-[#4a7c5d]/20">
                      <Package className="h-12 w-12 text-white/20 mx-auto mb-4" strokeWidth={1} />
                      <div className="text-white/40 font-light">No orders yet</div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.orderId} className="bg-[#002817] border border-[#4a7c5d]/20 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-white font-light text-lg mb-1">
                                {typeof order.weight === 'number' ? `${order.weight}g` : order.weight} Silver Bar
                              </div>
                              <div className="text-white/40 text-xs">
                                {new Date(order.createdAt).toLocaleDateString()} • {order.type === 'auto-delivery' ? 'Auto-Delivery' : 'Direct Purchase'}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white text-lg font-light">₹{order.price.toLocaleString()}</div>
                              <div className={`text-xs uppercase tracking-wider mt-1 ${
                                order.status === 'processing' ? 'text-yellow-400' :
                                order.status === 'delivered' ? 'text-green-400' :
                                'text-white/40'
                              }`}>
                                {order.status}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
