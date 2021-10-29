// Arrays

var nombres = ["dash", "mikee", 1, 2, true, "cardano"];

console.log(nombres[0]);

// encontrar un elemento dentro del array

// var elemento = parseInt(prompt("que elemento del array quieres", 0));
// if (elemento >= nombres.length) {
//   alert("Introduce un numero menor que", nombres.length);
// } else {
//   alert("el usuario seleccionado es", nombres[elemento]);
// }

// // for
// document.write("<ul>");
// for (let index = 0; index < nombres.length; index++) {
//   document.write("<li>", nombres[index], "</li>");
// }
// document.write("</ul>");

// // foreach

// document.write("<ul>");
// nombres.forEach((line, index) => {
//   document.write("<li>", index, "-", line, "</li>");
// });

// for in
// document.write("<ul>");
// for (const indice in nombres) {
//   document.write("<li>", nombres[indice], "</li>");
// }
// document.write("</ul>");

// map
// transformar o crear un array

// var numeros = [2, 5, 9];
// var nombres = ["dash", "mikee", 1, 2, true, "cardano"];
// var nombresModificados=[] ;
//  return num * 2;
// });
// console.log(dobles);

var catergorias = ["comedia", "terror", "accion"];
var peliculas = ["007", "RYF9", "Pixels"];

cine = [catergorias, peliculas];
console.log(cine[0][1]);
console.log(cine[0][2]);

// recorrer arrays multidimensionales con foreach

// operaciones con arrays

// push

var getElement = "";
do {
  getElement = prompt("Ingresa la pelicula");
  peliculas.push(getElement);
} while (getElement != "SALIR");
peliculas.pop();
console.log(peliculas);

// indexOf

var indexFromHalloween = peliculas.indexOf("halloween");
console.log(indexFromHalloween);

// splice

// if (indexFromHalloween > -1) {
//   peliculas.splice(indexFromHalloween, "1");
// }

// console.log(peliculas);

// // join
// var pelisStr = peliculas.join();
// console.log(pelisStr);

// // sort
// console.log(peliculas.sort());

// // reverse
// console.log(peliculas.reverse());

// find
var busqueda = peliculas.find((peliculas) => peliculas == "007");
console.log(busqueda);

// some tru or false
