import fs from 'fs';
import promptSync from 'prompt-sync';
const prompt = promptSync();

const gastoNuevo = {
    id:0,
    fecha:"",
    concepto:"",
    monto:0
};


gastoNuevo.fecha = prompt("Fecha del gasto ");
gastoNuevo.concepto = prompt("Concepto del gasto ");
gastoNuevo.monto = parseInt(prompt("Monto del gasto "));

//console.log(gastoNuevo);


actualizarGasto(gastoNuevo);



function actualizarGasto (gastoNuevo) {
    fs.readFile("./gastos.js","utf8",(err,jsonString)=> {
        if (err) {
            console.log("No se puede leer el archivo", err);
            return;
        }
        try{
            const data = JSON.parse(jsonString);  
            gastoNuevo.id = data.length + 1; 
            data.push(gastoNuevo);
            console.log(data)  
            guardarGasto(data);     
        } catch (err) {
            console.log("Error al parsear los datos ", err)
        }
    })  

}
  



function guardarGasto (data) {
    const jsonString = JSON.stringify(data);
    fs.writeFile("./gastos.js",jsonString, err => {
        if (err) {
            console.log("No se puede guardar el nuevo gasto ", err)
        }else {
            console.log("Gasto guardado correctamente");
        }
    })
}
    




