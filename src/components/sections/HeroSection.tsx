import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8EAED] dark:border-[#2D2F34] bg-white dark:bg-[#121316]">
      {/* Subtle Background Glows matching Google Colors */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#4285F4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#EA4335]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FBBC04]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#34A853]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Campus & Affiliation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34] text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
              <span>University of Passau &bull; Lower Bavaria</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#202124] dark:text-[#F1F3F4] font-display leading-[1.1]">
              Innovate. <span className="text-[#4285F4]">Bridge.</span>{" "}
              <span className="google-gradient-text">Build.</span>
            </h1>

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
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Student Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Student Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#121316] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Student Member"
                    fill
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

          {/* Right Column: Dynamic Bento Photo Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative">
              {/* Card 1: Hackathon Coding (Large vertical) */}
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group">
                <Image
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
                  alt="Students coding during hackathon in Passau"
                  fill
                  priority
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

              {/* Card 2: Workshop Demo */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Workshop at University of Passau"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#EA4335] shadow-xs" />
              </div>

              {/* Card 3: Outdoor River Mixer */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80"
                  alt="Students enjoying riverside meetup in Passau"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#FBBC04] shadow-xs" />
              </div>

              {/* Card 4: Peer Mentorship */}
              <div className="col-span-2 sm:col-span-3 relative rounded-2xl overflow-hidden h-28 sm:h-32 shadow-md border border-[#E8EAED] dark:border-[#2D2F34] group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Collaborative technical discussion"
                  fill
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
      </div>
    </section>
  );
}
