// Algoritmos de busqueda

// Secuencial (por ejemplo el forEach)
// Esto quiere decir que va a recorrer todos los elementos hasta encontrar el elemento que buscamos o hasta que llegue al final del arreglo.

// Arbol binario de busqueda
// Es una estructura de daots que funciona basado en el principio de la busqueda binaria: los valores del arbol se ordenan de menor a mayor y el recorrido se realiza usando un algoritmo de busqueda parecido a la busqueda binaria.

// la insercion y la eliminacion requieren al igual que el recorrido un tiempo logaritmico. Este costo es mucho mejor que el costo lineal de insercion y eliminacion de los arreglos ordenados y los arboles de busqueda binaria posen la habilidad de realizar todas las operaciones posibles en los arreglos ordenados incluyendo consultas en rangos y comparaciones aproximadas.

// BST (Binary Search Tree) o Busqueda Binaria
// Se utilizan en las bases de datos o las busquedas de datos o ficheros.

// Tiene que devolver la posicion en que se encuentra el elemento buscar.

const numbers = [3, 4, 5, 6, 7, 8, 10, 11];

// function buscando(array, element) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (array[i] === element) {
//       return i;
//     }
//     return -1;
//   }
// }

// console.log(buscando(numbers, 10));

// // Buscando por nombre con forEach
// const arrayNombres = ["Alvaro", "Dash", "Mikee", "Luis", "Angel"];

// const buscandoNombre = (array, name) => {
//   array.forEach((element, index) => {
//     if (element === name) {
//       return console.log(index);
//     } else {
//       return console.log(false);
//     }
//   });
// };

// buscandoNombre(arrayNombres, "Mikee");

function binarySearch(array, element) {
  var minimo = 0;
  var maximo = array.length;
  var aux;
  debugger;
  while (minimo <= maximo) {
    aux = Math.floor((minimo + maximo) / 2);
    // Redondea el valor de la posicion del array
    if (array[aux] === element) {
      return aux;
      // Si encontre el elemento y retorna la posicion
    } else if (array[aux] < element) {
      // se encuentra el elemento en la mitad derecha
      minimo = aux++;
    } else {
      // se encuentra el elemento en la mitad izquierda
      maximo = aux--;
    }
  }
  return -1;
}
