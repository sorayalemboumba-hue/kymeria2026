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
  FileCheck,
  Eye,
  RefreshCw,
  Sliders
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
      <section className="bg-gradient-to-br from-primary via-primary to-kymeria-blue-light pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Un espace structuré pour entraîner et évaluer les soft skills
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
              KymerIA permet de travailler l'ensemble des compétences humaines mobilisées dans les échanges professionnels.
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
              className="flex flex-col items-center text-center p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-md"
            >
              <div className="mb-3 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <skill.icon className="h-7 w-7 text-accent" />
              </div>
              <span className="font-medium">{skill.name}</span>
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
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Des situations inspirées de contextes réels permettent :
            </p>
            <div className="space-y-4">
              {[
                "De pratiquer sans pression",
                "D'explorer différentes postures",
                "De gagner en clarté et en aisance"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-10 border border-primary/10">
            <div className="space-y-6">
              {[
                { icon: Settings, text: "Contextes personnalisables" },
                { icon: Target, text: "Objectifs adaptés" },
                { icon: BarChart3, text: "Progression mesurable" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
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
          <p className="text-lg text-muted-foreground mb-10 text-center leading-relaxed">
            Chaque entraînement génère :
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Un feedback structuré",
              "Des indicateurs et scores paramétrables",
              "Un suivi de progression individuelle et collective"
            ].map((item, index) => (
              <Card key={index} className="text-center border shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-4" />
                  <p className="font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              <strong>L'évaluation n'est jamais imposée</strong> : elle est adaptée au cadre, à la culture et aux règles du client.
            </p>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section variant="muted" id="fonctionnement">
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
              title: "Analyse, ajustement et suivi dans la durée"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                {item.step}
              </div>
              <p className="font-semibold text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('fonctionnement')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-base"
          >
            Comprendre le fonctionnement de la plateforme
          </Button>
        </div>
      </Section>

      {/* AI Supervision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une IA encadrée et supervisée
            </h2>
            <div className="space-y-4">
              {[
                { icon: Eye, text: "Supervision humaine continue" },
                { icon: RefreshCw, text: "Ajustements permanents" },
                { icon: Sliders, text: "Paramétrage selon les usages" },
                { icon: FileCheck, text: "Conformité réglementaire" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="h-6 w-6 text-primary" />
                Sécurité & souveraineté
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {[
                { icon: Server, text: "Données hébergées en Suisse" },
                { icon: Lock, text: "Aucune donnée client utilisée pour entraîner les modèles" },
                { icon: Shield, text: "Gouvernance claire et maîtrisée" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
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
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/contact">
              Découvrir la plateforme en situation réelle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
