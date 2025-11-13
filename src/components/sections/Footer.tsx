import { SecurityBadgesSection } from "./SecurityBadgesSection";

export const Footer = () => {
  return (
    <>
      <SecurityBadgesSection />
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <img src="/bankkaro-logo.png" alt="BankKaro" className="h-8 w-auto" />
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="/docs" className="hover:text-foreground transition-colors">API Docs</a>
              <span>·</span>
              <a href="/status" className="hover:text-foreground transition-colors">Status</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <span>·</span>
              <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} BankKaro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
