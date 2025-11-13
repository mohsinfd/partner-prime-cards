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
    title: "AI-Powered Matching",
    description: "Machine learning algorithms that continuously improve recommendation accuracy based on real approval data",
    features: ["ML-based scoring", "Pattern recognition", "Predictive analytics"]
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast API responses with edge computing and intelligent caching for optimal performance",
    features: ["< 200ms response", "Edge distributed", "Auto-scaling"]
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption, OAuth 2.0, and compliance with PCI-DSS and RBI regulations",
    features: ["256-bit encryption", "OAuth 2.0", "PCI-DSS compliant"]
  },
  {
    icon: RefreshCw,
    title: "Live Data Sync",
    description: "Real-time synchronization with bank partners to ensure rates, offers, and eligibility are always current",
    features: ["Hourly updates", "Webhook events", "Auto-refresh"]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with conversion tracking, revenue attribution, and user behavior insights",
    features: ["Custom reports", "Revenue tracking", "User analytics"]
  },
  {
    icon: Globe,
    title: "Multi-Channel Support",
    description: "Single API works across web, mobile apps, WhatsApp, chatbots, and any digital channel",
    features: ["Platform agnostic", "Responsive design", "Omnichannel"]
  },
  {
    icon: Code2,
    title: "Developer-First SDK",
    description: "Native SDKs for JavaScript, Python, PHP with detailed docs, code examples, and sandbox environment",
    features: ["Multi-language SDKs", "Sandbox testing", "Code examples"]
  },
  {
    icon: Workflow,
    title: "Smart Routing",
    description: "Intelligent application routing based on approval probability, commission rates, and processing time",
    features: ["Auto-routing", "Priority sorting", "Fallback logic"]
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Enhance user profiles with credit bureau data, spending patterns, and behavioral signals",
    features: ["Bureau integration", "Profile building", "Data validation"]
  },
  {
    icon: Layers,
    title: "Flexible Integration",
    description: "RESTful APIs, GraphQL, webhooks, or pre-built widgets - integrate however you prefer",
    features: ["REST & GraphQL", "Webhooks", "Embeddable widgets"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "API versioning with backward compatibility, deprecation notices, and smooth migration paths",
    features: ["Semantic versioning", "Breaking changes notice", "Migration guides"]
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description: "Built-in fraud detection with device fingerprinting, velocity checks, and risk scoring",
    features: ["Risk scoring", "Device tracking", "Anomaly detection"]
  }
];

export const APICapabilitiesGrid = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Platform Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for scale, security, and speed. Every feature you need to deliver
            world-class card and loan recommendations to your users.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            return (
              <Card 
                key={index}
                className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group bg-background/50 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs bg-muted hover:bg-muted"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">147</div>
            <div className="text-sm text-muted-foreground">Bank Partners</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Integrations</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">10M+</div>
            <div className="text-sm text-muted-foreground">Monthly API Calls</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Developer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
