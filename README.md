# MVRV Database

## Démarrage et installation du projet
Cloner le projet et ouvrir un terminal puis lancer la commande dans le dossier backend et le dossier frontend :
```
npm install
```

Une fois le projet installer, lancer le fichier "start.bat"
Celui-ci lancera automatiquement la base de donnée et le serveur web

Créer un fichier ".env" dans backend, voici le contenu du .env à insérer dans le fichier
```
PORT=5555
MONGODB_URL=mongodb://localhost:27017/mvrv
```

Lancer le logiciel MongoDB, se connecter, aller dans la table mvrv :
cliquer sur articles, puis "Add Data", "Import JSON" et importer le fichier correspondant qui se trouve dans le dossier data.
Faire de meme avec users et heros
* Note : si heros et streamers n'est pas dans la base de donnée, le créer en cliquant sur le + à coté de mvrv
