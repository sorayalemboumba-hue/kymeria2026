import { cn } from "@/lib/utils";

interface DecorativeBlobsProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export function DecorativeBlobs({ variant = "hero", className }: DecorativeBlobsProps) {
  if (variant === "hero") {
    return (
      <div className={cn("pointer-events-none", className)}>
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
            animationDelay: "0s"
          }} 
        />
        <div 
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-3xl animate-float"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary-foreground) / 0.08) 0%, transparent 70%)",
            animationDelay: "-3s"
          }} 
        />
        <div 
          className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full blur-3xl animate-float"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
            animationDelay: "-7s"
          }} 
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={cn("pointer-events-none", className)}>
        <div 
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl animate-float opacity-60"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
          }} 
        />
        <div 
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl animate-float opacity-50"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
            animationDelay: "-4s"
          }} 
        />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none", className)}>
      <div 
        className="absolute top-10 right-10 w-40 h-40 rounded-full blur-2xl animate-pulse-soft opacity-40"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
        }} 
      />
    </div>
  );
}

interface SectionCurveProps {
  fill?: string;
  className?: string;
  inverted?: boolean;
}

export function SectionCurve({ fill = "hsl(var(--background))", className, inverted = false }: SectionCurveProps) {
  return (
    <div className={cn("section-curve", className)}>
      <svg 
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none"
        style={{ transform: inverted ? "rotate(180deg)" : undefined }}
      >
        <path 
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" 
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function SectionCurveWave({ fill = "hsl(var(--background))", className }: SectionCurveProps) {
  return (
    <div className={cn("section-curve", className)} style={{ height: "100px" }}>
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" 
          fill={fill}
        />
      </svg>
    </div>
  );
}
