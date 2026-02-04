import { Link } from "react-router-dom";
import { Shield, MapPin, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="py-8 border-b border-primary-foreground/10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Hébergement en Suisse</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-accent" />
              <span>IA encadrée et supervisée</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Lock className="h-4 w-4 text-accent" />
              <span>Gouvernance claire des données</span>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/kymeria-logo-light.png" 
                alt="KymerIA" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              Plateforme suisse d'entraînement et d'évaluation continue des soft skills. 
              Une solution responsable au service des organisations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/pourquoi" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Pourquoi KymerIA
                </Link>
              </li>
              <li>
                <Link to="/plateforme" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  La plateforme
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Équipe & accompagnement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
              Informations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cgu" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contact@kymeria.ch" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  contact@kymeria.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} KymerIA. Tous droits réservés.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Siège social en Suisse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
