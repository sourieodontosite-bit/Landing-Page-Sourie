import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Premium easing functions for a high-end feel
 * Inspired by Apple/Stripe aesthetics
 */
export const Easing = {
  premium: "power4.out",
  expo: "expo.out",
  soft: "power2.inOut",
  cinematic: "custom(0.22, 1, 0.36, 1)", // Mimicking the cubic-bezier used in the existing animations
};

/**
 * Standard durations for consistency
 */
export const Duration = {
  fast: 0.4,
  standard: 0.8,
  slow: 1.2,
  cinematic: 1.6,
};

/**
 * Helper to create a standard reveal animation
 */
export const createReveal = (
  element: gsap.DOMTarget, 
  options: gsap.TweenVars = {}
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: Duration.standard,
    ease: Easing.premium,
    ...options,
  });
};

/**
 * Helper for staggered reveals
 */
export const createStaggeredReveal = (
  elements: gsap.DOMTarget,
  stagger: number = 0.1,
  options: gsap.TweenVars = {}
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    stagger,
    duration: Duration.standard,
    ease: Easing.premium,
    ...options,
  });
};
