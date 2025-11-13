import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    title: "Publisher Success Story",
    company: "MoneyWise Media",
    segment: "Finance Publisher",
    metrics: [
      { label: "Revenue (Year 1)", value: "₹2.8Cr", icon: DollarSign },
      { label: "Time to Launch", value: "3 weeks", icon: Clock },
      { label: "Monthly Users", value: "250K+", icon: Users },
      { label: "Conversion Rate", value: "7.2%", icon: TrendingUp },
    ],
    challenge: "Static card comparison tables with affiliate links. Zero personalization.",
    solution: "API integration for dynamic recommendations. Whitelabel card journey.",
    results: "3x revenue increase. User engagement up 145%. Zero dev maintenance.",
  },
  {
    title: "Fintech Transformation",
    company: "WealthTech Pro",
    segment: "Neo-Banking App",
    metrics: [
      { label: "Conversion Lift", value: "45%", icon: TrendingUp },
      { label: "Go-Live Time", value: "4 weeks", icon: Clock },
      { label: "Cards Launched", value: "50+", icon: Users },
      { label: "Monthly Revenue", value: "₹1.2Cr", icon: DollarSign },
    ],
    challenge: "Building recommendation engine in-house. 6-month timeline. ₹40L budget.",
    solution: "BankKaro APIs with SDK integration. Dashboard analytics included.",
    results: "Live in 4 weeks vs 6 months. ₹40L saved. 45% higher conversions.",
  },
  {
    title: "NBFC Quick Launch",
    company: "Capital Finance Ltd",
    segment: "NBFC",
    metrics: [
      { label: "Launch Speed", value: "3 weeks", icon: Clock },
      { label: "Cost Saved", value: "₹35L", icon: DollarSign },
      { label: "Loan Products", value: "30+", icon: Users },
      { label: "Approval Rate", value: "82%", icon: TrendingUp },
    ],
    challenge: "Legacy loan matching system. Poor user experience. Low approval rates.",
    solution: "Whitelabel loan journey. ML-powered matching. Real-time eligibility.",
    results: "82% approval rate. 3-week deployment. 30+ products live.",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Partner Success Stories
            </h1>
            <p className="text-lg text-muted-foreground">
              Real results from real partners
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="p-8 border-border/20">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{study.company}</span>
                    <span>•</span>
                    <span>{study.segment}</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid sm:grid-cols-4 gap-4 mb-8">
                  {study.metrics.map((metric, midx) => (
                    <div key={midx} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <metric.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Story */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">Results</h3>
                    <p className="text-muted-foreground">{study.results}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
