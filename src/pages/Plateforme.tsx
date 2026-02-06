import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, FloatingShapes, SectionCurve } from "@/components/ui/decorative-shapes";
import { SectionNav } from "@/components/ui/section-nav";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  UserCheck,
  Ear,
  Trophy,
  Shuffle,
  HeartHandshake,
  Users,
  Target,
  Shield,
  Eye,
  Lock,
  Clock,
  TrendingUp,
  Cpu,
  BarChart3,
  FileDown,
  Link2
} from "lucide-react";

const platformSections = [
  { id: "skills", label: "Compétences" },
  { id: "how-it-works", label: "Fonctionnement" },
  { id: "reperes", label: "3 repères" },
];

// Mobile progress bar component
function MobileProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-muted/50 z-30 xl:hidden backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default function Plateforme() {
  const skills = [
    { icon: MessageSquare, name: "Communication" },
    { icon: UserCheck, name: "Posture" },
    { icon: Ear, name: "Écoute" },
    { icon: Trophy, name: "Leadership" },
    { icon: Shuffle, name: "Adaptation" },
    { icon: HeartHandshake, name: "Relation" },
  ];

  return (
    <Layout>
      {/* Section Nav */}
      <SectionNav sections={platformSections} />
      
      {/* Mobile Progress Bar */}
      <MobileProgressBar />

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
              Un espace structuré pour entraîner et évaluer les{" "}
              <span className="text-gradient-hero">compétences humaines</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
              KymerIA permet de travailler l'ensemble des compétences humaines mobilisées dans les échanges professionnels.
            </p>
          </div>
        </div>

        {/* Organic curve */}
        <SectionCurve />
      </section>

      {/* Skills Grid */}
      <Section id="skills" className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="scale-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="organic-card organic-card-3d flex flex-col items-center text-center p-5 group"
              >
                <div className="mb-3 organic-icon-wrapper icon-rotate-hover w-14 h-14">
                  <skill.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Comment ça marche - Section principale */}
      <Section id="how-it-works" variant="muted" className="relative">
        <FloatingShapes variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Comment ça marche"
            className="mb-16"
          />
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto space-y-20">
          {/* 1. Plateforme simple */}
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex items-start gap-6">
                <span className="step-number">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-accent inline-block">
                    Une plateforme simple, prête à l'emploi
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    KymerIA est une plateforme intuitive, user-friendly et immédiatement opérationnelle.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Elle propose différents niveaux d'accès selon les usages : utilisateurs, managers, formateurs et organisations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Utilisateurs" },
                  { icon: UserCheck, text: "Managers" },
                  { icon: Trophy, text: "Formateurs" },
                  { icon: Shield, text: "Organisations" }
                ].map((item, index) => (
                  <div key={index} className="organic-card organic-card-3d flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 2. Co-création - Glass card full width */}
          <AnimatedSection animation="scale-in">
            <div className="glass-card p-10">
              <div className="flex items-start gap-6 mb-8">
                <span className="step-number">02</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient-accent inline-block">
                    Une co-création avec chaque organisation
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chaque déploiement repose sur une co-construction avec le client :
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-8 ml-0 lg:ml-24">
                {[
                  "Définition des contextes métiers",
                  "Création de personas",
                  "Identification des compétences relationnelles à travailler"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/50">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 ml-0 lg:ml-24">
                <p className="text-lg text-foreground italic text-center">
                  « La plateforme et l'équipe KymerIA s'adaptent aux utilisateurs, jamais l'inverse. »
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 3. Personas - Layout inversé */}
          <AnimatedSection animation="fade-right">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Origines",
                    "Niveaux socio-économiques",
                    "Personnalités",
                    "Accents",
                    "Exigences relationnelles",
                    "Contraintes métier"
                  ].map((item, index) => (
                    <div key={index} className="organic-badge flex items-center gap-2 py-3">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex items-start gap-6">
                <span className="step-number">03</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-accent inline-block">
                    Des personas riches et réalistes
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Les personas peuvent intégrer une pluralité de critères pour refléter la diversité des situations réelles.
                  </p>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <p className="text-foreground italic">
                      « Ils permettent de s'entraîner dans des situations proches du réel, sans exposition inutile. »
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 4. Entraînement vocal - Carte avec dot grid */}
          <AnimatedSection animation="scale-in">
            <div className="featured-card p-10 relative">
              <div className="absolute inset-0 dot-grid opacity-30 rounded-3xl" />
              <div className="relative">
                <div className="flex items-start gap-6 mb-8">
                  <span className="step-number">04</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gradient-accent inline-block">
                      Entraînement vocal autonome ou accompagné
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Les utilisateurs accèdent à un entraînement vocal :
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 ml-0 lg:ml-24">
                  {[
                    { icon: Users, text: "Autonome ou accompagné" },
                    { icon: Target, text: "Intuitif" },
                    { icon: Shield, text: "Conforme aux règles éthiques, légales et réglementaires suisses" }
                  ].map((item, index) => (
                    <div key={index} className="organic-card organic-card-3d flex items-start gap-3 p-5 bg-card/80">
                      <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 5. Feedback */}
          <AnimatedSection animation="fade-left">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex items-start gap-6">
                <span className="step-number">05</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-accent inline-block">
                    Feedback immédiat, clair et actionnable
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chaque entraînement génère automatiquement :
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Un feedback structuré",
                  "Une note contextualisée",
                  "Des recommandations alignées avec les scénarios travaillés"
                ].map((item, index) => (
                  <div key={index} className="organic-card organic-card-3d flex items-center gap-4 p-5">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 6. Analyse et données */}
          <AnimatedSection animation="scale-in">
            <div className="glass-card p-10">
              <div className="flex items-start gap-6 mb-8">
                <span className="step-number">06</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient-accent inline-block">
                    Analyse, suivi et export des données
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Les données issues des entraînements sont :
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-8 ml-0 lg:ml-24">
                {[
                  { icon: BarChart3, text: "Automatiquement structurées" },
                  { icon: FileDown, text: "Automatiquement exportables" },
                  { icon: Users, text: "Directement exploitables par managers et formateurs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/50">
                    <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-muted/50 ml-0 lg:ml-24">
                <p className="text-foreground text-center">
                  Les formats et usages des données sont adaptés aux besoins du client, afin de faciliter le travail d'évaluation, de suivi et d'accompagnement.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 7. Continuité */}
          <AnimatedSection animation="fade-right">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-3">
                  {[
                    "Renvoi vers les catalogues internes",
                    "Complémentarité avec les parcours en place",
                    "Continuité entre formation, pratique et accompagnement"
                  ].map((item, index) => (
                    <div key={index} className="organic-card organic-card-3d flex items-center gap-4 p-5">
                      <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex items-start gap-6">
                <span className="step-number">07</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-accent inline-block">
                    Continuité avec les dispositifs existants
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    KymerIA s'intègre aux dispositifs de formation existants pour renforcer leur impact sans les remplacer.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 8. Robustesse et sécurité */}
          <AnimatedSection animation="scale-in">
            <div className="featured-card p-10 relative">
              <div className="absolute inset-0 dot-grid opacity-20 rounded-3xl" />
              <div className="relative">
                <div className="flex items-start gap-6 mb-8">
                  <span className="step-number">08</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gradient-accent inline-block">
                      Robustesse, supervision et sécurité
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-0 lg:ml-24">
                  {[
                    { icon: Eye, text: "Corrections immédiates en cas d'erreur ou d'hallucination" },
                    { icon: Users, text: "Supervision humaine continue" },
                    { icon: Lock, text: "Données protégées et anonymisées" },
                    { icon: Clock, text: "Conservation maximale des données : 1 an" }
                  ].map((item, index) => (
                    <div key={index} className="organic-card organic-card-3d flex flex-col items-center text-center p-6 bg-card/80">
                      <item.icon className="h-8 w-8 text-accent mb-3" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* 3 Repères visuels - Featured cards */}
      <Section id="reperes" className="relative overflow-hidden">
        <FloatingShapes variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="3 repères pour comprendre KymerIA"
            className="mb-12"
          />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Entraîner par la pratique",
              description: "Des situations réalistes pour s'exercer sans pression ni jugement."
            },
            {
              icon: TrendingUp,
              title: "Évaluer pour progresser",
              description: "Des indicateurs clairs et exploitables pour objectiver les progrès."
            },
            {
              icon: Cpu,
              title: "IA encadrée et supervisée",
              description: "Une technologie maîtrisée, conforme et responsable, jamais autonome."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
              <div className="featured-card p-8 text-center group h-full">
                <div className="absolute inset-0 dot-grid opacity-30 rounded-3xl" />
                <div className="relative">
                  <div className="mb-6 organic-icon-wrapper-lg mx-auto animate-pulse-glow">
                    <item.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-accent inline-block">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" className="relative overflow-hidden">
        <FloatingShapes variant="hero" />
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <AnimatedSection animation="scale-in">
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Découvrir la plateforme en situation réelle
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
