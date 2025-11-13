import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisons = [
  { feature: "Time to live", build: "6 months", bankkaro: "2 weeks", winner: "bankkaro" },
  { feature: "Dev cost", build: "₹40L", bankkaro: "₹0", winner: "bankkaro" },
  { feature: "Maintenance", build: "₹8L/year", bankkaro: "Included", winner: "bankkaro" },
  { feature: "Bank contracts", build: "6-12 months", bankkaro: "Day 1", winner: "bankkaro" },
  { feature: "Uptime SLA", build: "DIY", bankkaro: "99.9%", winner: "bankkaro" },
  { feature: "Updates", build: "Manual", bankkaro: "Auto", winner: "bankkaro" },
];

export const BuildVsBuyComparison = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Build vs BankKaro
        </h2>

        <Card className="overflow-hidden border-border/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20 bg-card">
                  <th className="text-left p-4 font-semibold text-foreground"></th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Build In-House</th>
                  <th className="text-center p-4 font-semibold text-primary">BankKaro</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/10 hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">
                      {row.winner === "build" ? (
                        <span className="text-primary font-semibold">{row.build}</span>
                      ) : (
                        <span>{row.build}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.winner === "bankkaro" ? (
                        <span className="text-primary font-semibold">{row.bankkaro}</span>
                      ) : (
                        <span>{row.bankkaro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            6 months → 2 weeks • ₹40L → ₹0 • 6 banks → 15 banks • DIY → 99.9%
          </p>
        </div>
      </div>
    </section>
  );
};
