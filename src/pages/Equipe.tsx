import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, FloatingShapes, SectionCurve } from "@/components/ui/decorative-shapes";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  ArrowRight,
  GraduationCap,
  Cpu,
  Heart,
  Scale,
  Eye,
  Settings,
  RefreshCw,
  User,
  CheckCircle2,
  Shield,
  Target
} from "lucide-react";

export default function Equipe() {
  const team = [
    {
      name: "Swann Asensio",
      role: "COFONDATEUR – DIRECTION & VISION PRODUIT",
      photo: "/team/swann.png",
      description: "À l'origine de la vision KymerIA, Swann pilote la cohérence globale du dispositif : technologie, pédagogie, usages et cadre éthique.",
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
      description: "Sasha accompagne les entreprises, institutions et centres de formation dans l'exploration des usages KymerIA.",
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
      description: "Au cœur du dispositif KymerIA, Soraya intervient à l'interface entre les utilisateurs, les formateurs et la plateforme.",
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
      description: "Romain est responsable de la fiabilité technique et de la robustesse de la plateforme KymerIA.",
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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Gradient background */}
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-organic)" }}
        />
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid-light opacity-40" />
        
        {/* Floating shapes */}
        <FloatingShapes variant="hero" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Une équipe engagée, responsable et complémentaire
            </h1>
          </div>
        </div>

        {/* Organic curve */}
        <SectionCurve />
      </section>

      {/* Introduction */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Chez KymerIA, la technologie n'est jamais une finalité. Ce qui fait la différence, c'est la manière dont elle est conçue, encadrée et mise au service des organisations.
            </p>
          </div>
        </AnimatedSection>

        {/* Expertise */}
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

      {/* Team Grid */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader title="L'équipe KymerIA" />
        </AnimatedSection>
        <div className="max-w-5xl mx-auto space-y-8">
          {team.map((member, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="organic-card organic-card-3d overflow-hidden group">
                <CardContent className="p-0">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col md:flex-row gap-6 p-8">
                    {/* Photo */}
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden ring-4 ring-background shadow-lg">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-xs font-semibold text-accent tracking-wider mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="organic-badge flex items-center gap-2 py-2 px-4">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
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
                Chez KymerIA, l'intelligence artificielle n'est jamais livrée seule.
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
              par l'équipe KymerIA, en lien avec les retours utilisateurs, les besoins clients et les évolutions réglementaires.
            </p>
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
                Échanger avec l'équipe KymerIA
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
