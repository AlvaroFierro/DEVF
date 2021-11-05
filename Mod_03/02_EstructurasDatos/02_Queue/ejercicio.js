// // Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// // Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// // Cola 1: [ amarillo, rojo, azul, morado]
// // Cola 2: [rosa, verde, negro, blanco]

function separar(cola = []) {
  let cola1 = cola.filter((par, impar) => {
    let a;
    impar % 2 == 0 ? (a = par) : 0;
    return a;
  });

  let cola2 = cola.filter((a, b) => {
    let x;
    b % 2 == 0 ? 0 : (x = a);
    return x;
  });

  return [cola1, cola2];
}

const [primer, segunda] = separar([
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
]);
console.log("Primer cola:", primer, "\n", "Segunda cola:", segunda);

// Pseudocodigo
// Entra un array vacio
// Se filtra en el mismo, checndo el index si es par manda al arreglo par
// Despues hace lo mismo con el index impar
// Regresa las colas
// Se invoca a la funcion entra el array
// log de los arreglos
// Fin
