import { Card } from "@/components/ui/card";
import { ArrowRight, User, Smartphone, Cpu, Database, Building2, BarChart3 } from "lucide-react";

export const SystemArchitectureDiagram = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <Card className="p-8 border-border/20 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px]">
            {/* User */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">User</span>
            </div>

            <ArrowRight className="h-6 w-6 text-muted-foreground" />

            {/* Your App */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Your App</span>
            </div>

            <ArrowRight className="h-6 w-6 text-muted-foreground" />

            {/* BankKaro API */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <Cpu className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">BankKaro API</span>
            </div>

            <div className="flex flex-col gap-4">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-180" />
            </div>

            {/* Backend Systems */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium">ML Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium">Bank APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium">Analytics</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">1</div>
              <div className="text-xs text-muted-foreground">User requests recommendation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <div className="text-xs text-muted-foreground">API processes with ML engine</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-xs text-muted-foreground">Returns personalized results</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
