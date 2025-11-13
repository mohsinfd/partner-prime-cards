import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const metrics = [
  { endpoint: "/cards/recommend", p50: "142ms", p95: "198ms", p99: "245ms" },
  { endpoint: "/loans/match", p50: "156ms", p95: "210ms", p99: "268ms" },
  { endpoint: "/eligibility", p50: "89ms", p95: "134ms", p99: "178ms" },
];

const rateLimits = [
  { tier: "Basic", limit: "100 req/min", burst: "150" },
  { tier: "Pro", limit: "500 req/min", burst: "750" },
  { tier: "Enterprise", limit: "Custom", burst: "Custom" },
];

export const PerformanceMetricsTable = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-semibold">Built for Speed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Performance Metrics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Latency Table */}
          <Card className="p-6 border-border/20">
            <h3 className="text-lg font-bold mb-4">API Latency</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-2 text-muted-foreground font-medium">Endpoint</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">p50</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">p95</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">p99</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric, idx) => (
                    <tr key={idx} className="border-b border-border/10">
                      <td className="py-3 font-mono text-xs">{metric.endpoint}</td>
                      <td className="py-3 text-right font-mono text-primary">{metric.p50}</td>
                      <td className="py-3 text-right font-mono text-primary">{metric.p95}</td>
                      <td className="py-3 text-right font-mono text-primary">{metric.p99}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Rate Limits Table */}
          <Card className="p-6 border-border/20">
            <h3 className="text-lg font-bold mb-4">Rate Limits</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-2 text-muted-foreground font-medium">Tier</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">Limit</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">Burst</th>
                  </tr>
                </thead>
                <tbody>
                  {rateLimits.map((limit, idx) => (
                    <tr key={idx} className="border-b border-border/10">
                      <td className="py-3 font-medium">{limit.tier}</td>
                      <td className="py-3 text-right font-mono text-primary text-xs">{limit.limit}</td>
                      <td className="py-3 text-right font-mono text-primary text-xs">{limit.burst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            99.9% uptime SLA • Auto-scaling infrastructure • Global CDN
          </p>
        </div>
      </div>
    </section>
  );
};
