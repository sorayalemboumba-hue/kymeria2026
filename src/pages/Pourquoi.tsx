import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Heart, Target, Shield, Lightbulb } from "lucide-react";

export default function Pourquoi() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-kymeria-blue-light pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Parce que les échanges humains façonnent les organisations
            </h1>
          </div>
        </div>
      </section>

      {/* Context */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-foreground mb-8 leading-relaxed text-center">
            Les échanges humains influencent :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {["La confiance", "La coopération", "La qualité du travail", "La relation aux usagers et clients"].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
              >
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
            Ils sont constants, souvent complexes, parfois sensibles — et rarement préparés.
          </p>
        </div>
      </Section>

      {/* Simple observation */}
      <Section variant="muted">
        <SectionHeader 
          title="Un constat simple"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-8 text-center">
            Les compétences relationnelles :
          </p>
          <div className="space-y-4 max-w-lg mx-auto">
            {[
              "Ne se consolident pas par la théorie seule",
              "Se développent par la pratique",
              "Nécessitent répétition et feedback"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
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
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Nous croyons que :
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                text: "Les soft skills se travaillent"
              },
              {
                icon: Heart,
                text: "L'évaluation peut être constructive"
              },
              {
                icon: Lightbulb,
                text: "La technologie doit rester au service de l'humain"
              },
              {
                icon: Shield,
                text: "L'éthique et la responsabilité sont indissociables de l'innovation"
              }
            ].map((item, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground font-medium text-lg pt-2">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement */}
      <Section variant="muted">
        <SectionHeader 
          title="Un engagement clair"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-8 text-center">
            KymerIA propose un cadre :
          </p>
          <div className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Où l'on peut s'entraîner sans exposer inutilement les personnes",
              "Où l'évaluation est paramétrable et contextualisée",
              "Où l'IA est encadrée, supervisée et jamais autonome"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-lg text-foreground leading-relaxed">
              Parce que travailler les compétences humaines engage les individus, 
              nous assumons une posture <strong>responsable, suisse et institutionnellement compatible</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Cette approche vous parle ?
          </h2>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/contact">
              Comprendre notre approche
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
