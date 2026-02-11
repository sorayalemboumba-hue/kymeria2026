import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, FloatingShapes, SectionCurve } from "@/components/ui/decorative-shapes";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CheckCircle2, ArrowRight, Heart, Target, Shield, Lightbulb } from "lucide-react";

export default function Pourquoi() {
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
              Parce que les échanges humains façonnent les organisations
            </h1>
          </div>
        </div>

        {/* Organic curve */}
        <SectionCurve />
      </section>

      {/* Context */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <p className="text-xl text-foreground mb-8 leading-relaxed text-center">
              Les échanges humains influencent :
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={100}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {["La confiance", "La coopération", "La qualité du travail", "La relation aux usagers et clients"].map((item, index) => (
                <div 
                  key={index} 
                  className="organic-badge flex items-center justify-center text-center py-4 px-4"
                >
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
              Ils sont constants, souvent complexes, parfois sensibles, et rarement préparés.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Simple observation */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Un constat simple"
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-foreground mb-8 text-center">
              Les compétences relationnelles :
            </p>
          </AnimatedSection>
          <div className="space-y-4 max-w-lg mx-auto">
            {[
              "Se renforcent au-delà de la théorie",
              "Se développent par la pratique",
              "Nécessitent répétition et feedback"
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-left" delay={150 + index * 100}>
                <div className="organic-card organic-card-3d flex items-start gap-4 p-5">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      {/* Conviction */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="La conviction kymeria"
          />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-muted-foreground mb-10 text-center">
              Nous croyons que :
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                text: "Les soft skills se travaillent par la pratique."
              },
              {
                icon: Heart,
                text: "L'évaluation est utile quand elle est cadrée et constructive."
              },
              {
                icon: Lightbulb,
                text: "La technologie doit rester au service de l'humain."
              },
              {
                icon: Shield,
                text: "L'éthique et la responsabilité accompagnent l'innovation."
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="organic-card organic-card-3d group overflow-hidden h-full">
                  <CardContent className="relative p-6 flex items-start gap-4">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 organic-icon-wrapper icon-rotate-hover w-14 h-14">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <p className="text-foreground font-medium text-lg pt-3">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Un engagement clair"
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-foreground mb-8 text-center">
              kymeria propose un cadre :
            </p>
          </AnimatedSection>
          <div className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Où l'on peut s'entraîner sans exposer inutilement les personnes",
              "Où l'évaluation est paramétrable et contextualisée",
              "Où l'IA est encadrée, supervisée et jamais autonome",
              "Où les droits d'accès et la traçabilité sont explicitement définis (qui voit quoi, et pourquoi)"
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-right" delay={150 + index * 100}>
                <div className="organic-card organic-card-3d flex items-start gap-4 p-5">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="scale-in" delay={500}>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <p className="text-lg text-foreground leading-relaxed">
                Parce que travailler les compétences humaines engage les individus, 
                nous assumons une posture <strong>responsable, suisse et institutionnellement compatible</strong>.
              </p>
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
              <Link to="/equipe" className="flex items-center gap-2">
                Découvrir l'équipe derrière kymeria
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
