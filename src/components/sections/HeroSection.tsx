import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="inline-flex gap-2 items-center py-2 px-4">
              <Zap className="h-3 w-3" />
              <span className="text-xs font-medium">New · Whitelabel cards & loans for your brand</span>
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Launch credit card & loan journeys{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  under your brand
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                powered by CardGenius
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, most partners just show generic offers, static tables or affiliate links — users don't trust them and conversion stays low.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                We give you a branded product with a real recommendation engine, full journeys, tracking and incentives built in.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/solutions")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all group font-semibold"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/contact")}
                className="border-2 hover:bg-muted"
              >
                Request API access
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              For publishers, fintechs, employers, brokers, creators and more.
            </p>
          </div>

          {/* Right: Product Visual */}
          <div className="relative lg:ml-8">
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
                  <span className="font-semibold text-foreground">Your Brand</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Powered by CardGenius
                </Badge>
              </div>

              {/* Recommended Cards */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Recommended cards for your users
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Premium Cashback Card", savings: "₹24,500", icon: "💳" },
                    { name: "Travel Rewards Card", savings: "₹18,200", icon: "✈️" },
                    { name: "Shopping Elite Card", savings: "₹15,800", icon: "🛍️" },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{card.icon}</span>
                        <div>
                          <p className="font-medium text-sm text-foreground">{card.name}</p>
                          <p className="text-xs text-muted-foreground">Best match</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary text-sm">{card.savings}</p>
                        <p className="text-xs text-muted-foreground">saved/year</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Status */}
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Application status
                </h3>
                <div className="space-y-2">
                  {[
                    { name: "Rahul", product: "Cashback card", status: "Approved", color: "bg-green-500" },
                    { name: "Meera", product: "Travel card", status: "In review", color: "bg-yellow-500" },
                    { name: "Karan", product: "Personal loan", status: "Submitted", color: "bg-blue-500" },
                  ].map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`h-2 w-2 rounded-full ${app.color}`} />
                      <span className="text-foreground font-medium">{app.name}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{app.product}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-foreground">{app.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-glow/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Built on 10+ years of cashback & banking partnerships</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Millions of users across the BankKaro & CashKaro network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
