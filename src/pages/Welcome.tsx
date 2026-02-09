import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useState } from "react";
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
  Target,
  Play,
  Activity,
  Zap,
  Sparkles
} from "lucide-react";

export default function Welcome() {
  const [activeStep, setActiveStep] = useState(0);

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

  const parcoursSteps = [
    { icon: Target, title: "Définition", subtitle: "Contextes et compétences", position: "top" },
    { icon: Play, title: "Simulateur", subtitle: "Entraînement autonome", position: "right" },
    { icon: Activity, title: "Analyse", subtitle: "Ajustement et suivi", position: "bottom" },
    { icon: Zap, title: "Progression", subtitle: "Upskilling mesurable", position: "left" },
  ];

  const getOrbitalPosition = (index: number) => {
    const positions = [
      { top: "0%", left: "50%", transform: "translate(-50%, -50%)" },
      { top: "50%", right: "-5%", transform: "translate(0, -50%)" },
      { bottom: "-5%", left: "50%", transform: "translate(-50%, 50%)" },
      { top: "50%", left: "-5%", transform: "translate(0, -50%)" },
    ];
    return positions[index];
  };

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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Logo K + kymeria text */}
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center items-center gap-3 mb-8 md:mb-10">
              <img 
                src="/kymeria-k-icon.png" 
                alt="K" 
                className="h-10 md:h-12 w-auto rounded-xl"
              />
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                kymer<span className="text-accent">IA</span>
              </span>
            </div>
          </AnimatedSection>

          {/* Hero Text */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center mb-10 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Bienvenue sur KymerIA
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-medium">
                S'entraîner. Ajuster. Progresser.
              </p>
            </div>
          </AnimatedSection>

          {/* Two Cards - Asymmetric Layout 70/30 */}
          <div className="grid md:grid-cols-10 gap-4 lg:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto">
            
            {/* Card Découvrir - PRIMARY (7/10 = 70%) */}
            <AnimatedSection animation="fade-up" delay={150} className="md:col-span-7">
              <div className="welcome-card-primary h-full p-6 lg:p-8">
                {/* Decorative background icon */}
                <div className="absolute top-4 right-4 opacity-[0.04]">
                  <MessageSquare className="w-32 h-32 lg:w-48 lg:h-48 text-white" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Focus badge */}
                  <div className="mb-4">
                    <div className="welcome-focus-badge">
                      <Sparkles className="w-3 h-3" />
                      <span>Focus principal</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                    Découvrir
                  </h2>
                  
                  <p className="text-base lg:text-lg text-white/60 mb-8 max-w-md leading-relaxed">
                    La vision, le produit, l'équipe.<br/>
                    Entrez dans la nouvelle dimension de l'entraînement.
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      size="lg"
                      className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold px-8 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-[1.02] group"
                    >
                      <Link to="/home" className="flex items-center gap-3">
                        Découvrir KymerIA
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card Tester - SECONDARY (3/10 = 30%) */}
            <AnimatedSection animation="fade-up" delay={250} className="md:col-span-3">
              <div className="welcome-card-secondary h-full p-5 lg:p-6 flex flex-col">
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl font-bold text-white mb-1">
                    Tester
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-white/40 font-medium mb-4">
                    Moments clés à maîtriser
                  </p>
                  
                  {/* Options - Compact list */}
                  <div className="space-y-2 mb-5">
                    {momentsCles.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-white/[0.03] hover:bg-accent/10 transition-colors"
                      >
                        <item.icon className="h-3.5 w-3.5 text-accent/70 flex-shrink-0" />
                        <span className="text-xs font-medium text-white/50">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild 
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/20 font-medium transition-all group"
                >
                  <a 
                    href="https://kymeria.ch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    Choisir & tester
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Section Parcours Orbital */}
          <AnimatedSection animation="fade-up" delay={350}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif italic">
                Un parcours immersif
              </h2>
              <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
                KymerIA est un cycle d'évolution constant, conçu pour ancrer durablement votre posture relationnelle par une pratique intensive et sécurisée.
              </p>
            </div>
          </AnimatedSection>

          {/* Orbital Layout - Desktop */}
          <AnimatedSection animation="scale-in" delay={450}>
            <div className="hidden lg:block relative w-[400px] h-[400px] mx-auto mb-12">
              {/* Orbital circle SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="hsl(250 70% 55% / 0.15)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="animate-spin-slow"
                />
              </svg>
              
              {/* Center K Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="welcome-orbital-center animate-breathing-k">
                  <img 
                    src="/kymeria-k-icon.png" 
                    alt="K" 
                    className="w-14 h-14 rounded-xl"
                  />
                </div>
              </div>
              
              {/* Orbital Points */}
              {parcoursSteps.map((step, index) => {
                const pos = getOrbitalPosition(index);
                return (
                  <div
                    key={index}
                    className={`absolute welcome-orbital-point ${activeStep === index ? 'active' : ''}`}
                    style={pos}
                    onClick={() => setActiveStep(index)}
                  >
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                );
              })}
              
              {/* Labels for each point */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm font-semibold text-white">{parcoursSteps[0].title}</p>
                <p className="text-xs text-white/40">{parcoursSteps[0].subtitle}</p>
              </div>
              <div className="absolute top-1/2 -right-36 -translate-y-1/2 text-left">
                <p className="text-sm font-semibold text-white">{parcoursSteps[1].title}</p>
                <p className="text-xs text-white/40">{parcoursSteps[1].subtitle}</p>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm font-semibold text-white">{parcoursSteps[2].title}</p>
                <p className="text-xs text-white/40">{parcoursSteps[2].subtitle}</p>
              </div>
              <div className="absolute top-1/2 -left-32 -translate-y-1/2 text-right">
                <p className="text-sm font-semibold text-white">{parcoursSteps[3].title}</p>
                <p className="text-xs text-white/40">{parcoursSteps[3].subtitle}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Orbital Layout - Mobile/Tablet Grid */}
          <AnimatedSection animation="fade-up" delay={450}>
            <div className="lg:hidden grid grid-cols-2 gap-3 max-w-sm mx-auto mb-12">
              {parcoursSteps.map((step, index) => (
                <div
                  key={index}
                  className="welcome-orbital-point flex-col gap-2 py-4 px-3 h-auto w-auto"
                  onClick={() => setActiveStep(index)}
                >
                  <step.icon className="w-5 h-5 text-accent" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="text-xs text-white/40">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection animation="scale-in" delay={550}>
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
