# Open-Data-web
Création d'une  API sur un jeu de données data.gouv

Le projet sur lequel nous travaillons concerne les logements sociaux et leur prix au m². 

Pour mener à bien ce projet, plusieurs tâches sont à réaliser.

Il faut en premier lieu extraire le nombre de logement social et leur prix.

Grâce aux données, nous pourrons mettre en évidence un lien entre le nombre de logements sociaux et leur prix par région.

Dans un second temps, nous récupérerons les données d’une autre API et ce en fonction de la relation avec les données de notre propre API.

Nous réaliserons par la suite une interface permettant d'obtenir les logements sociaux et leur prix à partir de n’importe quelle adresse.

En concomitance, nous avons pour tâche de réaliser une documentation de git.

Afin d'effectuer au mieux ce travail, nous utiliserons également Swagger (qui est un langage dans le but de concevoir des API) et Scalingo.

Au cours de ce projet, nous allons utilisé diverses bases de données.

Le premier fichier csv (construction_logementsocial_surface_financement_cout est extrait de la caisse des dépôts à partir du lien :
https://opendata.caissedesdepots.fr/explore/embed/dataset/bailleurs_sociaux_region/table/?sort=-part_logement_sociaux_geres_esh

Il contient 13 colonnes :

- code_region est le code de la région

- libelle_region est le libellé de la région concernée

- annee_construction est l'année de construction des logements sociaux

- Nbre_bailleurs est le nombre de bailleurs sociaux

- Nbre_bailleurs_consolidé est le nombre de bailleurs sociaux consolidés

- Nbre_logement est le nombre de logements

- part_logement_sociaux_geresparlOPH est la part de logements sociaux gérés par les Offices Publics de l'Habitat (OPH)

- part_logement_sociaux_geresesh est la part de logements sociaux gérés par les Entreprises Sociales de l'Habitat (ESH)

- part_logement_sociaux_geressem est la part de logements sociaux gérés par les Entreprises Sociales de l'Habitat (SEM)

- part_logement_sociaux_geresautres_bailleurs est la part de logements sociaux gérés par les autres bailleurs


Qualité des données :

Les données sont accessibles via un URL https://opendata.caissedesdepots.fr/explore/embed/dataset/bailleurs_sociaux_region/table/?sort=-part_logement_sociaux_geres_esh. Sur l'échelle de qualité des données proposée par Tim Berners Lee, cette base de données obtient 4 étoiles. Elle est disponible sans coût d'utilisation.

Le second fichier xlsx obtenu à partir du lien https://www.insee.fr/fr/statistiques/5371235?sommaire=5371304 s'agit du niveau de vie et de pauvreté par région en 2018 communiqué par l'INSEE ainsi que les coordonnées géographiques récupérées de https://www.coordonnees-gps.fr/carte/pays/FR. Il comprend diverses colonnes :

- regions est le libellé de la région

- Les niveaux de vie annuels en euros

- taux de pauvreté est le taux de pauvreté par régions en %

- intensité de pauvreté est l'intensité de la pauvreté en % au sein de la région

- latitude et longitude sont les coordonnées géographiques pour le centre de la région (l'idée était de créer une carte avec les informations du taux de pauvreté et le nombre de logements sociaux par régions avec Power BI)

Qualité des données :

Les données sont accessibles à partir d'un fichier xlsx ce qui diminue la qualité des données sur l'échelle proposée par Tim Berners Lee, cette base de données obtient 2 étoiles. Elle est disponible sans coût d'utilisation.


Idées :

-> Récupérer et Afficher le top 5 ou top 3 des prix minimums des logements sociaux

-> Récupérer les informations liées au classement de pauvreté par région et observer un lien avec le nombre ou pourcentage de logements sociaux présents dans la région



Descriptif des différents fichiers et du site web :


En ce qui concerne la partie Serveur, elle contient deux types de requêtes : Les requêtes HTTP Get et les Post. 

Les requêtes Get (4) contenues dans notre projet récupèrent les informations avec fetch grâce aux portes /prix_revient, /prixderevient_logement, /surface, /nombre_logement.

Les requêtes Post (2) créées sont de deux types. Les premières utilisent Postman (cette application permet de tester des API pour la construction des requêtes) afin de saisir des informations. Les données sont enregistrées dans une base de données db.sqlite. Postman permet d'intégrer des informations.

Le deuxième Post sont intégrés au site web et renseignent les informations côté client grâce à /savecontact. Celles-ci sont ajoutées dans le fichier data.json. 


CONCEPTION DU SITE WEB

Pour ce projet, un site web a été conçu. Pour ce faire, le code utilisé est composé de codes html, css pour la mise en forme, boostrap (pour le design du site avec l'utilisation de carousel) présents dans le fichier index.html (côté client) et chart.js (librairie javascript pour les diagrammes en barres, circulaire) inclus dans index.js.

Index.js est réalisé pour le côté client. Il envoie les requêtes au serveur.  En accédant aux portes, il est possible de récupérer des informations et ceci est possible grâce à la fonction requestGet. La fonction requestPost revient à recevoir le post c'est-à-dire par exemple lorsque les commentaires sont entrés, cette fonction parse les données et les envoie au serveur. Les données récupérées sont intégrées dans le fichier data.json qui a préalablement été créé.
L'API est à la fois pour le côté serveur et le client.

Les portes définies côté serveur comme FilterhttpResponse récupèrent les informations du serveur et les affichent sur le site web.

DESCRIPTION DU SITE WEB

Au niveau descriptif, le site web contient un descriptif avec des renseignements sur les logements sociaux et les chiffres clés des logements HLM. Dans la section Our Projects, il est possible de visualiser plusieurs graphiques dont des diagrammes en barres de la surface moyenne au m². Ceci est rendu disponible grâce à chart.js. La section Our Team présente les membres de l'équipe. Puis dans Contact Us, l'utilisateur peut fournir son avis, laisser un commentaire sur la région de son choix. Il communique ainsi son nom, son e-mail et un commentaire (côté client).

