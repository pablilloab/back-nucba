class Jugador {
  nombre = "";
  apellido = "";
  #dni = 0;
  clubes = [];
  logros = {};
  static cantidadDeJugadores = 0;

  set setDni (dni) {
    this.#dni = dni;
  }

  get getDni () {
    return this.#dni;
  }

  constructor(nombre, apellido, clubes, logros, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#dni = dni;
    this.clubes = clubes;
    this.logros = logros;
    Jugador.cantidadDeJugadores++;
  }
}

const pablo = new Jugador(
  "Pablo",
 "Bari",  
 ["river", "juentud"], 
 {
  libertadores: true,
  nacional: false,
});


/*
const harry = new Jugador(
  "Harry",
  "Potter",
  ["ravenclaw", "griffindor"],
  {
    quidditch: true,
    chess: false,
  }
);

const batman = new Jugador(
  "Bruce",
  "Wayne",
  ["RasalGhul", "Ghotam"],
  {
    jokercup: true,
    penguinleague: false,
  }
);



console.log(pablo.dni);
console.log(harry);
console.log(Jugador.cantidadDeJugadores);
pablo.setDni = 123456;
pabloDni = pablo.getDni;

console.log(pabloDni);

batmanDni = batman.getDni;
console.log(batmanDni);


console.log(pablo,harry,batman);

*/

