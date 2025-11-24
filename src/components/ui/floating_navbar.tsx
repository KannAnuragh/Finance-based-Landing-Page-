"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export interface FloatingNavItem {
  name: string;
  link: string;
  icon?: React.ReactElement;
}

interface FloatingNavProps {
  navItems: FloatingNavItem[];
  className?: string;
  /** If true the navbar is always shown and scroll logic is disabled */
  alwaysVisible?: boolean;
  /** Scroll progress threshold (0-1) before applying hide/show logic */
  threshold?: number;
}

export function FloatingNav({
  navItems,
  className,
  alwaysVisible = true,
  threshold = 0.05,
}: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(alwaysVisible);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (alwaysVisible) {
      if (!visible) setVisible(true);
      return;
    }
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? current;
      const direction = current - previous; // negative when scrolling up
      const progress = scrollYProgress.get();
      if (progress < threshold) {
        // At top: keep visible for better UX
        setVisible(true);
      } else {
        // Show when user scrolls up, hide when scrolling down
        setVisible(direction < 0);
      }
    }
    
  });

  // Smooth scroll to section using GSAP
  const handleScrollTo = (sectionId: string) => {
    const container = document.getElementById('scroll-container');
    const element = document.getElementById(sectionId);
    
    if (container && element) {
      const offsetTop = element.offsetTop;
      
      // Disable scroll snapping during navigation
      if ((window as any).__disableScrollSnap) {
        (window as any).__disableScrollSnap();
      }
      
      gsap.to(container, {
        duration: 1.2,
        scrollTop: offsetTop,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex fixed top-6 inset-x-0 mx-auto max-w-7xl px-8 md:px-8 z-[5000]",
          className
        )}
      >
        <div className="flex w-full items-center justify-between bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-full border border-gray-300/50 dark:border-white/10 shadow-[0_9px_30px_rgb(0,0,0,0.12)] px-4 md:px-6 py-3">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">RandomLoGo</span>
          </motion.a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <button
                key={item.link + idx}
                onClick={() => handleScrollTo(item.link)}
                className="cursor-pointer bg-transparent border-none p-0"
              >
                <motion.div
                  className="relative px-6 py-1 text-md font-medium text-gray-800 dark:text-gray-400 rounded-full"
                  whileHover="hover"
                  initial="initial"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Text with zoom */}
                  <motion.span
                    className="relative z-10"
                    variants={{
                      initial: { color: "rgb(107, 114, 128)", scale: 1 },
                      hover: { color: "rgb(17, 24, 39)", scale: 1.3 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gray-900 dark:border-gray-800"
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.div>
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <motion.button
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-md font-medium shadow-lg hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              ▶
            </motion.span>
            <span>Get Started</span>
          </motion.button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
