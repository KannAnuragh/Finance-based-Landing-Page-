import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseScrollSnapOptions {
  containerId: string;
  sectionSelector: string;
  snapDuration?: number;
  snapDelay?: number;
  threshold?: number;
}

export function useScrollSnap({
  containerId,
  sectionSelector,
  snapDuration = 0.1,
  snapDelay = 10,
  threshold = 0.2,
}: UseScrollSnapOptions) {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const sections = Array.from(container.querySelectorAll(sectionSelector));
    
    const findClosestSection = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      let closestSection: Element | null = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const sectionTop = rect.top - containerRect.top + scrollTop;
        
        // Check if section is in viewport or nearby
        const sectionCenter = sectionTop + rect.height / 2;
        const viewportCenter = scrollTop + containerHeight / 2;
        const centerDistance = Math.abs(sectionCenter - viewportCenter);
        
        if (centerDistance < minDistance) {
          minDistance = centerDistance;
          closestSection = section;
        }
      });

      return closestSection;
    };

    const snapToSection = (section: Element) => {
      if (isNavigatingRef.current) return;
      
      const rect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const sectionTop = rect.top - containerRect.top + container.scrollTop;

      isScrollingRef.current = true;
      
      gsap.to(container, {
        duration: snapDuration,
        scrollTop: sectionTop,
        ease: "power2.out",
        onComplete: () => {
          isScrollingRef.current = false;
        }
      });
    };

    const handleScroll = () => {
      if (isScrollingRef.current || isNavigatingRef.current) return;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const closestSection = findClosestSection();
        if (closestSection) {
          snapToSection(closestSection);
        }
      }, snapDelay);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    // Expose method to disable snapping during navigation
    (window as any).__disableScrollSnap = () => {
      isNavigatingRef.current = true;
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1500);
    };

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [containerId, sectionSelector, snapDuration, snapDelay, threshold]);
}
