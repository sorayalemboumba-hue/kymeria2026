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
  Handshake
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
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              KymerIA est une plateforme suisse d'entraînement et d'évaluation continue des soft skills.
            </p>
            <p className="text-lg text-primary-foreground/75 mb-10 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elle accompagne les organisations publiques et privées qui souhaitent renforcer durablement 
              la qualité des échanges humains, la posture professionnelle et la performance relationnelle.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg" 
                className="btn-organic btn-pulse text-base px-8 py-6 text-white group"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Demander une démonstration personnalisée
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
                Elles sont pourtant rarement entraînées dans la durée.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Training Gap Section */}
      <Section variant="muted" className="relative">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Former ne suffit pas toujours"
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Les organisations forment. Mais elles disposent rarement d'un espace pour :
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {["Pratiquer", "Répéter", "Ajuster", "Progresser"].map((item, index) => (
                <div 
                  key={index} 
                  className="organic-card organic-card-3d p-6 text-center"
                >
                  <span className="text-lg font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={400}>
            <p className="text-lg text-muted-foreground italic">
              dans un cadre sans enjeu réel.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="relative overflow-hidden">
        <DecorativeBlobs variant="section" />
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="La réponse KymerIA"
            subtitle="KymerIA complète les dispositifs existants en apportant :"
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
              description: "Accompagner les compétences relationnelles sans contrôle ni jugement."
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
              icon: Building2,
              title: "Compatible avec des environnements publics et privés"
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
              Prêt à explorer KymerIA ?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Découvrez comment KymerIA peut accompagner votre organisation dans le développement des compétences humaines.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Demander une démonstration personnalisée
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
