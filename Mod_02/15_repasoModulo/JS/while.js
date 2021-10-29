// var year = 2021;

// //loop=bucle
// // loopear = recorrer un array

// while (year <= 2051) {
//   console.log("Estamos en el año", year);
//   year++;
// }

var secondYear = 2021;
while (secondYear != 1991) {
  // debugger --> seguimiento
  console.log("Estamos en el año", secondYear);
  secondYear--;
}

// mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

// var a = parseInt(prompt("Ingresa el primero numero"), 0);
// var b = parseInt(prompt("Ingresa el segundo numero"), 0);

// while (a < b) {
//   a++;
//   if (a % 2 != 0) {
//     console.log(`el numero ${a} es impar`);
//   }
// }

// cortar la ejecucion de u bucle
var year = 2021;
while (year != 1991) {
  console.log("estamos en el a;io", year);
  if (year == 2000) {
    console.log("llegamos a 2000");
    break;
  }

  year--;
}
