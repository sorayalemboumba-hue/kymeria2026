import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  ArrowRight, 
  ExternalLink,
  Shield,
  Lock,
  Settings
} from "lucide-react";

export default function Welcome() {
  const momentsCles = [
    "Entretien délicat",
    "Annoncer une décision",
    "Gérer une tension",
    "Convaincre / négocier",
  ];

  const badges = [
    { icon: Shield, label: "Hébergement suisse" },
    { icon: Lock, label: "Sécurité & gouvernance" },
    { icon: Settings, label: "Déploiement sur mesure" },
  ];

  return (
    <div className="min-h-screen welcome-dark relative overflow-hidden flex flex-col" style={{ background: "hsl(222 47% 6%)" }}>
      {/* Ambient gradient mesh */}
      <div className="absolute inset-0 welcome-gradient-mesh" />
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-texture pointer-events-none" />
      
      {/* Subtle ambient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-3xl mx-auto">
          
          {/* Logo K + kymeria text */}
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center items-center gap-3 mb-10 md:mb-12">
              <img 
                src="/kymeria-k-icon-light.png" 
                alt="K" 
                className="h-12 md:h-14 w-auto rounded-xl shadow-lg"
              />
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                kymer<span className="text-accent">IA</span>
              </span>
            </div>
          </AnimatedSection>

          {/* Hero Text */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center mb-16 md:mb-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Bienvenue sur KymerIA
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-medium">
                S'entraîner. Ajuster. Progresser.
              </p>
            </div>
          </AnimatedSection>

          {/* Section Découvrir - CENTERED, NO CARD */}
          <AnimatedSection animation="fade-up" delay={200}>
            <section className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Découvrir
              </h2>
              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
                La vision, le produit, l'équipe.<br/>
                Entrez dans la nouvelle dimension de l'entraînement.
              </p>
              <Button 
                asChild 
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-base shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-[1.02] group"
              >
                <Link to="/home" className="flex items-center gap-3">
                  Découvrir KymerIA
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </section>
          </AnimatedSection>

          {/* Separator Line */}
          <AnimatedSection animation="fade-up" delay={250}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-16 md:mb-20" />
          </AnimatedSection>

          {/* Section Tester - CENTERED, SMALLER */}
          <AnimatedSection animation="fade-up" delay={300}>
            <section className="text-center mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Tester
              </h3>
              <p className="text-xs uppercase tracking-wider text-white/40 font-medium mb-6">
                Moments clés à maîtriser
              </p>
              
              {/* 4 Moments in horizontal line with separators */}
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 max-w-xl mx-auto">
                {momentsCles.map((item, index) => (
                  <span key={index} className="flex items-center gap-3 text-sm text-white/50">
                    <span>{item}</span>
                    {index < momentsCles.length - 1 && (
                      <span className="text-white/20">·</span>
                    )}
                  </span>
                ))}
              </div>
              
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/50 font-semibold px-8 py-5 transition-all group"
              >
                <a 
                  href="https://kymeria.ch/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  Choisir et tester
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </section>
          </AnimatedSection>

          {/* Separator Line */}
          <AnimatedSection animation="fade-up" delay={350}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-16 md:mb-20" />
          </AnimatedSection>

          {/* Section Parcours - TEXT ONLY, NO CARDS */}
          <AnimatedSection animation="fade-up" delay={400}>
            <section className="text-center mb-16 md:mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif italic">
                Un parcours immersif
              </h2>
              <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                KymerIA est un cycle d'évolution constant, conçu pour ancrer durablement votre posture relationnelle par une pratique intensive et sécurisée.
              </p>
            </section>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection animation="scale-in" delay={450}>
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((badge, index) => (
                <div key={index} className="welcome-badge">
                  <badge.icon className="h-3.5 w-3.5 text-white/50" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} KymerIA · Tous droits réservés
        </p>
      </footer>
    </div>
  );
}
