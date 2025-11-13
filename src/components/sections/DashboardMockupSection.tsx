import { Card } from "@/components/ui/card";
import { TrendingUp, Users, CreditCard, DollarSign } from "lucide-react";

export const DashboardMockupSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Your Partner Dashboard
          </h2>
          <p className="text-muted-foreground">Live in 48 hours</p>
        </div>

        <Card className="p-8 border-border/20 bg-card">
          {/* Stats Row */}
          <div className="grid sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Revenue</span>
              </div>
              <div className="text-2xl font-bold text-foreground">₹18.4L</div>
              <div className="text-xs text-green-500">+24% vs last month</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Users</span>
              </div>
              <div className="text-2xl font-bold text-foreground">12,847</div>
              <div className="text-xs text-green-500">+18%</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Applications</span>
              </div>
              <div className="text-2xl font-bold text-foreground">1,284</div>
              <div className="text-xs text-green-500">+32%</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Conversion</span>
              </div>
              <div className="text-2xl font-bold text-foreground">6.8%</div>
              <div className="text-xs text-green-500">+2.1%</div>
            </div>
          </div>

          {/* Revenue Chart Mockup */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-4">Revenue Trend</h3>
            <div className="h-48 rounded-lg bg-muted/30 border border-border/10 flex items-end gap-2 p-4">
              {[40, 65, 55, 80, 75, 90, 85, 100, 95, 110, 105, 120].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Top Cards Table */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Top Performing Cards</h3>
            <div className="space-y-2">
              {[
                { name: "HDFC Regalia", applications: 342, ctr: "8.2%", revenue: "₹4.8L" },
                { name: "Axis Magnus", applications: 284, ctr: "7.6%", revenue: "₹4.1L" },
                { name: "SBI Cashback", applications: 256, ctr: "6.9%", revenue: "₹2.8L" },
              ].map((card, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                  <span className="font-medium text-sm">{card.name}</span>
                  <div className="flex gap-6 text-xs text-muted-foreground">
                    <span>{card.applications} apps</span>
                    <span>{card.ctr} CTR</span>
                    <span className="text-primary font-semibold">{card.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
