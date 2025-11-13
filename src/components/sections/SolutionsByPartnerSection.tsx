import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building, Briefcase, Home, Sparkles } from "lucide-react";

const partnerTypes = [
  { id: "finance", label: "Finance apps & publishers", icon: FileText },
  { id: "banks", label: "Banks & NBFCs", icon: Building },
  { id: "enterprises", label: "Enterprises & employers", icon: Briefcase },
  { id: "commerce", label: "Commerce & services", icon: Home },
  { id: "creators", label: "Creators & communities", icon: Sparkles },
];

const partnerData = {
  finance: {
    problem: "Your readers compare cards and loans with you, but apply somewhere else — and you can't prove you added value.",
    solution: "Add CardGenius and LoanGenius so you keep the experience and the revenue.",
    headline: "For personal finance apps, publishers & marketplaces",
    body: "Turn your existing content and tools into high-intent card and loan journeys. Plug our engine into your comparison tables, calculators and credit tools.",
    useCases: [
      {
        title: "Smart recommendations next to your content",
        description: "Show CardGenius recommendations next to your 'Best credit cards', EMI calculators or loan guides. Use our APIs to fetch ranked products and render them directly in your UI.",
      },
      {
        title: "Deep comparison for engaged users",
        description: "Give users a calculator that asks about their actual spends and shows rupee-accurate missed savings. Ideal for personal finance portals and credit optimisation journeys.",
      },
      {
        title: "Co-branded portal in days",
        description: "Want something live quickly? Use a whitelabel portal with your logo, colours and catalogue, and drive traffic from your articles, newsletters and tools.",
      },
    ],
    bestFit: "API-first, with an optional whitelabel portal for faster launch.",
  },
  banks: {
    problem: "You have multiple cards and loans, but no neutral engine to show the truly best fit per customer.",
    solution: "Use CardGenius on your own catalogue to route customers to the right product, with explainable maths.",
    headline: "For banks, NBFCs and lending fintechs",
    body: "Use CardGenius as your optimisation layer to route customers to the right product inside your own catalogue.",
    useCases: [
      {
        title: "Right card or loan for each customer",
        description: "Serve better offers to existing customers by matching their spend and profile to your card and loan portfolio. Our engine runs on your product list and rules.",
      },
      {
        title: "Missed rewards & upgrade journeys",
        description: "Show customers how much they're leaving on the table with their current card, then offer an upgrade or cross-sell inside your own app.",
      },
      {
        title: "Eligibility & routing APIs",
        description: "Use eligibility and application-tracking APIs to build smooth journeys in your app or web flows, while we handle rules and reporting.",
      },
    ],
    bestFit: "API-based service; limited custom co-builds for strategic programmes.",
  },
  enterprises: {
    problem: "You're expected to offer meaningful benefits, but financial products are messy to curate and maintain.",
    solution: "Offer a ready-made, curated credit and loan benefits portal with clear economics and reporting.",
    headline: "Employee benefits portals for credit & loans",
    body: "Give employees access to curated cards and loans, with clear comparisons and exclusive rewards — all under your company brand.",
    useCases: [
      {
        title: "Employee benefits marketplace",
        description: "Launch a whitelabel portal where employees discover the best cards for everyday spends, travel, fuel, shopping and more — only from vetted partners.",
      },
      {
        title: "Life event finance journeys",
        description: "Create journeys for home purchase, education, vehicles or relocation that surface the right mix of cards and loans for each life event.",
      },
      {
        title: "Share the upside with employees",
        description: "Use ProfitShare-style setups so part of the commission comes back as cashback, vouchers or fee waivers for employees.",
      },
    ],
    bestFit: "Templatized whitelabel with optional API hooks.",
  },
  commerce: {
    problem: "Your customers make big financial decisions with you, but you don't offer credible finance options.",
    solution: "Add a simple 'Finance Desk' microsite for home, auto, travel, weddings, interiors and society-level needs.",
    headline: "For brokers, auto, travel, weddings, interiors & RWAs",
    body: "Wherever high-value decisions happen offline, you can offer smarter finance options without becoming a finance company.",
    useCases: [
      {
        title: "Real estate & interior partners",
        description: "Property brokers and interior designers can offer home loans, top-up loans and renovation cards via a co-branded 'Finance Desk' microsite. QR codes and links make it simple to share.",
      },
      {
        title: "Auto & service centres",
        description: "Car service, modification and dealer networks can offer fuel cards, auto cards and personal loans at the workshop or showroom, all under their brand.",
      },
      {
        title: "Travel, weddings & events",
        description: "Travel agents, wedding planners and venues can provide curated travel cards and loans for large spends spread over months.",
      },
      {
        title: "Housing societies & RWAs",
        description: "Gated communities can host a society-branded portal for home upgrades, car purchases, education finance and more.",
      },
    ],
    bestFit: "Whitelabel templates with simple referral links and QR codes; APIs optional.",
  },
  creators: {
    problem: "Your audience trusts you, but random finance affiliate links feel one-size-fits-all.",
    solution: "Offer tailored recommendations that actually suit your audience, via a single 'Money tools' page.",
    headline: "For creators, influencers & communities",
    body: "Turn your audience's financial questions into a revenue stream — with a recommendation engine that does right by them.",
    useCases: [
      {
        title: "Money tools page for your audience",
        description: "Launch a co-branded page with 'Best cards for my community' and 'Loans for big life moments', tuned to your niche.",
      },
      {
        title: "ProfitShare-style affiliate economics",
        description: "Earn from approved cards and loans while your audience gets extra cashback or vouchers on top.",
      },
      {
        title: "Embed in your existing site/app",
        description: "Use a lightweight embed or link to our whitelabel portal — no heavy development needed.",
      },
    ],
    bestFit: "Strongly templatized whitelabel, with simple APIs for larger apps.",
  },
};

export const SolutionsByPartnerSection = () => {
  const [activeTab, setActiveTab] = useState("finance");
  const currentData = partnerData[activeTab as keyof typeof partnerData];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Solutions for every kind of partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a publisher, fintech, employer, broker or creator, your use case is already built in.
            </p>
          </div>

          {/* Partner Type Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
            {partnerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === type.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <div className="space-y-2">
                  <Badge variant="destructive" className="mb-2">Problem</Badge>
                  <p className="text-sm text-foreground leading-relaxed">{currentData.problem}</p>
                </div>
              </Card>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-2">
                  <Badge className="mb-2 bg-primary text-primary-foreground">Solution</Badge>
                  <p className="text-sm text-foreground leading-relaxed">{currentData.solution}</p>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <Card className="p-8 bg-card">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{currentData.headline}</h3>
                  <p className="text-muted-foreground leading-relaxed">{currentData.body}</p>
                </div>

                {/* Use Cases */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  {currentData.useCases.map((useCase, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/80 to-primary-glow flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{idx + 1}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">{useCase.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best Fit */}
                <div className="pt-6 border-t border-border">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                    <span className="text-sm font-medium text-secondary-foreground">
                      Best fit: <span className="text-primary font-semibold">{currentData.bestFit}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
