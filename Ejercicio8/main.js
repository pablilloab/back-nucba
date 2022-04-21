import fs from "fs";
import promptSync from "prompt-sync";
const prompt = promptSync();

const gasto = (fecha, concepto, monto) => {
  return {
    id: 0,
    fecha: fecha,
    concepto: concepto,
    monto: monto,
  };
};

function obtenerGastos() {
  return new Promise((resolve, reject) => {
    fs.readFile("./gastos.js", "utf8", (err, jsonString) => {
      if (err) {
        reject("No se puede leer el archivo", err);
      }
      resolve(JSON.parse(jsonString));
    });
  });
}

function guardarGastos(data) {
  const jsonString = JSON.stringify(data);
  fs.writeFile("./gastos.js", jsonString, (err) => {
    if (err) {
      console.log("No se puede guardar el nuevo gasto ", err);
    } else {
      console.log("Gasto guardado correctamente");
    }
  });
}

async function run() {
  try {
    const fecha = prompt("Fecha del gasto ");
    const concepto = prompt("Concepto del gasto ");
    const monto = parseInt(prompt("Monto del gasto "));

    const gastoNuevo = gasto(fecha, concepto, monto);
    const gastos = await obtenerGastos();
    gastoNuevo.id = gastos.length + 1;
    gastos.push(gastoNuevo);
    console.log(gastos);

    guardarGastos(gastos);
  } catch (err) {
    console.log(err);
  }
}

run();
