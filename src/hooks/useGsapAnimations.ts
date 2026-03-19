'use client';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Custom hook to execute GSAP animations while respecting accessibility settings.
 * @param callback The animation logic to execute. `isReducedMotion` will be true if the user prefers reduced motion.
 * @param dependencies Optional variables that trigger a re-run of the animation.
 */
export const useGsapAnimations = (
  callback: (
    payload: { context: gsap.Context; gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger },
    isReducedMotion: boolean
  ) => void,
  dependencies: unknown[] = []
) => {
  useGSAP((context) => {
    const mm = gsap.matchMedia();
    const payload = { context, gsap, ScrollTrigger };
    
    // Normal animations
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      callback(payload, false);
    });

    // Reduced animations (fallback)
    mm.add('(prefers-reduced-motion: reduce)', () => {
      callback(payload, true);
    });

    return () => mm.revert();
  }, { dependencies });
};
