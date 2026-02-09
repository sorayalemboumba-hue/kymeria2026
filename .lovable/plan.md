

# Refonte Design Premium 2026 - Plan Amélioré

## Corrections intégrées

### 1. Landing Page Welcome - Hiérarchie et Innovation

**Corrections demandées :**
- "Découvrir" = CTA PRINCIPAL (mis en avant visuellement)
- Les variantes précédentes étaient trop banales
- Les 4 moments clés en police PLUS PETITE (texte discret, secondaire)

**Nouvelle approche : "Asymmetric Gateway"**

```text
+--------------------------------------------------+
|                  [Logo KymerIA]                   |
|                                                   |
|           Bienvenue sur KymerIA                   |
|        S'entraîner. Ajuster. Progresser.          |
|                                                   |
|  +---------------------------+                    |
|  |                           |   +-----------+   |
|  |       DÉCOUVRIR           |   |  TESTER   |   |
|  |   [Grande carte,          |   |  (petite  |   |
|  |    effet glow,            |   |  carte,   |   |
|  |    CTA proéminent]        |   |  4 pills  |   |
|  |                           |   |  xs text) |   |
|  +---------------------------+   +-----------+   |
|                                                   |
|        [Badges confiance en micro-texte]          |
+--------------------------------------------------+
```

**Caractéristiques innovantes :**
- Layout asymétrique 65% / 35%
- Carte "Découvrir" : 
  - Plus grande
  - Bordure gradient animée
  - Effet "breathing glow"
  - CTA avec micro-animation pulse
- Carte "Tester" :
  - Plus compacte
  - 4 moments clés en `text-xs` (très petite police)
  - Style secondaire, muted
  - Lien vers kymeria.ch

**Animations différenciatrices :**
- Entrée "staggered" (Découvrir apparaît 200ms avant Tester)
- Effet parallax subtil sur le fond au mouvement souris
- Icônes avec micro-rotation au hover
- Bordure gradient qui "pulse" sur la carte principale

---

### 2. Page Plateforme - Variante C "Orbital Journey"

**Position confirmée :** Section vignettes AVANT les 3 repères

**Design "Orbital/Spiral" innovant :**

```text
+--------------------------------------------------+
|   Et si une session de 3 minutes suffisait ?      |
|                                                   |
|              [1]                                  |
|           ↗       ↘                               |
|        [7]          [2]                           |
|         ↑    [K]     ↓       ← Logo KymerIA      |
|        [6]          [3]          au centre        |
|           ↖       ↙                               |
|              [5]←[4]                              |
|                                                   |
|   +------------------------------------------+   |
|   |  [Détail de l'étape active - compact]   |   |
|   +------------------------------------------+   |
|                                                   |
|              [Badges confiance]                   |
+--------------------------------------------------+
```

**Caractéristiques :**
- 7 points en cercle/orbite autour du logo
- Connexions SVG animées entre les points (lignes pointillées qui "marchent")
- Clic sur un point = highlight + affichage détail en dessous
- Animation "orbit" : les points effectuent une rotation très lente (60s/tour)
- Mobile : transformation en accordion compact
- Tablette : grille 4+3 avec navigation dots

**Textes ajustés :**
- Titres : `text-base font-semibold`
- Micro-lignes : `text-sm text-muted-foreground`
- Tooltips : `text-xs` en popover léger

---

### 3. Page Équipe - AUCUN CHANGEMENT

L'état actuel est conservé.

---

## Recommandations Expertes Supplémentaires

En 20 ans de design pour institutions suisses, voici mes critiques et suggestions :

### A) Critiques constructives du site actuel

| Élément | Problème | Solution |
|---------|----------|----------|
| Contrastes | Certains textes muted trop légers | Augmenter à 55% opacity minimum |
| Densité | Trop d'espace vide sur desktop | Réduire padding sections de 25% |
| Vitesse | Animations trop lentes (800ms) | Réduire à 400-500ms |
| CTAs | Tous les boutons se ressemblent | Différencier primaire/secondaire clairement |

### B) Micro-interactions premium manquantes

1. **Magnetic Buttons** - Les CTAs "suivent" légèrement le curseur
2. **Scroll Progress Bar** - Barre de progression en haut de page
3. **Section Reveal** - Les sections s'animent en cascade, pas ensemble
4. **Hover States enrichis** - Effet "lift" plus prononcé sur les cartes

### C) Originalité 2026 à ajouter

1. **Cursor Trail** - Trainée subtile violette sur le curseur
2. **Grain Texture** - Légère texture grain (film) pour effet premium
3. **Color Shift** - Dégradé de couleur qui évolue selon le scroll
4. **Skeleton Loading** - États de chargement animés
5. **Easter Egg** - Konami code révèle une animation spéciale

### D) Performance et accessibilité

- **Preload** des fonts Inter et Source Serif
- **Lazy loading** des images équipe
- **Reduced motion** respecté pour accessibilité
- **Focus states** bien visibles pour navigation clavier

---

## Fichiers à modifier

| Fichier | Action |
|---------|--------|
| `src/pages/Welcome.tsx` | Refonte complète - Layout asymétrique, hiérarchie visuelle |
| `src/components/plateforme/ParcoursEnPratique.tsx` | Refonte "Orbital Journey" |
| `src/pages/Plateforme.tsx` | Réorganiser sections (vignettes avant repères) |
| `src/index.css` | Nouvelles animations (orbit, magnetic, grain) |

---

## Résumé des priorités

1. **Landing Page** : Découvrir = GRAND, Tester = compact avec textes xs
2. **Plateforme** : Layout orbital innovant, textes compacts
3. **Équipe** : Inchangée
4. **Global** : Micro-interactions premium, animations plus rapides

