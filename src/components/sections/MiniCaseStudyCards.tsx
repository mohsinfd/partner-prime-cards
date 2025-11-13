import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    metric: "₹2.8Cr",
    label: "Revenue, Year 1",
    segment: "Publisher",
    icon: TrendingUp,
  },
  {
    metric: "45%",
    label: "Conversion Lift",
    segment: "Fintech",
    icon: Zap,
  },
  {
    metric: "3 Weeks",
    label: "Go-Live Time",
    segment: "NBFC",
    icon: Clock,
  },
];

export const MiniCaseStudyCards = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Real Results
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, idx) => (
            <Card key={idx} className="p-6 border-border/20 hover:border-primary/50 transition-all group text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <study.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{study.metric}</div>
              <div className="text-foreground font-medium mb-1">{study.label}</div>
              <div className="text-xs text-muted-foreground mb-4">{study.segment}</div>
              <Button variant="ghost" size="sm" className="group/btn" asChild>
                <Link to="/case-studies">
                  Full Story <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
