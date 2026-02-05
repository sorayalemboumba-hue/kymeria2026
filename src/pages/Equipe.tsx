import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="bg-gradient-to-br from-primary via-primary to-kymeria-blue-light pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Une équipe engagée, responsable et complémentaire
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Chez KymerIA, la technologie n'est jamais une finalité. Ce qui fait la différence, c'est la manière dont elle est conçue, encadrée et mise au service des organisations.
          </p>
        </div>

        {/* Expertise */}
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-md"
              >
                <div className="mb-4 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-semibold text-sm leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              Notre objectif est clair : concevoir des dispositifs fiables, utiles et responsables, capables de s'inscrire durablement dans des contextes professionnels et institutionnels exigeants.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Grid */}
      <Section variant="muted">
        <SectionHeader title="L'équipe KymerIA" />
        <div className="max-w-5xl mx-auto space-y-8">
          {team.map((member, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  {/* Photo placeholder */}
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <User className="w-14 h-14 text-muted-foreground/50" />
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
                        <div key={pointIndex} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Human Supervision */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une IA supervisée par des humains, en continu
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chez KymerIA, l'intelligence artificielle n'est jamais livrée seule.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Eye, text: "Supervisée" },
              { icon: Settings, text: "Ajustée" },
              { icon: RefreshCw, text: "Corrigée" },
              { icon: Target, text: "Optimisée en continu" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-muted rounded-xl hover:shadow-md transition-all"
              >
                <item.icon className="h-6 w-6 text-accent" />
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground text-center mb-10 leading-relaxed">
            par l'équipe KymerIA, en lien avec les retours utilisateurs, les besoins clients et les évolutions réglementaires.
          </p>

          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-lg text-foreground text-center mb-6">
              Cette supervision humaine garantit :
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "La fiabilité du dispositif" },
                { icon: Eye, text: "La maîtrise des risques" },
                { icon: RefreshCw, text: "Une adaptation constante aux réalités du terrain" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-card border shadow-sm">
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className="text-center max-w-2xl mx-auto">
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/contact">
              Échanger avec l'équipe KymerIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
