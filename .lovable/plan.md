

# Patch cible (5 corrections)

## 1. Welcome (/) : Supprimer le CTA secondaire "Decouvrir la plateforme"

**Fichier : `src/pages/Welcome.tsx`** (lignes 81-87)

Supprimer le lien discret "Decouvrir la plateforme" sous le bouton "Decouvrir kymeria".

## 2. Welcome (/) : Unifier la formule dans les deux sections

Remplacer les deux formules differentes par une seule identique :

- Ligne 56 : "S'entrainer. Ajuster. Progresser." devient **"S'entrainer. Repeter. Ajuster. Maitriser."**
- Ligne 130 : "Repeter. Ajuster. Maitriser." devient **"S'entrainer. Repeter. Ajuster. Maitriser."**

## 3. Welcome (/) : Simplifier le CTA entreprise

Ligne 114 : remplacer "Log-in espace entreprise" par **"Log-in"**.

## 4. Home (/home) : Aerer les sous-titres du hero

Les sous-titres sont deja alignes a droite (`text-right`) dans un `max-w-2xl ml-auto`. Pour les aligner completement a droite de la page (au meme niveau que le titre "quotidien" de la section suivante), ajuster le conteneur :

- Retirer `max-w-3xl` du wrapper parent pour que le bloc de sous-titres puisse aller plus a droite
- Ou augmenter le `max-w-2xl` du bloc sous-titres et ajuster `ml-auto` pour pousser le texte vers le bord droit

Approche : elargir le conteneur hero principal et garder `ml-auto` sur le bloc sous-titres pour qu'il colle au bord droit, donnant plus de respiration entre le titre (gauche) et les sous-titres (droite).

## 5. Header : Corriger la navigation invisible entre 768px et 1024px

**Probleme identifie** : Les liens de navigation utilisent `hidden lg:flex` (visibles a partir de 1024px). Le hamburger utilise `md:hidden` (visible en dessous de 768px). Entre 768px et 1024px, ni les liens ni le hamburger ne sont affiches, seuls le logo et le CTA "Demander une demo" sont visibles.

**Correction** : Afficher le hamburger pour tous les ecrans ou les liens de nav ne sont pas visibles. Changer `md:hidden` en `lg:hidden` pour le bloc hamburger, afin qu'il apparaisse entre 768px et 1024px aussi.

- Bloc hamburger (ligne 90) : `flex items-center gap-2 md:hidden` devient `flex items-center gap-2 lg:hidden`
- Garder le CTA desktop `hidden md:block` (visible des 768px)
- Le menu deroulant mobile (ligne 117) est deja `lg:hidden`, donc il fonctionnera correctement

---

## Fichiers modifies (3)

| Fichier | Modifications |
|---------|--------------|
| `src/pages/Welcome.tsx` | Supprimer CTA secondaire, unifier formule, simplifier "Log-in" |
| `src/pages/Index.tsx` | Elargir conteneur hero, pousser sous-titres a droite |
| `src/components/layout/Header.tsx` | Hamburger visible entre md et lg |

