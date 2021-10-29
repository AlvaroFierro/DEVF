"use strict";

// Preguntar nombre

var user1 = prompt("Cual es tu nombre, Jugador 1");
var user2 = prompt("Cual es tu nombre, Jugador 2");

console.log("El jugador uno es:", user1, "\n", "El jugador dos es:",user2);
// console.log(user2);

//Preguntar la eleccion del jugador

var eleccionU1 = prompt(
  "Que eliges, piedra, papel o tijera? Jugador 1"
).toLowerCase();
var eleccionU2 = prompt(
  "Que eliges, piedra, papel o tijera? Jugador 2"
).toLowerCase();

if (
  (eleccionU1 === "piedra" && eleccionU2 === "piedra") ||
  (eleccionU1 === "papel" && eleccionU2 === "papel") ||
  (eleccionU1 === "tijera" && eleccionU2 === "tijera")
) {
  console.log("Empate");
} else if (
  (eleccionU1 === "piedra" && eleccionU2 === "tijera") ||
  (eleccionU1 === "tijera" && eleccionU2 === "papel") ||
  (eleccionU1 === "papel" && eleccionU2 === "piedra")
) {
  console.log("has ganado", user1 );
} else if (
  (eleccionU1 === "piedra" && eleccionU2 === "tijera") ||
  (eleccionU1 === "tijera" && eleccionU2 === "papel") ||
  (eleccionU1 === "papel" && eleccionU2 === "piedra")
) {
  console.log("has ganado", user2 );
} else {
  alert(
    "Opción invalida: selecciona alguna de las opciones --> piedra --> papel --> tijera"
  );
}
