
# Optimisation kymeria2026 -- Diff Final

## Vue d'ensemble

Application exacte des modifications validees sur 10 fichiers, sans refonte. Corrections textuelles, harmonisation marque "kymeria" en minuscules, CTA unifies, ajouts fonctionnels (timeline 180s, drawer equipe, LinkedIn footer).

---

## A) Header (toutes pages)

**Fichier : `src/components/layout/Header.tsx`**

| Avant | Apres |
|-------|-------|
| Bouton "Demander une demo" | Conserver tel quel (deja correct) |
| Navigation "KymerIA" dans le header | Verifier que le logo est le seul branding |

Aucun changement sur le bouton header (deja "Demander une demo").

---

## B) Footer (toutes pages)

**Fichier : `src/components/layout/Footer.tsx`**

1. Ajouter lien LinkedIn avec icone + texte "LinkedIn" + `target="_blank"` dans la section Informations
   - URL : `https://www.linkedin.com/company/kymeria-platform/?viewAsMember=true`
   - Import de l'icone `Linkedin` depuis lucide-react
2. Verifier lien CGU present (deja present)
3. Remplacer "KymerIA" par "kymeria" dans le texte du footer (copyright, description) sauf raison sociale

---

## C) Page Welcome (/)

**Fichier : `src/pages/Welcome.tsx`**

| Element | Avant | Apres |
|---------|-------|-------|
| Logo texte | `kymer<span>IA</span>` | `kymeria` (tout minuscule, "ia" en accent) |
| H1 | "Bienvenue sur KymerIA" | "Bienvenue sur kymeria" |
| Section Decouvrir CTA | "Decouvrir KymerIA" | "Decouvrir kymeria" |
| Section Tester titre | "Tester" | "Espace entreprise" |
| Section Tester sous-titre | "Moments cles a maitriser" | Supprimer |
| Section Tester liste moments | 4 items affiches | Supprimer |
| Section Tester CTA | "Choisir et tester" | "Log-in espace entreprise" |
| Section Parcours H2 | "Un parcours immersif" | "La precision du terrain" |
| Section Parcours texte | texte actuel | Texte exact valide (SaaS + IA) |
| Footer interne | "KymerIA" | "kymeria" |

---

## D) Page Accueil (/home)

**Fichier : `src/pages/Index.tsx`**

1. **Intro** : Remplacer "KymerIA est une plateforme suisse..." par "kymeria est une plateforme en ligne (SaaS) suisse d'entrainement et d'evaluation continue des soft skills, qui s'appuie sur l'IA."
2. **Alleger phrase 2** : Eviter repetition "durable/duree"
3. **Trust header** : Ajouter apres l'intro, avant le CTA : "Hebergement suisse . Aucune donnee client pour entrainer l'IA . Supervision humaine" (ligne compacte de badges)
4. **CTA haut** : "Demander une demo" (remplacer "Demander une demonstration personnalisee")
5. **Anti-negatif** : "Elles sont pourtant rarement entrainees dans la duree." -> "Elles gagnent a etre entrainees dans la duree."
6. **Section reponse** : "La reponse KymerIA" -> "La reponse kymeria", "KymerIA complete..." -> "kymeria complete..."
7. **Managers** : "sans controle ni jugement" -> "avec cadre, clarte et progression"
8. **Trust 4e item** : "Compatible avec des environnements publics et prives" -> "Droits d'acces definis selon vos regles"
9. **CTA final** : "Decouvrir la plateforme" -> `/plateforme` (remplacer lien /contact et texte "Demander une demonstration personnalisee")
10. **Texte CTA final** : "Decouvrir comment KymerIA..." -> "Decouvrir comment kymeria..."

---

## E) Page Pourquoi (/pourquoi)

**Fichier : `src/pages/Pourquoi.tsx`**

1. "La conviction KymerIA" -> "La conviction kymeria"
2. CTA bas : "Decouvrir l'equipe derriere KymerIA" -> "Decouvrir l'equipe derriere kymeria"
3. Section conviction : remplacer "L'evaluation peut etre constructive" par "L'evaluation peut etre constructive, encourageante et utile -- lorsqu'elle est cadree par une finalite claire et des droits d'acces explicites."
4. Section engagement : ajouter une 4e puce : "Ou les droits d'acces et la tracabilite sont explicitement definis (qui voit quoi, et pourquoi)."
5. "KymerIA propose un cadre" -> "kymeria propose un cadre"

---

## F) Page Plateforme (/plateforme)

**Fichier : `src/pages/Plateforme.tsx`** + **`src/components/plateforme/ParcoursEnPratique.tsx`**

1. **CTA principal** : "Decouvrir la plateforme en situation reelle" -> "Demander une demo"
2. **CTA secondaire** : "Tester un moment cle" -> "Tester un scenario"
3. **"KymerIA" partout** : remplacer par "kymeria" (hero, etapes, textes)
4. **Conservation donnees** : "Conservation maximale des donnees : 1 an" -> "Conservation des donnees : selon politique client (paramétrable)"
5. **Intro 7 etapes** : inserer avant les 7 etapes le texte "7 reperes pour cadrer une session de 3 minutes :" (remplacer le libelle existant)

### Timeline 180s (nouveau composant)

Insertion dans `ParcoursEnPratique.tsx`, juste apres le H2 "Et si une session de 3 minutes suffisait ?" et avant les 7 etapes :

- Titre micro : "En 180 secondes, 3 moments"
- 3 etapes cliquables (stepper horizontal) :
  - **Cadrer** : "objectif, regles de visibilite, criteres"
  - **Converser** : "mise en situation courte, centree sur la posture"
  - **Feedback** : "retour structure, actionnable, tracable"
- Design : stepper 3 points relies par une ligne, glow discret sur l'etape active, coherent dark premium

---

## G) Page Equipe (/equipe)

**Fichier : `src/pages/Equipe.tsx`**

1. **H1** : conserver "Une equipe engagee, responsable et complementaire" (ne pas changer)
2. **Badge positionnement** : ajouter sous H1 un badge discret "equipe suisse -- deploiement & gouvernance"
3. **"kymeria" en minuscules** partout
4. **Cartes compactes + Drawer** :
   - Transformer les cartes actuelles (grandes, avec bio complete) en cartes compactes : photo + nom + role + 1 ligne "angle d'expertise"
   - Ajouter un bouton "Decouvrir l'expertise" sur chaque carte
   - Au clic : ouvrir un Sheet (drawer lateral droit) avec la bio complete inchangee
   - Grille : 1 col mobile, 2 cols desktop, 5e carte centree
5. **Schema IA supervisee** : ajouter dans la section "Une IA supervisee" un diagramme circulaire simple en CSS/SVG :
   - Centre : "L'humain au centre"
   - Boucle : "Usage client -> Supervision kymeria -> Ajustements"

---

## H) Page Contact (/contact)

**Fichier : `src/pages/Contact.tsx`**

1. **H1** : "Discuter d'un projet pilote KymerIA" -> "Demander une demo"
2. **Mention pilote** : ajouter sous H1 : "Vous souhaitez plutot cadrer un pilote ? Nous le construisons avec vous, selon vos contraintes."
3. **"demonstration"** : "Explorer une demonstration ou un projet pilote" -> "Explorer une demo ou un projet pilote kymeria."
4. **Bouton formulaire** : "Envoyer" -> "Demander une demo"
5. **Ligne post-bouton** : ajouter sous le bouton : "Cadre suisse . Acces maitrises . Demo ou pilote, selon vos enjeux."
6. **"KymerIA"** -> "kymeria" partout (sauf raison sociale)

---

## I) Page CGU (/cgu)

**Fichier : `src/pages/CGU.tsx`**

1. "plateforme KymerIA" -> "plateforme kymeria" (sauf "KymerIA Sarl" = raison sociale)
2. Integrer "solution en ligne (SaaS)" dans la phrase de l'article 1 existante
3. Remplacer toutes les occurrences "KymerIA" (marque) par "kymeria" sauf raison sociale

---

## J) SEO (index.html)

**Fichier : `index.html`**

1. title : "kymeria | Plateforme suisse..." (minuscule)
2. meta description : conserver, ajuster "KymerIA" -> "kymeria"
3. OG tags : idem
4. Twitter tags : idem

---

## K) Check final

Apres implementation, verification systematique :
- Tous les "KymerIA" remplaces par "kymeria" (sauf "KymerIA Sarl" dans CGU)
- CTA "Demander une demo" en header + pages (pas de doublons contradictoires)
- CTA bas /home = "Decouvrir la plateforme" -> /plateforme
- Timeline 180s visible et fonctionnelle
- Drawer equipe fonctionnel
- LinkedIn + CGU en footer
- Contrastes et lisibilite OK

---

## Fichiers modifies (10)

| Fichier | Type de modification |
|---------|---------------------|
| `index.html` | SEO meta tags |
| `src/components/layout/Header.tsx` | Aucun changement necessaire (deja correct) |
| `src/components/layout/Footer.tsx` | LinkedIn, kymeria minuscule |
| `src/pages/Welcome.tsx` | Textes, CTA, section Espace entreprise |
| `src/pages/Index.tsx` | Intro SaaS, trust header, CTA, textes |
| `src/pages/Pourquoi.tsx` | Conviction, engagement, kymeria |
| `src/pages/Plateforme.tsx` | CTA, conservation donnees, kymeria |
| `src/components/plateforme/ParcoursEnPratique.tsx` | Timeline 180s, CTA secondaire, titre 7 reperes |
| `src/pages/Equipe.tsx` | Cartes compactes + drawer, badge, schema IA |
| `src/pages/Contact.tsx` | H1, pilote, bouton, ligne post-bouton |
| `src/pages/CGU.tsx` | kymeria minuscule, SaaS |
