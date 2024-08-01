const URLBase = "https://swapi.dev/api/"
const endPointPersonajes = "/people/"
const endPointNaves= "/starships/"
const endPointPeliculas = "/films/"

let containercard = document.querySelector("#container-card")
let siguiente = document.querySelector("#siguiente")

function obtenerpersonajes(){
    try{
        fetch(URLBase + endPointPersonajes)
        .then(response => response.json())
        .then(data => createCards(data.results))
    }catch(error){
        console.log("error la obtener informacion sobre personajes")
    }
}

function obtenernaves(){
    try{
        fetch(URLBase + endPointNaves)
        .then(response => response.json())
        .then(data => createCards(data.results))
    }catch(error){
        console.log("error al obtener informacion sobre las naves")
    }
}

function obtenerpeliculas(){
    try{
        fetch(URLBase + endPointPeliculas)
        .then(response=>response.json())
        .then(data => createCards(data.results))
    }catch(error){
        console.log("error la obtener informacion sobre las peliculas")
    }
}



// function createCards(personajes, naves, peliculas){
//     containercard.innerHTML = ""
//     for (let personaje)
// }


