"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";

export function HeroEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this 220vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ========================================================
  // 1. Entrance Stage Transforms (Phase 1: 0.0 to 0.45)
  // Left arrow (<) in our logo flies to UPPER-LEFT
  // ========================================================
  const leftArrowX = useTransform(scrollYProgress, [0, 0.42], [0, -520]);
  const leftArrowY = useTransform(scrollYProgress, [0, 0.42], [0, -380]);
  const leftArrowRotate = useTransform(scrollYProgress, [0, 0.42], [0, -28]);

  // Right arrow (>) in our logo flies to UPPER-RIGHT
  const rightArrowX = useTransform(scrollYProgress, [0, 0.42], [0, 520]);
  const rightArrowY = useTransform(scrollYProgress, [0, 0.42], [0, -380]);
  const rightArrowRotate = useTransform(scrollYProgress, [0, 0.42], [0, 28]);

  // Arrows fade and scale as they fly away
  const arrowsOpacity = useTransform(scrollYProgress, [0.15, 0.42], [1, 0]);
  const arrowsScale = useTransform(scrollYProgress, [0, 0.42], [1, 0.85]);

  // Logo base text and entrance title fade out
  const logoBaseOpacity = useTransform(scrollYProgress, [0.12, 0.38], [1, 0]);
  const logoBaseY = useTransform(scrollYProgress, [0, 0.38], [0, 40]);

  const entranceTextY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);
  const entranceTextOpacity = useTransform(scrollYProgress, [0.12, 0.38], [1, 0]);
  const entrancePointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.42 ? "none" : "auto"
  );

  // Scroll indicator at the bottom fades immediately
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // ========================================================
  // 2. Main Hero Stage Transforms (Phase 2: 0.35 to 0.65)
  // ========================================================
  const mainHeroOpacity = useTransform(scrollYProgress, [0.35, 0.58], [0, 1]);
  const mainHeroScale = useTransform(scrollYProgress, [0.35, 0.58], [0.94, 1]);
  const mainHeroY = useTransform(scrollYProgress, [0.35, 0.58], [40, 0]);
  const mainPointerEvents = useTransform(scrollYProgress, (v) =>
    v < 0.35 ? "none" : "auto"
  );

  const handleScrollToExplore = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight * 0.95,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={containerRef} className="relative h-[220vh] w-full">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34] transition-colors">
        {/* Ambient Google Brand Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#EA4335]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#FBBC04]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#34A853]/10 rounded-full blur-3xl pointer-events-none" />

        {/* ======================================================== */}
        {/* STAGE 1: CINEMATIC ENTRANCE (Big Logo + Big Writing)     */}
        {/* ======================================================== */}
        <motion.div
          style={{
            pointerEvents: entrancePointerEvents as unknown as React.CSSProperties["pointerEvents"],
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 z-20"
        >
          <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
            {/* Left: OUR BIG LOGO with parting arrows flying to upper-left & upper-right */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] shrink-0">
              {/* Outer Ambient Glow behind logo */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-500/15 via-red-500/15 to-green-500/15 blur-2xl pointer-events-none" />

              {/* The Chapter Logo Container maintaining exact 1360:850 ratio */}
              <div className="relative w-full aspect-[1360/850]">
                {/* 1. Base Layer: Chapter Text Lockup (stays grounded & smoothly fades) */}
                <motion.div
                  style={{
                    opacity: logoBaseOpacity,
                    y: logoBaseY,
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <Image
                    src="/images/logo/gdg-logo-base.png"
                    alt="Google Developer Groups on Campus Passau"
                    fill
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 440px, 540px"
                    priority
                    className="object-contain"
                  />
                </motion.div>

                {/* 2. Left Arrow in our logo (<) -> Flies to UPPER-LEFT */}
                <motion.div
                  style={{
                    x: leftArrowX,
                    y: leftArrowY,
                    rotate: leftArrowRotate,
                    opacity: arrowsOpacity,
                    scale: arrowsScale,
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
                >
                  <Image
                    src="/images/logo/gdg-arrow-left.png"
                    alt="GDG Passau Logo Left Arrow"
                    fill
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 440px, 540px"
                    priority
                    className="object-contain drop-shadow-md"
                  />
                </motion.div>

                {/* 3. Right Arrow in our logo (>) -> Flies to UPPER-RIGHT */}
                <motion.div
                  style={{
                    x: rightArrowX,
                    y: rightArrowY,
                    rotate: rightArrowRotate,
                    opacity: arrowsOpacity,
                    scale: arrowsScale,
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
                >
                  <Image
                    src="/images/logo/gdg-arrow-right.png"
                    alt="GDG Passau Logo Right Arrow"
                    fill
                    sizes="(max-width: 768px) 340px, (max-width: 1024px) 440px, 540px"
                    priority
                    className="object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right: Big Writing (Google Developer Group on Campus Passau) */}
            <motion.div
              style={{
                y: entranceTextY,
                opacity: entranceTextOpacity,
              }}
              className="text-center lg:text-left space-y-3 sm:space-y-4"
            >
              {/* Huge Bold Title */}
              <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#202124] dark:text-[#F1F3F4] font-display leading-[1.06]">
                Google Developer Group
                <span className="block text-3xl sm:text-5xl lg:text-6xl font-medium text-[#5F6368] dark:text-[#9AA0A6] mt-1 sm:mt-2">
                  on Campus{" "}
                  <span className="font-extrabold text-[#4285F4] dark:text-blue-400">
                    Passau
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mx-auto lg:mx-0 font-normal">
                The premier student engineering & interdisciplinary network bridging Computer Science, AI, and Technical Law.
              </p>
            </motion.div>
          </div>

          {/* Bottom Scroll Prompt */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
            onClick={handleScrollToExplore}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#4285F4] transition-colors">
              Scroll to Explore
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:text-[#4285F4] group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-all animate-bounce">
              <ChevronDown className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* STAGE 2: MAIN HERO PAGE (Reveals as arrows fly away)     */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: mainHeroOpacity,
            scale: mainHeroScale,
            y: mainHeroY,
            pointerEvents: mainPointerEvents as unknown as React.CSSProperties["pointerEvents"],
          }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Authentic Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Campus Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34] text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>University of Passau &bull; Lower Bavaria</span>
              </div>

              {/* Bold Headline */}
              <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#202124] dark:text-[#F1F3F4] font-display leading-[1.1]">
                Innovate. <span className="text-[#4285F4]">Bridge.</span>{" "}
                <span className="google-gradient-text">Build.</span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed max-w-xl mx-auto lg:mx-0">
                The premier technical & interdisciplinary network at the University of Passau. 
                We bring together builders in <strong className="text-[#202124] dark:text-white font-semibold">Computer Science</strong>,{" "}
                <strong className="text-[#202124] dark:text-white font-semibold">AI Engineering</strong>, and{" "}
                <strong className="text-[#202124] dark:text-white font-semibold">Technical Law</strong> to transform bold concepts into production-grade applications.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#4285F4] hover:bg-[#1A73E8] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/events"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#202124] dark:text-[#F1F3F4] bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full border border-[#E8EAED] dark:border-[#2D2F34] transition-colors"
                >
                  <span>Explore Upcoming Events</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </Link>
              </div>

              {/* Active Membership Indicators */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Student Member"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="Student Member"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                      alt="Student Member"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] bg-[#4285F4] text-white flex items-center justify-center text-[10px] font-bold">
                    +250
                  </div>
                </div>
                <p>
                  <strong className="text-[#202124] dark:text-[#F1F3F4] font-semibold">250+ Passau students</strong> building together
                </p>
              </div>
            </div>

            {/* Right Column: Bento Photo Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative">
                {/* Bento Card 1: Hackathon Coding */}
                <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group">
                  <Image
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
                    alt="Students coding during hackathon in Passau"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#4285F4] text-white mb-1 shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Civic Hackathon
                    </span>
                    <p className="text-sm font-semibold">Code for Passau 2026</p>
                    <p className="text-xs text-white/80">48-hour student build sprints</p>
                  </div>
                </div>

                {/* Bento Card 2: Workshop Demo */}
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group hidden sm:block">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                    alt="Workshop at University of Passau"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#EA4335] shadow-xs" />
                </div>

                {/* Bento Card 3: Outdoor River Mixer */}
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group hidden sm:block">
                  <Image
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80"
                    alt="Students enjoying riverside meetup in Passau"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#FBBC04] shadow-xs" />
                </div>

                {/* Bento Card 4: Peer Mentorship */}
                <div className="col-span-2 sm:col-span-3 relative rounded-2xl overflow-hidden h-28 sm:h-32 shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Collaborative technical discussion"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-y-0 left-5 flex flex-col justify-center text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#34A853]">
                      Peer-to-Peer Mentorship
                    </span>
                    <p className="text-sm font-semibold">Master&apos;s Mentors &bull; Bachelor&apos;s Builders</p>
                    <p className="text-xs text-white/80">Pairing talent across all semesters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
