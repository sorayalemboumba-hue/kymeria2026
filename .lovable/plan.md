

# 📦 DOCUMENT RÉCAPITULATIF COMPLET - PROJET KYMERIA
## Version finale - Février 2026

---

# 📁 1. ARCHITECTURE DU PROJET

## Structure des fichiers

```
kymeria-website/
├── public/
│   ├── favicon.ico
│   ├── kymeria-logo-dark.png
│   ├── kymeria-logo-dark.svg
│   ├── kymeria-logo-light.png
│   ├── kymeria-logo-light.svg
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   ├── animated-section.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── decorative-shapes.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── section.tsx
│   │   │   ├── section-nav.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── [autres composants shadcn/ui]
│   │   ├── NavLink.tsx
│   │   └── ScrollToTop.tsx
│   ├── hooks/
│   │   ├── use-intersection.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Pourquoi.tsx
│   │   ├── Plateforme.tsx
│   │   ├── Equipe.tsx
│   │   ├── Contact.tsx
│   │   ├── CGU.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

# 🎨 2. SYSTÈME DE DESIGN

## 2.1 Palette de couleurs (variables CSS)

```css
:root {
  /* Core KymerIA Colors */
  --background: 210 20% 99%;
  --foreground: 220 30% 15%;

  --card: 0 0% 100%;
  --card-foreground: 220 30% 15%;

  /* Primary: Deep Swiss Blue - Trust & Institutional */
  --primary: 217 55% 25%;
  --primary-foreground: 210 40% 98%;

  /* Secondary: Warm Gray */
  --secondary: 220 14% 96%;
  --secondary-foreground: 220 30% 15%;

  /* Muted */
  --muted: 220 14% 96%;
  --muted-foreground: 220 10% 45%;

  /* Accent: Violet from KymerIA logo (#422AD5) */
  --accent: 250 70% 50%;
  --accent-foreground: 0 0% 100%;

  --border: 220 14% 90%;
  --radius: 0.5rem;

  /* Custom KymerIA tokens */
  --kymeria-blue: 217 55% 25%;
  --kymeria-blue-light: 217 45% 35%;
  --kymeria-violet: 250 70% 50%;
  --kymeria-violet-light: 250 60% 60%;
  
  /* Extended Organic Palette */
  --kymeria-warm: 30 15% 95%;      /* Beige chaud */
  --kymeria-sage: 160 25% 92%;     /* Vert sauge */
  --kymeria-lavender: 250 40% 96%; /* Lavande */
}
```

## 2.2 Typographie

```css
/* Polices */
font-family: 'Inter', system-ui, sans-serif;  /* Corps */
font-family: 'Source Serif 4', Georgia, serif; /* Titres accent */

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+4:wght@400;500;600&display=swap');
```

## 2.3 Gradients

```css
/* Hero gradient */
--gradient-hero-organic: linear-gradient(160deg, 
  hsl(217 55% 22%) 0%, 
  hsl(217 45% 30%) 40%, 
  hsl(250 50% 35%) 100%);

/* Accent gradient */
--gradient-accent: linear-gradient(135deg, 
  hsl(250 70% 50%) 0%, 
  hsl(250 60% 60%) 100%);
```

## 2.4 Ombres

```css
--shadow-organic: 0 8px 32px -8px hsl(217 55% 25% / 0.12);
--shadow-glow: 0 0 40px -10px hsl(250 70% 50% / 0.25);
--shadow-elegant: 0 20px 40px -15px hsl(217 55% 25% / 0.15);
```

## 2.5 Classes CSS personnalisées

### Textures

```css
/* Grille de points - signature KymerIA */
.dot-grid {
  background-image: radial-gradient(circle at 1px 1px, 
    hsl(var(--accent) / 0.08) 1px, transparent 0);
  background-size: 32px 32px;
}

.dot-grid-light {
  background-image: radial-gradient(circle at 1px 1px, 
    hsl(var(--primary-foreground) / 0.12) 1px, transparent 0);
  background-size: 32px 32px;
}

/* Gradient mesh pour heroes */
.gradient-mesh {
  background: 
    radial-gradient(at 40% 20%, hsl(var(--accent) / 0.18) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsl(217 55% 35% / 0.25) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsl(250 60% 60% / 0.12) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsl(217 55% 35% / 0.18) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsl(var(--accent) / 0.12) 0px, transparent 50%);
}
```

### Cartes

```css
/* Carte organique */
.organic-card {
  @apply bg-card backdrop-blur-sm;
  border-radius: 24px;
  border: 1px solid hsl(var(--border) / 0.5);
  box-shadow: var(--shadow-organic);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.organic-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* Carte avec effet 3D */
.organic-card-3d:hover {
  transform: translateY(-6px) rotateX(2deg);
  box-shadow: var(--shadow-glow), 0 25px 50px -20px hsl(var(--primary) / 0.15);
}

/* Carte featured avec bordure gradient */
.featured-card {
  @apply relative overflow-hidden;
  border-radius: 24px;
  background: linear-gradient(135deg, 
    hsl(var(--accent) / 0.05) 0%, 
    hsl(var(--card)) 50%,
    hsl(var(--primary) / 0.05) 100%);
}

/* Glassmorphism */
.glass-card {
  background: hsl(var(--card) / 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid hsl(var(--border) / 0.3);
  border-radius: 24px;
}
```

### Badges et boutons

```css
/* Badge pill */
.organic-badge {
  @apply px-5 py-2.5 font-medium text-sm;
  border-radius: 100px;
  background: hsl(var(--muted));
}

/* Bouton CTA avec gradient */
.btn-organic {
  @apply relative overflow-hidden rounded-full font-semibold;
  background: linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.85) 100%);
  box-shadow: 0 8px 24px -8px hsl(var(--accent) / 0.4);
}

/* Effet pulse sur CTA */
.btn-pulse {
  animation: btn-pulse 2.5s ease-in-out infinite;
}
```

### Icônes

```css
.organic-icon-wrapper {
  @apply flex items-center justify-center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    hsl(var(--accent) / 0.15) 0%, 
    hsl(var(--primary) / 0.08) 100%);
}

.icon-rotate-hover:hover {
  transform: rotate(5deg) scale(1.1);
}
```

### Numérotation (page Plateforme)

```css
.step-number {
  @apply font-serif font-bold leading-none;
  font-size: 4rem;
  background: linear-gradient(180deg, 
    hsl(var(--accent) / 0.25) 0%, 
    hsl(var(--accent) / 0.05) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Gradients texte

```css
.text-gradient-accent {
  background: linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(250 60% 65%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-hero {
  background: linear-gradient(135deg, hsl(var(--primary-foreground)) 0%, hsl(var(--accent) / 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 2.6 Animations

### Tailwind keyframes (tailwind.config.ts)

```typescript
keyframes: {
  "float": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" }
  },
  "pulse-soft": {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.7" }
  },
  "spin-slow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  "pulse-glow": {
    "0%, 100%": { boxShadow: "0 0 20px -5px hsl(var(--accent) / 0.3)" },
    "50%": { boxShadow: "0 0 30px -5px hsl(var(--accent) / 0.5)" }
  }
},
animation: {
  "float": "float 6s ease-in-out infinite",
  "pulse-soft": "pulse-soft 3s ease-in-out infinite",
  "spin-slow": "spin-slow 60s linear infinite",
  "pulse-glow": "pulse-glow 3s ease-in-out infinite"
}
```

### Animations au scroll (CSS)

```css
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-fade-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-fade-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.scroll-scale-in {
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-scale-in.visible {
  opacity: 1;
  transform: scale(1);
}
```

---

# 🧩 3. COMPOSANTS CLÉS

## 3.1 Hook useIntersection

```typescript
// src/hooks/use-intersection.tsx
import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersection(
  options: UseIntersectionOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
```

## 3.2 Composant AnimatedSection

```typescript
// src/components/ui/animated-section.tsx
import { ReactNode, CSSProperties } from 'react';
import { useIntersection } from '@/hooks/use-intersection';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersection({ threshold });

  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'scroll-fade-in',
    'fade-left': 'scroll-fade-left',
    'fade-right': 'scroll-fade-right',
    'scale-in': 'scroll-scale-in',
    'fade-in': 'scroll-fade-only',
  };

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && 'visible', className)}
      style={style}
    >
      {children}
    </div>
  );
}
```

## 3.3 Composant DecorativeShapes

```typescript
// src/components/ui/decorative-shapes.tsx
import { cn } from "@/lib/utils";

export function DecorativeBlobs({ variant = "hero" }: { variant?: "hero" | "section" | "subtle" }) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
          }} 
        />
        <div 
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-3xl animate-float"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary-foreground) / 0.08) 0%, transparent 70%)",
            animationDelay: "-3s"
          }} 
        />
      </div>
    );
  }
  // ... autres variants
}

export function FloatingShapes({ variant = "hero" }: { variant?: "hero" | "section" | "minimal" }) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cercle rotatif */}
        <div className="absolute top-20 -right-32 w-80 h-80 rounded-full border-2 border-accent/20 animate-spin-slow" />
        
        {/* Cercle avec glow */}
        <div className="absolute -bottom-10 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-transparent animate-float glow-subtle" />
        
        {/* Lignes décoratives SVG */}
        <svg className="absolute top-1/3 right-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-accent" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-accent" />
        </svg>
      </div>
    );
  }
  // ... autres variants
}

export function SectionCurve({ fill = "hsl(var(--background))" }) {
  return (
    <div className="section-curve">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
      </svg>
    </div>
  );
}

export function SectionCurveWave({ fill = "hsl(var(--background))" }) {
  return (
    <div className="section-curve" style={{ height: "100px" }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" fill={fill} />
      </svg>
    </div>
  );
}
```

## 3.4 Composant SectionNav (navigation latérale)

```typescript
// src/components/ui/section-nav.tsx
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "group flex items-center gap-3 transition-all duration-300",
            activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-70"
          )}
        >
          <span className={cn(
            "h-2 rounded-full transition-all duration-300",
            activeSection === section.id ? "w-6 bg-accent" : "w-2 bg-muted-foreground group-hover:bg-accent/50"
          )} />
          <span className={cn(
            "text-xs font-medium transition-all duration-300 whitespace-nowrap",
            activeSection === section.id 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          )}>
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
```

## 3.5 Composant Section

```typescript
// src/components/ui/section.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  id?: string;
}

export function Section({ children, className, variant = "default", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        variant === "muted" && "bg-muted",
        variant === "primary" && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

---

# 📝 4. CONTENU DES PAGES

## 4.1 Page Accueil (Index.tsx)

### Hero
- **Titre**: "Développer, entraîner et mesurer les compétences humaines qui font la différence."
- **Sous-titre**: "KymerIA est une plateforme suisse d'entraînement et d'évaluation continue des soft skills."
- **Description**: "Elle accompagne les organisations publiques et privées qui souhaitent renforcer durablement la qualité des échanges humains, la posture professionnelle et la performance relationnelle."
- **CTA**: "Demander une démonstration personnalisée"

### Sections
1. **Compétences quotidiennes**: Expliquer, Écouter, Clarifier, Adapter sa posture, Construire la confiance
2. **Former ne suffit pas**: Pratiquer, Répéter, Ajuster, Progresser
3. **La réponse KymerIA**: 
   - Un espace d'entraînement réaliste
   - Une évaluation au service de la progression
   - Une continuité formation-pratique
4. **Pour qui ?**: Équipes, Managers, Formateurs, Organisations
5. **Cadre suisse**: Hébergement en Suisse, Gouvernance claire, IA encadrée, Compatible environnements publics/privés
6. **CTA final**: "Prêt à explorer KymerIA ?"

## 4.2 Page Pourquoi (Pourquoi.tsx)

### Hero
- **Titre**: "Parce que les échanges humains façonnent les organisations"

### Sections
1. **Contexte**: La confiance, La coopération, La qualité du travail, La relation aux usagers
2. **Constat simple**:
   - Ne se consolident pas par la théorie seule
   - Se développent par la pratique
   - Nécessitent répétition et feedback
3. **Conviction KymerIA**:
   - Les soft skills se travaillent
   - L'évaluation peut être constructive
   - La technologie doit rester au service de l'humain
   - L'éthique et la responsabilité sont indissociables de l'innovation
4. **Engagement clair**:
   - S'entraîner sans exposer les personnes
   - Évaluation paramétrable et contextualisée
   - IA encadrée, supervisée et jamais autonome
5. **CTA**: "Découvrir l'équipe derrière KymerIA"

## 4.3 Page Plateforme (Plateforme.tsx)

### Hero
- **Titre**: "Un espace structuré pour entraîner et évaluer les compétences humaines"
- **Description**: "KymerIA permet de travailler l'ensemble des compétences humaines mobilisées dans les échanges professionnels."

### Compétences travaillées
Communication, Posture, Écoute, Leadership, Adaptation, Relation

### Comment ça marche (8 étapes numérotées)

**01 - Plateforme simple, prête à l'emploi**
- Plateforme intuitive, user-friendly et immédiatement opérationnelle
- Niveaux d'accès : Utilisateurs, Managers, Formateurs, Organisations

**02 - Co-création avec chaque organisation**
- Définition des contextes métiers
- Création de personas
- Identification des compétences relationnelles

**03 - Personas riches et réalistes**
Critères : Origines, Niveaux socio-économiques, Personnalités, Accents, Exigences relationnelles, Contraintes métier

**04 - Entraînement vocal autonome ou accompagné**
- Autonome ou accompagné
- Intuitif
- Conforme aux règles éthiques, légales et réglementaires suisses

**05 - Feedback immédiat, clair et actionnable**
- Un feedback structuré
- Une note contextualisée
- Des recommandations alignées avec les scénarios

**06 - Analyse, suivi et export des données**
- Automatiquement structurées
- Automatiquement exportables
- Directement exploitables

**07 - Continuité avec les dispositifs existants**
- Renvoi vers les catalogues internes
- Complémentarité avec les parcours en place
- Continuité entre formation, pratique et accompagnement

**08 - Robustesse, supervision et sécurité**
- Corrections immédiates en cas d'erreur
- Supervision humaine continue
- Données protégées et anonymisées
- Conservation maximale : 1 an

### 3 repères visuels
1. **Entraîner par la pratique**: Des situations réalistes pour s'exercer sans pression ni jugement
2. **Évaluer pour progresser**: Des indicateurs clairs et exploitables pour objectiver les progrès
3. **IA encadrée et supervisée**: Une technologie maîtrisée, conforme et responsable, jamais autonome

### CTA
"Découvrir la plateforme en situation réelle"

## 4.4 Page Équipe (Equipe.tsx)

### Hero
- **Titre**: "Une équipe engagée, responsable et complémentaire"

### Expertise
- Expertise pédagogique et formation
- Compréhension fine des enjeux humains et organisationnels
- Maîtrise opérationnelle de l'intelligence artificielle en production
- Exigence éthique, réglementaire et sécuritaire

### Membres de l'équipe

**Swann Asensio** - COFONDATEUR - DIRECTION & VISION PRODUIT
- À l'origine de la vision KymerIA
- Points: Pertinente, Mesurable, Maîtrisée, Alignée avec exigences institutionnelles

**Sasha Asensio** - COFONDATEUR - DÉVELOPPEMENT COMMERCIAL & PARTENARIATS
- Accompagne les entreprises et institutions
- Points: Comprendre les enjeux, Structurer projets pilotes, Construire partenariats durables

**Soraya Koite** - RESPONSABLE PÉDAGOGIQUE & ACCOMPAGNEMENT
- Interface entre utilisateurs, formateurs et plateforme
- Points: Cohérence pédagogique, Intégration évaluation, Usage éthique

**Romain Kohn** - DÉVELOPPEUR IA & ARCHITECTURE
- Fiabilité technique et robustesse
- Points: Stabilité architecture, Qualité interactions IA, Détection anomalies, Optimisation

**Yann Anspach** - DÉVELOPPEUR IA, UX & CONFORMITÉ
- Plateforme intuitive et conforme
- Points: Intuitive, Conforme, Adaptable, Veille conformité

### IA supervisée
"Chez KymerIA, l'intelligence artificielle n'est jamais livrée seule."
- Supervisée, Ajustée, Corrigée, Optimisée en continu

### CTA
"Échanger avec l'équipe KymerIA"

## 4.5 Page Contact (Contact.tsx)

### Hero
- **Titre**: "Discuter d'un projet pilote KymerIA"
- **Description**: "Chaque organisation a ses réalités, ses contraintes et ses objectifs. KymerIA privilégie des échanges clairs, progressifs et contextualisés."

### Options de contact
1. **Discuter de vos enjeux**: Échangeons sur vos besoins en développement des compétences humaines
2. **Explorer une démonstration ou projet pilote**: Découvrez KymerIA à travers une démonstration personnalisée
3. **Nous présenter votre contexte**: Partagez vos spécificités pour une réponse adaptée

### Contact direct
Email: contact@kymeria.ch

### Formulaire
Champs: Prénom, Nom, Email professionnel, Organisation, Fonction (optionnel), Message

### Engagement
- Réponse sous 48h
- Échange sans engagement
- Confidentialité assurée

## 4.6 Page CGU (CGU.tsx)

Conditions Générales d'Utilisation - Dernière mise à jour : février 2026

Sections:
1. Objet
2. Acceptation des conditions
3. Description des services
4. Protection des données (LPD, RGPD)
5. Utilisation de l'IA
6. Propriété intellectuelle
7. Responsabilités
8. Droit applicable (Suisse)
9. Contact

---

# 🔧 5. INSTRUCTIONS TECHNIQUES

## 5.1 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd kymeria-website

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Preview production
npm run preview
```

## 5.2 Dépendances principales

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "@tanstack/react-query": "^5.83.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.462.0",
    "@radix-ui/react-*": "[various versions]",
    "sonner": "^1.7.4",
    "zod": "^3.25.76",
    "react-hook-form": "^7.61.1"
  },
  "devDependencies": {
    "vite": "^5.4.19",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6"
  }
}
```

## 5.3 Configuration Vite

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## 5.4 Configuration Tailwind

```typescript
// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
      },
      // ... colors, keyframes, animation (voir section 2)
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

## 5.5 Structure de routing

```typescript
// src/App.tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/pourquoi" element={<Pourquoi />} />
  <Route path="/plateforme" element={<Plateforme />} />
  <Route path="/equipe" element={<Equipe />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cgu" element={<CGU />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## 5.6 Assets requis

```
public/
├── kymeria-logo-dark.png    # Logo pour fond clair
├── kymeria-logo-dark.svg    # Logo SVG fond clair
├── kymeria-logo-light.png   # Logo pour fond sombre
├── kymeria-logo-light.svg   # Logo SVG fond sombre
└── favicon.ico
```

## 5.7 Bonnes pratiques

1. **Animations**: Utiliser `AnimatedSection` pour toutes les sections avec animations au scroll
2. **Cartes**: Combiner `organic-card` + `organic-card-3d` pour effet hover
3. **Heroes**: Toujours inclure `FloatingShapes`, `DecorativeBlobs`, `gradient-mesh`, `dot-grid-light`
4. **CTA**: Utiliser `btn-organic btn-pulse` pour les boutons principaux
5. **Transitions sections**: Utiliser `SectionCurve` ou `SectionCurveWave`
6. **Icônes**: Wrapper avec `organic-icon-wrapper` + `icon-rotate-hover`
7. **Badges**: Utiliser `organic-badge` pour les tags/pills

---

# 📊 6. RÉCAPITULATIF

| Aspect | Détails |
|--------|---------|
| **Framework** | React 18 + TypeScript |
| **Build tool** | Vite 5 |
| **Styling** | Tailwind CSS 3.4 + CSS personnalisé |
| **UI Components** | shadcn/ui + Radix UI |
| **Routing** | React Router DOM 6 |
| **Icons** | Lucide React |
| **Fonts** | Inter (sans) + Source Serif 4 (accent) |
| **Design** | "Organic Swiss 2026" - institutionnel + moderne |
| **Couleurs** | Bleu suisse (#1E3A5F) + Violet accent (#422AD5) |
| **Pages** | 6 pages + 404 |
| **Animations** | Scroll-triggered + micro-interactions |

---

*Document généré le 6 février 2026 - Version finale du projet KymerIA*

