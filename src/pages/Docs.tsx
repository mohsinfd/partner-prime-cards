import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { APIPlaygroundSection } from "@/components/sections/APIPlaygroundSection";
import { APIShowcaseSection } from "@/components/sections/APIShowcaseSection";
import { APIQuickReference } from "@/components/sections/APIQuickReference";

const Docs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Built by developers, for developers
            </p>
          </div>
        </section>
        <APIPlaygroundSection />
        <APIShowcaseSection />
        <APIQuickReference />
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
