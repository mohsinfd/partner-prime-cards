import { Calculator, Eye, Gift, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Calculator,
    title: "Rupee-accurate recommendations",
    description: "We model real rewards maths - missed savings, milestone benefits, fee waivers and redemption value - not just headline cashback percentages.",
  },
  {
    icon: Eye,
    title: "End-to-end funnel visibility",
    description: "Track every step from impression to approval, per partner, channel and product. Use this to optimise journeys and negotiate better deals.",
  },
  {
    icon: Gift,
    title: "Shared upside through incentives",
    description: "Use our incentive rails to turn commissions into cashback, vouchers or fee waivers that you can pass on to users or employees.",
  },
  {
    icon: Rocket,
    title: "Fast go-live, built for scale",
    description: "Start with a single vertical or microsite. Scale to multiple brands, geographies or communities using the same engine and templates.",
  },
];

export const WhyPartnerSection = () => {
  return (
    <section id="why-partner" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why partners choose our stack
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built for Indian cards & loans, with global-grade fintech UX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-xl transition-all group">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
