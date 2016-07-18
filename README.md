##polymer-200-certification

Cette application permet de vérifier vos connaissances et votre compréhension de la SFEIR School Polymer.


**DUREE: 2H**

### Installation

Afin de passer cet examen, vous devez cloner ce projet:

```bash
$ cd /path/to/workspace
$ git clone https://github.com/Sfeir/polymer200-certification.git
```

### Pour préparer votre environnement:

```bash
$ npm install
$ bower install
```

### Pour lancer l'application

```bash
$ node server/server
$ polymer serve
```

### On passe aux choses sérieuses :)

L'application consiste à gérer une liste de films.

Elle est composé en 3 parties: liste, détails et édition.

Les choses obligatoires pour être évalué sont énumérées ci-dessous.

#### Maquettes
Vous disposez de 3 fichiers dans le répertoire maquettes pour vous donner une idée des pages attendus:

* movie-list.html qui représente la liste des films
* movie-detail.html pour le détail d'un film
* movie-edit.html pour éditer ou créer un film

#### Lancement de l'application

Vous devez lancer l'application avec comme composant principal movie-app.html



L'application possède une barre de navigation, un logo qui ramène à la liste et un lien pour ajouter un nouveau film.
Au lancement, l'application doit arrivée sur la page de listing à l'url /list

#### Page de listing

Elle est accessible à l'url `/list`.

* Elle doit afficher la liste des **FILMS**
* L'url de l'api à utiliser pour récupérer la liste des films est: GET:http://localhost:3001/api/movies 
* On doit pouvoir basculer entre un affichage vignette ou liste à l'aide d'icones
* En mode vignette, on doit pouvoir filtrer la liste par rapport au titre grâce au champ de saisie
* Les vignettes sont une représentation light proposée par le composant **movie-card**
* La note du film doit être représentée par des étoiles (en mode vignette)

#### Page de détail

Elle est accessible à l'url `/movie/:id`.

* Elle doit afficher les informations d'un **FILM** 
* L'url de l'api à utiliser pour récupérer un film est: GET:http://localhost:3001/api/movies/:id
* On affiche une représentation complète proposée par le composant **movie-card**
* La note du film doit être représentée par des étoiles

#### Page de création

Elle est accessible à l'url `/edit`.

* Elle doit afficher le formulaire de création d'un **FILM** 
* L'url de l'api à utiliser pour créer un nouveau film est: POST:http://localhost:3001/api/movies 
* Les champs `titre` et `status` sont obligatoire
* Elle doit permettre la validation du formulaire
* Une fois le film créé, on redirige vers la liste
* L'affichage des messages d'`erreur` doit être géré.

#### Page d'édition

Elle est accessible à l'url `/edit/{id}`.

* Elle doit afficher le formulaire de création d'un **FILM**
* Les champs doivent être pré-remplis avec les informations du film en cours de modification
* L'url de l'api à utiliser pour récupérer un film est: GET:http://localhost:3001/api/movies/:id
* L'url de l'api à utiliser pour modifier un film est: PUT:http://localhost:3001/api/movies/
* Les champs `titre` et `status` sont obligatoire
* Elle doit permettre la validation du formulaire
* Une fois le film créé, on redirige vers la liste
* L'affichage des messages d'`erreur` doit être géré.


### BONUS

Comme vous êtes des ***élèves*** studieux et très performant, le challenge sera facile à réaliser :)

Dans ce cas, nous mettons à votre disposition une liste de **bonus** afin de faire gonfler votre note et d'exploser le score :)

Sachez néanmoins, que si la partie obligatoire n'est pas réalisée correctement, les **bonus ne rattraperont pas** la note.

#### Une meilleure liste

* Dans la page liste mettez en avant le mode d'affichage sélectionné au niveau des icones (couleur bleu par exemple)
* Le nombre de films doit être mis à jour quand on filtre

#### Dupliquer du code s'est source d'erreurs

La page de création et d'édition doit être la même

#### un peu de couleurs
nous allons améliorer le look and feel de notre application (par exemple sur le **movie-card**):

* utilisez au maximum les propriétés et mixins des composants polymer
* exposez des propriétés et mixins pour votre composant (title, liens, icones...);
* modifiez l'ensemble du thème


#### des formulaires plus intelligent
nous affichons un message d'erreur uniquement pour les champs obligatoire

* valider le format de  l'année de sortie et qu'elle ne soit pas supérieure à la date du jour 
* proposer un squelette de composant (sans l'implémentation) qui permetrait d'afficher plusieurs messages d'erreurs

