import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation
    gsap.from('.hero-text', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pt-0 text-white">
      <h1
        ref={headlineRef}
        className="hero-text max-w-3xl text-center text-4xl font-bold md:text-6xl"
      >
        See Connections.
        <br /> Build Solutions.
        <br /> Ship Results.
      </h1>
      <p ref={subRef} className="mt-6 max-w-2xl text-center text-lg md:text-xl">
        I&apos;m Lee. I connect technical possibilities with real business
        problems, then build the web apps, AI workflows, and technical
        strategies that help companies win.
      </p>
      <div className="cta-buttons mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg hover:bg-gray-200">
          Book Me
        </button>
        <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg hover:bg-gray-200">
          🧠 Full Stack Drip
        </button>
        <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg hover:bg-gray-200">
          📽️ Watch the Work
        </button>
        <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg hover:bg-gray-200">
          💼 Release Mode Consulting
        </button>
      </div>
      <div
        ref={arrowRef}
        className="mt-12 text-center font-mono text-lg text-white"
      >
        ↓ Scroll down to see more
      </div>
    </section>
  );
};

export default HeroSection;
