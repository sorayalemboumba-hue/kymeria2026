import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  UserCog, 
  GraduationCap, 
  Building2,
  Shield,
  Server,
  Eye,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary via-primary to-kymeria-blue-light overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
              Développer, entraîner et faire progresser les compétences humaines
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              KymerIA est une plateforme suisse d'entraînement et d'évaluation continue des soft skills.
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elle accompagne les organisations qui souhaitent renforcer la qualité des échanges humains, 
              la posture professionnelle et la performance relationnelle, dans un cadre responsable et sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" variant="secondary" className="text-base font-medium">
                <Link to="/contact">
                  Explorer si KymerIA a du sens pour votre organisation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <Section>
        <SectionHeader 
          title="Des compétences humaines essentielles, mais difficiles à travailler"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Communication, écoute, posture, leadership, adaptation, relation à l'autre.
          </p>
          <p className="text-lg text-foreground mb-8">
            Ces compétences sont aujourd'hui au cœur des métiers, des organisations et des institutions.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Elles sont pourtant :
          </p>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {[
              "difficiles à pratiquer régulièrement",
              "complexes à objectiver",
              "rarement entraînées dans la durée"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Solution Section */}
      <Section variant="muted">
        <SectionHeader 
          title="La réponse KymerIA"
          subtitle="KymerIA complète les dispositifs existants en apportant :"
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Un espace d'entraînement réaliste",
              description: "Pratiquez dans des conditions proches du réel, sans pression."
            },
            {
              title: "Une évaluation au service de la progression",
              description: "Des retours constructifs pour s'améliorer continuellement."
            },
            {
              title: "Une continuité formation-pratique",
              description: "Le lien entre formation, pratique et accompagnement."
            }
          ].map((item, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* For whom Section */}
      <Section>
        <SectionHeader title="Pour qui ?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Users,
              title: "Pour vos équipes",
              description: "Gagner en aisance, en clarté et en confiance dans les échanges du quotidien."
            },
            {
              icon: UserCog,
              title: "Pour vos managers",
              description: "Accompagner la progression relationnelle sans contrôle ni jugement."
            },
            {
              icon: GraduationCap,
              title: "Pour vos formateurs",
              description: "Renforcer l'impact des formations par de la pratique mesurable."
            },
            {
              icon: Building2,
              title: "Pour votre organisation",
              description: "Déployer un dispositif flexible, cohérent et durable."
            }
          ].map((item, index) => (
            <Card key={index} className="text-center border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Swiss Trust Section */}
      <Section variant="muted">
        <SectionHeader 
          title="Une solution suisse, responsable et sécurisée"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Server,
              title: "Hébergement en Suisse"
            },
            {
              icon: Shield,
              title: "Gouvernance claire des données"
            },
            {
              icon: Eye,
              title: "IA encadrée et supervisée"
            },
            {
              icon: Building2,
              title: "Adaptée aux environnements publics et privés"
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à explorer KymerIA ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Découvrez comment KymerIA peut accompagner votre organisation dans le développement des compétences humaines.
          </p>
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
