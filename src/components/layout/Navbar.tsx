"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-white/90 dark:bg-[#121316]/90 backdrop-blur-md shadow-xs border-[#E8EAED] dark:border-[#2D2F34]"
          : "bg-white/95 dark:bg-[#121316]/95 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] rounded-xl py-1 px-1"
          >
            {/* Official Chapter Logo (transparent, no square wrapper, prominently sized) */}
            <div className="relative h-12 w-16 sm:h-14 sm:w-20 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo/gdg-passau-clean.png"
                alt="Google Developer Group on Campus Passau Logo"
                fill
                priority
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-base sm:text-lg tracking-tight text-[#202124] dark:text-[#F1F3F4] font-display">
                  GDG on Campus
                </span>
                <span className="inline-block text-xs font-semibold px-1.5 py-0.5 rounded-full bg-blue-50 text-[#4285F4] dark:bg-blue-950/50 dark:text-blue-300">
                  Passau
                </span>
              </div>
              <span className="text-xs text-[#5F6368] dark:text-[#9AA0A6] hidden sm:block">
                University of Passau
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-full transition-colors relative",
                    isActive
                      ? "text-[#4285F4] dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 font-semibold"
                      : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-[#F1F3F4] hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4285F4] dark:bg-blue-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#4285F4] hover:bg-[#1A73E8] rounded-full shadow-xs hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E8EAED] dark:border-[#2D2F34] bg-white dark:bg-[#121316] px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-colors flex items-center justify-between",
                    isActive
                      ? "text-[#4285F4] dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 font-semibold"
                      : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#4285F4]" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#E8EAED] dark:border-[#2D2F34] flex flex-col gap-2">
            <Link
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-medium text-white bg-[#4285F4] hover:bg-[#1A73E8] rounded-xl shadow-xs"
            >
              <span>Join WhatsApp Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={siteConfig.socials.bevy}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-center text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl"
            >
              <span>Official GDG Chapter Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
