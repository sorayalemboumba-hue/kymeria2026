# Patch d'optimisation -- Corrections ciblees

## 1. Home (/home) -- Supprimer le CTA hero + aerer les sous-titres

**Fichier : `src/pages/Index.tsx**`

&nbsp;

- Aligner les deux paragraphes de sous-titres a droite (`text-right`) pour un rendu elegant et aere
- Augmenter le spacing : `mb-6` entre les deux paragraphes, `max-w-2xl` pour le deuxieme paragraphe
- Ajouter plus de `leading-relaxed` et de respiration verticale avant la transition

## 2. Page Equipe (/equipe) -- Refonte du diagramme "L'humain au centre"

**Fichier : `src/pages/Equipe.tsx**`

Probleme visible sur le screenshot : le cercle SVG et ses labels sont rognes/coupes, "L'humain au centre" est tronque, "Supervision kymeria" deborde.

Correction :

- Remplacer le diagramme SVG actuel par un design plus innovant et robuste :
  - 3 cartes/badges disposes en triangle autour d'un centre textuel
  - Centre : "L'humain au centre" dans un cercle avec bordure gradient
  - 3 poles relies visuellement : "Usage client", "Supervision kymeria", "Ajustements"
  - Utiliser flexbox/grid au lieu de positionnement absolu (pas de rognage possible)
  - Animations subtiles de rotation ou glow sur les connexions
- Supprimer le `overflow-hidden` sur la section parente
- Responsive natif : les 3 poles passent en colonne sur mobile

## 3. Contact (/contact) -- Corriger le formulaire Formspree

**Fichier : `src/pages/Contact.tsx**`

Le screenshot montre "Erreur d'envoi" en rouge. L'analyse du code montre que le formulaire utilise `FormData` avec un header `Accept: application/json`. Le probleme probable est que Formspree attend certains headers ou que le formulaire n'est pas publie.

Corrections :

- Ajouter un header `Content-Type` explicite ou envoyer en mode `application/x-www-form-urlencoded` (plus compatible Formspree)
- Convertir FormData en URLSearchParams pour un envoi form-encoded fiable
- Ameliorer le logging d'erreur pour diagnostiquer

## 4. Header CTA -- Visible sur tous les formats

**Fichier : `src/components/layout/Header.tsx**`

Probleme : le bouton "Demander une demo" utilise `hidden lg:block` (visible seulement au-dessus de 1024px). Sur tablette (834px) et mobile, seul le hamburger menu est visible, le CTA n'apparait pas directement.

Correction :

- Afficher le bouton CTA "Demander une demo" a cote du hamburger menu sur tablette/mobile
- Changer `hidden lg:block` en `hidden md:block` pour le CTA desktop (visible des 768px)
- Sur mobile (< 768px), afficher un bouton CTA compact a cote du hamburger
- Reduire la taille du bouton CTA sur les ecrans intermediaires (`text-xs px-4 py-2` sur md, `text-sm px-6` sur lg)

## 5. Pourquoi (/pourquoi) -- Aucun changement

Page deja conforme. Aucune modification requise.

---

## Fichiers modifies (4)


| Fichier                            | Modification                                              |
| ---------------------------------- | --------------------------------------------------------- |
| `src/pages/Index.tsx`              | Supprimer CTA hero, aligner sous-titres a droite, aerer   |
| `src/pages/Equipe.tsx`             | Refonte diagramme en layout flexbox, suppression overflow |
| `src/pages/Contact.tsx`            | Fiabiliser envoi Formspree (form-encoded)                 |
| `src/components/layout/Header.tsx` | CTA visible des tablette, compact sur mobile              |


---

## Details techniques

### Diagramme Equipe (nouveau design)

Le diagramme actuel utilise du positionnement absolu avec des labels qui debordent du conteneur. Le nouveau design utilisera un layout en grille 3 colonnes avec le centre en position relative, garantissant qu'aucun element ne soit rogne. Les connexions seront representees par des lignes CSS (bordures/pseudo-elements) plutot que des arcs SVG.

### Formspree

L'envoi actuel utilise `FormData` brut. Le correctif convertira en `URLSearchParams` pour un `Content-Type: application/x-www-form-urlencoded` automatique, plus compatible avec Formspree sans configuration CORS speciale.

### Header responsive

Le breakpoint `lg` (1024px) est trop haut pour le CTA. Le correctif abaisse a `md` (768px) pour le bouton desktop, et ajoute un bouton compact entre le logo et le hamburger pour les ecrans < 768px.