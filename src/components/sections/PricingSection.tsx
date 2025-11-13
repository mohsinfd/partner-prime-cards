import { DollarSign, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const models = [
  {
    icon: DollarSign,
    title: "Revenue share per approved card/loan",
    description: "Most partners start here. We receive commissions from banks and NBFCs and agree a revenue share with you on every approved card or loan.",
  },
  {
    icon: TrendingUp,
    title: "Hybrid: platform + revenue share",
    description: "For high-volume publishers or employers, we can mix a small platform fee with a higher revenue share.",
  },
  {
    icon: Zap,
    title: "API usage-based pricing",
    description: "For infra-heavy partners who primarily use our APIs, we can structure pricing around calls, volume and custom requirements.",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple commercial models
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our goal is to align incentives: you grow your business, your users get better products, and we share the upside.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {models.map((model, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-xl transition-all group">
              <div className="space-y-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <model.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{model.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground italic">
            Exact commercials depend on use case, category and volume. We'll propose a model after understanding your flows.
          </p>
        </div>
      </div>
    </section>
  );
};
