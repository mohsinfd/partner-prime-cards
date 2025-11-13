import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    features: {
      "API access": true,
      "Whitelabel": false,
      "Custom domain": false,
      "Dedicated support": false,
      "Rate limit": "100/min",
      "Webhook events": true,
      "Dashboard analytics": true,
      "Mobile responsive": true,
    }
  },
  {
    name: "Pro",
    price: "₹15k/mo",
    popular: true,
    features: {
      "API access": true,
      "Whitelabel": true,
      "Custom domain": true,
      "Dedicated support": false,
      "Rate limit": "500/min",
      "Webhook events": true,
      "Dashboard analytics": true,
      "Mobile responsive": true,
    }
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: {
      "API access": true,
      "Whitelabel": true,
      "Custom domain": true,
      "Dedicated support": true,
      "Rate limit": "Custom",
      "Webhook events": true,
      "Dashboard analytics": true,
      "Mobile responsive": true,
    }
  }
];

const featureList = [
  "API access",
  "Rate limit",
  "Whitelabel",
  "Custom domain",
  "Webhook events",
  "Dashboard analytics",
  "Mobile responsive",
  "Dedicated support",
];

export const FeatureComparisonTable = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`p-6 border-border/20 ${tier.popular ? 'border-primary/50 relative' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{tier.price}</div>
                <Button variant={tier.popular ? "default" : "outline"} className="w-full">
                  Get Started
                </Button>
              </div>

              <div className="space-y-3">
                {featureList.map((feature, fidx) => {
                  const value = tier.features[feature as keyof typeof tier.features];
                  return (
                    <div key={fidx} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{feature}</span>
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/30" />
                        )
                      ) : (
                        <span className="font-mono text-xs text-primary">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
