# Déployer Veltrio sur Netlify

## Déploiement par Git (recommandé)
1. Décompressez `Veltrio.zip`, puis poussez le dossier du projet dans un dépôt GitHub.
2. Dans Netlify, choisissez **Add new site → Import an existing project** et sélectionnez le dépôt.
3. Netlify détecte `netlify.toml`. Vérifiez :
   - Build command : `npm run build`
   - Publish directory : `dist`
4. Aucune variable d’environnement Netlify n’est nécessaire : la configuration Firebase est intégrée dans `src/firebase.js`.
5. Lancez le déploiement.
6. Dans Firebase Console → Authentication → Settings → Authorized domains, ajoutez le domaine Netlify du site (ex. `mon-site.netlify.app`) et votre domaine personnalisé si nécessaire.
7. Vérifiez que les méthodes Email/Password et Google sont activées dans Firebase Authentication, et que Firestore est créé avec les règles de `firestore.rules`.

## Déploiement manuel
Dans le dossier du projet, exécutez `npm install` puis `npm run build`. Dans Netlify, déployez le dossier `dist` via le déploiement manuel. Aucune variable Firebase n’est requise dans Netlify.

## Sécurité et données
- Les dépenses sont enregistrées dans Firestore sous `users/{uid}/expenses/{expenseId}`.
- Les préférences et le budget sont dans `users/{uid}/settings/preferences`.
- Les règles Firestore restreignent les lectures/écritures à l'utilisateur authentifié propriétaire du chemin.
- La configuration Firebase côté navigateur n’est pas un secret. La sécurité repose sur Firebase Authentication et les règles Firestore.
- N'utilisez jamais de règles Firestore autorisant tout le monde à lire/écrire.
