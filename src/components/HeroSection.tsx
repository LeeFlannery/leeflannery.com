import { useEffect, useCallback } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // GSAP animation
    gsap.from('.hero-text', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });
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
      <h1 className="hero-text max-w-3xl text-center text-4xl font-bold md:text-6xl">
        See Connections.
        <br /> Build Solutions.
        <br /> Ship Results.
      </h1>
      <p
        className="mt-6 max-w-2xl text-center text-lg md:text-xl
         font-bold"
      >
        Hi! I&apos;m Lee Flannery.
      </p>
      <p className="mt-6 max-w-2xl text-center text-lg md:text-xl">
        I&apos;m a solutions architect and full-stack engineer with 20+ years of
        experience solving business problems and making users{' '}
        <span className="text-green-400 font-semibold">happy</span>. I build
        apps, workflows, and processes that help businesses get to market{' '}
        <span className="text-yellow-400 font-semibold">quickly </span>
        and keep developers{' '}
        <span className="text-pink-400 font-semibold">sane</span>.
      </p>
      <div className="cta-buttons mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="https://cal.com/releasemode-lee"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-green-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-green-400 shadow-lg transition-colors hover:bg-green-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Schedule a meeting
        </a>
        <a
          href="mailto:Lee@releasemode.com"
          className="rounded-lg border-2 border-blue-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-blue-400 shadow-lg transition-colors hover:bg-blue-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Contact Lee
        </a>
        <a
          href="https://github.com/leeflannery"
          className="rounded-lg border-2 border-purple-400 bg-gray-900 px-6 py-3 font-mono font-semibold text-purple-400 shadow-lg transition-colors hover:bg-purple-400 hover:text-gray-900"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          See Some Code
        </a>
      </div>
      <div className="mt-12 text-center font-mono text-lg text-white">
        ↓ Scroll to see more
      </div>
    </section>
  );
};

export default HeroSection;
