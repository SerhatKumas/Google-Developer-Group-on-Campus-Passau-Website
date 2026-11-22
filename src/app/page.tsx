import { HeroEntrance } from "@/components/sections/HeroEntrance";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { FeaturedEventsSection } from "@/components/sections/FeaturedEventsSection";
import { CommunityMoments } from "@/components/sections/CommunityMoments";
import { InitiativesSpotlight } from "@/components/sections/InitiativesSpotlight";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getUpcomingEvents } from "@/services";

export const revalidate = 60;

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Entrance with scroll-driven parting arrows & authentic brand reveal */}
      <HeroEntrance />

      {/* 2. Community Impact Stats Strip */}
      <StatsStrip />

      {/* 3. Mission, Vision & 6 Core Pillars 6-Card Bento Grid */}
      <PillarsGrid />

      {/* 4. Featured Upcoming Events Preview */}
      <FeaturedEventsSection events={upcomingEvents} />

      {/* 5. Community Moments Photo Strip */}
      <CommunityMoments />

      {/* 6. Current Chapter Initiatives & What We Build */}
      <InitiativesSpotlight />

      {/* 7. Partner Logos Marquee */}
      <PartnersMarquee />

      {/* 8. FAQ Accordion & Final Join CTA */}
      <FaqAccordion />
    </div>
  );
}
