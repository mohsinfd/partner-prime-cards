import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { APIQuickReference } from "@/components/sections/APIQuickReference";
import { APIDocsSection } from "@/components/sections/APIDocsSection";
import { Footer } from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
        <APIQuickReference />
        <APIDocsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
