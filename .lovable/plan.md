
# Plan d'optimisation complète du site KymerIA

## Résumé des modifications demandées

Ce plan couvre 6 axes d'amélioration pour rendre le site plus professionnel, conforme à l'identité suisse de KymerIA, et optimisé pour 2026.

---

## 1. Correction du logo KymerIA

**Fichiers concernés** : `Header.tsx`, `Footer.tsx`, `public/`

**Actions** :
- Copier le logo SVG officiel (`web_kymeria_logo_dark.svg` pour fond clair, `web_kymeria_logo_light.svg` pour fond sombre) dans `public/`
- Remplacer le texte stylisé actuel "kymer" + "ia" par une balise `<img>` utilisant le logo officiel SVG
- Ajuster la taille du logo (hauteur ~32px dans le header, ~40px dans le footer)
- Le logo foncé ("kymeria" en noir avec "ia" en violet #422AD5) sera utilisé dans le header sur fond clair
- Le logo clair (tout blanc avec "ia" en violet) sera utilisé dans le footer sur fond bleu foncé

---

## 2. Optimisation SEO et comportement de scroll

**Fichiers concernés** : `index.html`, `App.tsx`, création d'un composant `ScrollToTop.tsx`

**Actions SEO** :
- Mettre à jour `index.html` avec les méta-données KymerIA :
  - Title : "KymerIA | Plateforme suisse d'entraînement des soft skills"
  - Description : "Entraînez et évaluez les compétences humaines dans un cadre responsable. Solution suisse d'IA supervisée pour organisations et institutions."
  - Open Graph tags avec titre et description appropriés
  - Langue : passer de `en` à `fr`

**Actions Scroll** :
- Créer un composant `ScrollToTop` qui utilise `useLocation` et `useEffect` pour défiler en haut de page à chaque changement de route
- Intégrer ce composant dans `App.tsx` à l'intérieur du `BrowserRouter`
- Ajouter un bouton flottant "Retour en haut" sur les pages longues (visible après scroll de 300px)

---

## 3. Relecture et correction des textes

**Fichiers concernés** : Toutes les pages (`Index.tsx`, `Pourquoi.tsx`, `Plateforme.tsx`, `Equipe.tsx`, `Contact.tsx`, `CGU.tsx`, `Footer.tsx`)

**Corrections identifiées** :
- Suppression des tirets (-) dans les listes pour adopter un style plus fluide (phrases complètes ou puces avec verbes)
- Vérification de la ponctuation française (espaces insécables avant : ; ! ?)
- Harmonisation des tournures et suppression des répétitions

**Exemples de modifications** :
- "difficiles à pratiquer régulièrement" → "Elles sont difficiles à pratiquer régulièrement"
- Listes avec tirets remplacées par des phrases ou des puces avec CheckCircle2

---

## 4. Suppression des tirets (style ChatGPT)

**Fichiers concernés** : Toutes les pages avec des listes

**Actions** :
- Transformer les listes à tirets en listes avec icônes (CheckCircle2) déjà présentes
- Reformuler certaines listes courtes en paragraphes fluides
- Utiliser des phrases complètes plutôt que des fragments avec tirets

---

## 5. Ajout des photos de l'équipe

**Fichiers concernés** : `Equipe.tsx`, `src/assets/`

**Actions** :
- Créer un dossier `src/assets/team/` pour les photos d'équipe
- Note : Les photos doivent être fournies séparément (le screenshot montre le style souhaité mais pas les fichiers image)
- Modifier le composant d'équipe pour afficher :
  - Photo à gauche dans un cadre arrondi (style du screenshot)
  - Informations à droite : nom, rôle en majuscules, puis compétences
- Layout en grille 2 colonnes sur desktop, 1 colonne sur mobile
- Le 5ème membre (Yann Anspach) centré en bas si nombre impair

**Structure des cartes** :
```text
┌─────────────────────────────────────┐
│ [Photo]  Nom Prénom                 │
│          RÔLE EN MAJUSCULES         │
│                                     │
│          Compétence 1               │
│          Compétence 2               │
│          Passion personnelle        │
└─────────────────────────────────────┘
```

**Données de l'équipe (depuis le screenshot)** :
1. Swann Asensio - Directeur & Co-fondateur
2. Sasha Asensio - Responsable des ventes & Co-fondateur
3. Soraya Koite - Responsable pédagogique
4. Romain Kohn - Développeur
5. Yann Anspach - Développeur

---

## 6. Formulaire de contact fonctionnel et redirection des CTA

**Fichiers concernés** : `Contact.tsx`, toutes les pages avec des boutons CTA

**Actions** :
- Le formulaire de contact existe déjà et est fonctionnel (affiche un toast de confirmation)
- Vérifier que tous les boutons CTA redirigent vers `/contact`
- Harmoniser les labels des CTA selon les directives :
  - "Explorer si KymerIA a du sens pour votre organisation"
  - "Demander une démonstration personnalisée"
  - "Discuter de vos enjeux"
- Améliorer le formulaire avec validation Zod pour sécurité

---

## 7. Optimisation design global

**Fichiers concernés** : `index.css`, `tailwind.config.ts`, toutes les pages

**Améliorations visuelles** :
- **Couleurs** : Ajuster le violet accent pour correspondre exactement au logo (#422AD5 → HSL 250 70% 50%)
- **Espacement** : Uniformiser les paddings des sections (py-20 md:py-28)
- **Alignements** : Vérifier la cohérence des max-width (max-w-5xl pour les grilles, max-w-3xl pour le texte)
- **Typographie** : Augmenter légèrement la line-height pour les paragraphes (leading-relaxed)
- **Cartes** : Ajouter des hover effects subtils et ombres cohérentes
- **Boutons CTA** : Style plus punchy avec un accent plus visible
- **Hero sections** : Dégradés plus modernes avec le violet KymerIA
- **Transitions** : Animations de scroll-reveal pour les sections (fade-in au scroll)

**Ajustements spécifiques** :
- Header : fond plus transparent, transition au scroll
- Footer : meilleure hiérarchie visuelle
- Sections alternées : meilleur contraste entre sections claires/sombres
- Mobile : vérifier tous les espacements responsive

---

## Ordre d'implémentation recommandé

1. **Étape 1** : Logos et index.html (SEO de base)
2. **Étape 2** : Composant ScrollToTop + intégration
3. **Étape 3** : Correction des textes et suppression des tirets
4. **Étape 4** : Refonte visuelle de la page Équipe avec photos
5. **Étape 5** : Harmonisation des CTA et formulaire contact
6. **Étape 6** : Optimisations design globales

---

## Détails techniques

### Fichiers à créer
- `src/components/ScrollToTop.tsx` : Gestion du scroll lors des navigations
- `public/kymeria-logo-dark.svg` : Logo pour fond clair
- `public/kymeria-logo-light.svg` : Logo pour fond sombre

### Fichiers à modifier
- `index.html` : SEO et langue
- `src/App.tsx` : Intégration ScrollToTop
- `src/components/layout/Header.tsx` : Logo officiel
- `src/components/layout/Footer.tsx` : Logo officiel
- `src/pages/Index.tsx` : Textes, design
- `src/pages/Pourquoi.tsx` : Textes, design
- `src/pages/Plateforme.tsx` : Textes, design
- `src/pages/Equipe.tsx` : Photos, nouveau layout
- `src/pages/Contact.tsx` : Textes, design
- `src/index.css` : Couleurs ajustées

### Dépendances
Aucune nouvelle dépendance requise. Le projet utilise déjà react-router-dom pour ScrollToTop.

---

## Question en suspens

Pour les photos de l'équipe : les images individuelles (Swann, Sasha, Soraya, Romain, Yann) doivent être fournies séparément. Le screenshot montre le style d'affichage souhaité mais ne contient pas les fichiers extractibles. Souhaitez-vous :
1. Que j'utilise des placeholders en attendant les vraies photos ?
2. Que vous me fournissiez les photos individuelles de chaque membre ?
