import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/app/components/ui/button';
import { X } from 'lucide-react';
import logoImage from "figma:asset/8def851c9e2fd80d0b1afcfd33177d0e9fe3c17a.png";

interface AuthProps {
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
  mode?: 'signin' | 'signup';
  onAuthSuccess?: () => void;
}

export function Auth({ onClose, initialMode = 'signin', mode: propMode, onAuthSuccess }: AuthProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(propMode || initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        const result = await signUp(email, password, name);
        if (result.success) {
          onClose();
          if (onAuthSuccess) {
            onAuthSuccess();
          }
        } else {
          setError(result.error || 'Signup failed');
        }
      } else {
        const result = await signIn(email, password);
        if (result.success) {
          onClose();
          if (onAuthSuccess) {
            onAuthSuccess();
          }
        } else {
          setError(result.error || 'Sign in failed');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#001a0e]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#001a0e] border border-[#4a7c5d]/30 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logoImage} alt="Attica Silver" className="h-12" />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extralight text-white mb-3 tracking-tight">
              {mode === 'signup' ? 'Begin Your Journey' : 'Welcome Back'}
            </h2>
            <p className="text-white/50 text-sm font-light tracking-wide">
              {mode === 'signup' 
                ? 'Start investing in silver from ₹10' 
                : 'Access your silver portfolio'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-[#002817] border border-[#4a7c5d]/30 text-white px-5 py-3.5 text-sm focus:outline-none focus:border-[#6b9d7a] transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-3 text-xs">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#006039] text-white hover:bg-[#004d2e] rounded-none tracking-[0.3em] text-[10px] uppercase h-12 transition-all duration-500 border border-[#4a7c5d]/30"
            >
              {loading ? 'Processing...' : (mode === 'signup' ? 'Create Account' : 'Sign In')}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setMode(mode === 'signup' ? 'signin' : 'signup');
                setError('');
              }}
              className="text-white/60 hover:text-white text-xs tracking-wide transition-colors font-light"
            >
              {mode === 'signup' 
                ? 'Already have an account? Sign in' 
                : 'New to Attica Silver? Create account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}