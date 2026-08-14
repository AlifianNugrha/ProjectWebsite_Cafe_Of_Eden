import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import MenuTeaserSection from "@/components/MenuTeaserSection";
import AmbianceSection from "@/components/AmbianceSection";
import SplitSection from "@/components/SplitSection";
import SocialSection from "@/components/SocialSection";
import EnvelopeSection from "@/components/EnvelopeSection";

const Index = () => {
  useEffect(() => {
    document.title = "Cafe At Eden";
  }, []);

  return (
    <main className="bg-background relative w-full h-full">
      <div className="snap-start w-full min-h-screen">
        <HeroSection />
      </div>
      <div className="relative z-10 bg-background min-h-screen text-foreground">
        <HighlightsSection />
        <MenuTeaserSection />
        <AmbianceSection />
        <SplitSection />
        <SocialSection />
        <EnvelopeSection />
      </div>
    </main>
  );
};

export default Index;
