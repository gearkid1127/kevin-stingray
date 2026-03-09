"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSpotify,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaApple,
} from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      url: "https://open.spotify.com/artist/3nRPJVbqU6wJzJK6ptX4I4?si=johvKdnMTCKHtDQuQAoOaA",
      label: "Spotify",
      icon: <FaSpotify size={20} />,
    },
    {
      url: "https://soundcloud.com/kevin-stingray-136174536",
      label: "SoundCloud",
      icon: <FaSoundcloud size={20} />,
    },
    {
      url: "https://www.youtube.com/channel/UClHgvnLXG71pqQlHiFLLFYw",
      label: "YouTube",
      icon: <FaYoutube size={20} />,
    },
    {
      url: "https://www.instagram.com/kevin_stingray/?hl=fr",
      label: "Instagram",
      icon: <FaInstagram size={20} />,
    },
    {
      url: "https://music.apple.com/us/artist/kevin-stingray/1577365689",
      label: "Apple Music",
      icon: <FaApple size={20} />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-white">
            <Image
              src="/logo.png"
              alt="Kevin Stingray Logo"
              width={32}
              height={32}
              className="mr-2"
            />
          </Link>

          {/* Desktop Icons */}
          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="text-white/60 transition hover:scale-110 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (text labels) */}
        {isOpen && (
          <div className="pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-white/70 transition hover:text-white"
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