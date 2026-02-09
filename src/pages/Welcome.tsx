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
  ExternalLink
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
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Logo */}
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center mb-8">
              <img 
                src="/kymeria-logo-light.png" 
                alt="KymerIA" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
          </AnimatedSection>

          {/* Hero Text */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Bienvenue sur KymerIA
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium">
                S'entraîner. Ajuster. Progresser.
              </p>
            </div>
          </AnimatedSection>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Card Découvrir */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="organic-card organic-card-3d h-full bg-card/95 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      Découvrir
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      La vision, le produit, l'équipe.
                    </p>
                  </div>
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-primary to-primary/85 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
                  >
                    <Link to="/home" className="flex items-center justify-center gap-2">
                      Découvrir KymerIA
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card Tester */}
            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="organic-card organic-card-3d h-full bg-card/95 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      Tester
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Quel moment clé voulez-vous mieux maîtriser ?
                    </p>
                    
                    {/* Options */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {momentsCles.map((item, index) => (
                        <div 
                          key={index}
                          className="organic-badge flex items-center gap-2 py-3 px-4 text-sm"
                        >
                          <item.icon className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-accent to-accent/85 text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-[1.02] group"
                  >
                    <a 
                      href="https://kymeria.ch/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Choisir un moment clé & tester
                      <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Trust Badges */}
          <AnimatedSection animation="scale-in" delay={400}>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground"
                >
                  <badge.icon className="h-4 w-4 text-primary-foreground/80" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} KymerIA · Tous droits réservés
        </p>
      </footer>
    </div>
  );
}
