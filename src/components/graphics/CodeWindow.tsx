import { cn } from "@/lib/utils";

interface CodeWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const CodeWindow = ({ children, title = "Terminal", className }: CodeWindowProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden shadow-2xl border border-border/20", className)}>
      {/* Window Chrome */}
      <div className="bg-[hsl(var(--code-bg))] px-4 py-3 flex items-center gap-2 border-b border-border/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-[hsl(var(--code-comment))] ml-2">{title}</span>
      </div>
      
      {/* Window Content */}
      <div className="bg-[hsl(var(--code-bg))]">
        {children}
      </div>
    </div>
  );
};
