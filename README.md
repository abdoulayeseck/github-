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


Idées :

-> Récupérer et Afficher le top 5 ou top 3 des prix minimums des logements sociaux

-> Récupérer les informations liées au classement de pauvreté par région et observer un lien avec le nombre ou pourcentage de logements sociaux présents dans la région
