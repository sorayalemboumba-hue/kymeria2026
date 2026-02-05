import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageSquare,
  Building2,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  Users
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé",
      description: "Nous reviendrons vers vous dans les meilleurs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-kymeria-blue-light pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary-foreground animate-fade-in">
              Discuter d'un projet pilote KymerIA
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-in leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
              Chaque organisation a ses réalités, ses contraintes et ses objectifs.
              KymerIA privilégie des échanges clairs, progressifs et contextualisés.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">
              Comment pouvons-nous vous aider ?
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Discuter de vos enjeux</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Échangeons sur vos besoins en développement des compétences humaines.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Explorer une démonstration ou un projet pilote</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Découvrez KymerIA à travers une démonstration personnalisée.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Nous présenter votre contexte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Partagez vos spécificités pour une réponse adaptée.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:contact@kymeria.ch" 
                  className="text-accent hover:underline font-medium text-lg"
                >
                  contact@kymeria.ch
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      required 
                      placeholder="Votre prénom"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      required 
                      placeholder="Votre nom"
                      className="h-11"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                    placeholder="vous@organisation.ch"
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization">Organisation</Label>
                  <Input 
                    id="organization" 
                    name="organization"
                    required 
                    placeholder="Nom de votre organisation"
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Fonction <span className="text-muted-foreground font-normal">(optionnel)</span></Label>
                  <Input 
                    id="role" 
                    name="role"
                    placeholder="Votre fonction"
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez brièvement vos enjeux ou votre intérêt pour KymerIA..."
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      Envoyer
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Trust Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">
            Notre engagement
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, text: "Réponse sous 48 h" },
              { icon: MessageSquare, text: "Échange sans engagement" },
              { icon: Shield, text: "Confidentialité assurée" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border shadow-sm">
                <item.icon className="h-8 w-8 text-accent" />
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
