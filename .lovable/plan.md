
# Plan VERSION 2 du site KymerIA

## Objectif
Créer une version plus détaillée mais web-friendly du site, en intégrant les nouveaux textes VERSION 2 fournis, avec un design professionnel, élégant et moderne, sans modifier la stratégie ni le fond.

---

## 1. Mise à jour des logos

### Fichiers concernés
`public/` et `Header.tsx`, `Footer.tsx`

### Actions
Copier les nouveaux logos complets (wordmark "kymeria" en toutes lettres) fournis par l'utilisateur dans le dossier `public/`:

| Fichier source | Destination |
|----------------|-------------|
| `web_kymeria_logo_dark_1024.png` | `public/kymeria-logo-dark.png` |
| `web_kymeria_logo_light_1024.png` | `public/kymeria-logo-light.png` |
| `web_kymeria_logo_light.svg` | `public/kymeria-logo-light.svg` |

Les logos seront utilisés ainsi :
- **Header** (fond clair) : logo dark (texte noir + "ia" violet)
- **Footer** (fond sombre) : logo light (texte blanc + "ia" violet)
- Taille ajustée : ~40px dans le header, ~48px dans le footer pour meilleure visibilité

---

## 2. Refonte du contenu avec les textes VERSION 2

### Page Accueil (`Index.tsx`)

**Hero Section**
- Titre : "Développer, entraîner et faire progresser les compétences humaines"
- Sous-titre : Description de KymerIA pour organisations publiques et privées
- CTA unique : **"Demander une démonstration personnalisée"** (→ /contact)

**Section "Les compétences humaines sont un outil de travail quotidien"**
- Introduction avec les actions du quotidien (expliquer, écouter, clarifier, adapter, construire la confiance)
- Conclusion : "Ces compétences sont essentielles. Elles sont pourtant rarement entraînées dans la durée."

**Section "Former ne suffit pas toujours"**
- Les organisations forment mais manquent d'espace pour pratiquer, répéter, ajuster, progresser

**Section "La réponse KymerIA"**
- 3 cartes : espace d'entraînement réaliste, évaluation pour progression, continuité formation-pratique

**Section "Pour qui ?"**
- 4 cartes : Équipes, Managers, Formateurs, Organisations

**Section "Un cadre suisse, responsable et sécurisé"**
- 4 badges de confiance (hébergement Suisse, gouvernance claire, IA encadrée, environnements publics/privés)

**CTA final**
- **"Demander une démonstration personnalisée"** (→ /contact)

---

### Page Pourquoi (`Pourquoi.tsx`)

**Hero**
- Titre : "Parce que les échanges humains façonnent les organisations"

**Section contexte**
- Les échanges influencent : confiance, coopération, qualité du travail, relation aux usagers/clients
- "Ils sont constants, souvent complexes, parfois sensibles — et rarement préparés."

**Section "Un constat simple"**
- Les compétences relationnelles ne se consolident pas par la théorie seule, se développent par la pratique, nécessitent répétition et feedback

**Section "La conviction KymerIA"**
- 4 cartes avec les convictions (soft skills se travaillent, évaluation constructive, technologie au service de l'humain, éthique indissociable de l'innovation)

**Section "Un engagement clair"**
- Cadre où l'on peut s'entraîner sans exposer, évaluation paramétrable et contextualisée, IA encadrée et jamais autonome
- Phrase clé : "Parce que travailler les compétences humaines engage les individus, nous assumons une posture responsable, suisse et institutionnellement compatible."

**CTA unique**
- **"Comprendre notre approche"** (→ /contact)

---

### Page Plateforme (`Plateforme.tsx`)

**Hero**
- Titre : "Un espace structuré pour entraîner et évaluer les soft skills"

**Grille des compétences**
- 6 compétences : Communication, Posture, Écoute, Leadership, Adaptation, Relation

**Section "Entraîner par la pratique"**
- Situations inspirées de contextes réels
- Bénéfices : pratiquer sans pression, explorer différentes postures, gagner en clarté et aisance

**Section "Évaluer pour progresser"**
- Feedback structuré, indicateurs et scores paramétrables, suivi de progression individuelle et collective
- Note importante : "L'évaluation n'est jamais imposée : elle est adaptée au cadre, à la culture et aux règles du client."

**Section "Comment ça fonctionne"**
- 3 étapes : Définition des contextes et compétences → Entraînement autonome ou accompagné → Analyse, ajustement et suivi dans la durée

**Section "Une IA encadrée et supervisée"**
- Supervision humaine continue, ajustements permanents, paramétrage selon les usages, conformité réglementaire

**Section "Sécurité & souveraineté"**
- Données hébergées en Suisse
- Aucune donnée client utilisée pour entraîner les modèles
- Gouvernance claire et maîtrisée

**CTAs**
- Principal : **"Découvrir la plateforme en situation réelle"** (→ /contact)
- Secondaire : **"Comprendre le fonctionnement de la plateforme"** (scroll vers section fonctionnement)

---

### Page Équipe (`Equipe.tsx`)

**Hero**
- Titre : "Une équipe responsable au service de dispositifs durables"

**Section expertise pluridisciplinaire**
- 4 domaines : pédagogie, technologie, compréhension des enjeux humains, exigence éthique et réglementaire

**Section équipe**
- 5 membres avec nouveau format :
  1. **Swann Asensio** — Direction & vision produit
  2. **Sasha Asensio** — Développement & partenariats
  3. **Soraya Koite** — Responsable pédagogique
  4. **Romain Kohn** — Développeur IA & architecture
  5. **Yann Anspach** — Développeur IA, UX & conformité

**Section "Un accompagnement dans la durée"**
- L'IA est supervisée, ajustée, corrigée, en lien avec les usages réels et les contraintes des organisations.

**CTA unique**
- **"Échanger avec l'équipe KymerIA"** (→ /contact)

---

### Page Contact (`Contact.tsx`)

**Hero**
- Titre : "Entrer en discussion"
- Sous-titre : "Chaque organisation a ses réalités, ses contraintes et ses objectifs. KymerIA privilégie des échanges clairs, progressifs et contextualisés."

**Formulaire de contact**
- Champs : Prénom, Nom, Email professionnel, Organisation, Fonction (optionnel), Message
- Validation avec feedback

**CTAs**
- Principal : **"Entrer en discussion"** (bouton submit)
- Secondaire : **"Nous présenter votre contexte"** (texte alternatif dans le message d'introduction)

---

## 3. Mise à jour des CTAs selon la nouvelle stratégie

| Page | CTA | Action |
|------|-----|--------|
| Accueil | "Demander une démonstration personnalisée" | → /contact |
| Pourquoi | "Comprendre notre approche" | → /contact |
| Plateforme | "Découvrir la plateforme en situation réelle" | → /contact |
| Plateforme | "Comprendre le fonctionnement de la plateforme" | Scroll interne |
| Équipe | "Échanger avec l'équipe KymerIA" | → /contact |
| Contact | "Entrer en discussion" | Submit form |
| Header | "Demander une démo" | → /contact |

---

## 4. Optimisations graphiques et design

### Typographie
- Titres avec meilleur letter-spacing et line-height
- Paragraphes avec leading-relaxed uniforme

### Espacement
- Sections avec padding cohérent : `py-20 md:py-28 lg:py-32`
- Gap entre cartes : `gap-8` uniforme
- Margins des headers de section : `mb-12 md:mb-16`

### Couleurs et contrastes
- Accent violet du logo (#422AD5) mieux intégré
- Dégradés hero plus modernes : du bleu primaire vers le bleu clair
- Sections alternées : blanc → muted → blanc → primary

### Cartes et composants
- Hover effects subtils : `hover:shadow-lg transition-all duration-300`
- Bordures fines : `border border-border`
- Coins arrondis cohérents : `rounded-xl`

### Boutons CTA
- Style plus visible : boutons primaires avec hover scale subtil
- Icône flèche sur tous les CTA principaux

---

## 5. Tests et validation

### Comportements à vérifier
- ScrollToTop fonctionne sur changement de route
- Bouton "Retour en haut" apparaît après 300px de scroll
- Navigation fluide entre toutes les pages
- Formulaire de contact fonctionnel avec toast de confirmation

### Responsive
- Mobile : navigation hamburger, cartes en colonne unique
- Tablet : grilles 2 colonnes
- Desktop : grilles 3-4 colonnes selon contexte

### Accessibilité
- Contrastes suffisants (WCAG AA)
- Labels sur tous les champs de formulaire
- Textes alternatifs sur les images

---

## 6. Recommandations d'optimisation supplémentaires

### Performance
- Utiliser les SVG pour les logos (déjà en place)
- Lazy loading pour les sections sous le fold

### SEO
- Meta descriptions spécifiques par page
- Balises Open Graph complètes
- Structure h1/h2/h3 cohérente

### Améliorations futures possibles
- Accordéons pour les sections détaillées (version longue)
- Animations de scroll-reveal pour dynamiser l'affichage
- Formulaire connecté à un backend (Lovable Cloud) pour stocker les demandes

---

## Fichiers à modifier

| Fichier | Type de modification |
|---------|---------------------|
| `public/kymeria-logo-*.png` | Copie des nouveaux logos |
| `src/components/layout/Header.tsx` | Logo + CTA header |
| `src/components/layout/Footer.tsx` | Logo |
| `src/pages/Index.tsx` | Contenu VERSION 2 + CTAs + design |
| `src/pages/Pourquoi.tsx` | Contenu VERSION 2 + CTA |
| `src/pages/Plateforme.tsx` | Contenu VERSION 2 + CTAs |
| `src/pages/Equipe.tsx` | Contenu VERSION 2 + CTA |
| `src/pages/Contact.tsx` | Contenu VERSION 2 + CTAs |
| `src/components/ui/section.tsx` | Ajustements padding |
| `src/index.css` | Optimisations design |

---

## Résumé des livrables

La VERSION 2 offrira un site :

1. **Plus détaillé** avec les textes complets VERSION 2
2. **Web-friendly** avec paragraphes courts et blocs clairs
3. **Visuellement optimisé** avec design moderne et élégant
4. **CTAs cohérents** selon la nouvelle stratégie par page
5. **Logos complets** avec le wordmark "kymeria" en toutes lettres
6. **Testé** sur scroll, navigation, formulaire et responsive
