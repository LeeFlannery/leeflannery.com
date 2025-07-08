import React from 'react';
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
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <GlassesIcon className="h-10 w-10 text-blue-500" />
          </div>
          <h1 className="font-mono text-lg tracking-wide text-white">
            Lee Flannery dot com
          </h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="#about"
            className="font-mono text-lg text-white transition-colors hover:text-sky-400"
          >
            About
          </a>
          {/* Social Media Icons */}
          <div className="ml-4 flex items-center space-x-3">
            <a
              href="https://bsky.app/profile/fullstackdrip.com"
              className="text-white transition-colors hover:text-sky-400"
              title="Bluesky"
            >
              <BlueskyIcon />
            </a>

            <a
              href="https://github.com/leeflannery"
              className="text-white transition-colors hover:text-sky-400"
              title="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.youtube.com/@FullStackDrip/shorts"
              className="text-white transition-colors hover:text-sky-400"
              title="YouTube"
            >
              <YouTubeIcon />
            </a>

            <a
              href="https://linkedin.com/in/leeflannery"
              className="text-white transition-colors hover:text-sky-400"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://www.instagram.com/fullstackdrip"
              className="text-white transition-colors hover:text-sky-400"
              title="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://threads.net/@fullstackdrip"
              className="text-white transition-colors hover:text-sky-400"
              title="Threads"
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
