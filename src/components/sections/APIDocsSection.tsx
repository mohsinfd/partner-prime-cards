import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Code2, Terminal, Webhook, FileCode } from "lucide-react";

const apiFeatures = [
  { icon: Code2, label: "/cards – ranked card recommendations" },
  { icon: Terminal, label: "/loans – loan matching" },
  { icon: Webhook, label: "Eligibility & application tracking" },
  { icon: FileCode, label: "Webhooks and events" },
];

export const APIDocsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    partnerType: "",
    useCase: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request received!",
      description: "Thanks — we'll get back to you with API access details.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      partnerType: "",
      useCase: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="api-docs" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              APIs & documentation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Developers can use our REST APIs to fetch recommendations, run eligibility and track applications in your apps and websites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: API Features with SDK Examples */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Available SDKs & Libraries</h3>
                <p className="text-foreground leading-relaxed">
                  We maintain clean JSON schemas, test environments and sample payloads for quick integration.
                </p>
              </div>

              {/* SDK Code Examples */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">JavaScript / Node.js</span>
                    <Badge variant="secondary" className="text-xs">npm install @bankkaro/sdk</Badge>
                  </div>
                  <pre className="text-xs bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] p-3 rounded overflow-x-auto">
                    <code className="font-mono">
                      <span className="text-[hsl(var(--code-keyword))]">import</span> BankKaro <span className="text-[hsl(var(--code-keyword))]">from</span> <span className="text-[hsl(var(--code-string))]">'@bankkaro/sdk'</span>;{'\n\n'}
                      <span className="text-[hsl(var(--code-keyword))]">const</span> client = <span className="text-[hsl(var(--code-keyword))]">new</span> <span className="text-[hsl(var(--code-function))]">BankKaro</span>({'{'}apiKey{'}'});{'\n'}
                      <span className="text-[hsl(var(--code-keyword))]">const</span> cards = <span className="text-[hsl(var(--code-keyword))]">await</span> client.cards.<span className="text-[hsl(var(--code-function))]">get</span>();
                    </code>
                  </pre>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">Python</span>
                    <Badge variant="secondary" className="text-xs">pip install bankkaro</Badge>
                  </div>
                  <pre className="text-xs bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] p-3 rounded overflow-x-auto">
                    <code className="font-mono">
                      <span className="text-[hsl(var(--code-keyword))]">from</span> bankkaro <span className="text-[hsl(var(--code-keyword))]">import</span> BankKaro{'\n\n'}
                      client = <span className="text-[hsl(var(--code-function))]">BankKaro</span>(api_key=api_key){'\n'}
                      cards = client.cards.<span className="text-[hsl(var(--code-function))]">get</span>()
                    </code>
                  </pre>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">cURL</span>
                    <Badge variant="secondary" className="text-xs">Direct HTTP</Badge>
                  </div>
                  <pre className="text-xs bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] p-3 rounded overflow-x-auto">
                    <code className="font-mono">
                      curl -X POST https://api.bankkaro.com/v1/cards \{'\n'}
                      {'  '}-H <span className="text-[hsl(var(--code-string))]">"Authorization: Bearer bk_live_..."</span>
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Core Endpoints</h4>
                {apiFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium text-foreground font-mono">{feature.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <div className="text-primary mt-0.5">⚡</div>
                  <div>
                    <span className="font-semibold text-foreground">Test Environment: </span>
                    <code className="text-xs bg-muted px-2 py-0.5 rounded">api-test.bankkaro.com</code>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="text-primary mt-0.5">🔒</div>
                  <div>
                    <span className="font-semibold text-foreground">Auth: </span>
                    <span className="text-muted-foreground">Bearer tokens + OAuth 2.0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="text-primary mt-0.5">📊</div>
                  <div>
                    <span className="font-semibold text-foreground">Rate Limits: </span>
                    <span className="text-muted-foreground">100-500 req/min (tier-based)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Access Request Form */}
            <Card className="p-8 bg-card">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Developer portal (coming soon)</h3>
                  <p className="text-sm text-muted-foreground">
                    We're setting up a self-serve developer portal with interactive docs, test keys and sample apps. For now, leave your details and we'll email you access.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-name">Name *</Label>
                    <Input
                      id="api-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-email">Work email *</Label>
                    <Input
                      id="api-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-company">Company *</Label>
                    <Input
                      id="api-company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-website">Website/app</Label>
                    <Input
                      id="api-website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-partner-type">Partner type *</Label>
                    <Select value={formData.partnerType} onValueChange={(value) => setFormData({ ...formData, partnerType: value })}>
                      <SelectTrigger id="api-partner-type">
                        <SelectValue placeholder="Select partner type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance app/publisher</SelectItem>
                        <SelectItem value="bank">Bank/NBFC/fintech</SelectItem>
                        <SelectItem value="employer">Employer/HR</SelectItem>
                        <SelectItem value="broker">Broker/merchant/service business</SelectItem>
                        <SelectItem value="creator">Creator/community</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-use-case">Expected use case</Label>
                    <Textarea
                      id="api-use-case"
                      value={formData.useCase}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      placeholder="Tell us what you're building..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request API access"}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
