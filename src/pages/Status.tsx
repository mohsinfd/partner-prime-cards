import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const services = [
  { name: "Cards API", status: "operational", uptime: "99.96%" },
  { name: "Loans API", status: "operational", uptime: "99.94%" },
  { name: "Eligibility API", status: "operational", uptime: "99.98%" },
  { name: "Webhooks", status: "operational", uptime: "99.92%" },
  { name: "Partner Dashboard", status: "operational", uptime: "99.95%" },
];

const incidents = [
  {
    date: "Dec 8, 2024",
    title: "Elevated API Latency",
    status: "resolved",
    duration: "12 minutes",
    description: "Brief spike in response times. Auto-scaled infrastructure.",
  },
  {
    date: "Nov 24, 2024",
    title: "Scheduled Maintenance",
    status: "resolved",
    duration: "30 minutes",
    description: "Database optimization. Zero downtime deployment.",
  },
];

const Status = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">All Systems Operational</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-lg text-muted-foreground">
              Real-time API health and uptime
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
            {/* Current Status */}
            <Card className="p-6 border-border/20">
              <h2 className="text-xl font-bold mb-6">Service Status</h2>
              <div className="space-y-3">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">30d uptime:</span>
                      <span className="text-sm font-semibold text-green-500">{service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Metrics */}
            <Card className="p-6 border-border/20">
              <h2 className="text-xl font-bold mb-6">Current Performance</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">187ms</div>
                  <div className="text-xs text-muted-foreground">Avg Response Time</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">99.94%</div>
                  <div className="text-xs text-muted-foreground">30-Day Uptime</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2.4M</div>
                  <div className="text-xs text-muted-foreground">API Calls Today</div>
                </div>
              </div>
            </Card>

            {/* Incident History */}
            <Card className="p-6 border-border/20">
              <h2 className="text-xl font-bold mb-6">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident, idx) => (
                  <div key={idx} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{incident.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{incident.date}</span>
                          <span>•</span>
                          <span>{incident.duration}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
