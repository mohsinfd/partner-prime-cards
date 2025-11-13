import { Clock, Zap, TrendingUp, Code } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "< 2 weeks",
    label: "Go-live time",
  },
  {
    icon: Zap,
    value: "< 200ms",
    label: "API response",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
  },
  {
    icon: Code,
    value: "50+",
    label: "Active partners",
  },
];

export const WhyPartnerSection = () => {
  return (
    <section id="why-partner" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
