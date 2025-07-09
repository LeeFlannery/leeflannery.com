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
            <GlassesIcon className="h-10 w-10 text-blue-500" />
          </div>
          <a
            href="/"
            className="rounded px-1 py-0.5 font-mono text-lg tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Lee Flannery dot com
          </a>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="/#about"
            className="rounded px-2 py-1 font-mono text-lg text-white transition-colors hover:bg-white hover:text-sky-400"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            About
          </a>
          {/* Social Media Icons */}
          <div className="ml-4 flex items-center space-x-3">
            <a
              href="https://bsky.app/profile/fullstackdrip.com"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="Bluesky"
              aria-label="Bluesky profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <BlueskyIcon />
            </a>

            <a
              href="https://github.com/leeflannery"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="GitHub"
              aria-label="GitHub profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.youtube.com/@FullStackDrip/shorts"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="YouTube"
              aria-label="YouTube channel"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <YouTubeIcon />
            </a>

            <a
              href="https://linkedin.com/in/leeflannery"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="LinkedIn"
              aria-label="LinkedIn profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://www.instagram.com/fullstackdrip"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="Instagram"
              aria-label="Instagram profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://threads.net/@fullstackdrip"
              className="rounded p-1 text-white transition-colors hover:bg-white hover:text-sky-400"
              title="Threads"
              aria-label="Threads profile"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <AtSignIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavReact;
