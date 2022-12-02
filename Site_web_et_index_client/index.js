

const state = { 
      url: 'http://127.0.0.1:3000',
  };
const filterHttpResponse = (response) => {
  return response
  .json()
  .then((data) => {
     return data;
   }).catch((err) => console.error(`Error on json: ${err}`));
};

async function requestPost(url, data) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  };
    const response = await fetch(url, options);
  return response;
};
    
async function requestGet(url) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  const options = {
    method: 'GET',
    headers,
  };
  const response = await fetch(url, options);
  return response;
};

// Afficher le nombre de logement 
function getlogement(){const response = requestGet(state.url+'/nombre_logement');
  let tab_region = [];
  let tab_nbre_logements =[];
  response.then(filterHttpResponse)
      .then((finalData) => {
   //       console.log(finalData);
            
            finalData.forEach((element) => {
            tab_region.push(element.nom_region);
 tab_nbre_logements.push(element.nbre_logements_re);
                
            });
  });
   console.log(tab_nbre_logements);              
 // graphique
const graph = document.getElementById("graph1").getContext("2d");

//Chart.defaults.global.defaultFontSize = 18;

let massPopChart = new Chart(graph1, {
  type: "pie", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: tab_region,
    datasets: [
      {
        label: "Nombre de logement ",
        data: tab_nbre_logements,
        // backgroundColor: "blue",
        backgroundColor: [
          "red",
          "orange",
          "salmon",
          "blue",
          "yellow",
          "purple",
          "green",
          "tomato",
           "Pink",
            "DeepPink",
            "LightSalmon",
            "Moccasin",
            "DarkKhaki",
            "Fuchsia",
            "MediumPurple",
            "SeaGreen",
            "Aqua",
            "MidnightBlue"
            
            
        ],
        hoverBorderWidth: 3,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Populations Francophones",
      fontSize: 12,
    },
    legend: {
      display: true,
    },
    // start at 0
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 100,
        right: 100,
        top: 50,
      },
    },
  },
});
                                             
}
                                  
// get surface 
function getsurface(){const response = requestGet(state.url+'/surface');
  let tab_region = [];
  let construction_surface_moy_m2_su =[];
  let rehabilitation_surface_moy_m2_su = [];
  response.then(filterHttpResponse)
      .then((finalData) => {
   //       console.log(finalData);
            
            finalData.forEach((element) => {
            tab_region.push(element.nom_region);
 construction_surface_moy_m2_su.push(element.construction_surface_moy_m2_su);
 rehabilitation_surface_moy_m2_su.push(element.rehabilitation_surface_moy_m2_su);
                
            });
  });
    console.log(tab_region);              
   console.log(construction_surface_moy_m2_su);
   console.log(rehabilitation_surface_moy_m2_su); 
 // graphique
const graph = document.getElementById("graph2").getContext("2d");

//Chart.defaults.global.defaultFontSize = 18;

new Chart(graph2, {
    type: 'bar',
    data: {
      labels: tab_region,
      datasets: [{
        label: 'construction_surface_moy_m2_su',
        data: construction_surface_moy_m2_su,
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'red',
      },{
        label: 'rehabilitation_surface_moy_m2_su',
        data: rehabilitation_surface_moy_m2_su,
        borderWidth: 1,
        borderColor: 'rgba(77,166,.85)',
        backgroundColor: 'orange',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
  


// get prixderevient_logement

function getprixderevient_logement(){const response = requestGet(state.url+'/prixderevient_logement');
  let tab_region = [];
  let rehabilitation_prixderevient_logement =[];
  let construction_prixderevient_logement = [];
  response.then(filterHttpResponse)
      .then((finalData) => {
   //       console.log(finalData);
            
            finalData.forEach((element) => {
            tab_region.push(element.nom_region);
 rehabilitation_prixderevient_logement.push(element.rehabilitation_prixderevient_logement);
 construction_prixderevient_logement.push(element.construction_prixderevient_logement);
                });
  });
   console.log(rehabilitation_prixderevient_logement);              
 // graphique
const graph = document.getElementById("graph3").getContext("2d");

//Chart.defaults.global.defaultFontSize = 18;

new Chart(graph3, {
    type: 'bar',
    data: {
      labels: tab_region,
      datasets: [{
        label: 'rehabilitation_prixderevient_logement',
        data: rehabilitation_prixderevient_logement,
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'red',
      },{
        label: 'construction_prixderevient_logement',
        data: construction_prixderevient_logement,
        borderWidth: 1,
        borderColor: 'rgba(77,166,.85)',
        backgroundColor: 'orange',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
                                    }
  
// get prix_revient

function getprix_revient(){const response = requestGet(state.url+'/prix_revient');
  let tab_region = [];
  let rehabilitation_prixderevient_m2 =[];
  let construction_prixderevient_m2 = [];
  response.then(filterHttpResponse)
      .then((finalData) => {
   //       console.log(finalData);
            
            finalData.forEach((element) => {
            tab_region.push(element.nom_region);
 rehabilitation_prixderevient_m2.push(element.rehabilitation_prixderevient_m2);
 construction_prixderevient_m2.push(element.construction_prixderevient_m2);
                
            });
  });
   console.log(rehabilitation_prixderevient_m2);              
 // graphique

//Chart.defaults.global.defaultFontSize = 18;

const ctx = document.getElementById('graph4');

new Chart(graph4, {
    type: 'bar',
    data: {
      labels: tab_region,
      datasets: [{
        label: 'rehabilitation_prixderevient_m2',
        data: rehabilitation_prixderevient_m2,
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'red',
      },{
        label: 'construction_prixderevient_m2',
        data: construction_prixderevient_m2,
        borderWidth: 1,
        borderColor: 'rgba(77,166,.85)',
        backgroundColor: 'orange',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
                       
}
                       
// 

function fetchdata(){
async function fetchdata(){
    const url = 'https://opendata.caissedesdepots.fr/api/records/1.0/search/?dataset=constructionrehabilitation_logementsocial_surface_prix&q=&rows=100&facet=code_region&facet=region&facet=annee_financement';
    const response = await fetch(url);
    const datapoints = await response.json();
    //console.log(datapoints);
    return datapoints;
};

fetchdata().then(datapoints =>{
    const region = datapoints.records.map(
    function(index){
        return index.fields.region;
    });
    const rehabilitation_prixderevient_logement = datapoints.records.map(
    function(index){
        return index.fields.rehabilitation_prixderevient_logement;
    });
    const construction_surface_moy_m2_su = datapoints.records.map(
    function(index){
        return index.fields.construction_surface_moy_m2_su;
    });
    console.log(construction_surface_moy_m2_su);
    
const ctx = document.getElementById('myChart');

new Chart(myChart, {
    type: 'bar',
    data: {
      labels: region,
      datasets: [{
        label: 'rehabilitation_prixderevient_logement',
        data: rehabilitation_prixderevient_logement,
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'red',
      },{
        label: 'construction_surface_moy_m2_su',
        data: construction_surface_moy_m2_su,
        borderWidth: 1,
        borderColor: 'rgba(77,166,.85)',
        backgroundColor: 'orange',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
};

function sendcontact(){
    let fulname =  document.querySelector("#full_name").value,
        e_mail = document.querySelector("#email").value,
        message = document.querySelector("#message").value;
    
 const response = requestPost(state.url+'/savecontact',{
     "nom":fulname,
     "email":e_mail,
     "message":message
 });
  
  response.then(filterHttpResponse)
      .then((finalData) => {
          console.log(finalData);   
            }); 
  }





window.addEventListener("load", (event) => {
getprix_revient();
getlogement();
});

