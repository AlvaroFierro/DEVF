// Algoritmos de ordenamiento
// Te permite ordenar un arreglo de manera ascendente o descendente; podemos usar diferentes metodos de ordenamiento.

// Ordenamiento de burbuja

// Funciona revisando cada elemento de la lista que va a ser ordenada con el siguiente, intercambiandolos de posicion si estan el orden equivocado.
// Es necesario revisar varias veces toda la lista hasta que no se encuentre ningun elemento que se pueda intercambiar, lo que significa que la lista ya esta ordenado.

const arr = Array(4, 7, 8, 5, 9);
function ordenar(myArray, valor1, valor2) {
  var temp = myArray[valor1];
  myArray[valor1] = myArray[valor2];
  myArray[valor2] = temp;
  return myArray;
}

function burbuja(myArray) {
  var tam = myArray.length;
  for (var temp = 1; temp < tam; temp++) {
    for (var izq = 0; izq < tam - temp; izq++) {
      var der = izq + 1;
      if (myArray[izq] > myArray[myArray[der]]) {
        ordenar(myArray, izq, der);
      }
    }
  }
  return myArray;
}

console.log(burbuja(arr));

// Ordenamiento por insercion (Insertion Sort)

// Es una manera natural de ordenar una lista, ya que se compara cada elemento con el anterior, y si el anterior es mayor, se intercambian. (lo que veiamos con el gif)

// Ordenamiento por seleccion (Selection Sort)

function selection(myArray) {
  var tam = myArray.length;
  for (var temp = 0; temp < tam - 1; temp++) {
    mayor = temp;
    for (let comprobar = temp + 1; comprobar < tam; comprobar++) {
      if (myArray[comprobar] < myArray[mayor]) {
        mayor = comprobar;
      }
    }
    ordenarnbvc(myArray, mayor, comprobar);
  }
}
