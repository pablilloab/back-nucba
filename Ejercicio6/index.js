const fs = require('fs');
const prompt = require('prompt-sync')();

//let mensaje = "Hello World";

//fs.writeFile('miPrimerArchivoDesdeNode.txt', mensaje, (error)=>{
//    if (error) throw error
//
//   console.log("Archivo creado correctamente")
//})

/* let mensaje = "";

const leerMensaje = () => {
    prompt.start();
    prompt.get([mensaje, (error, result) =>{
    if (err) {
        console.log("algo salio mal");
    } else {
        return result
    }

})}

leerMensaje();
 */





//try {
//    fs.writeFileSync('miPrimerArchivoDesdeNode.txt', d);
//    console.log("Archivo creado correctamente");
//    
//} catch (error) {
//    console.log("Estas frito angelito");
//}

let name = prompt('Ingresa tu nombre ');

if ('./miPrimerArchivoDesdeNode.txt') {
    
    fs.appendFile('miPrimerArchivoDesdeNode.txt', name, function (err) {
        if (err) throw err;
        console.log("Archivo actualizado correctamente");

    });        
  
  
}else{
    try {
        fs.writeFileSync('miPrimerArchivoDesdeNode.txt', name);
        console.log("Archivo creado correctamente");
            
    } catch (error) {
        console.log("No se pude escribir el archivo");
    }

}
    




