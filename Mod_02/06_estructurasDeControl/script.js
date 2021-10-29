// While

var index = 0;

while (index < 11) {
  //10 times
  console.log(index);
  // contador
  index++;
  // index = index + 1
}

// Do While

var number = 0;

do {
  number++;
  console.log(number);
} while (number < 10);

// For

var contador = 0;
for (var index = 1; index <= 10; index++) {
  // condicion
  if (index % 2 == 0) {
    contador = contador + 1;
    //contador++
    console.log(`${index} es multiplo de 2`);
  }
}
console.log(`de 0 a 10 existen ${contador} multiplos de 2`);

// Acumulador con for

// var acumulador = 0;

// for (var index = 0; index <= 9; index++) {
//   acumulador = acumulador + index;
//   console.log(acumulador)
// }

/* acumulador --> 0 index --> 0 = 0+0=0
acumulador --> 0 index --> 1 = 0+1=1
acumulador --> 1 index --> 2 = 1+2=3
acumulador --> 3 index --> 3 = 3+3=6
acumulador --> 6 index --> 4 = 6+4=10
acumulador --> 10 index --> 5 = 10+15=15
acumulador --> 15 index --> 6 = 15+6=21
acumulador --> 21 index --> 7 = 21+7=28
acumulador --> 28 index --> 8 = 28+8=36
acumulador --> 36 index --> 9 = 36+9=45 */

// Crea un programa que imprima en consola los números impares del 1 al 50.

for (var index = 0; index <= 50; index++) {
  if (index % 2 == 1) {
    console.log(index);
  }
}

// --Crea un programa que pregunte al usuario un número.
// Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los
// Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

var pokemonArray = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "squirtle",
  "wartortle",
  "blastoise",
  "charmander",
  "charmeleon",
  "charizard",
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "squirtle",
  "wartortle",
  "blastoise",
  "charmander",
  "charmeleon",
  "charizard",
];


// No copie bien el arreglo 😣😖

var cantidad = prompt("Escribe un número menor o igual a " + pokemonArray.length);

for (let index = 1; index <= cantidad; index++) {
  if (index % 5 == 0) {
    const element = array[index];
    console.log(element+ "" + index)
  }
  
}

// --Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

var array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (typeof element === "number") {
    console.log("Arreglo", element);
  }
}
