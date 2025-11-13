import { Building2, Briefcase, Users, Store, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const segments = [
  {
    icon: Building2,
    label: "Personal finance sites & credit marketplaces",
  },
  {
    icon: Briefcase,
    label: "Credit apps, neo-banks and fintechs",
  },
  {
    icon: Users,
    label: "Corporate HR & employee benefits teams",
  },
  {
    icon: Store,
    label: "Real estate, auto, travel & service businesses",
  },
  {
    icon: Sparkles,
    label: "Creators, influencers & online communities",
  },
];

export const WhoWeWorkWithSection = () => {
  return (
    <section id="who-we-work-with" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who we're built for
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you work with users who spend, borrow or plan life events, we can add value to your journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {segments.map((segment, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <segment.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{segment.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Badge variant="secondary" className="text-sm py-2 px-6">
            Partner logos coming soon
          </Badge>
        </div>
      </div>
    </section>
  );
};
