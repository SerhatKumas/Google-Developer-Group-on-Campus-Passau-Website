import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";
import { galleryPhotosData } from "@/data/gallery";

export function CommunityMoments() {
  const photos = galleryPhotosData.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-[#34A853] dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Life</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              Moments from the Community
            </h2>
            <p className="mt-1 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              Real impressions from workshops, Inn river sunset mixers, and hackathon build nights.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8] group"
          >
            <span>Browse Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Photo Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-100 dark:bg-neutral-800 shadow-xs hover:shadow-lg transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-xs text-white font-medium line-clamp-1">{photo.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
