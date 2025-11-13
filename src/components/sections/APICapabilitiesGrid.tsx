import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Zap, 
  Lock, 
  RefreshCw, 
  BarChart3, 
  Globe,
  Code2,
  Workflow,
  Database,
  Layers,
  GitBranch,
  Shield
} from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "ML Recommendation Engine",
    description: "AI models trained on 10M+ approvals with 94% accuracy",
    features: ["Ensemble models", "Real-time scoring", "Auto-tuning"]
  },
  {
    icon: Zap,
    title: "Edge Performance",
    description: "Global CDN with intelligent caching, <200ms p95 latency",
    features: ["Edge compute", "Redis cache", "Auto-scale"]
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "OAuth 2.0, AES-256 encryption, PCI-DSS + RBI compliant",
    features: ["SOC 2 Type II", "Vault secrets", "Audit logs"]
  },
  {
    icon: Database,
    title: "Real-Time Data Pipeline",
    description: "Kafka streams processing 50k events/sec with exactly-once delivery",
    features: ["Event sourcing", "CQRS pattern", "Change data capture"]
  },
  {
    icon: Workflow,
    title: "Smart Application Router",
    description: "Rules engine with approval probability + commission optimization",
    features: ["A/B testing", "Fallback chains", "Priority queues"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description: "Multi-touch attribution with conversion funnels and cohort analysis",
    features: ["Event tracking", "Revenue attribution", "Custom dimensions"]
  }
];

export const APICapabilitiesGrid = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Technical Infrastructure</h2>
          <p className="text-muted-foreground">
            Production-grade architecture built for scale, security, and performance
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            return (
              <Card 
                key={index}
                className="p-5 border-border/50 hover:border-primary/30 transition-all group bg-background/50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {capability.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {capability.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs font-mono"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-4 gap-4">
          <div className="text-center p-4 rounded bg-background/50 border border-border/50">
            <div className="text-2xl font-bold text-primary">147</div>
            <div className="text-xs text-muted-foreground">Bank Partners</div>
          </div>
          <div className="text-center p-4 rounded bg-background/50 border border-border/50">
            <div className="text-2xl font-bold text-accent">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center p-4 rounded bg-background/50 border border-border/50">
            <div className="text-2xl font-bold text-primary">10M+</div>
            <div className="text-xs text-muted-foreground">API Calls/mo</div>
          </div>
          <div className="text-center p-4 rounded bg-background/50 border border-border/50">
            <div className="text-2xl font-bold text-accent">&lt;200ms</div>
            <div className="text-xs text-muted-foreground">p95 Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
};
