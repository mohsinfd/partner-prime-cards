import { Activity, Zap, Users, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Activity, value: "99.94%", label: "Uptime" },
  { icon: Zap, value: "187ms", label: "Avg Response" },
  { icon: Users, value: "50+", label: "Partners" },
  { icon: BarChart3, value: "2.4M", label: "API Calls Today" },
];

export const LiveMetricsBanner = () => {
  return (
    <div className="bg-card/50 border-y border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
