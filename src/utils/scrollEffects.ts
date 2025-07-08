import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollEffects(): void {
  gsap.from('#about', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('#links a', {
    scrollTrigger: {
      trigger: '#links',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out',
  });
}
