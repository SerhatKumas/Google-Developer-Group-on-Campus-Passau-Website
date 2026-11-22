"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";
import { galleryPhotosData } from "@/data/gallery";
import { useLanguage } from "@/i18n/LanguageContext";

export function CommunityMoments() {
  const { t } = useLanguage();
  const photos = galleryPhotosData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/50 text-[#34A853] dark:text-green-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>{t.communityMoments.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              {t.communityMoments.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-xl">
              {t.communityMoments.sectionSubtitle}
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8] group"
          >
            <span>{t.communityMoments.viewGalleryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Photo Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-neutral-100 dark:bg-neutral-800 shadow-xs hover:shadow-lg transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs mb-1 inline-block">
                  {photo.category}
                </span>
                <p className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
