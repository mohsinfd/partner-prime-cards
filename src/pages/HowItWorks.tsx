import { Header } from "@/components/Header";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SystemArchitectureDiagram } from "@/components/sections/SystemArchitectureDiagram";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StackSection } from "@/components/sections/StackSection";
import { APIShowcaseSection } from "@/components/sections/APIShowcaseSection";
import { PerformanceMetricsTable } from "@/components/sections/PerformanceMetricsTable";
import { Footer } from "@/components/sections/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionSection />
        <SystemArchitectureDiagram />
        <HowItWorksSection />
        <StackSection />
        <APIShowcaseSection />
        <PerformanceMetricsTable />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
