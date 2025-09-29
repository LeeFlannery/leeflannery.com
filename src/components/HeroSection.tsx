import { useEffect, useCallback } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.hero-text', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });

    // Animate CTA buttons with stagger
    gsap.from('.cta-button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: 'power3.out',
    });

    // Blog CTA is visible by default - no GSAP animation
  }, []);

  const handleButtonHover = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    },
    []
  );

  const handleButtonLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    },
    []
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pt-0 text-white">
      <h1 className="hero-text max-w-3xl pt-12 text-center text-4xl font-bold md:text-6xl">
        See Connections.
        <br /> Build Solutions.
        <br /> Ship Results.
      </h1>
      <p className="mt-6 max-w-2xl text-center text-lg font-bold md:text-xl">
        Hi! I&apos;m Lee Flannery.
      </p>
      <p className="mb-2 mt-6 max-w-2xl text-center text-lg md:text-xl">
        I&apos;m a solutions architect and full-stack engineer with 20+ years of
        experience solving business problems and making users{' '}
        <span className="font-semibold text-green-400">happy</span>. I build
        apps, workflows, and processes that help businesses get to market{' '}
        <span className="font-semibold text-yellow-400">quickly </span>
        and keep developers{' '}
        <span className="font-semibold text-blue-400">sane</span>.
      </p>
      
      {/* Blog CTA */}
      <div className="mt-8 mb-0 text-center">
        <a
          href="https://fullstackdrip.com"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-cta inline-block rounded-lg border-2 border-pink-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-pink-400 shadow-lg transition-all hover:bg-pink-400 hover:text-gray-900 hover:scale-105 text-center"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          📝 My blog content is at Full Stack Drip
        </a>
      </div>
      
      <div className="cta-buttons mt-4 flex flex-wrap justify-center gap-4">
        <a
          href="https://cal.com/releasemode-lee"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button rounded-lg border-2 border-green-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-green-400 shadow-lg transition-colors hover:bg-green-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Schedule a Zoom call
        </a>
        <a
          href="mailto:Lee@releasemode.com"
          className="cta-button rounded-lg border-2 border-blue-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-blue-400 shadow-lg transition-colors hover:bg-blue-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Contact Lee
        </a>
        <a
          href="/projects"
          className="cta-button rounded-lg border-2 border-purple-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-purple-400 shadow-lg transition-colors hover:bg-purple-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          See Some Projects!
        </a>
      </div>
      <p className="mt-8 max-w-2xl text-center text-lg md:text-xl">
        Click the links above to contact me and see{' '}
        <span className="font-semibold text-yellow-400">project samples</span>,
        or ...
      </p>
      <div className="mt-4 pb-12 text-center font-mono text-lg text-white">
        ↓ Scroll to see more
      </div>
    </section>
  );
};

export default HeroSection;
