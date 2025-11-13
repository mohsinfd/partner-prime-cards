import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Saved ₹40L in dev costs, live in 6 weeks",
    name: "Rahul Sharma",
    role: "VP Engineering",
    company: "FinTech Ventures",
    rating: 5,
  },
  {
    quote: "Revenue up 3x, conversion improved 45%",
    name: "Priya Mehta",
    role: "Head of Product",
    company: "Money Plus",
    rating: 5,
  },
  {
    quote: "Best decision. Zero maintenance headaches",
    name: "Arjun Patel",
    role: "CTO",
    company: "Wealth Partners",
    rating: 5,
  },
];

export const TestimonialsCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Partner Success
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 border-border/20 hover:border-primary/50 transition-all group">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-medium mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
