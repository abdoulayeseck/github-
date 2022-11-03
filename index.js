 // importer le module
 const express = require('express');
 const app = express();
 const fetch =require('node-fetch');
 const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 const PORT = process.env.PORT || 3000;
 const axios = require('axios').default;
 
 
 
 app.get('/', (req,res) => {
     res.json({test : "Bienvenue a l'application des Logements Sociaux"});
 })
 
 // Fournir toutes les informations 
 
 app.get('/Logement', function(request, response){
 
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=100&facet=code_region&facet=region&facet=annee_financement")
       .then(res => res.json())
       .then(json => {

        var region = {};

         var construction = [];
		 
         for (let i = 0; i< json.records.length;i++){

          construction.push({

          nom_region: json.records[i].fields.region,
          rehabilitation_prix_derevient_m2:json.records[i].fields.rehabilitation_prixderevient_m2,
          construction_prixderevient_m2: json.records[i].fields.construction_prixderevient_m2,
          rehabilitation_prixderevient_logement: json.records[i].fields.rehabilitation_prixderevient_logement,
          construction_surface_moy_m2_su: json.records[i].fields.construction_surface_moy_m2_su,
          annee_financement: json.records[i].fields.annee_financement,
          rehabilitation_surface_moy_m2_su: json.records[i].fields.rehabilitation_surface_moy_m2_su,
          construction_prixderevient_logement: json.records[i].fields.construction_prixderevient_logement

          });
           
         }
        
         response.json(construction);
 
       }); 
 
 })
 
 
 
 // Fournir l'ensemble toutes les informations d'une regions
 
 app.get('/Logement/:region', function(request, response){
 
   const code = request.params.region;
 
   
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=100&facet=code_region&facet=region&facet=annee_financement")
       .then(res => res.json())
       .then(json => { 
         var construction = [];
         
         
         for (let i = 0; i< json.records.length;i++){
 
           if (json.records[i].fields.region === code ){
 
           construction.push({
             rehabilitation_prixderevient_m2:json.records[i].fields.rehabilitation_prixderevient_m2,
             construction_prixderevient_m2: json.records[i].fields.construction_prixderevient_m2,
             rehabilitation_prixderevient_logement: json.records[i].fields.rehabilitation_prixderevient_logement,
             construction_surface_moy_m2_su: json.records[i].fields.construction_surface_moy_m2_su,
             annee_financement: json.records[i].fields.annee_financement,
             rehabilitation_surface_moy_m2_su: json.records[i].fields.rehabilitation_surface_moy_m2_su,
             construction_prixderevient_logement: json.records[i].fields.construction_prixderevient_logement
           });
 
         }
           
         }
        
         response.json(construction);
 
       }); 
 
 })
 
 
 
 // la region ayant le prix de rehabilitation maximale au m2
 
 app.get('/Prix_max', function(request, response){
 
   const code = request.params.region;
 
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=100&facet=code_region&facet=region&facet=annee_financement")
       .then(res => res.json())
       .then(json => { 
        var construction = [];
        var  j =0;
		    max = json.records[0].fields.rehabilitation_prixderevient_m2;
         for (let i = 1; i< json.records.length;i++){
  			   valeur = json.records[i].fields.rehabilitation_prixderevient_m2;
  			   if(valeur > max){
  				 max = valeur;
  				 j = i;
			  }
           
         }

        construction.push({
        region:json.records[j].fields.region,
        annee_financement: json.records[j].fields.annee_financement,
        rehabilitation_prixderevient_m2_max:json.records[j].fields.rehabilitation_prixderevient_m2,
        construction_prixderevient_m2:json.records[j].fields.construction_prixderevient_m2,
        
           });
        
         response.json(construction);
 
       }); 
 
 })
 

 // serveur
 
 
 // 2eme fichier 
 app.get('/nombre_logement', function(request, response){
   
       fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=bailleurs_sociaux_dep&q=&rows=100&facet=code_region&facet=region&facet=code_departement&facet=libelle_departement&facet=annee")
           .then(res => res.json())
           .then(json => { 
             var arret = [];
			 
			 
             console.log(json.records.length)
             for (let i = 0; i< json.records.length;i++){
               arret.push({
                 nom_region:json.records[i].fields.region,
				         libelle_departement:json.records[i].fields.libelle_departement,
                 nbre_logements_re: json.records[i].fields.nbre_logements
               });
             }
             response.json(arret);
   
           });
           
   
   })

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   
 
 app.listen(PORT,()=>{
     console.log('serveur en marche ');
 })
 
 
 