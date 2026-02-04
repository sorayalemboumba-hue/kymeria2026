import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  GraduationCap,
  Cpu,
  Heart,
  Scale,
  Eye,
  Settings,
  RefreshCw,
  User
} from "lucide-react";

export default function Equipe() {
  const team = [
    {
      name: "Swann Asensio",
      role: "DIRECTEUR & CO-FONDATEUR",
      skills: ["Direction & vision produit"]
    },
    {
      name: "Sasha Asensio",
      role: "RESPONSABLE DES VENTES & CO-FONDATEUR",
      skills: ["Développement & partenariats"]
    },
    {
      name: "Soraya Koite",
      role: "RESPONSABLE PÉDAGOGIQUE",
      skills: ["Cohérence des scénarios"]
    },
    {
      name: "Romain Kohn",
      role: "DÉVELOPPEUR",
      skills: ["Développeur IA & architecture"]
    },
    {
      name: "Yann Anspach",
      role: "DÉVELOPPEUR",
      skills: ["Développeur IA, UX & conformité"]
    }
  ];

  const expertise = [
    { icon: GraduationCap, text: "Pédagogie" },
    { icon: Cpu, text: "Technologie" },
    { icon: Heart, text: "Compréhension des enjeux humains" },
    { icon: Scale, text: "Exigence éthique et réglementaire" }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-kymeria-blue-light pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Une équipe responsable au service de dispositifs durables
            </h1>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
            KymerIA s'appuie sur une équipe pluridisciplinaire réunissant :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-md"
              >
                <div className="mb-4 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Grid */}
      <Section variant="muted">
        <SectionHeader title="L'équipe" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {team.slice(0, 4).map((member, index) => (
              <div 
                key={index} 
                className="flex gap-6 p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all"
              >
                {/* Photo placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <User className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-accent tracking-wider mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-1">
                    {member.skills.map((skill, skillIndex) => (
                      <p key={skillIndex} className="text-sm text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Last member centered */}
          <div className="mt-8 flex justify-center">
            <div 
              className="flex gap-6 p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all md:w-[calc(50%-1rem)]"
            >
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <User className="w-12 h-12 text-muted-foreground/50" />
                </div>
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1">{team[4].name}</h3>
                <p className="text-xs font-semibold text-accent tracking-wider mb-4">
                  {team[4].role}
                </p>
                <div className="space-y-1">
                  {team[4].skills.map((skill, skillIndex) => (
                    <p key={skillIndex} className="text-sm text-muted-foreground">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Human Supervision */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Un accompagnement dans la durée
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            L'IA est :
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Eye, text: "Supervisée" },
              { icon: Settings, text: "Ajustée" },
              { icon: RefreshCw, text: "Corrigée" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-muted rounded-xl hover:shadow-md transition-all"
              >
                <item.icon className="h-6 w-6 text-accent" />
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-foreground leading-relaxed">
            en lien avec les usages réels et les contraintes des organisations.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Échanger avec l'équipe KymerIA
          </h2>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/contact">
              Échanger avec l'équipe KymerIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
