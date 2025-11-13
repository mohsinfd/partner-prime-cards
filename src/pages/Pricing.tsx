import { Header } from "@/components/Header";
import { PricingSection } from "@/components/sections/PricingSection";
import { FeatureComparisonTable } from "@/components/sections/FeatureComparisonTable";
import { BuildVsBuyComparison } from "@/components/sections/BuildVsBuyComparison";
import { ROICalculatorWidget } from "@/components/sections/ROICalculatorWidget";
import { Footer } from "@/components/sections/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PricingSection />
        <FeatureComparisonTable />
        <BuildVsBuyComparison />
        <ROICalculatorWidget />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
