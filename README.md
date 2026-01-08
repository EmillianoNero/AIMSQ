![Alt text](src/image/logo.png)

# AIMSQ

Projet mélangeant web, musique et IA, ayant pour but de fournir la discographie d'un artiste sélectionné avec une option de recherche d'artiste équivalent.

## Avancée du projet

- Front-end : [█████░░░░░] 50%

- Back-end : [█████░░░░░] 50%

## Structure

### Front-end React

- [Lien vers le code](/src/react/aimsq-front/)

### Back-End Python

- [Lien vers le code](/src/python/)
- La liste des endpoints dans ce [fichier](/src/python/API%20request.md).

## Installations

Le projet possède 2 possibilités pour lancer le projet :  
- Une plus facile à l'aide de Docker qui va regrouper le front et le back dans un même conteneur.  
- Une deuxième un peu plus longue en réalisant toutes les commandes d'installations et de lancement de chaques parties.

### Docker-compose

Lancer la commande :

    docker-compose up


### Côté Python

Se déplacer dans le bon répertoire :

    cd src/python

Créer l'environement python :

    python -m venv .venv  

Démarrer l'environement python :

    .venv\Scripts\Activate.ps1

Télécharger les dépendances :

    pip install -r requirements.txt

Lancer l'api :

    uvicorn app.main:app --reload

### Côté React

Se déplacer dans le bon répertoire : 

    cd /src/react/aimsq-front

Installer les dépendances :

    npm install

Lancer l'application React :

    npm run dev


    

