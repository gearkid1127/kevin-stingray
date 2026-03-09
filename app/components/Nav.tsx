'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { url: 'https://open.spotify.com/artist/3nRPJVbqU6wJzJK6ptX4I4?si=johvKdnMTCKHtDQuQAoOaA', label: 'Spotify' },
    { url: 'https://soundcloud.com/kevin-stingray-136174536', label: 'SoundCloud' },
    { url: 'https://www.youtube.com/channel/UClHgvnLXG71pqQlHiFLLFYw', label: 'YouTube' },
    { url: 'https://www.instagram.com/kevin_stingray/?hl=fr', label: 'Instagram' },
    { url: 'https://music.apple.com/us/artist/kevin-stingray/1577365689', label: 'Apple Music' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Kevin Stingray
          </Link>

          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-white/60 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}