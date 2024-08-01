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
        .then(data => console.log(data.results))
    }catch(error){
        console.log("error la obtener informacion sobre personajes")
    }
}






