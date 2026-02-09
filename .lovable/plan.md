
# Plan de mise à jour complète du site KymerIA

## Résumé des modifications à apporter

D'après le PDF "Corrections_site_new.pdf" et les images uploadées, voici toutes les modifications à implémenter :

---

## 1. Page Accueil (Index.tsx) - Modifications

### Remplacer la section "Former ne suffit pas toujours"
**Ancien texte :**
> "Former ne suffit pas toujours. Les organisations forment. Mais elles disposent rarement d'un espace pour : Pratiquer, Répéter, Ajuster, Progresser dans un cadre sans enjeu réel."

**Nouveau texte complet :**
- **Titre** : Et si vos moments clés étaient préparés ?
- **Intro** : Avant l'entretien, la tension, la négociation : place à l'entraînement.
- **Encadrés** :
  - Pratiquer — Simuler la scène
  - Répéter — Stabiliser la voix
  - Ajuster — Calibrer le message
  - Progresser — Gagner en confiance
- **Micro-phrase** : Simulation réaliste. Cadre clair.


---

## 2. Page Équipe (Equipe.tsx) - Photos

Ajouter les photos de l'équipe fournies :
- `Swann_hd.PNG` → Swann Asensio
- `sasha.jpg` → Sasha Asensio  
- `Soraya.png` → Soraya Koite
- `Romain.png` → Romain Kohn
- `Yann.png` → Yann Anspach

### Actions :
1. Copier les 5 images dans `public/team/`
2. Mettre à jour le composant pour afficher les vraies photos (remplacer l'icône User)

---

## 3. Nouvelle Landing Page (Welcome Page)

Créer une page d'accueil attractive avec effet "Welcome Page moderne 2026" :

### Contenu :
- **H1** : Bienvenue sur KymerIA
- **Slogan** : S'entraîner. Ajuster. Progresser.

### Carte gauche (Découvrir) :
- **Titre** : Découvrir
- **Micro-texte** : La vision, le produit, l'équipe.
- **CTA** : Découvrir KymerIA → vers /home (page actuelle renommée)

### Carte droite (Tester) :
- **Titre** : Tester
- **Question** : Quel moment clé voulez-vous mieux maîtriser ?
- **Options** :
  - Entretien délicat
  - Annoncer une décision
  - Gérer une tension
  - Convaincre / négocier
- **CTA** : Choisir un moment clé & tester → https://kymeria.ch/

### Badges de rassurance :
Hébergement suisse · Sécurité & gouvernance · Déploiement sur mesure

---

## 4. Page Plateforme - Module "Parcours en pratique"

Ajouter un nouveau module avec 7 vignettes interactives :

### Titre de section :
"Et si une session de 3 minutes suffisait à progresser ?"
**Sous-titre** : Un parcours simple, avec un cadre clair dès le départ.

### Les 7 vignettes (avec tooltips) :

| # | Titre | Micro-ligne | Tooltip |
|---|-------|-------------|---------|
| 1 | Cadrer | Critères, profils, règles d'usage et de partage. | Co-construction des critères d'évaluation, des profils, et des règles de visibilité (qui voit quoi). |
| 2 | Accéder | Connexion simple, accès selon la séniorité. | Rôles et droits différenciés (utilisateur, manager, pilote, admin) selon votre organisation. |
| 3 | Choisir | Scénario prêt à l'emploi, en quelques secondes. | Choix du scénario selon le contexte, l'objectif et le niveau attendu. |
| 4 | Faire face | Personas variés, attitudes et objections réalistes. | Large palette de profils (coopératif, hésitant, opposant, émotionnel, etc.) paramétrable. |
| 5 | S'entraîner | À voix haute, conversation 2–3 minutes. | Une mise en situation courte, concrète, centrée sur la pratique et la posture. |
| 6 | Débriefer | Feedback immédiat + retranscription accessible. | À la fin de l'échange : feedback, points forts, axes d'ajustement, et trace de la session. |
| 7 | Piloter | Recommencer, progresser, suivre, exporter, orienter. | Suivi dans le temps, exports d'évaluations, et lien possible vers vos catalogues internes de formation. |

### Design et interactions :
- Scroll-story : vignette active s'allume au scroll
- Progress indicator vertical (7 points)
- Desktop : tooltip au hover
- Mobile : accordion au tap
- Badges de rassurance : Hébergement suisse · Accès maîtrisés · Gouvernance claire

### CTA du module :
- Primaire : "Voir une session type"
- Secondaire : "Tester un moment clé"

---

## 5. Structure de fichiers modifiée

```
src/
├── pages/
│   ├── Welcome.tsx       ← NOUVELLE landing page (route /)
│   ├── Index.tsx         ← Page actuelle (renommée en Home, route /home)
│   └── ...
public/
├── team/
│   ├── swann.png         ← Photo Swann
│   ├── sasha.jpg         ← Photo Sasha
│   ├── soraya.png        ← Photo Soraya
│   ├── romain.png        ← Photo Romain
│   └── yann.png          ← Photo Yann
```

---

## 6. Modifications du Router (App.tsx)

```tsx
<Routes>
  <Route path="/" element={<Welcome />} />      {/* Nouvelle landing */}
  <Route path="/home" element={<Index />} />    {/* Ancienne page d'accueil */}
  <Route path="/pourquoi" element={<Pourquoi />} />
  <Route path="/plateforme" element={<Plateforme />} />
  <Route path="/equipe" element={<Equipe />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cgu" element={<CGU />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 7. Tests à effectuer après implémentation

- Navigation entre toutes les pages
- Liens CTA externes (https://kymeria.ch/)
- Animations au scroll
- Tooltips/accordéons sur le module Plateforme
- Affichage photos équipe
- Responsive : desktop, tablette, mobile
- Progress bar mobile
- Section Nav desktop

---

## 8. Recommandations UX/UI supplémentaires

Pour un site encore plus moderne et engageant en 2026 :

### A) Micro-interactions avancées
- Curseur personnalisé avec effet "follow" sur les cartes
- Effet "magnetic button" sur les CTAs
- Parallax subtil sur les heroes

### B) Accessibilité
- Focus visible sur tous les éléments interactifs
- Skip links pour navigation clavier
- Aria-labels complets

### C) Performance
- Lazy loading des images
- Preload des fonts critiques
- Optimisation des animations (will-change)

### D) Engagement
- Indicateur de temps de lecture estimé
- Barre de progression de lecture
- Animation de confetti/celebration après soumission formulaire

### E) SEO et partage
- Meta tags Open Graph optimisés
- Schema.org pour l'entreprise
- Sitemap XML

---

## Récapitulatif des fichiers à créer/modifier

| Fichier | Action |
|---------|--------|
| `src/pages/Welcome.tsx` | Créer |
| `src/pages/Index.tsx` | Modifier (nouveau texte section "moments clés") |
| `src/pages/Plateforme.tsx` | Ajouter module 7 vignettes |
| `src/pages/Equipe.tsx` | Ajouter photos équipe |
| `src/App.tsx` | Modifier routes |
| `src/components/layout/Header.tsx` | Mettre à jour liens navigation |
| `public/team/*.png` | Copier les 5 photos |

---

## Textes complets préservés du PDF

Tous les textes du PDF seront implémentés **mot pour mot** sans résumé ni suppression.
