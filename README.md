# Veltrio

Application moderne de gestion des dépenses, construite avec React, Vite et Firebase.

## Lancer le projet
1. Installez Node.js 20 ou plus récent.
2. Dans ce dossier : `npm install`
3. Copiez `.env.example` vers `.env` et renseignez les variables Firebase (ou gardez la configuration publique de démonstration dans `src/firebase.js`).
4. `npm run dev`, puis ouvrez l'URL indiquée.

## Configuration Firebase obligatoire
Dans [Firebase Console](https://console.firebase.google.com/) pour le projet `veltriov2` :
- **Authentication → Sign-in method** : activez Email/Password et Google.
- **Authentication → Settings → Authorized domains** : ajoutez votre domaine de production.
- **Firestore Database** : créez la base de données.
- Collez les règles de `firestore.rules` dans l'onglet Rules.
- Dans Authentication, configurez le nom et l'apparence du fournisseur Google si souhaité.

La configuration du client Firebase est directement intégrée dans `src/firebase.js`, comme dans une application web Firebase classique. La configuration client n’est pas un secret ; sécurisez les données via Authentication et les règles Firestore.

## Fonctionnalités
- Connexion / inscription par e-mail et mot de passe, Google, réinitialisation du mot de passe.
- Dépenses synchronisées par utilisateur dans Firestore.
- Tableau de bord, évolution mensuelle, répartition par catégories, recherche et filtres.
- Ajout, modification et suppression de dépenses.
- Budget mensuel, export CSV, préférences clair/sombre/système.
- Profil, déconnexion et interface responsive.

## Déployer sur Netlify
Consultez `NETLIFY.md`. Le fichier `netlify.toml` configure `npm run build`, le dossier `dist` et le fallback SPA.

## Synchronisation des données
Les dépenses sont enregistrées dans `users/{uid}/expenses` et le budget/préférences dans `users/{uid}/settings/preferences`. Les données ne sont pas stockées uniquement dans le téléphone. Firestore est la source de données, et les règles limitent chaque compte à ses propres documents.

## Build
`npm run build`

Les données financières sont privées par utilisateur. Ne publiez jamais des règles Firestore ouvertes à tous.
