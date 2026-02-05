import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, SectionCurve } from "@/components/ui/decorative-shapes";
import { 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  UserCheck,
  Ear,
  Trophy,
  Shuffle,
  HeartHandshake,
  Monitor,
  Users,
  UserRound,
  Mic,
  MessageCircle,
  BarChart3,
  FileDown,
  Link2,
  Shield,
  Eye,
  Lock,
  Clock,
  Target,
  TrendingUp,
  Cpu
} from "lucide-react";

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
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Gradient background */}
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-organic)" }}
        />
        
        {/* Decorative blobs */}
        <DecorativeBlobs variant="hero" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Un espace structuré pour entraîner et évaluer les <span className="text-accent">compétences humaines</span>
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
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="organic-card flex flex-col items-center text-center p-5 group"
            >
              <div className="mb-3 organic-icon-wrapper w-14 h-14">
                <skill.icon className="h-7 w-7 text-accent" />
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Comment ça marche - Section principale */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <SectionHeader title="Comment ça marche" />
        
        <div className="max-w-5xl mx-auto space-y-12">
          {/* 1. Plateforme simple */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="organic-icon-wrapper w-14 h-14">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Une plateforme simple, prête à l'emploi</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                KymerIA est une plateforme intuitive, user-friendly et immédiatement opérationnelle.
              </p>
              <p className="text-foreground leading-relaxed">
                Elle propose différents niveaux d'accès selon les usages : utilisateurs, managers, formateurs et organisations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, text: "Utilisateurs" },
                { icon: UserCheck, text: "Managers" },
                { icon: Trophy, text: "Formateurs" },
                { icon: Shield, text: "Organisations" }
              ].map((item, index) => (
                <div key={index} className="organic-card flex items-center gap-3 p-4">
                  <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Co-création */}
          <div className="organic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="organic-icon-wrapper w-14 h-14">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Une co-création avec chaque organisation</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chaque déploiement repose sur une co-construction avec le client :
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
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
            <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10">
              <p className="text-lg text-foreground italic text-center">
                « La plateforme et l'équipe KymerIA s'adaptent aux utilisateurs, jamais l'inverse. »
              </p>
            </div>
          </div>

          {/* 3. Personas */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
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
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="organic-icon-wrapper w-14 h-14">
                  <UserRound className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Des personas riches et réalistes</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Les personas peuvent intégrer une pluralité de critères pour refléter la diversité des situations réelles.
              </p>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <p className="text-foreground italic">
                  « Ils permettent de s'entraîner dans des situations proches du réel, sans exposition inutile. »
                </p>
              </div>
            </div>
          </div>

          {/* 4. Entraînement vocal */}
          <div className="organic-card p-8 bg-gradient-to-br from-card to-muted/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="organic-icon-wrapper w-14 h-14">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Entraînement vocal autonome ou accompagné</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Les utilisateurs accèdent à un entraînement vocal :
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Users, text: "Autonome ou accompagné" },
                { icon: Target, text: "Intuitif" },
                { icon: Shield, text: "Conforme aux règles éthiques, légales et réglementaires suisses" }
              ].map((item, index) => (
                <div key={index} className="organic-card flex items-start gap-3 p-5">
                  <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Feedback */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="organic-icon-wrapper w-14 h-14">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Feedback immédiat, clair et actionnable</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque entraînement génère automatiquement :
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Un feedback structuré",
                "Une note contextualisée",
                "Des recommandations alignées avec les scénarios travaillés"
              ].map((item, index) => (
                <div key={index} className="organic-card flex items-center gap-4 p-5">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Analyse et données */}
          <div className="organic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="organic-icon-wrapper w-14 h-14">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Analyse, suivi et export des données</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Les données issues des entraînements sont :
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
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
            <div className="p-5 rounded-2xl bg-muted/50">
              <p className="text-foreground text-center">
                Les formats et usages des données sont adaptés aux besoins du client, afin de faciliter le travail d'évaluation, de suivi et d'accompagnement.
              </p>
            </div>
          </div>

          {/* 7. Continuité */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-3">
                {[
                  "Renvoi vers les catalogues internes",
                  "Complémentarité avec les parcours en place",
                  "Continuité entre formation, pratique et accompagnement"
                ].map((item, index) => (
                  <div key={index} className="organic-card flex items-center gap-4 p-5">
                    <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="organic-icon-wrapper w-14 h-14">
                  <Link2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Continuité avec les dispositifs existants</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KymerIA s'intègre aux dispositifs de formation existants pour renforcer leur impact sans les remplacer.
              </p>
            </div>
          </div>

          {/* 8. Robustesse et sécurité */}
          <div className="organic-card p-8 bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="organic-icon-wrapper w-14 h-14">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Robustesse, supervision et sécurité</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Eye, text: "Corrections immédiates en cas d'erreur ou d'hallucination" },
                { icon: Users, text: "Supervision humaine continue" },
                { icon: Lock, text: "Données protégées et anonymisées" },
                { icon: Clock, text: "Conservation maximale des données : 1 an" }
              ].map((item, index) => (
                <div key={index} className="organic-card flex flex-col items-center text-center p-6">
                  <item.icon className="h-8 w-8 text-accent mb-3" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3 Repères visuels */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
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
            <Card key={index} className="organic-card text-center border-2 border-accent/10 group overflow-hidden">
              <CardContent className="relative p-8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="mb-6 w-18 h-18 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mx-auto p-4">
                    <item.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" className="relative overflow-hidden">
        <DecorativeBlobs variant="hero" />
        <div className="text-center max-w-2xl mx-auto relative z-10">
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Découvrir la plateforme en situation réelle
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
