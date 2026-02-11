import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, FloatingShapes, SectionCurve } from "@/components/ui/decorative-shapes";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { 
  ArrowRight,
  GraduationCap,
  Cpu,
  Heart,
  Scale,
  Eye,
  Settings,
  RefreshCw,
  CheckCircle2,
  Shield,
  Target
} from "lucide-react";

export default function Equipe() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    {
      name: "Swann Asensio",
      role: "COFONDATEUR – DIRECTION & VISION PRODUIT",
      photo: "/team/swann.png",
      angle: "Cohérence technologie, pédagogie et cadre éthique",
      description: "À l'origine de la vision kymeria, Swann pilote la cohérence globale du dispositif : technologie, pédagogie, usages et cadre éthique.",
      points: [
        "Pertinente pour les organisations",
        "Mesurable dans ses impacts",
        "Maîtrisée dans ses usages",
        "Alignée avec des exigences institutionnelles élevées"
      ]
    },
    {
      name: "Sasha Asensio",
      role: "COFONDATEUR – DÉVELOPPEMENT COMMERCIAL & PARTENARIATS",
      photo: "/team/sasha.jpg",
      angle: "Accompagnement des organisations et partenariats durables",
      description: "Sasha accompagne les entreprises, institutions et centres de formation dans l'exploration des usages kymeria.",
      points: [
        "Comprendre les enjeux spécifiques des organisations",
        "Structurer des projets pilotes adaptés",
        "Construire des partenariats durables"
      ]
    },
    {
      name: "Soraya Koite",
      role: "RESPONSABLE PÉDAGOGIQUE & ACCOMPAGNEMENT",
      photo: "/team/soraya.png",
      angle: "Interface entre utilisateurs, formateurs et plateforme",
      description: "Au cœur du dispositif kymeria, Soraya intervient à l'interface entre les utilisateurs, les formateurs et la plateforme.",
      points: [
        "Cohérence pédagogique des scénarios",
        "Intégration intelligente de l'évaluation",
        "Usage éthique de l'outil comme levier de progression"
      ]
    },
    {
      name: "Romain Kohn",
      role: "DÉVELOPPEUR IA & ARCHITECTURE",
      photo: "/team/romain.png",
      angle: "Fiabilité technique et robustesse de la plateforme",
      description: "Romain est responsable de la fiabilité technique et de la robustesse de la plateforme kymeria.",
      points: [
        "Stabilité de l'architecture",
        "Qualité des interactions IA en production",
        "Détection et correction des anomalies",
        "Optimisation continue des performances"
      ]
    },
    {
      name: "Yann Anspach",
      role: "DÉVELOPPEUR IA, UX & CONFORMITÉ",
      photo: "/team/yann.png",
      angle: "Plateforme intuitive, conforme et adaptable",
      description: "Yann veille à ce que la plateforme reste intuitive, conforme et adaptable.",
      points: [
        "Intuitive pour les utilisateurs",
        "Conforme aux cadres légaux et réglementaires",
        "Adaptable aux contraintes spécifiques",
        "Veille continue sur conformité et protection des données"
      ]
    }
  ];

  const expertise = [
    { icon: GraduationCap, text: "Expertise pédagogique et formation" },
    { icon: Heart, text: "Compréhension fine des enjeux humains et organisationnels" },
    { icon: Cpu, text: "Maîtrise opérationnelle de l'intelligence artificielle en production" },
    { icon: Scale, text: "Exigence éthique, réglementaire et sécuritaire" }
  ];

  const activeMember = selectedMember !== null ? team[selectedMember] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-organic)" }}
        />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 dot-grid-light opacity-40" />
        <FloatingShapes variant="hero" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-primary-foreground animate-fade-in">
              Une équipe engagée, responsable et complémentaire
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-sm text-primary-foreground/70 font-medium">Équipe suisse — déploiement & gouvernance</span>
            </div>
          </div>
        </div>

        <SectionCurve />
      </section>

      {/* Introduction */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Chez kymeria, la technologie n'est jamais une finalité. Ce qui fait la différence, c'est la manière dont elle est conçue, encadrée et mise au service des organisations.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {expertise.map((item, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div className="organic-card organic-card-3d flex flex-col items-center text-center p-6 group h-full">
                  <div className="mb-4 organic-icon-wrapper icon-rotate-hover w-16 h-16">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-semibold text-sm leading-snug">{item.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="scale-in" delay={400}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Notre objectif est clair : concevoir des dispositifs fiables, utiles et responsables, capables de s'inscrire durablement dans des contextes professionnels et institutionnels exigeants.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Team Grid - Compact Cards */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader title="L'équipe kymeria" />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                className={index === team.length - 1 ? "md:col-span-2 md:max-w-sm md:mx-auto" : ""}
              >
                <Card className="organic-card organic-card-3d overflow-hidden group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden ring-2 ring-background shadow-md">
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold truncate">{member.name}</h3>
                        <p className="text-[10px] font-semibold text-accent tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {member.angle}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-accent hover:text-accent hover:bg-accent/10 font-semibold text-xs px-4"
                      onClick={() => setSelectedMember(index)}
                    >
                      Découvrir l'expertise
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Drawer */}
        <Sheet open={selectedMember !== null} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <SheetContent className="overflow-y-auto">
            {activeMember && (
              <>
                <SheetHeader className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden ring-4 ring-background shadow-lg">
                      <img 
                        src={activeMember.photo} 
                        alt={activeMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <SheetTitle className="text-xl">{activeMember.name}</SheetTitle>
                      <SheetDescription className="text-xs font-semibold text-accent tracking-wider mt-1">
                        {activeMember.role}
                      </SheetDescription>
                    </div>
                  </div>
                </SheetHeader>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {activeMember.description}
                  </p>
                  <div className="space-y-2">
                    {activeMember.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </Section>

      {/* Human Supervision */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Une IA supervisée par des humains, en continu
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chez kymeria, l'intelligence artificielle n'est jamais livrée seule.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: Eye, text: "Supervisée" },
                { icon: Settings, text: "Ajustée" },
                { icon: RefreshCw, text: "Corrigée" },
                { icon: Target, text: "Optimisée en continu" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="organic-badge flex items-center gap-3 px-6 py-4"
                >
                  <item.icon className="h-6 w-6 text-accent" />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-10 leading-relaxed">
              par l'équipe kymeria, en lien avec les retours utilisateurs, les besoins clients et les évolutions réglementaires.
            </p>
          </AnimatedSection>

          {/* Circular diagram - IA supervisée */}
          <AnimatedSection animation="scale-in" delay={250}>
            <div className="flex justify-center mb-10">
              <div className="relative w-64 h-64">
                {/* Outer ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    fill="none"
                    stroke="hsl(var(--accent) / 0.2)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  {/* Arrow path segments */}
                  <path
                    d="M 128 18 A 110 110 0 0 1 238 128"
                    fill="none"
                    stroke="hsl(var(--accent) / 0.4)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 238 128 A 110 110 0 0 1 128 238"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.4)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 128 238 A 110 110 0 0 1 18 128"
                    fill="none"
                    stroke="hsl(var(--accent) / 0.3)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 18 128 A 110 110 0 0 1 128 18"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.3)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-sm font-bold text-foreground">L'humain</p>
                    <p className="text-sm font-bold text-foreground">au centre</p>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                  <span className="text-[11px] font-semibold text-accent bg-background px-2 py-1 rounded-full whitespace-nowrap">Usage client</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                  <span className="text-[11px] font-semibold text-primary bg-background px-2 py-1 rounded-full whitespace-nowrap">Ajustements</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
                  <span className="text-[11px] font-semibold text-accent/80 bg-background px-2 py-1 rounded-full whitespace-nowrap">Supervision kymeria</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <p className="text-lg text-foreground text-center mb-6">
                Cette supervision humaine garantit :
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, text: "La fiabilité du dispositif" },
                  { icon: Eye, text: "La maîtrise des risques" },
                  { icon: RefreshCw, text: "Une adaptation constante aux réalités du terrain" }
                ].map((item, index) => (
                  <div key={index} className="organic-card organic-card-3d flex flex-col items-center text-center p-6">
                    <item.icon className="h-8 w-8 text-primary mb-3" />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" className="relative overflow-hidden">
        <DecorativeBlobs variant="hero" />
        <AnimatedSection animation="scale-in">
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Échanger avec l'équipe kymeria
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
