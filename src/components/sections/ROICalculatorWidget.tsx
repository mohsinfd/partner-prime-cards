import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export const ROICalculatorWidget = () => {
  const [transactions, setTransactions] = useState(10000);
  const [commission, setCommission] = useState(2000);
  const [conversion, setConversion] = useState(5);

  const monthlyRevenue = (transactions * (conversion / 100) * commission);
  const annualRevenue = monthlyRevenue * 12;
  const devCostSaved = 4000000;
  const timeSaved = "6 months";

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Calculate Your ROI
        </h2>

        <Card className="p-8 bg-card border-border/20">
          <div className="space-y-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Monthly Transactions</label>
                  <span className="text-sm text-primary font-mono">{transactions.toLocaleString()}</span>
                </div>
                <Slider
                  value={[transactions]}
                  onValueChange={(v) => setTransactions(v[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Avg Commission</label>
                  <span className="text-sm text-primary font-mono">₹{commission.toLocaleString()}</span>
                </div>
                <Slider
                  value={[commission]}
                  onValueChange={(v) => setCommission(v[0])}
                  min={500}
                  max={5000}
                  step={100}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Conversion Rate</label>
                  <span className="text-sm text-primary font-mono">{conversion}%</span>
                </div>
                <Slider
                  value={[conversion]}
                  onValueChange={(v) => setConversion(v[0])}
                  min={1}
                  max={10}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>

            {/* Outputs */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-border/20">
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatCurrency(monthlyRevenue)}
                </div>
                <div className="text-xs text-muted-foreground">Monthly Revenue</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatCurrency(annualRevenue)}
                </div>
                <div className="text-xs text-muted-foreground">Annual Revenue</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatCurrency(devCostSaved)}
                </div>
                <div className="text-xs text-muted-foreground">Dev Cost Saved</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-1">
                  {timeSaved}
                </div>
                <div className="text-xs text-muted-foreground">Time Saved</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
