import React, { useCallback } from 'react';
import gsap from 'gsap';
import {
  GlassesIcon,
  BlueskyIcon,
  GitHubIcon,
  YouTubeIcon,
  LinkedInIcon,
  InstagramIcon,
  AtSignIcon,
} from './Icons';

const NavReact: React.FC = () => {
  const handleLinkHover = useCallback((e: React.MouseEvent<any>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, []);

  const handleLinkLeave = useCallback((e: React.MouseEvent<any>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <GlassesIcon className="h-8 w-8 text-blue-500 md:h-10 md:w-10" />
          </div>
          <a
            href="/"
            className="rounded px-1 py-0.5 font-mono text-base tracking-wide text-white transition-colors hover:bg-white hover:text-black md:text-lg"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Lee Flannery dot com
          </a>
        </div>
        <nav className="flex items-center space-x-2 md:space-x-4">
          <a
            href="/#about"
            className="rounded px-2 py-1 font-mono text-base text-white transition-colors hover:bg-white hover:text-sky-400 md:text-lg"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            About
          </a>
          {/* Social Media Icons */}
          <div className="ml-2 flex items-center space-x-1 md:ml-4 md:space-x-3">
            {/* Primary social icons - always visible */}
            <a
              href="https://github.com/leeflannery"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="GitHub"
              aria-label="GitHub profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <GitHubIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            <a
              href="https://linkedin.com/in/leeflannery"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="LinkedIn"
              aria-label="LinkedIn profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <LinkedInIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            {/* Secondary social icons - hidden on very small screens */}
            <a
              href="https://bsky.app/profile/fullstackdrip.com"
              className="hidden rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400 sm:block"
              title="Bluesky"
              aria-label="Bluesky profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <BlueskyIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            <a
              href="https://www.youtube.com/@FullStackDrip/shorts"
              className="hidden rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400 sm:block"
              title="YouTube"
              aria-label="YouTube channel"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <YouTubeIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            <a
              href="https://www.instagram.com/fullstackdrip"
              className="hidden rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400 sm:block"
              title="Instagram"
              aria-label="Instagram profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <InstagramIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>

            <a
              href="https://threads.net/@fullstackdrip"
              className="hidden rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400 sm:block"
              title="Threads"
              aria-label="Threads profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <AtSignIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavReact;
