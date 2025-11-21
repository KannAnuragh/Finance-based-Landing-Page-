import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { motion } from "framer-motion";
import { Logos3 } from "@/components/blocks/logos3";
import { Gallery6 } from "@/components/blocks/gallery6";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { PricingSection } from "@/components/blocks/pricing-section-2";
import { Testimonials } from "@/components/blocks/testimonials";
import { CallToAction } from "@/components/blocks/cta-3";
import { MinimalFooter } from "@/components/blocks/minimal-footer";

export default function App() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Pricing", link: "#pricing" },
  ];

  return (
    <>
      <AuroraBackground>
        <FloatingNav navItems={navItems} />
      <div className="relative flex flex-col gap-6 items-center justify-center px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
        >
          Send & Receive Money Instantly<br />
          Secure Simple Goal
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="font-normal text-lg lg:text-2xl md:text-xl text-gray-600 max-w-2xl"
        >
          Manage spending, track income, and stay on top of your finance with ease
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex gap-4 items-center mt-4"
        >
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border lg:text-xl border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[280px]"
          />
          <button className="bg-gray-900 hover:bg-gray-800 lg:text-xl rounded-full text-white px-6 py-3 flex items-center gap-2 transition-colors">
            
            Get Started
          </button>
        </motion.div>
      </div>
    </AuroraBackground>

    <Logos3 />
    
    <Gallery6 />
    
    <FeaturesSectionWithHoverEffects />
    
    <PricingSection />
    
    <Testimonials />
    
    <CallToAction />
    
    <MinimalFooter />
    </>
  );
}