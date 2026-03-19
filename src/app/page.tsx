import { HeroSection } from "./components/HeroSection";
import { ClientLogos } from "./components/ClientLogos";
import { MVPFeatures } from "./components/MVPFeatures";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { CustomerReviews } from "./components/CustomerReviews";
import { PricingSection } from "./components/PricingSection";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { TopNavbar } from "./components/TopNavbar";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function LandingPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-[#0A0F1C] bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(900px_500px_at_90%_35%,rgba(124,58,237,0.14),transparent_60%),radial-gradient(800px_450px_at_50%_110%,rgba(79,70,229,0.12),transparent_65%)]">
      <AnimatedBackground />
      <TopNavbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="solutions">
        <ClientLogos />
        <FeaturesGrid />
      </div>
      <div id="features">
        <MVPFeatures />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div className="relative flex flex-col w-full" id="reviews">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0078d4]/5 to-[#9692ff]/10" />
        <CallToAction />
        <CustomerReviews />
        <Footer />
      </div>
    </main>
  );
}
