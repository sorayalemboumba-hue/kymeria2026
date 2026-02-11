import { Link } from "react-router-dom";
import { Shield, MapPin, Lock, Linkedin } from "lucide-react";
import { SectionCurveWave } from "@/components/ui/decorative-shapes";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground mt-24">
      {/* Organic curve at top */}
      <SectionCurveWave fill="hsl(var(--background))" className="absolute -top-[100px] left-0 right-0 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="py-10 border-b border-primary-foreground/10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: MapPin, text: "Hébergement en Suisse" },
              { icon: Shield, text: "IA encadrée et supervisée" },
              { icon: Lock, text: "Gouvernance claire des données" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/5 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <img 
                src="/kymeria-logo-light.png" 
                alt="kymeria" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-base text-primary-foreground/70 max-w-md leading-relaxed">
              Plateforme suisse d'entraînement et d'évaluation continue des soft skills. 
              Une solution responsable au service des organisations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Pourquoi kymeria", href: "/pourquoi" },
                { name: "La plateforme", href: "/plateforme" },
                { name: "Équipe & accompagnement", href: "/equipe" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary-foreground/50">
              Informations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/cgu" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-3" />
                  Conditions générales
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/kymeria-platform/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@kymeria.ch" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-3" />
                  contact@kymeria.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} kymeria. Tous droits réservés.
            </p>
            <p className="text-xs text-primary-foreground/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/60" />
              Siège social en Suisse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
