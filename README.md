# Mission : Groupama Gan Vie - Développement d'une Application de Gestion de Comptes Rendus d'Activité

## Briefing de la Mission :
Bienvenue, agent. Votre mission, baptisée **"Opération CRA"**, consiste à déployer sur votre machine locale une application Angular top secrète. Vous allez suivre ces directives à la lettre pour garantir le succès de cette opération.

---

## Directives Opérationnelles :
### Objectif :
Développer et lancer une application Angular pour gérer les plannings de mission de nos agents spéciaux. Vous devez être capable de visualiser et modifier leurs Comptes Rendus d'Activité (CRA) et surveiller leurs missions sur une période de trois mois.
PS : le Calendrier ne se met pas à jour pour l'update d'une mission, et la semaine de repo n'a point eu le temps d'être gérée.

---

## Paramètres Techniques :
### Installation et Configuration :

1. **Préparer l'environnement** :

   Vous devez utiliser **nvm** (Node Version Manager) pour manipuler les différentes versions de Node.js. Voici vos instructions :

   **Étape 1 : Installer `nvm`**
   Si vous ne possédez pas déjà `nvm`, installez-le en suivant la procédure adaptée à votre OS :

   - **Linux / macOS** :
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     ```
     Ensuite, chargez `nvm` dans votre terminal :
     ```bash
     export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
     ```

   - **Windows** :
     Téléchargez et installez `nvm-windows` via [ce lien](https://github.com/coreybutler/nvm-windows/releases).

   **Étape 2 : Installer Node.js via `nvm`**
   Une fois `nvm` installé, choisissez la version de Node.js recommandée pour Angular :

   ```bash
   nvm install 18
   nvm use 18
   ```

2. **Installation d'Angular CLI** :

   L'interface de commande Angular sera votre outil principal. Installez-la avec la commande suivante :

   ```bash
   npm install -g @angular/cli
   ```

---

## Instructions de Déploiement :

### 1. Cloner le Dépôt :

Votre mission commence par l'acquisition du dépôt secret. Cloner le dépôt sur votre machine locale en utilisant la commande suivante :

```bash
git clone https://github.com/elioteuteu/operation-cra.git
cd operation-cra
```

### 2. Installation des Dépendances :

Une fois dans le répertoire du projet, armez-vous des dépendances nécessaires à l'aide de `npm` :

```bash
npm install
```

### 3. Lancer la Mission :

Lancez l'application sur un serveur local pour débuter votre mission :

```bash
ng serve
```

Votre interface de commandement sera disponible à l'adresse [http://localhost:4200](http://localhost:4200).

---

## Remarques de Briefing :
En cas de difficulté sur le terrain ou si vous avez besoin d'un renfort, contactez votre ligne de commandement. Vous avez une semaine pour accomplir cette mission.

Bon courage, agent. La réussite repose désormais sur vos épaules. 

---
Fin du message.