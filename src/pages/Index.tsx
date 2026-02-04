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
  ArrowRight,
  Target,
  TrendingUp,
  Handshake
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-kymeria-blue-light overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight animate-fade-in">
              Développer, entraîner et faire progresser les compétences humaines
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              KymerIA est une plateforme suisse d'entraînement et d'évaluation continue des soft skills.
            </p>
            <p className="text-lg text-primary-foreground/75 mb-10 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elle accompagne les organisations publiques et privées qui souhaitent renforcer durablement 
              la qualité des échanges humains, la posture professionnelle et la performance relationnelle.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/contact">
                  Demander une démonstration personnalisée
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Skills Section */}
      <Section>
        <SectionHeader 
          title="Les compétences humaines sont un outil de travail quotidien"
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-10 text-center leading-relaxed">
            Dans les organisations, chaque jour, il faut :
          </p>
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
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl text-foreground font-medium">
              Ces compétences sont essentielles.
            </p>
            <p className="text-lg text-muted-foreground">
              Elles sont pourtant rarement entraînées dans la durée.
            </p>
          </div>
        </div>
      </Section>

      {/* Training Gap Section */}
      <Section variant="muted">
        <SectionHeader 
          title="Former ne suffit pas toujours"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Les organisations forment. Mais elles disposent rarement d'un espace pour :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {["Pratiquer", "Répéter", "Ajuster", "Progresser"].map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-lg font-semibold text-primary">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground italic">
            dans un cadre sans enjeu réel.
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section>
        <SectionHeader 
          title="La réponse KymerIA"
          subtitle="KymerIA complète les dispositifs existants en apportant :"
        />
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
            <Card key={index} className="border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* For whom Section */}
      <Section variant="muted">
        <SectionHeader title="Pour qui ?" />
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
            <Card key={index} className="text-center border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Swiss Trust Section */}
      <Section>
        <SectionHeader 
          title="Un cadre suisse, responsable et sécurisé"
        />
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
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="mb-4 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium leading-snug">{item.title}</h3>
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
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Découvrez comment KymerIA peut accompagner votre organisation dans le développement des compétences humaines.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/contact">
              Demander une démonstration personnalisée
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
