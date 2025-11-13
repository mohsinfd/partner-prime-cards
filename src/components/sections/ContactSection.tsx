import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const partnerTypes = [
  "Finance app/publisher",
  "Bank/NBFC/fintech",
  "Employer/HR",
  "Broker/merchant/service business",
  "Creator/community",
  "Other",
];

const launchOptions = ["Cards", "Loans", "Both", "Not sure yet"];
const integrationOptions = ["API", "Whitelabel", "Not sure"];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    partnerType: [] as string[],
    launch: [] as string[],
    integration: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you!",
      description: "Our team will get in touch to share examples and next steps.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      partnerType: [],
      launch: [],
      integration: "",
    });

    setIsSubmitting(false);
  };

  const toggleArrayField = (field: "partnerType" | "launch", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Talk to us
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your users, and we'll show you the journeys we can build together.
            </p>
          </div>

          <Card className="p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Partner type (select all that apply)</Label>
                <div className="flex flex-wrap gap-2">
                  {partnerTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleArrayField("partnerType", type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.partnerType.includes(type)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>What you want to launch</Label>
                <div className="flex flex-wrap gap-2">
                  {launchOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleArrayField("launch", option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.launch.includes(option)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preferred integration</Label>
                <div className="flex flex-wrap gap-2">
                  {integrationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, integration: option })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.integration === option
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Schedule a conversation"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
