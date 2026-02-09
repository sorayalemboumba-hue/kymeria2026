import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingShapes } from "@/components/ui/decorative-shapes";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  ArrowRight, 
  Eye, 
  MessageSquare, 
  AlertTriangle, 
  Users,
  Shield,
  Lock,
  Settings,
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Welcome() {
  const momentsCles = [
    { icon: MessageSquare, label: "Entretien délicat" },
    { icon: AlertTriangle, label: "Annoncer une décision" },
    { icon: Users, label: "Gérer une tension" },
    { icon: Eye, label: "Convaincre / négocier" },
  ];

  const badges = [
    { icon: Shield, label: "Hébergement suisse" },
    { icon: Lock, label: "Sécurité & gouvernance" },
    { icon: Settings, label: "Déploiement sur mesure" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-organic)" }}
      />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid-light opacity-40" />
      
      {/* Floating geometric shapes */}
      <FloatingShapes variant="hero" />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Logo */}
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center mb-6 md:mb-8">
              <img 
                src="/kymeria-logo-light.png" 
                alt="KymerIA" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          </AnimatedSection>

          {/* Hero Text - More compact */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center mb-8 md:mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
                Bienvenue sur KymerIA
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-medium">
                S'entraîner. Ajuster. Progresser.
              </p>
            </div>
          </AnimatedSection>

          {/* Two Cards - Asymmetric Layout 65/35 */}
          <div className="grid md:grid-cols-5 gap-4 lg:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto">
            {/* Card Découvrir - PRIMARY (3/5 = 60%) */}
            <AnimatedSection animation="fade-up" delay={150} className="md:col-span-3">
              <Card className="gateway-card-primary h-full bg-card/95 backdrop-blur-sm border-0 overflow-hidden group relative">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-accent via-accent/50 to-primary/30 animate-pulse-glow" />
                <CardContent className="relative bg-card rounded-3xl p-6 lg:p-8 flex flex-col h-full m-[2px]">
                  <div className="flex-1">
                    {/* Icon badge */}
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Principal</span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                      Découvrir
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                      La vision, le produit, l'équipe.
                    </p>
                  </div>
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-accent to-accent/85 text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-[1.02] group btn-pulse"
                  >
                    <Link to="/home" className="flex items-center justify-center gap-2">
                      Découvrir KymerIA
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card Tester - SECONDARY (2/5 = 40%) */}
            <AnimatedSection animation="fade-up" delay={250} className="md:col-span-2">
              <Card className="organic-card h-full bg-card/90 backdrop-blur-sm border border-border/30 overflow-hidden">
                <CardContent className="p-5 lg:p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-lg lg:text-xl font-bold mb-2 text-foreground">
                      Tester
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Quel moment clé ?
                    </p>
                    
                    {/* Options - Very compact with xs text */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {momentsCles.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-1.5 py-1.5 px-2 rounded-lg bg-muted/50 hover:bg-accent/10 transition-colors cursor-default"
                        >
                          <item.icon className="h-3 w-3 text-accent flex-shrink-0" />
                          <span className="text-xs font-medium text-muted-foreground truncate">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    asChild 
                    size="sm"
                    variant="outline"
                    className="w-full rounded-full font-medium hover:bg-accent/5 transition-all group"
                  >
                    <a 
                      href="https://kymeria.ch/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm"
                    >
                      Tester
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Trust Badges - Micro text */}
          <AnimatedSection animation="scale-in" delay={350}>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-primary-foreground"
                >
                  <badge.icon className="h-3 w-3 text-primary-foreground/70" />
                  <span className="text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 py-4 text-center">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} KymerIA · Tous droits réservés
        </p>
      </footer>
    </div>
  );
}
