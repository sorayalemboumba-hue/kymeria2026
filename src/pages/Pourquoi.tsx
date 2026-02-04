import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Heart, Target, Shield } from "lucide-react";

export default function Pourquoi() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              Parce que la qualité des échanges humains n'est jamais anodine
            </h1>
          </div>
        </div>
      </section>

      {/* Context */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-foreground mb-6 leading-relaxed">
            Dans une organisation, les échanges humains façonnent la confiance, la coopération et la performance.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Ils influencent la qualité du travail, la relation aux usagers, la dynamique d'équipe et le climat professionnel.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ces échanges sont constants, souvent complexes, parfois sensibles, et rarement préparés.
          </p>
        </div>
      </Section>

      {/* Shared observation */}
      <Section variant="muted">
        <SectionHeader 
          title="Un constat partagé"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-6 text-center">
            Les organisations forment. Mais elles manquent souvent de temps, d'espaces et de cadres pour entraîner réellement les compétences humaines.
          </p>
          
          <p className="text-lg text-foreground mb-6 text-center">
            Or, les soft skills :
          </p>
          <div className="space-y-4 max-w-lg mx-auto">
            {[
              "Ne se consolident pas uniquement par la théorie",
              "Se développent par la pratique",
              "Nécessitent répétition, feedback et progression"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Conviction */}
      <Section>
        <SectionHeader 
          title="La conviction KymerIA"
        />
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Nous croyons que :
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                text: "Les compétences humaines se travaillent"
              },
              {
                icon: Heart,
                text: "L'évaluation peut être constructive"
              },
              {
                icon: Shield,
                text: "La technologie doit rester au service de l'humain"
              },
              {
                icon: CheckCircle2,
                text: "La responsabilité et l'éthique sont indissociables de l'innovation"
              }
            ].map((item, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-foreground mt-8 text-center font-medium">
            KymerIA est née de cette conviction.
          </p>
        </div>
      </Section>

      {/* Engagement */}
      <Section variant="muted">
        <SectionHeader 
          title="Un engagement clair"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            KymerIA propose un cadre :
          </p>
          <div className="space-y-4 max-w-xl mx-auto mb-8">
            {[
              "Où l'on peut s'entraîner sans exposer inutilement les personnes",
              "Où l'évaluation sert la progression",
              "Où l'IA est encadrée, supervisée et jamais autonome"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-foreground text-center leading-relaxed">
            Parce que travailler les compétences humaines engage les individus, 
            nous assumons une posture responsable, suisse et institutionnellement compatible.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <Button asChild size="lg" className="text-base font-medium">
            <Link to="/contact">
              Explorer si cette approche correspond à vos enjeux
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
