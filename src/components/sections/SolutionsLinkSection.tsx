import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SolutionsLinkSection = () => {
  return (
    <div className="py-8 text-center bg-background">
      <Link 
        to="/solutions"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all group"
      >
        View all solutions
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
