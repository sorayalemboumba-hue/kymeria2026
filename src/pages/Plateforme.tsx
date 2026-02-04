import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  UserCheck,
  Ear,
  Trophy,
  Shuffle,
  HeartHandshake,
  Settings,
  Target,
  BarChart3,
  Shield,
  Server,
  Lock,
  FileCheck
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
      <section className="bg-gradient-to-br from-muted to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              Un espace structuré pour entraîner et évaluer les soft skills
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              KymerIA permet de travailler l'ensemble des compétences humaines mobilisées dans les échanges professionnels
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="mb-3 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <skill.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Training */}
      <Section variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entraîner par la pratique
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              La plateforme propose des situations d'entraînement inspirées de contextes réels, permettant :
            </p>
            <ul className="space-y-4">
              {[
                "de pratiquer sans pression",
                "d'explorer différentes postures",
                "de renforcer la confiance et la clarté dans les échanges"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-medium">Contextes personnalisables</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-medium">Objectifs adaptés</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-medium">Progression mesurable</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Evaluation */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Évaluer pour progresser"
          />
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Chaque entraînement génère :
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "un feedback structuré",
              "des indicateurs de progression",
              "une lecture utile pour l'utilisateur, le manager ou le formateur"
            ].map((item, index) => (
              <Card key={index} className="text-center border shadow-sm">
                <CardContent className="p-6">
                  <p className="font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground mb-6 text-center">
            L'évaluation est conçue comme :
          </p>
          <ul className="space-y-3 max-w-md mx-auto">
            {[
              "un repère",
              "un outil de compréhension",
              "jamais comme un instrument de contrôle"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How it works */}
      <Section variant="muted">
        <SectionHeader title="Comment ça fonctionne" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Définition des contextes et compétences"
            },
            {
              step: "2",
              title: "Entraînement autonome ou accompagné"
            },
            {
              step: "3",
              title: "Analyse et ajustement dans la durée"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <p className="font-medium text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Supervision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une IA encadrée et supervisée
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              L'IA utilisée par KymerIA :
            </p>
            <ul className="space-y-4">
              {[
                "est supervisée par l'équipe",
                "corrigée et ajustée en continu",
                "adaptée aux contraintes clients",
                "conforme aux cadres légaux"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Sécurité et cadre suisse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Server, text: "Données hébergées en Suisse" },
                { icon: Lock, text: "Aucune utilisation des données clients pour entraîner les modèles" },
                { icon: FileCheck, text: "Conformité réglementaire" },
                { icon: Shield, text: "Gouvernance claire" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Découvrir la plateforme en situation réelle
          </h2>
          <Button asChild size="lg" variant="secondary" className="text-base font-medium">
            <Link to="/contact">
              Demander une démonstration personnalisée
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
