import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Products } from "@/app/components/Products";
import { AppDownload } from "@/app/components/AppDownload";
import { BulkOrders } from "@/app/components/BulkOrders";
import { Footer } from "@/app/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { InvestmentCalculator } from "@/app/components/InvestmentCalculator";
import { Testimonials } from "@/app/components/Testimonials";
import { TrustBadges } from "@/app/components/TrustBadges";
import { FAQ } from "@/app/components/FAQ";
import { InvestmentComparison } from "@/app/components/InvestmentComparison";
import { SIPSetup } from "@/app/components/SIPSetup";
import { Awards } from "@/app/components/Awards";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { WhatsAppChat } from "@/app/components/WhatsAppChat";
import { Newsletter } from "@/app/components/Newsletter";
import { LoadingScreen } from "@/app/components/LoadingScreen";
import { ParallaxSection } from "@/app/components/ParallaxSection";
import { PriceAlerts } from "@/app/components/PriceAlerts";
import { ReferralProgram } from "@/app/components/ReferralProgram";
import { GoalsTracker } from "@/app/components/GoalsTracker";
import { PremiumFeatures } from "@/app/components/PremiumFeatures";
import { SilverSparkles } from "@/app/components/SilverSparkles";
import { PriceTicker } from "@/app/components/PriceTicker";

export default function App() {
  return (
    <AuthProvider>
      <div className="size-full">
        <SilverSparkles />
        <LoadingScreen />
        <SmoothScroll />
        <PriceTicker />
        <WhatsAppChat />
        <Hero />
        <Features />
        <TrustBadges />
        <ParallaxSection />
        <HowItWorks />
        <InvestmentCalculator />
        <InvestmentComparison />
        <PremiumFeatures />
        <Products />
        <SIPSetup />
        <GoalsTracker />
        <PriceAlerts />
        <Testimonials />
        <Awards />
        <ReferralProgram />
        <AppDownload />
        <BulkOrders />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </AuthProvider>
  );
}
