import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { APIDocsSection } from "@/components/sections/APIDocsSection";
import { Footer } from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
        <APIDocsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
