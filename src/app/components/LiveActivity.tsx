import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Package, Users, X } from 'lucide-react';

interface Activity {
  id: number;
  type: 'investment' | 'delivery' | 'signup';
  message: string;
  location: string;
  time: string;
}

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat'];
const amounts = [500, 1000, 2000, 5000, 10000];
const weights = ['10g', '50g', '100g'];

export function LiveActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let idCounter = 0;

    const generateActivity = (): Activity => {
      const types: Activity['type'][] = ['investment', 'delivery', 'signup'];
      const type = types[Math.floor(Math.random() * types.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      
      let message = '';
      if (type === 'investment') {
        const amount = amounts[Math.floor(Math.random() * amounts.length)];
        message = `Someone invested ₹${amount.toLocaleString()}`;
      } else if (type === 'delivery') {
        const weight = weights[Math.floor(Math.random() * weights.length)];
        message = `${weight} silver bar delivered`;
      } else {
        message = 'New investor joined';
      }

      idCounter++;
      return {
        id: idCounter,
        type,
        message,
        location: city,
        time: 'Just now'
      };
    };

    // Initial activity
    setActivities([generateActivity()]);

    const interval = setInterval(() => {
      const newActivity = generateActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'investment':
        return TrendingUp;
      case 'delivery':
        return Package;
      case 'signup':
        return Users;
    }
  };

  const getColor = (type: Activity['type']) => {
    // Silver/White base with colored accents/icons
    switch (type) {
      case 'investment':
        return 'text-[#006039] bg-white border-[#006039]/20';
      case 'delivery':
        return 'text-[#004d2e] bg-white border-[#004d2e]/20';
      case 'signup':
        return 'text-[#4a7c5d] bg-white border-[#4a7c5d]/20';
    }
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-8 left-8 z-30 max-w-sm hidden lg:block">
      <AnimatePresence mode="popLayout">
        {activities.map((activity) => {
          const Icon = getIcon(activity.type);
          const colorClass = getColor(activity.type);

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`mb-3 ${colorClass} border backdrop-blur-md p-4 shadow-lg relative group pr-8`}
            >
              <button 
                onClick={() => setIsDismissed(true)}
                className="absolute top-2 right-2 text-[#002817]/20 hover:text-[#002817] transition-colors p-1"
                aria-label="Close notifications"
              >
                <X className="h-3 w-3" />
              </button>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#002817] text-sm font-light mb-1">
                    {activity.message}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#002817]/50">
                    <span>{activity.location}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
