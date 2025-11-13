import { Shield, Lock, CheckCircle2, FileCheck } from "lucide-react";

const badges = [
  { name: "ISO 27001", icon: Shield },
  { name: "SOC 2 Type II", icon: Lock },
  { name: "PCI-DSS Level 1", icon: CheckCircle2 },
  { name: "GDPR Compliant", icon: FileCheck },
];

export const SecurityBadgesSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border/20 hover:border-primary/50 transition-all"
              title={badge.name}
            >
              <badge.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
