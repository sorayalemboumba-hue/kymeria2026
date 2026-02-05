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

interface FloatingShapesProps {
  variant?: "hero" | "section" | "minimal";
  className?: string;
}

export function FloatingShapes({ variant = "hero", className }: FloatingShapesProps) {
  if (variant === "hero") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        {/* Large rotating circle with border */}
        <div 
          className="absolute top-20 -right-32 w-80 h-80 rounded-full border-2 border-accent/20 animate-spin-slow"
        />
        
        {/* Smaller filled circle with glow */}
        <div 
          className="absolute -bottom-10 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-transparent animate-float glow-subtle"
        />
        
        {/* Medium rotating circle */}
        <div 
          className="absolute top-1/2 -left-20 w-48 h-48 rounded-full border border-primary-foreground/10 animate-spin-slow-reverse"
        />

        {/* Decorative lines */}
        <svg className="absolute top-1/3 right-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-accent" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-accent" />
        </svg>

        {/* Small accent dots */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-accent/40 animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-primary-foreground/30 animate-pulse-soft" style={{ animationDelay: "-1.5s" }} />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        {/* Rotating ring */}
        <div 
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-accent/15 animate-spin-slow"
        />
        
        {/* Floating circle */}
        <div 
          className="absolute -bottom-8 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent/10 to-transparent animate-float"
        />
        
        {/* Decorative cross */}
        <svg className="absolute bottom-1/4 right-20 w-16 h-16 opacity-15" viewBox="0 0 50 50">
          <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full border border-accent/10 animate-spin-slow"
      />
      <div 
        className="absolute -bottom-5 left-1/4 w-16 h-16 rounded-full bg-accent/5 animate-float"
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
