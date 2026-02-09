
# Refonte Complète Landing Page KymerIA 2026

## Vision Design (basée sur les mockups Gemini)

D'après les screenshots et les instructions PDF, la nouvelle landing page doit adopter l'esthétique **"Swiss Dark Premium 2026"** avec :

- **Fond sombre** : `#0F111A` (dark slate)
- **Texture grain** : Overlay noise à 5% d'opacité
- **Logo combiné** : Icône "k" violet + texte "kymeria" en blanc
- **Layout asymétrique 70/30** renforcé
- **Parcours orbital** avec le "k" central animé

---

## 1. Nouveaux Assets Logo

### Fichiers à copier dans `/public/`

| Source | Destination | Usage |
|--------|-------------|-------|
| `web_kymeria_logo_squared_dark_512.png` | `public/kymeria-k-icon.png` | Icône "k" pour header et orbital |
| `web_kymeria_logo_squared_dark_192.png` | `public/kymeria-k-icon-sm.png` | Petite icône |
| `web_kymeria_logo_squared_dark_32.png` | `public/favicon-k.png` | Favicon |

### Composant Logo Combiné
Création d'un nouveau header-logo : **Icône "k" + texte "kymeria"** comme dans les mockups

```text
[ k ] kymeria
 ↑      ↑
icon  texte blanc, "ia" en accent violet
```

---

## 2. Refonte Welcome.tsx - Design Sombre Premium

### Structure Visuelle (basée sur screenshots Gemini)

```text
┌────────────────────────────────────────────────────────────────┐
│ [k] kymeria          Vision  Plateforme  Équipe  [Démo]       │ ← Nav sombre
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Bienvenue sur KymerIA                             │
│         S'entraîner. Ajuster. Progresser.                      │
│                                                                 │
│  ┌─────────────────────────────┐  ┌─────────────────────────┐  │
│  │ • FOCUS PRINCIPAL           │  │ Tester                  │  │
│  │                             │  │ MOMENTS CLÉS À MAÎTRISER│  │
│  │ Découvrir                   │  │                         │  │
│  │                             │  │ ┌─ Entretien délicat   │  │
│  │ La vision, le produit,     │  │ ├─ Annoncer décision   │  │
│  │ l'équipe.                   │  │ ├─ Gérer une tension   │  │
│  │ Entrez dans la nouvelle     │  │ └─ Convaincre/négocier │  │
│  │ dimension de l'entraînement.│  │                         │  │
│  │                             │  │ [Choisir & tester →]   │  │
│  │ [Découvrir KymerIA →]       │  │                         │  │
│  │ (bouton accent violet)      │  │                         │  │
│  └─────────────────────────────┘  └─────────────────────────┘  │
│        ↑ Carte 70%                      ↑ Carte 30%            │
│        Bordure gradient animée          Style sobre            │
│                                                                 │
│  ═══════════════════════════════════════════════════════════   │
│                                                                 │
│           Un parcours immersif                                 │
│  KymerIA est un cycle d'évolution constant...                  │
│                                                                 │
│                    [1] Définition                              │
│                   ↗             ↘                              │
│        [4] Progression   [ k ]   [2] Simulateur               │
│                   ↖             ↙                              │
│                    [3] Analyse                                 │
│                                                                 │
│  ───────────────────────────────────────────────────────────   │
│  🔒 Hébergement suisse  🛡 Sécurité  ⚙ Déploiement sur mesure  │
└────────────────────────────────────────────────────────────────┘
```

---

## 3. Palette de Couleurs Dark Mode

### Variables CSS à ajouter

```css
/* Dark Premium Theme for Welcome */
--welcome-bg: 222 47% 6%;        /* #0F111A */
--welcome-surface: 222 35% 10%;  /* Cards légèrement plus claires */
--welcome-text: 210 40% 98%;     /* Blanc cassé */
--welcome-muted: 215 20% 65%;    /* Texte secondaire */
--welcome-accent: 250 70% 55%;   /* Violet KymerIA */
```

---

## 4. Caractéristiques Design Clés

### A) Carte "Découvrir" (70% - Primaire)

- **Badge** : "● FOCUS PRINCIPAL" en vert accent
- **Titre** : "Découvrir" en blanc, très grand (text-5xl)
- **Description** : 
  > "La vision, le produit, l'équipe.
  > Entrez dans la nouvelle dimension de l'entraînement."
- **CTA** : Bouton violet plein avec flèche → effet hover
- **Bordure** : Gradient animé subtil (accent → purple)
- **Décoration** : Grande icône conversation en arrière-plan (opacity 10%)

### B) Carte "Tester" (30% - Secondaire)

- **Header** : "Tester" + sous-titre "MOMENTS CLÉS À MAÎTRISER"
- **Liste** : 4 items avec icônes, style liste verticale compacte
- **CTA** : "Choisir & tester →" style outline
- **Lien** : https://kymeria.ch/

### C) Section Parcours Orbital

- **Titre** : "Un parcours immersif" (style italique élégant)
- **Description** : "KymerIA est un cycle d'évolution constant..."
- **4 Étapes en cercle** :
  1. **Définition** (12h) - Target icon
  2. **Simulateur** (3h) - Play icon
  3. **Analyse** (6h) - Activity icon
  4. **Progression** (9h) - Zap icon
- **Centre** : Lettre "k" avec animation breathing
- **Orbite** : Cercle SVG pointillé animé (rotation lente)

### D) Micro-interactions

- **Grain texture** : Overlay 5% sur tout le site
- **Gradients d'ambiance** : Blobs indigo/purple flous en arrière-plan
- **Hover cards** : Légère élévation + glow
- **Stagger animations** : Entrée décalée des éléments

---

## 5. Fichiers à Modifier

| Fichier | Action |
|---------|--------|
| `public/kymeria-k-icon.png` | Copier logo "k" carré |
| `src/pages/Welcome.tsx` | **Refonte complète** - Dark theme, layout 70/30, section orbital |
| `src/index.css` | Ajouter variables dark welcome + animations breathing |
| `src/components/layout/Header.tsx` | Optionnel - Logo combiné k + texte |

---

## 6. Spécifications Techniques

### Responsive Breakpoints

| Device | Layout Cards | Section Orbital |
|--------|--------------|-----------------|
| Mobile (<768px) | Stack vertical, full width | Grille 2x2 |
| Tablet (768-1024px) | 60/40 | Orbital simplifié |
| Desktop (>1024px) | 70/30 | Orbital complet avec SVG |

### Animations

```css
/* Breathing effect pour le K central */
@keyframes breathing {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

/* Orbit rotation */
@keyframes orbit-dash {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 100; }
}
```

---

## 7. Textes Finaux (du PDF)

### Section Hero
- **H1** : "Bienvenue sur KymerIA"
- **Slogan** : "S'entraîner. Ajuster. Progresser."

### Carte Découvrir
- **Badge** : "FOCUS PRINCIPAL"
- **Titre** : "Découvrir"
- **Description** : "La vision, le produit, l'équipe. Entrez dans la nouvelle dimension de l'entraînement."
- **CTA** : "Découvrir KymerIA"

### Carte Tester
- **Titre** : "Tester"
- **Sous-titre** : "MOMENTS CLÉS À MAÎTRISER"
- **Items** : Entretien délicat, Annoncer une décision, Gérer une tension, Convaincre / négocier
- **CTA** : "Choisir & tester"

### Section Parcours
- **Titre** : "Un parcours immersif"
- **Description** : "KymerIA est un cycle d'évolution constant, conçu pour ancrer durablement votre posture relationnelle par une pratique intensive et sécurisée."
- **4 Étapes** :
  1. Définition - "Contextes et compétences"
  2. Simulateur - "Entraînement autonome"
  3. Analyse - "Ajustement et suivi"
  4. Progression - "Upskilling mesurable"

### Badges Confiance
- Hébergement suisse
- Sécurité & gouvernance
- Déploiement sur mesure

---

## 8. Résumé Visuel

La nouvelle landing page sera une **single-page immersive** avec :

1. **Header flottant sombre** avec logo k + kymeria
2. **Hero section** avec titre centré + deux cartes asymétriques
3. **Section Parcours Orbital** avec le K central animé et 4 étapes en cercle
4. **Footer minimal** avec badges de confiance

Cette refonte applique exactement l'esthétique des mockups Gemini fournis, avec le thème sombre premium, les gradients subtils, et le diagramme orbital signature de KymerIA 2026.
