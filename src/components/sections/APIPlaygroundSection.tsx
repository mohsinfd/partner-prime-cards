import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Play, Copy, Check } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

const endpoints = {
  cards: {
    name: "Cards Recommendation",
    params: { monthly_spend: "45000", annual_income: "800000", age: "28" },
    response: {
      status: "success",
      latency_ms: 142,
      recommendations: [
        {
          card_id: "hdfc_regalia",
          name: "HDFC Regalia",
          match_score: 94,
          estimated_annual_savings: "₹48,000",
          key_benefits: ["4 reward points per ₹150", "Lounge access", "Fuel surcharge waiver"]
        }
      ]
    }
  },
  loans: {
    name: "Loan Matching",
    params: { loan_amount: "500000", tenure_months: "24", employment_type: "salaried" },
    response: {
      status: "success",
      latency_ms: 156,
      matched_loans: [
        {
          loan_id: "hdfc_personal_loan",
          bank: "HDFC Bank",
          interest_rate: "10.5%",
          monthly_emi: "₹23,073",
          approval_probability: "high"
        }
      ]
    }
  },
  eligibility: {
    name: "Eligibility Check",
    params: { product_id: "axis_magnus", annual_income: "1500000", credit_score: "780" },
    response: {
      status: "success",
      latency_ms: 89,
      eligible: true,
      confidence_score: 0.92,
      criteria_met: ["Income threshold", "Credit score", "Age requirement"]
    }
  }
};

export const APIPlaygroundSection = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<keyof typeof endpoints>("cards");
  const [latency, setLatency] = useState(142);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    const endpoint = endpoints[selectedEndpoint];
    setLatency(endpoint.response.latency_ms);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const endpoint = endpoints[selectedEndpoint];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            API Playground
          </h2>
          <p className="text-muted-foreground">Test live endpoints</p>
        </div>

        <Card className="p-6 border-border/20">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Request */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Request</h3>
              <div className="space-y-4">
                <Select value={selectedEndpoint} onValueChange={(v) => setSelectedEndpoint(v as keyof typeof endpoints)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(endpoints).map(([key, value]) => (
                      <SelectItem key={key} value={key}>{value.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="space-y-2">
                  {Object.entries(endpoint.params).map(([key, value]) => (
                    <div key={key}>
                      <label className="text-xs text-muted-foreground mb-1 block">{key}</label>
                      <Input value={value} className="font-mono text-sm" />
                    </div>
                  ))}
                </div>

                <Button onClick={handleRun} className="w-full">
                  <Play className="mr-2 h-4 w-4" /> Run Request
                </Button>
              </div>
            </div>

            {/* Response */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold">Response</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    Responded in <span className="text-primary font-mono">{latency}ms</span>
                  </span>
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <CodeBlock
                code={JSON.stringify(endpoint.response, null, 2)}
                language="json"
                showLineNumbers={false}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
