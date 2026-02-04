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
  RefreshCw
} from "lucide-react";

export default function Equipe() {
  const team = [
    {
      name: "Swann Asensio",
      role: "Direction & vision produit",
      description: "Garant de la cohérence entre technologie, pédagogie et responsabilité."
    },
    {
      name: "Sasha Asensio",
      role: "Développement & partenariats",
      description: "Accompagnement des organisations dans une logique de co-construction."
    },
    {
      name: "Soraya Koite",
      role: "Responsable pédagogique",
      description: "Cohérence des scénarios, intégration éthique de l'évaluation."
    },
    {
      name: "Romain Kohn",
      role: "Développeur IA & architecture",
      description: "Fiabilité, performance et stabilité de la plateforme."
    },
    {
      name: "Yann Anspach",
      role: "Développeur IA, UX & conformité",
      description: "Expérience utilisateur, conformité et veille réglementaire."
    }
  ];

  const expertise = [
    { icon: GraduationCap, text: "Expertise pédagogique" },
    { icon: Cpu, text: "Maîtrise technologique" },
    { icon: Heart, text: "Compréhension des enjeux humains" },
    { icon: Scale, text: "Exigence éthique et réglementaire" }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              Une équipe responsable au service de dispositifs durables
            </h1>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-10 text-center">
            KymerIA repose sur une équipe pluridisciplinaire réunissant :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50"
              >
                <div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Grid */}
      <Section variant="muted">
        <SectionHeader title="L'équipe" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Human Supervision */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Une supervision humaine continue
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            L'IA est :
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { icon: Eye, text: "supervisée" },
              { icon: Settings, text: "ajustée" },
              { icon: RefreshCw, text: "corrigée" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full"
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-foreground">
            par l'équipe KymerIA, en lien avec les usages réels.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Échanger avec l'équipe KymerIA
          </h2>
          <Button asChild size="lg" variant="secondary" className="text-base font-medium">
            <Link to="/contact">
              Prendre contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
