import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { JSONViewer } from "@/components/ui/json-viewer";
import { Badge } from "@/components/ui/badge";

const cardsRecommendationRequest = `POST /api/v1/cards/recommendations
Authorization: Bearer bk_live_abc123xyz...
Content-Type: application/json

{
  "user_id": "usr_984521",
  "spending_profile": {
    "monthly_spend": 50000,
    "categories": {
      "shopping": 18000,
      "travel": 12000,
      "fuel": 8000,
      "dining": 7000,
      "others": 5000
    }
  },
  "preferences": {
    "card_network": ["visa", "mastercard"],
    "annual_fee_max": 5000,
    "primary_benefit": "cashback"
  }
}`;

const cardsRecommendationResponse = {
  status: "success",
  data: {
    recommendations: [
      {
        card_id: "hdfc_regalia",
        card_name: "HDFC Bank Regalia Credit Card",
        issuer: "HDFC Bank",
        network: "visa",
        match_score: 0.94,
        estimated_annual_savings: 24500,
        annual_fee: 2500,
        effective_benefit: 22000,
        key_benefits: [
          "4 reward points per ₹150 spent",
          "Unlimited lounge access (domestic + international)",
          "₹5000 Amazon voucher on ₹5L annual spend",
          "Fuel surcharge waiver"
        ],
        category_returns: {
          shopping: "~2.7% cashback equivalent",
          travel: "~3.5% on travel bookings",
          dining: "~2% cashback",
          fuel: "1% + surcharge waiver"
        },
        eligibility: {
          min_income: 600000,
          min_credit_score: 750,
          employment_type: ["salaried", "self_employed"]
        },
        application_url: "https://partners.bankkaro.com/apply/hdfc_regalia?ref=partner_123"
      },
      {
        card_id: "sbi_cashback",
        card_name: "SBI Cashback Credit Card",
        issuer: "State Bank of India",
        network: "visa",
        match_score: 0.86,
        estimated_annual_savings: 19200,
        annual_fee: 999,
        fee_waiver_condition: "₹2L annual spend",
        effective_benefit: 18200,
        key_benefits: [
          "5% cashback on online shopping",
          "1% cashback on all other spends",
          "No minimum redemption required"
        ]
      }
    ],
    meta: {
      total_cards_evaluated: 147,
      returned_count: 2,
      computation_time_ms: 142,
      cache_hit: false
    }
  },
  request_id: "req_7f8a9b2c1d3e",
  timestamp: "2025-01-15T10:23:45Z"
};

const loanMatchingRequest = `POST /api/v1/loans/match
Authorization: Bearer bk_live_abc123xyz...
Content-Type: application/json

{
  "user_id": "usr_984521",
  "loan_type": "personal",
  "loan_amount": 500000,
  "tenure_months": 36,
  "employment_type": "salaried",
  "monthly_income": 85000,
  "credit_score": 780,
  "existing_loans": {
    "count": 1,
    "total_emi": 12000
  }
}`;

const loanMatchingResponse = {
  status: "success",
  data: {
    matched_loans: [
      {
        loan_id: "hdfc_pl_premium",
        lender: "HDFC Bank",
        loan_type: "personal",
        amount: 500000,
        tenure_months: 36,
        interest_rate: 10.50,
        monthly_emi: 16134,
        total_interest: 81024,
        total_repayment: 581024,
        processing_fee: 2500,
        eligibility_score: 0.92,
        approval_probability: "high",
        features: [
          "Pre-approved offer available",
          "Instant disbursal",
          "No collateral required"
        ],
        application_url: "https://partners.bankkaro.com/apply/hdfc_pl_premium?ref=partner_123"
      },
      {
        loan_id: "icici_pl_standard",
        lender: "ICICI Bank",
        loan_type: "personal",
        amount: 500000,
        tenure_months: 36,
        interest_rate: 11.25,
        monthly_emi: 16458,
        total_interest: 92488,
        total_repayment: 592488,
        processing_fee: 1999,
        eligibility_score: 0.88,
        approval_probability: "high"
      }
    ],
    emi_calculator: {
      requested_amount: 500000,
      tenure_months: 36,
      best_rate: 10.50,
      lowest_emi: 16134,
      total_savings_vs_average: 11464
    }
  },
  request_id: "req_9c8d7e6f5a4b",
  timestamp: "2025-01-15T10:25:32Z"
};

const webhookPayload = {
  event_type: "application.approved",
  event_id: "evt_8e7d6c5b4a3b",
  timestamp: "2025-01-18T14:22:15Z",
  data: {
    application_id: "app_123456789",
    user_id: "usr_984521",
    partner_id: "partner_123",
    product_type: "credit_card",
    product_id: "hdfc_regalia",
    product_name: "HDFC Bank Regalia Credit Card",
    status: "approved",
    approved_at: "2025-01-18T14:20:00Z",
    credit_limit: 500000,
    commission: {
      amount: 2500,
      currency: "INR",
      payout_date: "2025-02-15"
    }
  }
};

const errorResponse = {
  status: "error",
  error: {
    code: "INVALID_SPENDING_PROFILE",
    message: "Total monthly spend across categories does not match monthly_spend value",
    details: {
      monthly_spend_declared: 50000,
      monthly_spend_calculated: 48000,
      difference: 2000
    }
  },
  request_id: "req_err_1a2b3c4d",
  timestamp: "2025-01-15T10:32:10Z"
};

export const APIShowcaseSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<"curl" | "javascript" | "python">("javascript");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Live API Examples
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            See the API in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Realistic request and response examples with actual Indian bank and card data.
            Copy, paste, and integrate in minutes.
          </p>
        </div>

        {/* API Examples Tabs */}
        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="cards">Card Recommendations</TabsTrigger>
            <TabsTrigger value="loans">Loan Matching</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Error Handling</TabsTrigger>
          </TabsList>

          {/* Cards API */}
          <TabsContent value="cards" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Request</h3>
                <CodeBlock code={cardsRecommendationRequest} language="http" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Response (200 OK)</h3>
                <JSONViewer data={cardsRecommendationResponse} />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">💡 Use Case</h4>
              <p className="text-sm text-muted-foreground">
                Pass user spending patterns and preferences to get ranked card recommendations with estimated savings.
                Perfect for personal finance apps, comparison websites, and financial advisory platforms.
              </p>
            </div>
          </TabsContent>

          {/* Loans API */}
          <TabsContent value="loans" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Request</h3>
                <CodeBlock code={loanMatchingRequest} language="http" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Response (200 OK)</h3>
                <JSONViewer data={loanMatchingResponse} />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">💡 Use Case</h4>
              <p className="text-sm text-muted-foreground">
                Match users with best loan offers based on their profile and requirements.
                Includes EMI calculator, eligibility scoring, and approval probability.
              </p>
            </div>
          </TabsContent>

          {/* Webhooks */}
          <TabsContent value="webhooks" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Example Webhook: application.approved</h3>
              <JSONViewer data={webhookPayload} />
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Available Webhook Events</h4>
                <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                  <li>• <code className="text-xs bg-muted px-2 py-0.5 rounded">application.submitted</code> - User submits application</li>
                  <li>• <code className="text-xs bg-muted px-2 py-0.5 rounded">application.approved</code> - Application approved by bank</li>
                  <li>• <code className="text-xs bg-muted px-2 py-0.5 rounded">application.rejected</code> - Application rejected</li>
                  <li>• <code className="text-xs bg-muted px-2 py-0.5 rounded">card.dispatched</code> - Card sent to user</li>
                  <li>• <code className="text-xs bg-muted px-2 py-0.5 rounded">commission.earned</code> - Commission credited</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔒 Security</h4>
                <p className="text-sm text-muted-foreground">
                  All webhooks include <code className="text-xs bg-muted px-2 py-0.5 rounded">X-BankKaro-Signature</code> header for verification.
                  Supports webhook retry logic with exponential backoff.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Error Handling */}
          <TabsContent value="errors" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Example Error Response (400 Bad Request)</h3>
              <JSONViewer data={errorResponse} />
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Common Error Codes</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded shrink-0">400</code>
                  <span>Bad Request - Invalid parameters or malformed JSON</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded shrink-0">401</code>
                  <span>Unauthorized - Invalid or missing API key</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded shrink-0">429</code>
                  <span>Rate Limit Exceeded - Too many requests</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded shrink-0">500</code>
                  <span>Internal Server Error - Contact support with request_id</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Performance Metrics */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">&lt; 200ms</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">10M+</div>
            <div className="text-sm text-muted-foreground">API Calls/Month</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">147</div>
            <div className="text-sm text-muted-foreground">Bank Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};
