import { AlertCircle, Wrench, TrendingDown, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "No real 'best' product logic",
    description: "Static offers and simple tables don't capture missed rewards, milestones, fee waivers or eligibility.",
  },
  {
    icon: Wrench,
    title: "Heavy infra & maintenance",
    description: "Building and updating engines, integrations and reporting takes time, people and money.",
  },
  {
    icon: TrendingDown,
    title: "Fragmented, opaque journeys",
    description: "Users bounce between sites and channels; partners can't see what works end-to-end.",
  },
  {
    icon: DollarSign,
    title: "No clean way to share upside",
    description: "Partners want to give cashback or vouchers back to users, but lack structured incentive rails.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The problem: everyone wants to offer cards & loans, almost no one wants to build the plumbing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most publishers, fintechs, employers, brokers and creators should be helping their users pick the right cards and loans. But they quickly run into four big problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {problems.map((problem, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-foreground font-medium">
            The result: users don't trust the recommendations, partners don't see meaningful revenue, and nobody can clearly prove the value of their card and loan journeys.
          </p>
        </div>
      </div>
    </section>
  );
};
