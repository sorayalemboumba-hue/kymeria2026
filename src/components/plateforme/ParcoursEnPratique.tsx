import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    microLine: "Critères, profils, règles d'usage et de partage.",
    tooltip: "Co-construction des critères d'évaluation, des profils, et des règles de visibilité (qui voit quoi).",
    icon: Settings
  },
  {
    number: 2,
    title: "Accéder",
    microLine: "Connexion simple, accès selon la séniorité.",
    tooltip: "Rôles et droits différenciés (utilisateur, manager, pilote, admin) selon votre organisation.",
    icon: LogIn
  },
  {
    number: 3,
    title: "Choisir",
    microLine: "Scénario prêt à l'emploi, en quelques secondes.",
    tooltip: "Choix du scénario selon le contexte, l'objectif et le niveau attendu.",
    icon: ListChecks
  },
  {
    number: 4,
    title: "Faire face",
    microLine: "Personas variés, attitudes et objections réalistes.",
    tooltip: "Large palette de profils (coopératif, hésitant, opposant, émotionnel, etc.) paramétrable.",
    icon: Users
  },
  {
    number: 5,
    title: "S'entraîner",
    microLine: "À voix haute, conversation 2–3 minutes.",
    tooltip: "Une mise en situation courte, concrète, centrée sur la pratique et la posture.",
    icon: Mic
  },
  {
    number: 6,
    title: "Débriefer",
    microLine: "Feedback immédiat + retranscription accessible.",
    tooltip: "À la fin de l'échange : feedback, points forts, axes d'ajustement, et trace de la session.",
    icon: MessageSquareText
  },
  {
    number: 7,
    title: "Piloter",
    microLine: "Recommencer, progresser, suivre, exporter, orienter.",
    tooltip: "Suivi dans le temps, exports d'évaluations, et lien possible vers vos catalogues internes de formation.",
    icon: BarChart3
  }
];

const badges = [
  { icon: Shield, label: "Hébergement suisse" },
  { icon: Lock, label: "Accès maîtrisés" },
  { icon: Eye, label: "Gouvernance claire" },
];

export function ParcoursEnPratique() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Et si une session de 3 minutes suffisait à progresser ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Un parcours simple, avec un cadre clair dès le départ.
          </p>
        </div>
      </AnimatedSection>

      {/* Desktop: Steps with Progress Indicator */}
      <div className="hidden lg:block">
        <div className="flex gap-12 max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex-shrink-0 sticky top-1/3 h-fit">
            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => {
                    stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`group flex items-center gap-3 transition-all duration-300 ${
                    activeStep === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-accent w-6 shadow-lg shadow-accent/30' 
                        : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/50'
                    }`}
                  />
                  <span 
                    className={`text-sm font-medium transition-all duration-300 ${
                      activeStep === index 
                        ? 'opacity-100 translate-x-0 text-accent' 
                        : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Steps Content */}
          <div className="flex-1 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`organic-card organic-card-3d p-8 cursor-default transition-all duration-500 ${
                        activeStep === index 
                          ? 'ring-2 ring-accent/30 shadow-lg shadow-accent/10' 
                          : ''
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-gradient-to-br from-accent/20 to-accent/10' 
                            : 'bg-muted'
                        }`}>
                          <step.icon className={`h-7 w-7 transition-colors duration-300 ${
                            activeStep === index ? 'text-accent' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-accent/60">
                              {String(step.number).padStart(2, '0')}
                            </span>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.microLine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="right" 
                    className="max-w-xs p-4 bg-card border shadow-xl"
                  >
                    <p className="text-sm leading-relaxed">{step.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Accordion */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible className="space-y-3">
          {steps.map((step) => (
            <AccordionItem 
              key={step.number} 
              value={`step-${step.number}`}
              className="organic-card border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-accent/60">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.microLine}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <div className="pl-16 pt-2 border-l-2 border-accent/20 ml-6">
                  <p className="text-muted-foreground leading-relaxed">
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
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="organic-badge flex items-center gap-2 px-5 py-3"
            >
              <badge.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTAs */}
      <AnimatedSection animation="fade-up" delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-primary/85 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8 group"
          >
            <a href="/contact" className="flex items-center gap-2">
              Voir une session type
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="rounded-full font-semibold hover:scale-105 transition-all px-8 group"
          >
            <a 
              href="https://kymeria.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tester un moment clé
              <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
