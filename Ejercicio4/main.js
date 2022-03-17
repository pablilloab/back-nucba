const jugadores = [
    {id:1, nombre:'Messi',logros:395},
    {id:2, nombre:'Jennifer Hermoso',logros:234},
    {id:3, nombre:'Maradona',logros:455},
    {id:4, nombre:'Alexia Putellas',logros:356},
    {id:5, nombre:'Cristiano Ronaldo',logros:67},
    {id:6, nombre:'Lieke Martens',logros:78},
]

const estadisticas = {
    scoreTotal : 0,
    scorePromedio : 0,
    jugadorMenorScore : "",
    jugadorMayorScore : "",
    nombreJugadores : "",
}

let logroMenor = jugadores[0].logros;
let logroMayor = jugadores[0].logros;
//console.log(jugadores)

for (let i = 0; i < jugadores.length;i++) {
    //console.log (jugadores[i]);

    estadisticas.scoreTotal += jugadores[i].logros 
    estadisticas.nombreJugadores +=  jugadores[i].nombre + ",";

    if (jugadores[i].logros < logroMenor) {
        logroMenor = jugadores[i].logros;
        //console.log (logroMenor)
        estadisticas.jugadorMenorScore = jugadores[i].nombre;
    }else if (jugadores[i].logros > logroMayor) {
        logroMayor = jugadores[i].logros;
        estadisticas.jugadorMayorScore = jugadores[i].nombre;        
    }                                 
       
}

estadisticas.scorePromedio = estadisticas.scoreTotal / jugadores.length;
console.log(estadisticas)