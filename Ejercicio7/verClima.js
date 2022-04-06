import fetch from "node-fetch";
import promptSync from 'prompt-sync';
const prompt = promptSync();

let api = "http://localhost:8000/clima";


function getDataFromApi (api) {
    return fetch(`${api}`).then(response => response.json())
}

let foundFlag = 0;
let ciudad = prompt("Ingresa la ciudad de la q necesitas saber el clima ");


getDataFromApi(api)
.then( (response) => {
    for (const item of response) {
        
        if (item.ciudad === ciudad) {
            foundFlag = 1;
            if (item.temp < 15) {
                console.log("Bufanda")
            }else{
                console.log("Todo liso")
            }
        }
    }
    if (foundFlag == 0) {
        console.log("No tenemos info de la ciudad que ingresaste");
    }
})
.catch(error => console.log("Estas frito angelito"));


