import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";

export default function CGU() {
  return (
    <Layout>
      <section className="bg-muted pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : février 2026
            </p>
          </div>
        </div>
      </section>

      <Section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation 
            de la plateforme KymerIA, une solution d'entraînement et d'évaluation des compétences 
            humaines développée et exploitée par KymerIA Sàrl, société de droit suisse.
          </p>

          <h2>2. Acceptation des conditions</h2>
          <p>
            L'utilisation de la plateforme implique l'acceptation pleine et entière des présentes CGU. 
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
          </p>

          <h2>3. Description des services</h2>
          <p>
            KymerIA propose une plateforme permettant :
          </p>
          <ul>
            <li>L'entraînement aux compétences relationnelles et communicationnelles</li>
            <li>L'évaluation constructive des soft skills</li>
            <li>Le suivi de progression individuel et collectif</li>
          </ul>

          <h2>4. Protection des données</h2>
          <p>
            KymerIA s'engage à protéger les données personnelles de ses utilisateurs conformément 
            à la législation suisse en vigueur (LPD) et au RGPD le cas échéant.
          </p>
          <ul>
            <li>Les données sont hébergées en Suisse</li>
            <li>Aucune donnée client n'est utilisée pour entraîner nos modèles d'IA</li>
            <li>Une gouvernance claire des données est maintenue</li>
          </ul>

          <h2>5. Utilisation de l'IA</h2>
          <p>
            L'intelligence artificielle utilisée par KymerIA est :
          </p>
          <ul>
            <li>Supervisée par notre équipe</li>
            <li>Régulièrement ajustée et corrigée</li>
            <li>Conforme aux cadres légaux applicables</li>
            <li>Jamais autonome dans ses décisions</li>
          </ul>

          <h2>6. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments de la plateforme KymerIA (logiciels, contenus, interfaces, 
            méthodologies) sont protégés par le droit de la propriété intellectuelle et restent 
            la propriété exclusive de KymerIA Sàrl.
          </p>

          <h2>7. Responsabilités</h2>
          <p>
            KymerIA s'efforce d'assurer la disponibilité et la fiabilité de sa plateforme, 
            sans pouvoir garantir une disponibilité permanente. L'utilisateur reconnaît utiliser 
            la plateforme sous sa propre responsabilité.
          </p>

          <h2>8. Droit applicable et juridiction</h2>
          <p>
            Les présentes CGU sont soumises au droit suisse. Tout litige relatif à leur 
            interprétation ou exécution relève de la compétence exclusive des tribunaux suisses.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question concernant ces conditions, contactez-nous à :{" "}
            <a href="mailto:contact@kymeria.ch" className="text-accent hover:underline">
              contact@kymeria.ch
            </a>
          </p>
        </div>
      </Section>
    </Layout>
  );
}
