import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { WhoWeWorkWithSection } from "@/components/sections/WhoWeWorkWithSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <WhyPartnerSection />
        <ImpactSection />
        <WhoWeWorkWithSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
