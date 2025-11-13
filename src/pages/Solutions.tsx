import { Header } from "@/components/Header";
import { SolutionsByPartnerSection } from "@/components/sections/SolutionsByPartnerSection";
import { Footer } from "@/components/sections/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionsByPartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
