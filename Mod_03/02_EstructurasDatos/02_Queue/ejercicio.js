// // Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// // Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// // Cola 1: [ amarillo, rojo, azul, morado]
// // Cola 2: [rosa, verde, negro, blanco]
var cola = [
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
];

function dividirColores(cola) {
  var colaPares = cola.filter((indexPar, indexImpar) => {
    let a = 0;
    indexPar % 2 == 0 ? (a = indexImpar) : 0;
    return a;
  });

  var colaImpares = cola.filter((indexPar, indexImpar) => {
    indexPar % 2 != 0 ? 0 : a;
    return a;
  });
}

// Necesito
// Un for
// Un If para sacar por la posicion even and odd numbers
// Una funcion para sacar los pares y los impares
// Hacer uso de filter
// se debe de hacer con filter
console.log(`La cola 1`, colaPares);
console.log(`La cola 2`, colaImpares);
