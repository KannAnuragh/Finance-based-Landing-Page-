import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating_navbar";
import { motion } from "framer-motion";
import { Logos3 } from "@/components/blocks/logos3";
import { Gallery6 } from "@/components/blocks/gallery6";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { PricingSection } from "@/components/blocks/pricing-section-2";
import { Testimonials } from "@/components/blocks/testimonials";
import { CallToAction } from "@/components/blocks/cta-3";
import { MinimalFooter } from "@/components/blocks/minimal-footer";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function App() {
  // Enable GSAP-based scroll snapping
  useScrollSnap({
    containerId: 'scroll-container',
    sectionSelector: 'section',
    snapDuration: 0.8,
    snapDelay: 200,
  });
  // Navigation items for the floating navbar
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Features", link: "features" },
    { name: "How It Works", link: "how-it-works" },
    { name: "Pricing", link: "pricing" },
  ];

  /**
   * SCROLL SNAP CONFIGURATION
   * 
   * To adjust scroll snap behavior, modify these Tailwind classes on the main container:
   * 
   * - snap-y snap-mandatory: Enables vertical scroll snapping with mandatory snap points
   * - h-screen: Makes container full viewport height
   * - overflow-y-scroll: Enables vertical scrolling
   * 
   * For each section Element:
   * - snap-start: Snaps to the start of the element
   * - snap-center: Alternative - snaps to center of viewport
   * - snap-end: Alternative - snaps to end of viewport
   * 
   * To disable snap on specific sections, remove the snap-start class from that Element.
   * To change snap strictness, replace snap-mandatory with snap-proximity for looser snapping.
   */

  return (
    <div id="scroll-container" className="h-screen overflow-y-scroll">{/* Main scroll container - edit classes here to adjust snap behavior */}
      <section id="home">
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
            className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-gray-300/50 lg:text-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_15px_rgb(0,0,0,0.08)] min-w-[280px]"
          />
          <button className="bg-gray-900 hover:bg-gray-800 hover:font-bold lg:text-xl rounded-full text-white px-6 py-3 flex items-center gap-2 transition-colors">
            
            Get Started
          </button>
        </motion.div>
      </div>
        </AuroraBackground>
      </section>

      <section id="logos">
        <Logos3 />
      </section>
    
      <section id="features">
        <Gallery6 />
      </section>
    
      <section id="how-it-works">
        <FeaturesSectionWithHoverEffects />
      </section>
    
      <section id="pricing">
        <PricingSection />
      </section>
    
      <section id="testimonials">
        <Testimonials />
      </section>
    
      <section id="cta">
        <CallToAction />
      </section>
    
      <section id="footer">
        <MinimalFooter />
      </section>
    </div>
  );
}
