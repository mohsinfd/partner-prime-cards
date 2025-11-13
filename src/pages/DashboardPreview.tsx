import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { DashboardMockupSection } from "@/components/sections/DashboardMockupSection";

const DashboardPreview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Partner Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete analytics and reporting suite
            </p>
          </div>
        </section>
        <DashboardMockupSection />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPreview;
