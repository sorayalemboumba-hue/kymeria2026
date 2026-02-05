

# Corrections Site KymerIA 2026

## Résumé des 5 corrections à appliquer

Ce plan détaille les modifications précises demandées dans le document de corrections.

---

## 1. Correction HOME — Changement de l'accroche

### Fichier concerné
`src/pages/Index.tsx`

### Modification unique

| Ligne | Élément | Actuel | Nouveau |
|-------|---------|--------|---------|
| 37 | Titre Hero | "Développer, entraîner et faire progresser les compétences humaines" | **"Développer, entraîner et mesurer les compétences humaines qui font la différence."** |

Le reste de la page reste inchangé.

---

## 2. Correction Page Pourquoi KymerIA — CTA

### Fichier concerné
`src/pages/Pourquoi.tsx`

### Modifications de la section CTA finale (lignes 139-152)

| Élément | Actuel | Nouveau |
|---------|--------|---------|
| Titre H2 | "Cette approche vous parle ?" | Supprimer ce titre |
| CTA Button | "Comprendre notre approche" | **"Découvrir l'équipe derrière KymerIA"** |
| Lien | `/contact` | **`/equipe`** |
| Sous-texte | (absent) | Ajouter : **"Notre vision, notre cadre, nos responsabilités."** |

La structure finale sera un CTA avec sous-texte discret, qui redirige vers la page Équipe.

---

## 3. Correction PAGE LA PLATEFORME — Refonte structurelle complète

### Fichier concerné
`src/pages/Plateforme.tsx`

### Architecture finale de la page

**HERO (légèrement ajusté)**
- Titre : "Un espace structuré pour entraîner et évaluer les **compétences humaines**"
- Sous-titre : conservé
- Grille des 6 compétences : conservée

**SECTION CENTRALE — COMMENT ÇA MARCHE (nouvelle structure)**

Cette section remplace les anciennes sections "Entraîner par la pratique" et "Évaluer pour progresser" qui étaient redondantes. Nouvelle organisation :

1. **Une plateforme simple, prête à l'emploi**
   - Plateforme intuitive, user-friendly et immédiatement opérationnelle
   - Différents niveaux d'accès : utilisateurs, managers, formateurs et organisations

2. **Une co-création avec chaque organisation**
   - Définition des contextes métiers
   - Création de personas
   - Identification des compétences relationnelles à travailler
   - Citation : "La plateforme et l'équipe KymerIA s'adaptent aux utilisateurs, jamais l'inverse."

3. **Des personas riches et réalistes**
   - Origines, niveaux socio-économiques, personnalités
   - Accents, exigences relationnelles, contraintes métier
   - Citation : "Ils permettent de s'entraîner dans des situations proches du réel, sans exposition inutile."

4. **Entraînement vocal autonome ou accompagné**
   - Autonome ou accompagné
   - Intuitif
   - Conforme aux règles éthiques, légales et réglementaires suisses

5. **Feedback immédiat, clair et actionnable**
   - Feedback structuré
   - Note contextualisée
   - Recommandations alignées avec les scénarios travaillés

6. **Analyse, suivi et export des données (AUTOMATIQUE)**
   - Automatiquement structurées
   - Automatiquement exportables
   - Directement exploitables par managers et formateurs
   - Note : "Les formats et usages des données sont adaptés aux besoins du client."

7. **Continuité avec les dispositifs existants**
   - Renvoi vers les catalogues internes
   - Complémentarité avec les parcours en place
   - Continuité entre formation, pratique et accompagnement

8. **Robustesse, supervision et sécurité**
   - Corrections immédiates en cas d'erreur ou d'hallucination
   - Supervision humaine continue
   - Données protégées et anonymisées
   - Conservation maximale des données : 1 an

**3 REPÈRES VISUELS (nouvelles cartes épurées après "Comment ça marche")**

Ces 3 éléments sont présentés comme des tuiles/cartes visuelles sans contenu explicatif supplémentaire (titre + phrase courte seulement) :

1. **Entraîner par la pratique**
   → "Des situations réalistes pour s'exercer sans pression ni jugement."

2. **Évaluer pour progresser**
   → "Des indicateurs clairs et exploitables pour objectiver les progrès."

3. **IA encadrée et supervisée**
   → "Une technologie maîtrisée, conforme et responsable, jamais autonome."

**CTA FINAL**
- Titre supprimé (CTA direct)
- Bouton : "Découvrir la plateforme en situation réelle" → /contact

---

## 4. Réécriture PAGE ÉQUIPE — Textes complets validés

### Fichier concerné
`src/pages/Equipe.tsx`

### Modifications majeures

**HERO**
- Titre : **"Une équipe engagée, responsable et complémentaire"**
- (Remplace "Une équipe responsable au service de dispositifs durables")

**SECTION INTRODUCTION (nouvelle)**
- Texte d'introduction : "Chez KymerIA, la technologie n'est jamais une finalité. Ce qui fait la différence, c'est la manière dont elle est conçue, encadrée et mise au service des organisations."

**SECTION EXPERTISE PLURIDISCIPLINAIRE (mise à jour)**

Nouveaux libellés pour les 4 domaines :
1. Expertise pédagogique et formation
2. Compréhension fine des enjeux humains et organisationnels
3. Maîtrise opérationnelle de l'intelligence artificielle en production
4. Exigence éthique, réglementaire et sécuritaire

Nouvelle phrase de conclusion : "Notre objectif est clair : concevoir des dispositifs fiables, utiles et responsables, capables de s'inscrire durablement dans des contextes professionnels et institutionnels exigeants."

**SECTION ÉQUIPE (réécriture complète avec descriptions détaillées)**

1. **Swann Asensio** — Cofondateur – Direction & vision produit
   - Description : "À l'origine de la vision KymerIA, Swann pilote la cohérence globale du dispositif : technologie, pédagogie, usages et cadre éthique."
   - Points clés : pertinente pour les organisations, mesurable dans ses impacts, maîtrisée dans ses usages, alignée avec des exigences institutionnelles élevées

2. **Sasha Asensio** — Cofondateur – Développement commercial & partenariats
   - Description : "Sasha accompagne les entreprises, institutions et centres de formation dans l'exploration des usages KymerIA."
   - Points clés : comprendre les enjeux spécifiques, structurer des projets pilotes adaptés, construire des partenariats durables

3. **Soraya Koite** — Responsable pédagogique & accompagnement
   - Description : "Au cœur du dispositif KymerIA, Soraya intervient à l'interface entre les utilisateurs, les formateurs et la plateforme."
   - Points clés : cohérence pédagogique des scénarios, intégration intelligente de l'évaluation

4. **Romain Kohn** — Développeur IA & architecture
   - Description : "Romain est responsable de la fiabilité technique et de la robustesse de la plateforme KymerIA."
   - Points clés : stabilité de l'architecture, qualité des interactions IA en production, détection et correction des anomalies, optimisation continue des performances

5. **Yann Anspach** — Développeur IA, UX & conformité
   - Description : "Yann veille à ce que la plateforme reste intuitive, conforme et adaptable."
   - Points clés : intuitive pour les utilisateurs, conforme aux cadres légaux, adaptable aux contraintes spécifiques, veille continue sur conformité et protection des données

**NOUVELLE SECTION — Une IA supervisée par des humains, en continu**

- Introduction : "Chez KymerIA, l'intelligence artificielle n'est jamais livrée seule."
- Points : supervisée, ajustée, corrigée, optimisée en continu
- Contexte : "par l'équipe KymerIA, en lien avec les retours utilisateurs, les besoins clients et les évolutions réglementaires."
- Garanties : fiabilité du dispositif, maîtrise des risques, adaptation constante aux réalités du terrain

**CTA**
- Conservé : "Échanger avec l'équipe KymerIA" → /contact

---

## 5. Corrections PAGE CONTACT — Titre et CTA

### Fichier concerné
`src/pages/Contact.tsx`

### Modifications précises

| Ligne | Élément | Actuel | Nouveau |
|-------|---------|--------|---------|
| 48 | Titre Hero H1 | "Entrer en discussion" | **"Discuter d'un projet pilote KymerIA"** |
| 206 | Bouton submit | "Entrer en discussion" | **"Envoyer"** |

Le reste de la page (formulaire, infos contact, section engagement) reste inchangé.

---

## Résumé des fichiers à modifier

| Fichier | Modification |
|---------|-------------|
| `src/pages/Index.tsx` | Changement du titre Hero uniquement |
| `src/pages/Pourquoi.tsx` | CTA redirige vers /equipe + nouveau texte |
| `src/pages/Plateforme.tsx` | Refonte complète de la structure |
| `src/pages/Equipe.tsx` | Réécriture complète avec descriptions détaillées |
| `src/pages/Contact.tsx` | Titre Hero + bouton submit |

---

## Contraintes respectées

- Aucun tiret (-) dans les listes (utilisation d'icônes/puces)
- Ponctuation française avec espaces insécables
- Paragraphes courts et web-friendly
- Ton institutionnel sans marketing agressif
- Pas de répétitions entre sections
- CTAs spécifiques par page selon la stratégie validée
- Design premium et perception haut de gamme pour organisations suisses 2026

