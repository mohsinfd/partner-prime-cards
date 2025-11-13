import { TrendingUp, Code, Clock, FileCode } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "10M+",
    label: "Transactions processed",
  },
  {
    icon: Code,
    value: "200+",
    label: "Card & loan products",
  },
  {
    icon: Clock,
    value: "500+",
    label: "Hours saved per partner",
  },
  {
    icon: FileCode,
    value: "3",
    label: "Integration models",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Impact we create
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
