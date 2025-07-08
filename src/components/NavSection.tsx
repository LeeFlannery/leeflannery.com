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
            className="font-mono text-lg tracking-wide text-white transition-colors hover:bg-white hover:text-black rounded px-1 py-0.5"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Lee Flannery dot com
          </a>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="#about"
            className="font-mono text-lg text-white transition-colors hover:bg-white hover:text-sky-400 rounded px-2 py-1"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            About
          </a>
          {/* Social Media Icons */}
          <div className="ml-4 flex items-center space-x-3">
            <a
              href="https://bsky.app/profile/fullstackdrip.com"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="Bluesky"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <BlueskyIcon />
            </a>

            <a
              href="https://github.com/leeflannery"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="GitHub"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.youtube.com/@FullStackDrip/shorts"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="YouTube"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <YouTubeIcon />
            </a>

            <a
              href="https://linkedin.com/in/leeflannery"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="LinkedIn"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://www.instagram.com/fullstackdrip"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="Instagram"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://threads.net/@fullstackdrip"
              className="text-white transition-colors hover:bg-white hover:text-sky-400 rounded p-1"
              title="Threads"
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
