import { useState } from "react";
import { ChevronRight, ChevronDown, Copy, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface JSONViewerProps {
  data: any;
  className?: string;
  defaultExpanded?: boolean;
}

export const JSONViewer = ({ data, className, defaultExpanded = true }: JSONViewerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[hsl(var(--code-bg))] border-b border-border/10 rounded-t-lg">
        <span className="text-xs font-medium text-[hsl(var(--code-comment))] uppercase tracking-wide">
          JSON Response
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

      {/* JSON Content */}
      <div className="p-4 bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] text-sm rounded-b-lg overflow-x-auto">
        <JSONNode data={data} level={0} defaultExpanded={defaultExpanded} />
      </div>
    </div>
  );
};

interface JSONNodeProps {
  data: any;
  level: number;
  defaultExpanded: boolean;
  propertyKey?: string;
}

const JSONNode = ({ data, level, defaultExpanded, propertyKey }: JSONNodeProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded || level < 2);
  const indent = level * 16;

  if (data === null) {
    return (
      <div style={{ paddingLeft: indent }}>
        {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
        {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
        <span className="text-[hsl(var(--code-keyword))]">null</span>
      </div>
    );
  }

  if (typeof data === "string") {
    return (
      <div style={{ paddingLeft: indent }}>
        {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
        {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
        <span className="text-[hsl(var(--code-string))]">"{data}"</span>
      </div>
    );
  }

  if (typeof data === "number") {
    return (
      <div style={{ paddingLeft: indent }}>
        {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
        {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
        <span className="text-[hsl(var(--code-number))]">{data}</span>
      </div>
    );
  }

  if (typeof data === "boolean") {
    return (
      <div style={{ paddingLeft: indent }}>
        {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
        {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
        <span className="text-[hsl(var(--code-keyword))]">{data.toString()}</span>
      </div>
    );
  }

  if (Array.isArray(data)) {
    return (
      <div>
        <div
          style={{ paddingLeft: indent }}
          className="cursor-pointer hover:bg-primary/5 -ml-6 pl-6 pr-2 rounded flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronDown className="h-3 w-3 mr-1 text-[hsl(var(--code-comment))]" />
          ) : (
            <ChevronRight className="h-3 w-3 mr-1 text-[hsl(var(--code-comment))]" />
          )}
          {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
          {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
          <span className="text-[hsl(var(--code-operator))]">[</span>
          {!expanded && (
            <span className="text-[hsl(var(--code-comment))] ml-1">
              {data.length} {data.length === 1 ? "item" : "items"}
            </span>
          )}
          {!expanded && <span className="text-[hsl(var(--code-operator))]">]</span>}
        </div>
        {expanded && (
          <>
            {data.map((item, index) => (
              <JSONNode key={index} data={item} level={level + 1} defaultExpanded={defaultExpanded} />
            ))}
            <div style={{ paddingLeft: indent }}>
              <span className="text-[hsl(var(--code-operator))]">]</span>
            </div>
          </>
        )}
      </div>
    );
  }

  if (typeof data === "object") {
    const keys = Object.keys(data);
    return (
      <div>
        <div
          style={{ paddingLeft: indent }}
          className="cursor-pointer hover:bg-primary/5 -ml-6 pl-6 pr-2 rounded flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronDown className="h-3 w-3 mr-1 text-[hsl(var(--code-comment))]" />
          ) : (
            <ChevronRight className="h-3 w-3 mr-1 text-[hsl(var(--code-comment))]" />
          )}
          {propertyKey && <span className="text-[hsl(var(--code-string))]">"{propertyKey}"</span>}
          {propertyKey && <span className="text-[hsl(var(--code-operator))]">: </span>}
          <span className="text-[hsl(var(--code-operator))]">{"{"}</span>
          {!expanded && (
            <span className="text-[hsl(var(--code-comment))] ml-1">
              {keys.length} {keys.length === 1 ? "property" : "properties"}
            </span>
          )}
          {!expanded && <span className="text-[hsl(var(--code-operator))]}">{"}"}</span>}
        </div>
        {expanded && (
          <>
            {keys.map((key, index) => (
              <JSONNode
                key={key}
                data={data[key]}
                propertyKey={key}
                level={level + 1}
                defaultExpanded={defaultExpanded}
              />
            ))}
            <div style={{ paddingLeft: indent }}>
              <span className="text-[hsl(var(--code-operator))]}">{"}"}</span>
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
};
