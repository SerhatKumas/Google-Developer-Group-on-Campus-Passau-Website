"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryPhoto } from "@/types";
import { X, ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from "lucide-react";

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const photo = photos[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % photos.length);
    },
    [isOpen, currentIndex, photos.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
        <span className="text-xs text-white/70 font-mono">
          {currentIndex + 1} / {photos.length}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          type="button"
          aria-label="Close Lightbox"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + photos.length) % photos.length);
        }}
        type="button"
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % photos.length);
        }}
        type="button"
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Wrapper */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[72vh] flex items-center justify-center">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 px-6 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-center max-w-xl text-white">
          <p className="text-sm font-medium leading-relaxed">{photo.caption}</p>
          <div className="mt-2 flex items-center justify-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {photo.date}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/80">
              {photo.category}
            </span>
            {photo.eventSlug && (
              <Link
                href={`/events/${photo.eventSlug}`}
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
              >
                <span>View Event</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
