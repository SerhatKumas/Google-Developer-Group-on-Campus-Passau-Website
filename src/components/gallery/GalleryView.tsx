"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryPhoto } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";
import { Calendar, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryViewProps {
  photos: GalleryPhoto[];
}

const CATEGORIES = [
  "All",
  "Hackathons",
  "Workshops",
  "Social Mixers",
  "Tech Trips",
  "Team Moments",
] as const;

export function GalleryView({ photos }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Chips */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap",
              selectedCategory === cat
                ? "bg-[#4285F4] text-white shadow-xs"
                : "bg-neutral-100 dark:bg-neutral-800 text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-100 dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1">
                {photo.category}
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                {photo.caption}
              </p>
              <div className="flex items-center justify-between text-xs text-white/70 mt-2 pt-2 border-t border-white/20">
                <span className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3 text-[#4285F4]" />
                  {photo.date}
                </span>
                <span className="text-[11px] text-blue-200 inline-flex items-center gap-0.5">
                  Click to Expand
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
}
