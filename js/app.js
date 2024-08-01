const URLBase = "https://swapi.dev/api/"
const endPointPersonajes = "/people/"
const endPointNaves= "/starships/"
const endPointPeliculas = "/films/"

let containercardPersonajes = document.querySelector("#container-card-personajes")
let siguiente = document.querySelector("#siguiente")
let pagina = 1

function obtenerpersonajes(){
    try{
        fetch(`${URLBase}${endPointPersonajes}?page=${pagina}`)
        .then(response => response.json())
        .then(data => createCardsOfCharacter(data.results))
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



function createCardsOfCharacter(personajes){
    containercardPersonajes.innerHTML = ""
    for (let personaje of personajes){
        const{name, gender, species} = personaje
        containercardPersonajes.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${name} - ${gender}</p>
            </div>
        </div>`;
    }
}

siguiente.addEventListener("click", function pag(){
    pagina += 1
    obtenerpersonajes()
})


