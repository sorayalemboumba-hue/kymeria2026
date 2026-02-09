
# Refonte Landing Page - Simplification Elegante

## Analyse des Problemes Identifies

D'apres les screenshots, voici les 6 corrections demandees :

| # | Probleme | Solution |
|---|----------|----------|
| 1 | Logo "k" noir sur fond sombre = invisible | Utiliser la version light du logo (`web_kymeria_logo_squared_light_512.png`) avec fond blanc |
| 2 | Badge vert "FOCUS PRINCIPAL" = deplace | Supprimer completement |
| 3 | Section Decouvrir dans un encadre | Supprimer l'encadre, centrer le texte + CTA sur la page |
| 4 | Section Tester = bouton invisible | Deplacer en dessous, centrer, texte CTA "Choisir et tester" visible |
| 5 | 4 encadres Parcours (Definition, Simulateur...) | Supprimer les cartes, garder titre + description |
| 6 | Recommandations supplementaires | Voir ci-dessous |

---

## Nouvelle Structure Visuelle

```text
+--------------------------------------------------+
|                                                   |
|            [k.] kymeria                          |
|         (logo light visible sur fond sombre)      |
|                                                   |
|           Bienvenue sur KymerIA                   |
|        S'entrainer. Ajuster. Progresser.          |
|                                                   |
|  ─────────────────────────────────────────────   |
|                                                   |
|                  Decouvrir                        |
|                                                   |
|         La vision, le produit, l'equipe.          |
|   Entrez dans la nouvelle dimension de            |
|            l'entrainement.                        |
|                                                   |
|          [Decouvrir KymerIA →]                   |
|              (bouton accent)                      |
|                                                   |
|  ─────────────────────────────────────────────   |
|                                                   |
|                    Tester                         |
|          MOMENTS CLES A MAITRISER                |
|                                                   |
|    Entretien delicat · Annoncer une decision     |
|     Gerer une tension · Convaincre/negocier      |
|                                                   |
|          [Choisir et tester →]                   |
|           (bouton outline blanc)                  |
|                                                   |
|  ═════════════════════════════════════════════   |
|                                                   |
|           Un parcours immersif                    |
|                                                   |
|   KymerIA est un cycle d'evolution constant,      |
|   concu pour ancrer durablement votre posture     |
|   relationnelle par une pratique intensive        |
|   et securisee.                                   |
|                                                   |
|  ─────────────────────────────────────────────   |
|                                                   |
|   Hebergement suisse · Securite · Deploiement    |
|                                                   |
|            (c) 2026 KymerIA                       |
+--------------------------------------------------+
```

---

## Modifications Techniques

### 1. Fichier Logo - Copier la version light

```
public/kymeria-k-icon-light.png ← web_kymeria_logo_squared_light_512.png
```

Le logo light a un "k" sur fond blanc, parfaitement visible sur le fond sombre.

### 2. Welcome.tsx - Refonte Complete

**Suppressions :**
- Badge "Focus principal" (lignes 110-115)
- Carte `.welcome-card-primary` avec son encadre
- Carte `.welcome-card-secondary` avec son encadre
- Layout orbital desktop (lignes 199-260)
- Grille mobile des 4 cartes (lignes 262-279)

**Nouvelle structure :**

```tsx
// Section Decouvrir - CENTREE, SANS ENCADRE
<section className="text-center mb-16">
  <h2 className="text-3xl font-bold text-white mb-4">
    Decouvrir
  </h2>
  <p className="text-white/60 mb-8 max-w-md mx-auto">
    La vision, le produit, l'equipe.
    Entrez dans la nouvelle dimension de l'entrainement.
  </p>
  <Button asChild className="rounded-full bg-accent ...">
    <Link to="/home">Decouvrir KymerIA →</Link>
  </Button>
</section>

// Section Tester - CENTREE, PLUS PETITE
<section className="text-center mb-16">
  <h3 className="text-xl font-semibold text-white mb-2">
    Tester
  </h3>
  <p className="text-xs uppercase text-white/40 mb-4">
    Moments cles a maitriser
  </p>
  <div className="flex flex-wrap justify-center gap-3 mb-6">
    {/* 4 items en ligne, petite police */}
  </div>
  <Button asChild variant="outline" className="rounded-full border-white/30 text-white ...">
    <a href="https://kymeria.ch/">Choisir et tester →</a>
  </Button>
</section>

// Section Parcours - TEXTE UNIQUEMENT
<section className="text-center mb-12">
  <h2 className="text-2xl font-serif italic text-white mb-4">
    Un parcours immersif
  </h2>
  <p className="text-white/50 max-w-2xl mx-auto">
    KymerIA est un cycle d'evolution constant...
  </p>
</section>
```

### 3. index.css - Nettoyage

Supprimer ou simplifier :
- `.welcome-card-primary`
- `.welcome-card-secondary`
- `.welcome-focus-badge`
- `.welcome-orbital-center`
- `.welcome-orbital-point`

Garder :
- `.welcome-dark`
- `.welcome-gradient-mesh`
- `.grain-texture`
- `.welcome-badge`

---

## 6. Recommandations Supplementaires

En tant qu'expert design Suisse depuis 20 ans, voici mes recommandations pour un resultat encore plus elegant et moderne :

### A) Hierarchie Typographique

| Element | Actuel | Recommande |
|---------|--------|------------|
| Titre "Decouvrir" | text-3xl | text-4xl md:text-5xl |
| Titre "Tester" | text-xl | text-2xl (plus petit que Decouvrir) |
| Description | text-base | text-lg, line-height genereux |

### B) Espacement Vertical (Breathing Room)

- Augmenter l'espace entre les sections (mb-20 au lieu de mb-16)
- Ajouter un separateur subtil (ligne fine ou gradient)

### C) Micro-animations

- **Bouton CTA principal** : Effet pulse subtil pour attirer l'attention
- **Texte** : Fade-in en cascade (stagger) pour un effet premium

### D) Elements Visuels Subtils

- Conserver les blobs gradient en arriere-plan (deja presents)
- Ajouter une ligne decorative entre sections (gradient accent)

### E) Bouton "Choisir et tester" - Visibilite

Le bouton actuel est quasi invisible (outline tres fin). Recommandation :
- Bordure plus visible (`border-white/40` au lieu de `border-white/10`)
- Couleur de texte pleine (`text-white` au lieu de `text-white/70`)
- Taille legrement plus grande que l'actuel

### F) Section 4 Moments Cles

Au lieu des pills dans des encadres, afficher en ligne horizontale elegante :
```
Entretien delicat · Annoncer une decision · Gerer une tension · Convaincre/negocier
```
Ou en grille 2x2 ultra-compacte sur mobile.

---

## Fichiers a Modifier

| Fichier | Action |
|---------|--------|
| `public/kymeria-k-icon-light.png` | Copier le logo light |
| `src/pages/Welcome.tsx` | Refonte complete - layout centre, suppressions |
| `src/index.css` | Nettoyer les classes inutilisees |

---

## Resume Visuel Final

La nouvelle landing page sera **epuree, aeree et elegante** avec :

1. Logo visible (version light)
2. Hero centre avec titre + slogan
3. Section Decouvrir : texte centre + CTA primaire
4. Section Tester : texte plus petit + 4 moments en ligne + CTA secondaire visible
5. Section Parcours : titre italique + description (SANS les 4 cartes)
6. Badges de confiance
7. Footer minimal

Cette approche respecte les codes du design suisse premium : clarte, hierarchie, espace, elegance.
