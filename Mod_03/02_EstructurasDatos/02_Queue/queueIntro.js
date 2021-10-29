const miArreglo = [];
console.log(miArreglo);
//  Queue
// Usamos el metodo push para encolar dentro de una DS (Data structure)
miArreglo.push(1);
console.log(miArreglo);
miArreglo.push(2);
console.log(miArreglo);
miArreglo.push(3);
console.log(miArreglo);
miArreglo.push(4);

// Dequeue
// Usamos el metodo shift para desencolar y obtener el primer elemento de DS
const primerElemento = miArreglo.shift();
console.log(primerElemento);
const segundoElemento = miArreglo.shift();
console.log(segundoElemento);
const tercerElemento = miArreglo.shift();
console.log(tercerElemento);
console.log(miArreglo);

// isEmpty
// Si el arreglo esta vacio, muestro mensaje que me indica que esta vacio
if (miArreglo.length === 0) console.log("Esta vacio");

// Front
// Obtengo el PRIMER valor la DS, sin tener que sacarlo de la fila.
console.log(miArreglo[0]);

// Back
// Obtengo el ULTIMO valor la DS, sin tener que sacarlo de la fila.
console.log(miArreglo[miArreglo.length - 1]);

// Size
// Tamano de la DS en una queue
console.log(miArreglo.length);

// Print
// Imprimir el arreglo
console.log(miArreglo);
