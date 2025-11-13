import { useState } from "react";
import { ChevronDown, ChevronRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  responseTime: string;
  sampleRequest: string;
  sampleResponse: string;
}

const endpoints: APIEndpoint[] = [
  {
    method: "POST",
    path: "/v1/cards/recommendations",
    description: "Get ranked card recommendations based on spending profile",
    responseTime: "~150ms",
    sampleRequest: `{
  "user_id": "usr_984521",
  "spending_profile": {
    "monthly_spend": 50000,
    "categories": {"shopping": 18000, "travel": 12000}
  }
}`,
    sampleResponse: `{
  "recommendations": [
    {
      "card_id": "hdfc_regalia",
      "estimated_annual_savings": 24500,
      "match_score": 0.94
    }
  ]
}`
  },
  {
    method: "POST",
    path: "/v1/loans/match",
    description: "Find matching loan products with EMI calculations",
    responseTime: "~180ms",
    sampleRequest: `{
  "loan_amount": 500000,
  "tenure_months": 36,
  "employment_type": "salaried",
  "credit_score": 780
}`,
    sampleResponse: `{
  "matched_loans": [
    {
      "loan_id": "hdfc_pl_premium",
      "interest_rate": 10.50,
      "monthly_emi": 16134
    }
  ]
}`
  },
  {
    method: "POST",
    path: "/v1/eligibility/check",
    description: "Check user eligibility for specific products",
    responseTime: "~100ms",
    sampleRequest: `{
  "product_ids": ["hdfc_regalia", "axis_magnus"],
  "user_profile": {
    "monthly_income": 85000,
    "credit_score": 780
  }
}`,
    sampleResponse: `{
  "eligibility_results": [
    {
      "product_id": "hdfc_regalia",
      "eligible": true,
      "confidence": 0.95
    }
  ]
}`
  },
  {
    method: "GET",
    path: "/v1/applications/track",
    description: "Track application status and timeline",
    responseTime: "~80ms",
    sampleRequest: `GET /v1/applications/track?application_id=app_123456789`,
    sampleResponse: `{
  "status": "approved",
  "current_stage": "card_dispatch",
  "estimated_delivery": "2025-01-25"
}`
  },
  {
    method: "POST",
    path: "/v1/webhooks/subscribe",
    description: "Subscribe to webhook events",
    responseTime: "~50ms",
    sampleRequest: `{
  "url": "https://your-app.com/webhooks",
  "events": ["application.approved", "commission.earned"]
}`,
    sampleResponse: `{
  "webhook_id": "wh_abc123",
  "status": "active",
  "secret": "whsec_xyz789..."
}`
  },
  {
    method: "POST",
    path: "/v1/cards/compare",
    description: "Compare multiple cards side-by-side",
    responseTime: "~120ms",
    sampleRequest: `{
  "card_ids": ["hdfc_regalia", "axis_magnus", "sbi_cashback"],
  "user_spending": {"monthly_spend": 50000}
}`,
    sampleResponse: `{
  "comparison": [
    {
      "card_id": "hdfc_regalia",
      "annual_savings": 24500,
      "rank": 1
    }
  ]
}`
  }
];

const EndpointRow = ({ endpoint }: { endpoint: APIEndpoint }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left"
      >
        <div className="flex-shrink-0">
          {expanded ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        
        <Badge
          variant="outline"
          className={cn(
            "font-mono text-xs shrink-0",
            endpoint.method === "POST" && "border-primary text-primary",
            endpoint.method === "GET" && "border-accent text-accent"
          )}
        >
          {endpoint.method}
        </Badge>

        <code className="font-mono text-sm flex-1">{endpoint.path}</code>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Zap className="h-3 w-3" />
          {endpoint.responseTime}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border p-6 bg-muted/20 space-y-6">
          <p className="text-sm text-muted-foreground">{endpoint.description}</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Sample Request</h4>
              <CodeBlock code={endpoint.sampleRequest} language="json" />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Sample Response</h4>
              <CodeBlock code={endpoint.sampleResponse} language="json" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const APIQuickReference = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            API Reference
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Quick API <span className="text-primary">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore all available endpoints. Click any row to see sample requests and responses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3">
          {endpoints.map((endpoint, index) => (
            <EndpointRow key={index} endpoint={endpoint} />
          ))}
        </div>

        {/* Authentication Note */}
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold mb-2">🔑 Authentication</h3>
          <p className="text-sm text-muted-foreground mb-3">
            All API requests require authentication using Bearer tokens:
          </p>
          <CodeBlock
            code={`Authorization: Bearer bk_live_abc123xyz456def789ghi012jkl345mno678

# Test environment keys start with bk_test_
# Production keys start with bk_live_`}
            language="http"
          />
        </div>
      </div>
    </section>
  );
};
