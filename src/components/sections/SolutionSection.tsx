import { Code, Layers, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    icon: Code,
    title: "API-first infrastructure",
    description: "For PF apps, banks, NBFCs and fintechs that want to control their UI. Use our REST APIs to fetch ranked card and loan recommendations, run eligibility, and track applications via webhooks.",
    bullets: [
      "/cards and /loans recommendation APIs",
      "Rules & eligibility engine behind the scenes",
      "Webhooks for application status and key events",
    ],
  },
  {
    icon: Layers,
    title: "Templatized whitelabel products",
    description: "For publishers, employers, brokers, service businesses, housing societies and creators who want to move fast without a big tech team. Launch a fully branded portal in days, with journeys for cards, loans or both.",
    bullets: [
      "Your logo, colours and URL",
      "Pre-built, high-converting flows",
      "Optional ProfitShare-style incentives (cashback, vouchers, fee waivers)",
    ],
  },
  {
    icon: Sparkles,
    title: "Strategic co-builds (limited)",
    description: "For a small number of high-scale, long-term partners, we co-design deeper journeys that plug tightly into your existing experiences. For everyone else, our APIs and whitelabel templates already cover most use cases.",
    note: "We reserve custom builds for partners with clear scale and multi-year roadmaps.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solutions" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our solution: a whitelabel stack for cards & loans, powered by CardGenius
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We give you a ready-made stack for credit cards and loans that you can run under your own brand - with three ways to integrate, depending on how much of the UI you want to own.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, idx) => (
            <Card key={idx} className="p-8 hover:shadow-xl transition-all bg-card group hover:border-primary/50">
              <div className="space-y-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/80 to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>

                {solution.bullets && (
                  <ul className="space-y-2">
                    {solution.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {solution.note && (
                  <p className="text-sm text-muted-foreground italic pt-2 border-t border-border">
                    {solution.note}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <p className="text-center text-lg text-foreground font-medium">
            In short: we solve the infra and maths problem once, so you can focus on your users and your business.
          </p>
        </div>
      </div>
    </section>
  );
};
