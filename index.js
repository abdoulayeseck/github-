
 // importer le module
 const express = require('express');
 const app = express();
 const PORT = process.env.PORT || 3000;
 const axios = require('axios').default;
 
 
 
 app.get('/', (req,res) => {
     res.json({test : "Bienvenue a l'application des Logements Sociaux"});
 })
 
 // Fournir toutes les informations 
 
 app.get('/Logement', function(request, response){
 
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=2&facet=code_region&facet=region&facet=annee_financement")
       .then(res => res.json())
       .then(json => { 
         var construction = [];
         var region = {}
         
         for (let i = 0; i< json.records.length;i++){
 
           construction.push({
             region:json.records[i].fields.region,
             rehabilitation_prixderevient_m2:json.records[i].fields.rehabilitation_prixderevient_m2,
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
 
   
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=2&facet=code_region&facet=region&facet=annee_financement")
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
 
 
 
 // obtenir le prix maximal au metre carre 
 
 app.get('/Prix_max', function(request, response){
 
   const code = request.params.region;
 
   
   fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=2&facet=code_region&facet=region&facet=annee_financement")
       .then(res => res.json())
       .then(json => { 
         var construction = [];
         
         
         for (let i = 0; i< json.records.length-1;i++){
 
             construction.push({
             rehabilitation_prixderevient_m2:Math.max(json.records[i].fields.rehabilitation_prixderevient_m2)
 
           });
 
           
           
         }
        
         response.json(construction);
 
       }); 
 
 })
 

 // serveur
 
 
 // 2 eme fichier 
 app.get('Logement/sociaux', function(request, response){
 
   
       fetch("https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=bailleurs_sociaux_dep&q=&lang=fr&rows=250&start=0&facet=code_region&facet=region&facet=code_departement&facet=libelle_departement&facet=annee&timezone=Europe%2Fparis")
           .then(res => res.json())
           .then(json => { 
             var arret = [];
             
             for (let i = 0; i< json.records.length;i++){
               arret.push({
                 nom_region:json.records[i].fields.region,
                 nbre_logements_re: json.records[i].fields.nbre_logements
               });
               
             }
             //arret[1].fields
             //var arret2 = [];
             //for (let j = 0; j< arret.length;j++){
               //console.log("arret " + j , arret[j]);
               //arret2.push(arret[j].fields);
               
             //}
             response.json(arret);
   
           });
           
   
   })
 
 app.listen(PORT,()=>{
     console.log('serveur en marche ');
 })
 
 
 