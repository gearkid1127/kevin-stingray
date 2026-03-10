"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSpotify,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaApple,
  FaEnvelope,
} from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-white"
            >
              <Image
                src="/logo.png"
                alt="Kevin Stingray Logo"
                width={32}
                height={32}
                className="mr-2"
              />
            </Link>

            <div className="hidden items-center space-x-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="text-white/60 transition hover:scale-110 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] cursor-pointer"
                >
                  {link.icon}
                </a>
              ))}

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                aria-label="Contact"
                title="Contact"
                className="text-white/60 transition hover:scale-110 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] cursor-pointer"
              >
                <FaEnvelope size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-white md:hidden cursor-pointer"
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
                  className="block py-2 text-white/70 transition hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
                className="block py-2 text-white/70 transition hover:text-white"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 flex items-center justify-center px-4 backdrop-blur-sm transition-all duration-300 ${
          isContactOpen
            ? "pointer-events-auto bg-black/80 opacity-100"
            : "pointer-events-none bg-black/0 opacity-0"
        }`}
        onClick={() => setIsContactOpen(false)}
      >
        <div
          className={`relative w-full max-w-xl transition-all duration-300 ease-out ${
            isContactOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative w-full max-w-xl text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight">
                  Contact
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="cursor-pointer shrink-0 text-white/70 transition hover:text-white hover:scale-110"
                aria-label="Close contact modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="relative p-5 sm:p-6">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gearkid1127@gmail.com"
                className={`group relative block -rotate-1 border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] ${
                  isContactOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isContactOpen ? "120ms" : "0ms" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="border-2 border-black px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em]">
                    Email
                  </span>
                  <span className="text-2xl">✉</span>
                </div>

                <p className="text-lg font-black uppercase">Send an email</p>
                <p className="mt-1 break-all text-sm text-black/70">
                  Kevinstingray@kevinstingray.com
                </p>
              </a>

              <a
                href="https://www.instagram.com/kevin_stingray/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rotate-1 border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] ${
                  isContactOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isContactOpen ? "180ms" : "0ms" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="border-2 border-black px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em]">
                    Instagram
                  </span>
                  <FaInstagram size={24} />
                </div>

                <p className="text-lg font-black uppercase">slide on Instagram</p>
                <p className="mt-1 text-sm text-black/70">Easy Peezy.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
