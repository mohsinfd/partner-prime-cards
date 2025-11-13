import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { StackSection } from "@/components/sections/StackSection";
import { SolutionsByPartnerSection } from "@/components/sections/SolutionsByPartnerSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhoWeWorkWithSection } from "@/components/sections/WhoWeWorkWithSection";
import { APIDocsSection } from "@/components/sections/APIDocsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <ProblemSection />
        <SolutionSection />
        <StackSection />
        <SolutionsByPartnerSection />
        <HowItWorksSection />
        <WhyPartnerSection />
        <PricingSection />
        <WhoWeWorkWithSection />
        <APIDocsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
