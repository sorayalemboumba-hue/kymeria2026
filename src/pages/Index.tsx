import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeBlobs, FloatingShapes, SectionCurve } from "@/components/ui/decorative-shapes";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Users, 
  UserCog, 
  GraduationCap, 
  Building2,
  Shield,
  Server,
  Eye,
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp,
  Handshake,
  MapPin,
  Lock,
  UserCheck
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Gradient background */}
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-organic)" }}
        />
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid-light opacity-50" />
        
        {/* Floating geometric shapes */}
        <FloatingShapes variant="hero" />
        
        {/* Legacy blobs for depth */}
        <DecorativeBlobs variant="hero" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight animate-fade-in">
              Développer, entraîner et mesurer les{" "}
              <span className="text-gradient-hero">compétences humaines</span>{" "}
              qui font la différence.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              kymeria est une plateforme en ligne (SaaS) suisse d'entraînement et d'évaluation continue des soft skills, qui s'appuie sur l'IA.
            </p>
            <p className="text-lg text-primary-foreground/75 mb-6 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elle accompagne les organisations publiques et privées qui souhaitent renforcer 
              la qualité des échanges humains, la posture professionnelle et la performance relationnelle.
            </p>

            {/* Trust header */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              {[
                { icon: MapPin, text: "Hébergement suisse" },
                { icon: Lock, text: "Aucune donnée client pour entraîner l'IA" },
                { icon: UserCheck, text: "Supervision humaine" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                  <item.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg" 
                className="btn-organic btn-pulse text-base px-8 py-6 text-white group"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Demander une démo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Organic curve transition */}
        <SectionCurve />
      </section>

      {/* Daily Skills Section */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Les compétences humaines sont un outil de travail quotidien"
          />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-muted-foreground mb-10 text-center leading-relaxed">
              Dans les organisations, chaque jour, il faut :
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {[
                "Expliquer",
                "Écouter",
                "Clarifier",
                "Adapter sa posture",
                "Construire la confiance"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="organic-badge flex items-center justify-center gap-2 py-4"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center space-y-4">
              <p className="text-xl text-foreground font-medium">
                Ces compétences sont essentielles.
              </p>
              <p className="text-lg text-muted-foreground">
                Elles gagnent à être entraînées dans la durée.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Et si vos moments clés étaient préparés ? */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Et si vos moments clés étaient préparés ?"
          />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-foreground mb-10 leading-relaxed">
              Avant l'entretien, la tension, la négociation : place à l'entraînement.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { title: "Pratiquer", subtitle: "Simuler la scène" },
                { title: "Répéter", subtitle: "Stabiliser la voix" },
                { title: "Ajuster", subtitle: "Calibrer le message" },
                { title: "Progresser", subtitle: "Gagner en confiance" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="organic-card organic-card-3d p-6 text-center"
                >
                  <span className="text-lg font-semibold text-primary block mb-1">{item.title}</span>
                  <span className="text-sm text-muted-foreground">— {item.subtitle}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={400}>
            <p className="text-lg text-muted-foreground font-medium">
              Simulation réaliste. Cadre clair.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="La réponse kymeria"
            subtitle="kymeria complète les dispositifs existants en apportant :"
          />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Un espace d'entraînement réaliste",
              description: "Pratiquez dans des conditions proches du réel, sans pression ni conséquences."
            },
            {
              icon: TrendingUp,
              title: "Une évaluation au service de la progression",
              description: "Des retours constructifs et personnalisés pour s'améliorer continuellement."
            },
            {
              icon: Handshake,
              title: "Une continuité formation-pratique",
              description: "Le lien entre formation, pratique et accompagnement dans la durée."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="organic-card organic-card-3d group overflow-hidden h-full">
                <CardContent className="relative p-8">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="organic-icon-wrapper icon-rotate-hover mb-6">
                      <item.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* For whom Section */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="subtle" />
        <AnimatedSection animation="fade-up">
          <SectionHeader title="Pour qui ?" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Users,
              title: "Équipes",
              description: "Gagner en aisance, clarté et confiance dans les échanges."
            },
            {
              icon: UserCog,
              title: "Managers",
              description: "Accompagner les compétences relationnelles avec cadre, clarté et progression."
            },
            {
              icon: GraduationCap,
              title: "Formateurs",
              description: "Renforcer l'impact des formations par la pratique."
            },
            {
              icon: Building2,
              title: "Organisations",
              description: "Déployer un dispositif flexible, responsable et durable."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <Card className="organic-card organic-card-3d text-center group overflow-hidden h-full">
                <CardContent className="relative p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 transition-transform group-hover:scale-105 group-hover:rotate-3">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Swiss Trust Section */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Un cadre suisse, responsable et sécurisé"
          />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Server,
              title: "Hébergement des données en Suisse"
            },
            {
              icon: Shield,
              title: "Gouvernance claire"
            },
            {
              icon: Eye,
              title: "IA encadrée et supervisée"
            },
            {
              icon: Lock,
              title: "Droits d'accès définis selon vos règles"
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-muted/80 to-muted/40 hover:from-muted hover:to-muted/60 transition-all duration-300 group">
                <div className="mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:rotate-3">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium leading-snug">{item.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" className="relative overflow-hidden">
        <DecorativeBlobs variant="hero" />
        <AnimatedSection animation="scale-in">
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à explorer kymeria ?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Découvrez comment kymeria peut accompagner votre organisation dans le développement des compétences humaines.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8"
            >
              <Link to="/plateforme" className="flex items-center gap-2">
                Découvrir la plateforme
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
