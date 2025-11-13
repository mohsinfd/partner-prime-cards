import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Credit cards & loans API{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  for your brand
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Live in 2 weeks. ₹0 dev cost.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/solutions")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group font-semibold"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/contact")}
                className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
              >
                Request API access
              </Button>
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="relative lg:ml-8">
            {/* Product UI Mockup */}
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
                  <span className="font-semibold text-foreground text-lg">BankKaro Partner Portal</span>
                </div>
              </div>

              {/* Card Recommendations */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Top Recommendations</h3>
                
                {/* Card 1 - HDFC Regalia */}
                <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded bg-background border border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">HDFC</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">HDFC Regalia</div>
                        <div className="text-xs text-muted-foreground">Premium Rewards</div>
                      </div>
                    </div>
                    <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                      98% Match
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground">Annual Savings</div>
                      <div className="font-semibold text-primary">₹18,420</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Annual Fee</div>
                      <div className="font-semibold text-foreground">₹2,500</div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Axis Magnus */}
                <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded bg-background border border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">AXIS</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Axis Magnus</div>
                        <div className="text-xs text-muted-foreground">Travel & Rewards</div>
                      </div>
                    </div>
                    <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                      94% Match
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground">Annual Savings</div>
                      <div className="font-semibold text-primary">₹24,150</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Annual Fee</div>
                      <div className="font-semibold text-foreground">₹10,000</div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - SBI Cashback */}
                <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded bg-background border border-border flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">SBI</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">SBI Cashback</div>
                        <div className="text-xs text-muted-foreground">Online Shopping</div>
                      </div>
                    </div>
                    <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                      91% Match
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground">Annual Savings</div>
                      <div className="font-semibold text-primary">₹12,890</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Annual Fee</div>
                      <div className="font-semibold text-foreground">₹999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
