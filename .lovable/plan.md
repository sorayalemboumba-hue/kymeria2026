
# Patch correctif (3 points)

## 1. Header : Supprimer le doublon CTA entre 768px et 1024px

**Probleme** : Entre 768px et 1024px, deux blocs CTA sont visibles simultanement :
- Le CTA desktop "Demander une demo" (`hidden md:block`, visible des 768px)
- Le CTA mobile "Demo" + hamburger (`lg:hidden`, visible sous 1024px)

**Correction** : Remonter le CTA desktop a `hidden lg:block` (visible seulement avec la nav desktop, des 1024px). Le bloc mobile+hamburger (`lg:hidden`) reste inchange et couvre tout ce qui est en dessous de 1024px, avec le bouton "Demo" compact et le hamburger.

**Fichier : `src/components/layout/Header.tsx`** (ligne 76)

`hidden md:block` devient `hidden lg:block`

## 2. Contact : Corriger la soumission Formspree

**Analyse** : Le PDF Formspree confirme l'endpoint `mbdadbpv`. Le code actuel envoie en `application/x-www-form-urlencoded` avec un header `Accept: application/json`, ce qui peut creer un conflit. Formspree recommande soit un envoi HTML classique (form-encoded sans header Accept), soit un envoi AJAX en JSON pur.

**Correction** : Passer a l'envoi JSON (recommande par Formspree pour les apps React) :
- Construire un objet JSON a partir des champs du formulaire
- Envoyer avec `Content-Type: application/json` et `Accept: application/json`
- Conserver le logging d'erreur detaille (status + body)

**Fichier : `src/pages/Contact.tsx`** (lignes 40-51)

```text
Avant : URLSearchParams + Content-Type: x-www-form-urlencoded
Apres : JSON.stringify({...fields}) + Content-Type: application/json
```

## 3. Aucun changement sur le diagramme equipe ni la landing

Ces elements ont deja ete corriges dans les patches precedents et ne sont pas concernes ici.

---

## Fichiers modifies (2)

| Fichier | Modification |
|---------|-------------|
| `src/components/layout/Header.tsx` | CTA desktop passe de `md:block` a `lg:block` pour supprimer le doublon |
| `src/pages/Contact.tsx` | Envoi Formspree converti en JSON pour compatibilite React/AJAX |
