[1, 2];

console.log(["hola", 2, 3, 4, 5][0]);

const miArreglo = new Array();
// Metodo Peek en mi local
const ultimaPosicionDentro = (array) => array[array.length - 1];

// Metodo push
// agrega valores a la pila al final de esta
miArreglo.push(1);
console.log(miArreglo);
miArreglo.push(2);
console.log(miArreglo);
miArreglo.push(3);
console.log(miArreglo);
console.log("Ultima posicion sin sacarlo", ultimaPosicionDentro(miArreglo));

// Metodo pop
// Saca el ultimo valor de pila y me permite guardarlo en una variable.
const ultimaPosicion = miArreglo.pop();
console.log(miArreglo);
console.log(ultimaPosicion);

// Metodo peek
// no existe en JS, debeos de hacer conversion

//Peek
// Trae el ultimo valor de la pila, sin sacarlo.
console.log("Ultima posicion sin sacarlo ", ultimaPosicionDentro(miArreglo));

// Size
// Metodo length
// retorna el numero de elemetnos que contiene la pila
console.log(miArreglo.length);

// Pring
// console.log();
// mostrar el contenido de la pila
console.log("esta es mi pila", miArreglo);
