import { Metadata } from "next";
import { getGalleryPhotos } from "@/services";
import { GalleryView } from "@/components/gallery/GalleryView";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Gallery & Moments",
  description:
    "Photo memories from hackathons, workshops, Inn river sunset mixers, and technical trips with GDG on Campus Passau.",
};

export const revalidate = 60;

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();

  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-[#34A853] dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Community Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Life at GDG on Campus Passau
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Capturing the spirit of innovation, peer mentorship, and social camaraderie across the University of Passau.
          </p>
        </div>

        {/* Filterable Masonry / Grid with Lightbox */}
        <GalleryView photos={photos} />
      </div>
    </div>
  );
}
