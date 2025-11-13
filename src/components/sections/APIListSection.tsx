import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Building2, 
  Shield, 
  Webhook, 
  Users, 
  FileText,
  ChevronDown,
  ChevronRight,
  Clock,
  CheckCircle2
} from "lucide-react";

interface APIEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  responseTime: string;
}

interface APICategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  endpoints: APIEndpoint[];
  color: string;
}

const apiCategories: APICategory[] = [
  {
    id: "cards",
    name: "Cards APIs",
    icon: CreditCard,
    description: "Comprehensive credit card recommendation and comparison endpoints",
    color: "from-primary/20 to-accent/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/cards/recommendations",
        description: "Get personalized card recommendations based on spending profile",
        responseTime: "~150ms"
      },
      {
        method: "POST",
        path: "/v1/cards/compare",
        description: "Compare multiple credit cards side-by-side",
        responseTime: "~120ms"
      },
      {
        method: "GET",
        path: "/v1/cards/details/:card_id",
        description: "Get detailed information about a specific card",
        responseTime: "~80ms"
      },
      {
        method: "GET",
        path: "/v1/cards/benefits/:card_id",
        description: "Get all benefits and features of a card",
        responseTime: "~90ms"
      },
      {
        method: "POST",
        path: "/v1/cards/calculate-savings",
        description: "Calculate potential annual savings for a user",
        responseTime: "~110ms"
      }
    ]
  },
  {
    id: "loans",
    name: "Loans APIs",
    icon: Building2,
    description: "Personal, business, and home loan matching and tracking",
    color: "from-accent/20 to-primary/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/loans/match",
        description: "Find matching loan products based on requirements",
        responseTime: "~180ms"
      },
      {
        method: "POST",
        path: "/v1/loans/eligibility",
        description: "Check loan eligibility and approval probability",
        responseTime: "~140ms"
      },
      {
        method: "GET",
        path: "/v1/loans/details/:loan_id",
        description: "Get detailed loan product information",
        responseTime: "~85ms"
      },
      {
        method: "POST",
        path: "/v1/loans/calculate-emi",
        description: "Calculate EMI for any loan amount and tenure",
        responseTime: "~60ms"
      },
      {
        method: "GET",
        path: "/v1/loans/compare",
        description: "Compare loan offers across lenders",
        responseTime: "~130ms"
      }
    ]
  },
  {
    id: "eligibility",
    name: "Eligibility APIs",
    icon: Shield,
    description: "Real-time eligibility checks and pre-qualification",
    color: "from-primary/20 to-accent/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/eligibility/check",
        description: "Check eligibility for multiple products at once",
        responseTime: "~100ms"
      },
      {
        method: "POST",
        path: "/v1/eligibility/pre-qualify",
        description: "Pre-qualify users without hard credit inquiry",
        responseTime: "~120ms"
      },
      {
        method: "POST",
        path: "/v1/eligibility/factors",
        description: "Get eligibility factors and improvement tips",
        responseTime: "~95ms"
      },
      {
        method: "GET",
        path: "/v1/eligibility/score/:user_id",
        description: "Get user's eligibility score for different products",
        responseTime: "~75ms"
      }
    ]
  },
  {
    id: "applications",
    name: "Application APIs",
    icon: FileText,
    description: "Application submission, tracking, and status management",
    color: "from-accent/20 to-primary/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/applications/submit",
        description: "Submit a new card or loan application",
        responseTime: "~200ms"
      },
      {
        method: "GET",
        path: "/v1/applications/track/:application_id",
        description: "Track real-time application status",
        responseTime: "~80ms"
      },
      {
        method: "GET",
        path: "/v1/applications/history/:user_id",
        description: "Get complete application history for a user",
        responseTime: "~110ms"
      },
      {
        method: "PUT",
        path: "/v1/applications/update/:application_id",
        description: "Update application details or documents",
        responseTime: "~150ms"
      },
      {
        method: "GET",
        path: "/v1/applications/documents/:application_id",
        description: "Get required documents for an application",
        responseTime: "~70ms"
      }
    ]
  },
  {
    id: "webhooks",
    name: "Webhooks & Events",
    icon: Webhook,
    description: "Real-time event notifications and webhook management",
    color: "from-primary/20 to-accent/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/webhooks/subscribe",
        description: "Subscribe to webhook events",
        responseTime: "~50ms"
      },
      {
        method: "GET",
        path: "/v1/webhooks/list",
        description: "List all active webhook subscriptions",
        responseTime: "~60ms"
      },
      {
        method: "DELETE",
        path: "/v1/webhooks/unsubscribe/:webhook_id",
        description: "Unsubscribe from webhook events",
        responseTime: "~55ms"
      },
      {
        method: "POST",
        path: "/v1/webhooks/test",
        description: "Test webhook endpoint with sample payload",
        responseTime: "~80ms"
      },
      {
        method: "GET",
        path: "/v1/webhooks/events/:event_id",
        description: "Get details of a specific event",
        responseTime: "~65ms"
      }
    ]
  },
  {
    id: "users",
    name: "User Management APIs",
    icon: Users,
    description: "User profiles, preferences, and data management",
    color: "from-accent/20 to-primary/20",
    endpoints: [
      {
        method: "POST",
        path: "/v1/users/create",
        description: "Create a new user profile",
        responseTime: "~120ms"
      },
      {
        method: "GET",
        path: "/v1/users/profile/:user_id",
        description: "Get user profile and preferences",
        responseTime: "~70ms"
      },
      {
        method: "PUT",
        path: "/v1/users/update/:user_id",
        description: "Update user profile information",
        responseTime: "~100ms"
      },
      {
        method: "POST",
        path: "/v1/users/preferences/:user_id",
        description: "Update user preferences and settings",
        responseTime: "~85ms"
      },
      {
        method: "GET",
        path: "/v1/users/recommendations-history/:user_id",
        description: "Get past recommendations for a user",
        responseTime: "~95ms"
      }
    ]
  }
];

const methodColors = {
  GET: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  POST: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  PUT: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  DELETE: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
};

export const APIListSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("cards");

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">API Reference</h2>
              <p className="text-muted-foreground">
                RESTful JSON API • OAuth 2.0 • 30+ Endpoints • &lt;200ms avg
              </p>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary">v1.0</Badge>
              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                Production Ready
              </Badge>
            </div>
          </div>
        </div>

        {/* API Categories */}
        <div className="space-y-4">
          {apiCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <Card 
                key={category.id} 
                className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="hidden md:flex">
                      {category.endpoints.length} endpoints
                    </Badge>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Endpoints List */}
                {isExpanded && (
                  <div className="border-t border-border/50 bg-muted/20">
                    <div className="p-4 space-y-2">
                      {category.endpoints.map((endpoint, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded bg-background border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <Badge 
                              variant="outline" 
                              className={`${methodColors[endpoint.method]} font-mono text-xs px-2 min-w-[55px] justify-center`}
                            >
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono text-foreground">
                              {endpoint.path}
                            </code>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="hidden md:inline">{endpoint.responseTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Request API Access</h3>
                <p className="text-sm text-muted-foreground">
                  Full documentation, SDKs (JS, Python, PHP), sandbox environment, 24/7 support
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  Get API Keys
                </Button>
                <Button size="lg" variant="outline">
                  View Docs
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
