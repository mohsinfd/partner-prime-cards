import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({ code, language = "javascript", showLineNumbers = false, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={cn("relative group", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[hsl(var(--code-bg))] border-b border-border/10 rounded-t-lg">
        <span className="text-xs font-medium text-[hsl(var(--code-comment))] uppercase tracking-wide">
          {language}
        </span>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="h-7 text-xs text-[hsl(var(--code-text))] hover:text-primary hover:bg-primary/10"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="relative overflow-x-auto">
        <pre className="p-4 bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] text-sm rounded-b-lg overflow-x-auto">
          <code className="block">
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-[hsl(var(--code-comment))] opacity-50 w-8">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell">{line || "\n"}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
