import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Settings, 
  LogIn, 
  ListChecks, 
  Users, 
  Mic, 
  MessageSquareText, 
  BarChart3,
  ArrowRight,
  ExternalLink,
  Shield,
  Lock,
  Eye
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Cadrer",
    microLine: "Critères, profils, règles.",
    tooltip: "Co-construction des critères d'évaluation, des profils, et des règles de visibilité (qui voit quoi).",
    icon: Settings
  },
  {
    number: 2,
    title: "Accéder",
    microLine: "Connexion simple.",
    tooltip: "Rôles et droits différenciés (utilisateur, manager, pilote, admin) selon votre organisation.",
    icon: LogIn
  },
  {
    number: 3,
    title: "Choisir",
    microLine: "Scénario prêt.",
    tooltip: "Choix du scénario selon le contexte, l'objectif et le niveau attendu.",
    icon: ListChecks
  },
  {
    number: 4,
    title: "Faire face",
    microLine: "Personas variés.",
    tooltip: "Large palette de profils (coopératif, hésitant, opposant, émotionnel, etc.) paramétrable.",
    icon: Users
  },
  {
    number: 5,
    title: "S'entraîner",
    microLine: "Voix haute, 2–3 min.",
    tooltip: "Une mise en situation courte, concrète, centrée sur la pratique et la posture.",
    icon: Mic
  },
  {
    number: 6,
    title: "Débriefer",
    microLine: "Feedback immédiat.",
    tooltip: "À la fin de l'échange : feedback, points forts, axes d'ajustement, et trace de la session.",
    icon: MessageSquareText
  },
  {
    number: 7,
    title: "Piloter",
    microLine: "Suivre, exporter.",
    tooltip: "Suivi dans le temps, exports d'évaluations, et lien possible vers vos catalogues internes de formation.",
    icon: BarChart3
  }
];

const badges = [
  { icon: Shield, label: "Hébergement suisse" },
  { icon: Lock, label: "Accès maîtrisés" },
  { icon: Eye, label: "Gouvernance claire" },
];

// Calculate position on orbit
function getOrbitPosition(index: number, total: number, radius: number) {
  // Start from top (-90°) and go clockwise
  const angle = ((index / total) * 360 - 90) * (Math.PI / 180);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return { x, y };
}

export function ParcoursEnPratique() {
  const [activeStep, setActiveStep] = useState(0);
  const orbitRadius = 140; // radius in pixels

  return (
    <div className="relative">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Et si une session de 3 minutes suffisait ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Un parcours simple, un cadre clair.
          </p>
        </div>
      </AnimatedSection>

      {/* Desktop: Orbital Layout */}
      <div className="hidden lg:block">
        <AnimatedSection animation="scale-in">
          <div className="flex flex-col items-center gap-8">
            {/* Orbit Container */}
            <div 
              className="relative"
              style={{ 
                width: orbitRadius * 2 + 120, 
                height: orbitRadius * 2 + 120 
              }}
            >
              {/* Orbit ring - animated dashed */}
              <svg 
                className="absolute inset-0 w-full h-full animate-spin-slow"
                style={{ animationDuration: '90s' }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r={orbitRadius}
                  fill="none"
                  stroke="hsl(var(--accent) / 0.15)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
              </svg>

              {/* Secondary orbit ring */}
              <svg 
                className="absolute inset-0 w-full h-full animate-spin-slow-reverse"
                style={{ animationDuration: '120s' }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r={orbitRadius - 25}
                  fill="none"
                  stroke="hsl(var(--primary) / 0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 12"
                />
              </svg>

              {/* Center Logo */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center shadow-lg"
              >
                <img 
                  src="/kymeria-logo-dark.svg" 
                  alt="K" 
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Orbital Points */}
              {steps.map((step, index) => {
                const pos = getOrbitPosition(index, steps.length, orbitRadius);
                const isActive = activeStep === index;
                
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`absolute transition-all duration-300 group ${
                      isActive ? 'z-20 scale-110' : 'z-10 hover:scale-105'
                    }`}
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Point with icon */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-accent text-white shadow-lg shadow-accent/40' 
                          : 'bg-card border border-border/50 text-muted-foreground hover:border-accent/30 hover:text-accent shadow-md'
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    
                    {/* Number badge */}
                    <span 
                      className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-white text-accent shadow' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Hover label */}
                    <span 
                      className={`absolute whitespace-nowrap text-xs font-medium transition-all duration-200 ${
                        isActive 
                          ? 'opacity-100 text-accent' 
                          : 'opacity-0 group-hover:opacity-70'
                      }`}
                      style={{
                        top: pos.y > 0 ? '100%' : 'auto',
                        bottom: pos.y <= 0 ? '100%' : 'auto',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: pos.y > 0 ? '8px' : 0,
                        marginBottom: pos.y <= 0 ? '8px' : 0,
                      }}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail Card */}
            <div className="w-full max-w-lg">
              <div 
                key={activeStep}
                className="organic-card p-6 text-center animate-fade-in"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-sm font-bold text-accent/60">
                    {String(steps[activeStep].number).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold">{steps[activeStep].title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {steps[activeStep].tooltip}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Tablet: Compact Grid */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {steps.slice(0, 4).map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`organic-card p-4 text-center transition-all ${
                activeStep === index 
                  ? 'ring-2 ring-accent/40 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center ${
                activeStep === index 
                  ? 'bg-accent/20' 
                  : 'bg-muted'
              }`}>
                <step.icon className={`h-5 w-5 ${
                  activeStep === index ? 'text-accent' : 'text-muted-foreground'
                }`} />
              </div>
              <span className="text-xs font-semibold">{step.title}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
          {steps.slice(4).map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index + 4)}
              className={`organic-card p-4 text-center transition-all ${
                activeStep === index + 4 
                  ? 'ring-2 ring-accent/40 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center ${
                activeStep === index + 4 
                  ? 'bg-accent/20' 
                  : 'bg-muted'
              }`}>
                <step.icon className={`h-5 w-5 ${
                  activeStep === index + 4 ? 'text-accent' : 'text-muted-foreground'
                }`} />
              </div>
              <span className="text-xs font-semibold">{step.title}</span>
            </button>
          ))}
        </div>
        {/* Detail */}
        <div className="organic-card p-5 text-center">
          <h3 className="text-base font-bold mb-2">{steps[activeStep].title}</h3>
          <p className="text-sm text-muted-foreground">{steps[activeStep].tooltip}</p>
        </div>
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible defaultValue="step-1" className="space-y-2">
          {steps.map((step) => (
            <AccordionItem 
              key={step.number} 
              value={`step-${step.number}`}
              className="organic-card border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-accent/60">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-bold">{step.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {step.microLine}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="pl-12 pt-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.tooltip}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Trust Badges */}
      <AnimatedSection animation="scale-in" delay={200}>
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="organic-badge flex items-center gap-1.5 px-4 py-2"
            >
              <badge.icon className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTAs */}
      <AnimatedSection animation="fade-up" delay={300}>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            asChild 
            size="default"
            className="rounded-full bg-gradient-to-r from-primary to-primary/85 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-6 group"
          >
            <a href="/contact" className="flex items-center gap-2">
              Voir une session type
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            asChild 
            size="default"
            variant="outline"
            className="rounded-full font-semibold hover:scale-105 transition-all px-6 group"
          >
            <a 
              href="https://kymeria.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tester un moment clé
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
