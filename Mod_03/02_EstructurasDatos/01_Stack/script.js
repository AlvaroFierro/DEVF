// Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

const reemplazar = (pila, nuevo, viejo) => {
  for (let i = 0; i < pila.length; i++) {
    if (pila[i] === viejo) {
      pila.splice(i, 1, nuevo);
    }
  }
  return pila;
};
console.log(reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2));

// Pseudocódigo funcion reemplazar
// Inicio reemplazar
// Crear una funcion llamada reemplazar
// Que reciba como parametro una pila de numeros y dos valores de tipo numeros (nuevo y viejo)
// Si el segundo valor aparece en algun lugar de la pila, sea reemplazado por el primero (Solo la primera vez)
// Y hará pop de los elementos mas nuevos
// Fin reemplazar
