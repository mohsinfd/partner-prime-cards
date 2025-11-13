import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerLogosSection } from "@/components/sections/PartnerLogosSection";
import { LiveMetricsBanner } from "@/components/sections/LiveMetricsBanner";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ROICalculatorWidget } from "@/components/sections/ROICalculatorWidget";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { MiniCaseStudyCards } from "@/components/sections/MiniCaseStudyCards";
import { DashboardMockupSection } from "@/components/sections/DashboardMockupSection";
import { WhoWeWorkWithSection } from "@/components/sections/WhoWeWorkWithSection";
import { SolutionsLinkSection } from "@/components/sections/SolutionsLinkSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnerLogosSection />
        <LiveMetricsBanner />
        <ProblemSection />
        <WhyPartnerSection />
        <ImpactSection />
        <ROICalculatorWidget />
        <MiniCaseStudyCards />
        <TestimonialsCarousel />
        <DashboardMockupSection />
        <WhoWeWorkWithSection />
        <SolutionsLinkSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
