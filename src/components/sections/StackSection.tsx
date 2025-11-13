import { Brain, GitBranch, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const stack = [
  {
    icon: Brain,
    title: "Recommendations engine",
    description: "CardGenius and LoanGenius sort products by real-world value — missed rewards, milestones, fee waivers and redemption value — not just headline offers. Use it via APIs or our ready-made widgets.",
    features: [
      "Best card/loan for each user or segment",
      "Brand, category and use-case specific views (Amazon, travel, auto, home etc.)",
      "Works on your catalogue, our catalogue, or a mix",
    ],
  },
  {
    icon: GitBranch,
    title: "Application & routing layer",
    description: "Hand users off to bank and NBFC journeys through secure redirects or embedded flows, while we track every click and application.",
    features: [
      "Links to partner bank/NBFC forms or journeys",
      "Eligibility checks where available",
      "Lead routing and tagging by partner, channel and campaign",
    ],
  },
  {
    icon: BarChart3,
    title: "Tracking, reporting & incentives",
    description: "See every step from 'viewed recommendation' to 'approved', and share incentives back with users using our ProfitShare-style rails.",
    features: [
      "Application status tracking and dashboards",
      "Nudges and reminders (email/SMS/onsite events)",
      "Cashback, voucher and fee-waiver incentives per partner and per product",
    ],
  },
];

export const StackSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unleash the power of data
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three building blocks that let you offer cards and loans under your brand, with our engine under the hood.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stack.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-xl transition-all group">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/80 to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-border">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
