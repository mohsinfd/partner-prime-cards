import { useState } from "react";
import { Brain, GitBranch, BarChart3, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CodeBlock } from "@/components/ui/code-block";

const recommendationSchema = `{
  "recommendations": [
    {
      "card_id": "string",
      "card_name": "string",
      "issuer": "string",
      "match_score": 0.94,
      "estimated_annual_savings": 24500,
      "key_benefits": ["string"],
      "eligibility": {
        "min_income": 600000,
        "min_credit_score": 750
      }
    }
  ],
  "meta": {
    "computation_time_ms": 142
  }
}`;

const applicationSchema = `{
  "application_id": "app_123456789",
  "user_id": "usr_984521",
  "product_id": "hdfc_regalia",
  "status": "submitted",
  "tracking_url": "https://...",
  "estimated_approval_time": "3-5 days"
}`;

const trackingSchema = `{
  "applications": [
    {
      "application_id": "app_123",
      "status": "approved",
      "credit_limit": 500000,
      "commission": {
        "amount": 2500,
        "payout_date": "2025-02-15"
      }
    }
  ],
  "webhooks": {
    "events": ["application.approved"]
  }
}`;

const stack = [
  {
    icon: Brain,
    title: "Recommendations engine",
    description: "CardGenius and LoanGenius sort products by real-world value - missed rewards, milestones, fee waivers and redemption value - not just headline offers. Use it via APIs or our ready-made widgets.",
    features: [
      "Best card/loan for each user or segment",
      "Brand, category and use-case specific views (Amazon, travel, auto, home etc.)",
      "Works on your catalogue, our catalogue, or a mix",
    ],
    schema: recommendationSchema,
    schemaTitle: "Card Recommendation Response"
  },
  {
    icon: GitBranch,
    title: "Application & routing layer",
    description: "Hand users off to bank and NBFC journeys through secure redirects or embedded flows, while we track every click and application.",
    features: [
      "Links to partner bank/NBFC forms or journeys",
      "Eligibility checks where available",
      "Lead routing and tagging by partner, channel and campaign",
    ],
    schema: applicationSchema,
    schemaTitle: "Application Tracking Response"
  },
  {
    icon: BarChart3,
    title: "Tracking, reporting & incentives",
    description: "See every step from 'viewed recommendation' to 'approved', and share incentives back with users using our ProfitShare-style rails.",
    features: [
      "Application status tracking and dashboards",
      "Nudges and reminders (email/SMS/onsite events)",
      "Cashback, voucher and fee-waiver incentives per partner and per product",
    ],
    schema: trackingSchema,
    schemaTitle: "Tracking & Commission Response"
  },
];

export const StackSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unleash the power of data
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three building blocks that let you offer cards and loans under your brand, with our engine under the hood.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stack.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-xl transition-all group">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/80 to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-border">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Schema Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <Code2 className="h-4 w-4 mr-2" />
                      View JSON Schema
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{item.schemaTitle}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <CodeBlock code={item.schema} language="json" showLineNumbers />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
