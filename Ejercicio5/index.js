import fetch from "node-fetch";


const apiList = {
    pokeApi:"https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
    nasaApi:"https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY",
    chuckApi:"https://api.chucknorris.io/jokes/random",
    rickAndMortiApi:"https://rickandmortyapi.com/api/character",
    pexelsApi:"https://api.pexels.com/v1/"
}

console.log("PokeApi");
getDataFromApi(apiList.pokeApi).then( response => console.log(response)).catch(error => console.log("Estas frito angelito"));





function getDataFromApi (api) {
   return fetch(`${api}`).then(response => response.json())
}