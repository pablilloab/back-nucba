let nombre = "Pablo";
let edad = 39;
let altura = 1.69;
let peliculas = ["La nana mágica"];

console.log(nombre, edad, altura, peliculas);

let aumentoAltura = parseFloat(prompt("Ingrese en m etrosla altura  aumentar"));
let nuevaPelicula = prompt("Ingrese nueva pelicula");

altura += aumentoAltura;
peliculas.push(nuevaPelicula);

console.log(nombre, edad, altura, peliculas);
