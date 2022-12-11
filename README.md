Ce projet est une application qui fait des requêtes à l'API Openweathermap
afin de récolter les donneés et les afficher sur smartphones IOS / Android.

https://user-images.githubusercontent.com/72311987/206912351-74801739-5247-4979-8304-e28e5557b6f5.mp4

Technos utilisés:
Expo (React Native) pour la création de l'application

React Navigation pour le routage et la navigation de l'application

Expo-location pour récupérer la position de l'utilasateur

Utilisations de composants fonctionnels et des HOOKS:

- useState pour la gestion de l'état locale
- useEffect pour l'exécution aprés chargement

Axios pour effectuer les requêtes

MomentJs pour le format des dates

Pour Utiliser cette app
Vous pouvez commencer par cloner ce référentiel et utiliser react-native-rename . Dans l'état actuel de ce projet, cela ne devrait vous poser aucun problème, exécutez simplement le script, supprimez vos modules de nœud et réinstallez-les et vous devriez être prêt à partir.

Gardez à l'esprit que cette bibliothèque peut causer des problèmes si vous renommez un projet qui utilise Podsdu côté iOS.

Après cela, vous devez procéder comme avec n'importe quel projet javascript :

Accédez au dossier racine de votre projet et exécutez npm install.
Si vous utilisez Xcode 12.5 ou supérieur, accédez à /ios et exécutez pod install --repo-update`
Exécutez npm run iosou npm run androidpour démarrer votre application !
(Avec du fil : yarn ios ou yarn android).
Il est important de vous procurer une clé de l'API https://openweathermap.org/
Créer un fichier app.config.ts et faire "export const apiKey = "votre clé"
Puis exécuter npx expo start
