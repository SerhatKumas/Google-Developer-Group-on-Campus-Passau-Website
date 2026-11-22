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

  // Track scroll progress within this 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Entrance Stage Transforms (Phase 1: 0.0 to 0.45)
  // Left arrow (<) slides away to the left
  const leftArrowX = useTransform(scrollYProgress, [0, 0.42], [0, -420]);
  const leftArrowRotate = useTransform(scrollYProgress, [0, 0.42], [0, -18]);
  // Right arrow (>) slides away to the right
  const rightArrowX = useTransform(scrollYProgress, [0, 0.42], [0, 420]);
  const rightArrowRotate = useTransform(scrollYProgress, [0, 0.42], [0, 18]);

  // Arrows and logo badge fade out
  const arrowsOpacity = useTransform(scrollYProgress, [0.15, 0.4], [1, 0]);
  const arrowsScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  // Entrance big text translates up and fades out
  const entranceTextY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);
  const entranceTextOpacity = useTransform(scrollYProgress, [0.12, 0.38], [1, 0]);
  const entrancePointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.42 ? "none" : "auto"
  );

  // Scroll indicator at the bottom fades immediately
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // 2. Main Hero Stage Transforms (Phase 2: 0.35 to 0.65)
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
        {/* STAGE 1: CINEMATIC ENTRANCE (Logo + Big Writing)        */}
        {/* ======================================================== */}
        <motion.div
          style={{
            pointerEvents: entrancePointerEvents as unknown as React.CSSProperties["pointerEvents"],
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 z-20"
        >
          <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
            {/* Left: The GDG Chapter Logo with Animated Parting Arrows */}
            <motion.div
              style={{
                scale: arrowsScale,
                opacity: arrowsOpacity,
              }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 via-red-500/20 to-green-500/20 blur-2xl" />

              {/* Chevrons container */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-4 p-4 rounded-3xl bg-neutral-50/70 dark:bg-[#1A1C20]/70 backdrop-blur-xs border border-[#E8EAED]/80 dark:border-[#2D2F34]/80 shadow-lg">
                {/* Left Arrow/Chevron (<) - Sliders to the left on scroll */}
                <motion.div
                  style={{
                    x: leftArrowX,
                    rotate: leftArrowRotate,
                  }}
                  className="w-16 h-20 sm:w-24 sm:h-30 shrink-0"
                >
                  <svg
                    viewBox="0 0 120 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md"
                  >
                    {/* Official Google Developer Top-Red Arm of < */}
                    <path
                      d="M71.7518 56.5629C63.1308 61.4609 54.5048 66.3499 45.8928 71.2629C40.8548 74.1369 35.8728 77.1089 30.8088 79.9349C20.6058 85.6299 8.48381 82.2919 2.69881 72.2609C-2.82219 62.6889 0.35081 50.2789 10.1768 44.5429C34.2018 30.5199 58.2888 16.5989 82.4628 2.83386C89.8768 -1.38814 97.5688 -0.857141 104.425 4.18986C111.661 9.51686 114.03 17.0129 112.405 25.8009C111.397 27.9269 110.795 30.4199 109.286 32.0949C106.831 34.8199 104.041 37.4289 100.935 39.3449C91.3228 45.2719 81.4958 50.8499 71.7518 56.5629Z"
                      fill="#EA4335"
                    />
                    {/* Official Google Developer Bottom-Blue Arm of < */}
                    <path
                      d="M61.867 62.057C70.42 67.073 78.967 72.1 87.528 77.102C92.535 80.028 97.6 82.857 102.579 85.828C112.613 91.818 115.784 103.984 109.989 114.009C104.459 123.577 92.126 127.035 82.245 121.392C58.088 107.597 33.989 93.699 9.98101 79.646C2.61801 75.336 -0.76799 68.409 0.17501 59.948C1.17001 51.017 6.47701 45.218 14.9 42.231C17.245 42.042 19.705 41.316 21.911 41.786C25.498 42.55 29.153 43.661 32.365 45.393C42.304 50.753 52.048 56.475 61.867 62.057Z"
                      fill="#4285F4"
                    />
                  </svg>
                </motion.div>

                {/* Central Chapter Seal with Official Chapter Logo */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-[#121316] p-2 border border-[#E8EAED] dark:border-[#2D2F34] shadow-xs flex items-center justify-center shrink-0">
                  <Image
                    src="/images/logo/gdg-passau-logo.png"
                    alt="GDG on Campus Passau Badge"
                    width={80}
                    height={80}
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Right Arrow/Chevron (>) - Slides to the right on scroll */}
                <motion.div
                  style={{
                    x: rightArrowX,
                    rotate: rightArrowRotate,
                  }}
                  className="w-16 h-20 sm:w-24 sm:h-30 shrink-0"
                >
                  <svg
                    viewBox="136 0 120 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md"
                  >
                    {/* Official Google Developer Top-Yellow Arm of > */}
                    <path
                      d="M184.315 67.7045C197.784 59.9685 211.217 52.1695 224.732 44.5135C237.56 37.2455 252.653 43.9485 255.561 58.0925C257.244 66.2745 253.591 75.1135 246.204 79.4185C221.986 93.5315 197.733 107.588 173.359 121.43C165.815 125.714 158.044 124.926 151.169 119.676C144.185 114.346 141.984 106.994 143.622 98.4375C145.492 91.9235 149.772 87.5685 155.609 84.3105C165.26 78.9245 174.754 73.2545 184.315 67.7045Z"
                      fill="#FBBC04"
                    />
                    {/* Official Google Developer Bottom-Green Arm of > */}
                    <path
                      d="M194.203 62.079C180.768 54.283 167.299 46.548 153.911 38.673C141.202 31.197 139.462 14.775 150.256 5.18296C156.5 -0.364041 165.981 -1.62104 173.403 2.62396C197.735 16.541 222.035 30.517 246.209 44.704C253.691 49.095 256.893 56.22 255.786 64.799C254.661 73.511 249.395 79.093 241.166 81.954C234.589 83.592 228.678 82.062 222.938 78.636C213.447 72.971 203.79 67.583 194.203 62.079Z"
                      fill="#34A853"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Big Writing (Google Developer Group on Campus Passau) */}
            <motion.div
              style={{
                y: entranceTextY,
                opacity: entranceTextOpacity,
              }}
              className="text-center lg:text-left space-y-2 sm:space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] border border-[#E8EAED] dark:border-[#2D2F34]">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>University of Passau &bull; Germany</span>
              </div>

              {/* Huge Bold Title */}
              <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#202124] dark:text-[#F1F3F4] font-display leading-[1.08]">
                Google Developer Group
                <span className="block text-2xl sm:text-4xl lg:text-5xl font-medium text-[#5F6368] dark:text-[#9AA0A6] mt-1">
                  on Campus{" "}
                  <span className="font-extrabold text-[#4285F4] dark:text-blue-400">
                    Passau
                  </span>
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-lg mx-auto lg:mx-0">
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
        {/* STAGE 2: MAIN HERO PAGE (Reveals as arrows part away)    */}
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
