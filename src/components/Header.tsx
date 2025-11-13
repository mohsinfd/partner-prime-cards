import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Who we work with", href: "#who-we-work-with" },
  { label: "Why partner", href: "#why-partner" },
  { label: "Pricing", href: "#pricing" },
  { label: "API & docs", href: "#api-docs" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-foreground text-sm">BankKaro</span>
              <span className="text-xs text-muted-foreground">CardGenius for Partners</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              size="default"
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all font-semibold"
            >
              Schedule a call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="default"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                Schedule a call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
