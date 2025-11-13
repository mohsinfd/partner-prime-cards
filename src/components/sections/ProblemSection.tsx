import { AlertCircle, Wrench, TrendingDown, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    value: "78%",
    label: "Use static tables",
  },
  {
    icon: Wrench,
    value: "₹8L/yr",
    label: "Maintenance cost",
  },
  {
    icon: TrendingDown,
    value: "62%",
    label: "User drop-off",
  },
  {
    icon: DollarSign,
    value: "₹0",
    label: "Incentive automation",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Partner Challenge
          </h2>
          <p className="text-muted-foreground">
            Most partners lack recommendation infrastructure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all text-center group"
            >
              <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {problem.value}
              </div>
              <p className="text-sm text-muted-foreground">{problem.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
