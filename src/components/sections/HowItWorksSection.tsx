import { Code, Palette, Sparkles, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const models = [
  {
    icon: Code,
    title: "API-first integration",
    description: "Use our REST APIs to fetch recommendations, run eligibility and track applications inside your product. Ideal for PF apps, fintechs, banks and NBFCs with strong UI teams.",
    bullets: [
      "/cards and /loans",
      "Eligibility & rules as a service",
      "Webhooks for application status",
    ],
    link: "#api-docs",
    linkText: "View API overview",
  },
  {
    icon: Palette,
    title: "Whitelabel templates",
    description: "Ship fast with pre-built journeys that look and feel like your brand. Ideal for publishers, employers, brokers, merchants and creators who want a full product without a large dev team.",
    bullets: [
      "Brandable card & loan portals",
      "Vertical pages for travel, auto, real estate, benefits",
      "Optional incentives & ProfitShare",
    ],
  },
  {
    icon: Sparkles,
    title: "Strategic co-builds (limited)",
    description: "For a small number of high-scale partners, we co-design deeper journeys. Everyone else can use our APIs and templates to get 90% of the way there.",
    note: "Multi-year strategic relationships with tight product & data integration",
  },
];

export const HowItWorksSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Integrate the way that fits you
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three integration models cover everything from "just give me the engine" to "give me a full product under my brand".
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-xl transition-all group relative overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              <div className="space-y-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <model.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{model.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                </div>

                {model.bullets && (
                  <ul className="space-y-2 pt-2">
                    {model.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {model.note && (
                  <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
                    {model.note}
                  </p>
                )}

                {model.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(model.link)}
                    className="group/btn mt-4"
                  >
                    {model.linkText}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
