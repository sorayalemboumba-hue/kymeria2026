

# Plan de refonte graphique : Design Organique et Elegant

## Objectif

Transformer le design actuel (institutionnel, géométrique, angulaire) en un design plus **organique**, **élégant**, **professionnel** et **original**, tout en conservant l'identité KymerIA et le positionnement B2B suisse.

---

## Concept de design : "Organic Swiss"

Le nouveau design mélangera :
- **Formes organiques** : courbes fluides, blob shapes, border-radius généreux
- **Dégradés subtils** : transitions douces entre les sections
- **Effets de profondeur** : ombres diffuses, glassmorphism léger
- **Animations subtiles** : mouvements fluides au hover, parallax léger
- **Éléments décoratifs** : formes abstraites flottantes, grain texture

---

## 1. Palette de couleurs enrichie

### Fichier : `src/index.css`

**Nouvelles variables :**

```css
/* Couleurs organiques étendues */
--kymeria-warm: 30 15% 95%;           /* Beige chaud */
--kymeria-sage: 160 25% 92%;          /* Vert sauge très léger */
--kymeria-lavender: 250 40% 96%;      /* Lavande très douce */

/* Dégradés organiques */
--gradient-organic: linear-gradient(135deg, 
  hsl(250 70% 50% / 0.05) 0%, 
  hsl(217 55% 25% / 0.03) 50%,
  hsl(160 25% 92%) 100%);
  
--gradient-hero-organic: linear-gradient(160deg, 
  hsl(217 55% 22%) 0%, 
  hsl(217 45% 30%) 40%,
  hsl(250 50% 35%) 100%);

/* Ombres organiques plus douces */
--shadow-organic: 0 8px 32px -8px hsl(217 55% 25% / 0.12);
--shadow-glow: 0 0 40px -10px hsl(250 70% 50% / 0.25);
```

---

## 2. Nouvelles formes et composants CSS

### Fichier : `src/index.css`

```css
/* Cartes organiques avec bords arrondis généreux */
.organic-card {
  @apply bg-card backdrop-blur-sm p-8;
  border-radius: 24px;
  border: 1px solid hsl(var(--border) / 0.5);
  box-shadow: var(--shadow-organic);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.organic-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* Formes blob décoratives */
.blob-shape {
  position: absolute;
  border-radius: 50% 40% 60% 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: blob-float 20s ease-in-out infinite;
}

@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -15px) scale(1.05); }
  50% { transform: translate(-10px, 20px) scale(0.95); }
  75% { transform: translate(-20px, -10px) scale(1.02); }
}

/* Badge organique style "pill" */
.organic-badge {
  @apply px-5 py-2.5 font-medium text-sm;
  border-radius: 100px;
  background: hsl(var(--muted));
  transition: all 0.3s ease;
}

.organic-badge:hover {
  background: hsl(var(--accent) / 0.1);
  color: hsl(var(--accent));
}

/* Séparateur organique courbé */
.organic-divider {
  height: 120px;
  margin-top: -60px;
  background: inherit;
  clip-path: ellipse(80% 100% at 50% 100%);
}

/* Icônes avec fond organique */
.organic-icon-wrapper {
  @apply flex items-center justify-center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    hsl(var(--accent) / 0.15) 0%, 
    hsl(var(--primary) / 0.08) 100%);
  transition: all 0.3s ease;
}

.organic-icon-wrapper:hover {
  transform: rotate(-3deg) scale(1.05);
}

/* Grain texture overlay */
.texture-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* Noise pattern */
  pointer-events: none;
}
```

---

## 3. Animations fluides

### Fichier : `tailwind.config.ts`

**Nouvelles animations :**

```typescript
keyframes: {
  // Animations organiques
  "float": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" }
  },
  "pulse-soft": {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.7" }
  },
  "scale-organic": {
    "0%, 100%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.02)" }
  },
  "slide-up-fade": {
    "0%": { opacity: "0", transform: "translateY(30px)" },
    "100%": { opacity: "1", transform: "translateY(0)" }
  }
},
animation: {
  "float": "float 6s ease-in-out infinite",
  "pulse-soft": "pulse-soft 3s ease-in-out infinite",
  "scale-organic": "scale-organic 4s ease-in-out infinite",
  "slide-up-fade": "slide-up-fade 0.8s ease-out forwards"
}
```

---

## 4. Refonte du Hero (toutes pages)

### Concept visuel

Le hero actuel est un simple dégradé linéaire. Le nouveau design intégrera :
- Formes blob flottantes en arrière-plan
- Dégradé plus riche avec transition vers le violet
- Courbe organique en bas du hero
- Animation subtile des éléments décoratifs

### Implémentation (`Index.tsx` et autres pages)

```tsx
<section className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Fond avec dégradé organique */}
  <div className="absolute inset-0 bg-gradient-organic-hero" />
  
  {/* Formes blob décoratives */}
  <div className="blob-shape w-96 h-96 bg-accent/20 -top-20 -right-20" />
  <div className="blob-shape w-80 h-80 bg-primary/30 bottom-0 left-1/4" 
       style={{ animationDelay: '-5s' }} />
  
  {/* Contenu */}
  <div className="container relative z-10">
    {/* ... */}
  </div>
  
  {/* Courbe organique vers la section suivante */}
  <div className="absolute bottom-0 left-0 right-0 h-24">
    <svg viewBox="0 0 1440 100" className="w-full h-full fill-background">
      <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
    </svg>
  </div>
</section>
```

---

## 5. Refonte des cartes

### Avant (angulaire)
```tsx
<Card className="border shadow-sm rounded-lg">
```

### Après (organique)
```tsx
<Card className="organic-card group">
  <CardContent className="relative p-8">
    {/* Effet de halo au hover */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                    from-accent/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity" />
    
    <div className="organic-icon-wrapper mb-6">
      <Icon className="h-7 w-7 text-accent" />
    </div>
    
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </CardContent>
</Card>
```

---

## 6. Refonte des badges et tags

### Avant
```tsx
<div className="p-4 rounded-xl bg-muted/50">
```

### Après
```tsx
<div className="organic-badge group cursor-default">
  <span className="flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 text-accent 
                             group-hover:scale-110 transition-transform" />
    {text}
  </span>
</div>
```

---

## 7. Refonte du Header

### Fichier : `src/components/layout/Header.tsx`

Améliorations :
- Effet glassmorphism plus prononcé au scroll
- Navigation avec underline animé au hover
- Bouton CTA avec gradient et effet glow

```tsx
<header className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
  scrolled 
    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5" 
    : "bg-transparent"
)}>
```

---

## 8. Refonte du Footer

### Fichier : `src/components/layout/Footer.tsx`

Améliorations :
- Courbe organique en haut du footer
- Disposition plus aérée
- Éléments avec animations subtiles

---

## 9. Sections avec transitions fluides

### Nouvelle approche

Au lieu de sections rectangulaires alternées, utiliser :
- Courbes SVG entre les sections
- Dégradés subtils qui se fondent
- Éléments décoratifs flottants

```tsx
<Section className="relative overflow-visible">
  {/* Contenu */}
  
  {/* Transition organique vers section suivante */}
  <div className="absolute -bottom-16 left-0 right-0 h-32 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 1440 128">
      <path 
        fill="hsl(var(--muted))" 
        d="M0,64 C240,128 720,0 1440,96 L1440,128 L0,128 Z"
      />
    </svg>
  </div>
</Section>
```

---

## 10. Boutons CTA redesignés

### Avant
```tsx
<Button variant="secondary" className="shadow-lg hover:scale-105">
```

### Après
```tsx
<Button className="relative overflow-hidden group px-8 py-4 
                   bg-gradient-to-r from-accent to-accent/80
                   rounded-full text-white font-semibold
                   shadow-lg shadow-accent/25 hover:shadow-xl 
                   hover:shadow-accent/30 transition-all duration-500">
  {/* Effet de brillance au hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent 
                   via-white/20 to-transparent translate-x-[-200%] 
                   group-hover:translate-x-[200%] transition-transform 
                   duration-1000" />
  <span className="relative flex items-center gap-2">
    {children}
    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 
                           transition-transform" />
  </span>
</Button>
```

---

## 11. Nouveau composant : Formes décoratives

### Fichier : `src/components/ui/decorative-shapes.tsx`

```tsx
export function DecorativeBlobs() {
  return (
    <>
      <div className="absolute -top-40 -right-40 w-96 h-96 
                      rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 
                      rounded-full bg-primary/10 blur-3xl animate-float"
           style={{ animationDelay: '-3s' }} />
    </>
  );
}
```

---

## Fichiers à modifier

| Fichier | Modifications |
|---------|--------------|
| `src/index.css` | Nouvelles variables, composants organiques, animations |
| `tailwind.config.ts` | Nouvelles keyframes et animations |
| `src/components/ui/decorative-shapes.tsx` | Nouveau composant (création) |
| `src/pages/Index.tsx` | Hero organique, cartes redesignées, sections fluides |
| `src/pages/Pourquoi.tsx` | Même traitement organique |
| `src/pages/Plateforme.tsx` | Même traitement organique |
| `src/pages/Equipe.tsx` | Cartes équipe organiques |
| `src/pages/Contact.tsx` | Formulaire et cartes organiques |
| `src/components/layout/Header.tsx` | Glassmorphism, navigation améliorée |
| `src/components/layout/Footer.tsx` | Courbe organique, disposition aérée |

---

## Avant / Après visuel

```text
AVANT (Angulaire)                    APRES (Organique)
+------------------+                 ╭──────────────────╮
|  Border radius   |                 │  Border radius   │
|  : 8px          |                 │  : 24px          │
|                  |        →        │                  │
|  Shadows: sharp  |                 │  Shadows: soft   │
|  Transitions:    |                 │  Transitions:    │
|  linéaires       |                 │  courbes fluides │
+------------------+                 ╰──────────────────╯

Hero plat                            Hero avec blobs
┌────────────────┐                   ╭────────○─────────╮
│                │                   │    ◯      ○      │
│   Texte        │        →          │   Texte          │
│                │                   │          ◯       │
└────────────────┘                   ╰─────╭────╮───────╯
                                           ╰────╯ (courbe)
```

---

## Résumé des améliorations

1. **Formes** : Coins arrondis généreux (24px+), formes blob décoratives
2. **Couleurs** : Palette enrichie avec tons chauds et lavande
3. **Dégradés** : Transitions douces multi-couleurs
4. **Ombres** : Diffuses et colorées (glow effect)
5. **Animations** : Float, pulse soft, transitions fluides (cubic-bezier)
6. **Transitions sections** : Courbes SVG au lieu de bordures droites
7. **Header** : Glassmorphism premium
8. **Boutons** : Pills avec gradient et effet brillance
9. **Icônes** : Wrappers avec dégradé et rotation au hover
10. **Texture** : Grain subtil pour effet premium

Le résultat sera un site qui conserve son professionnalisme institutionnel suisse tout en apportant une touche de modernité, d'originalité et d'élégance organique qui le distinguera.

