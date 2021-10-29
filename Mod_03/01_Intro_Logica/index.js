// Escribe una función que imprima todos los números naturales de 1 hasta n

const numNaturales = () => {
  for (let i = 1; i <= 25; i++) {
    console.log(i);
  }
};
numNaturales();

//Saber si eres menor o mayor de edad

edad = prompt("Introduce tu edad");
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad, lo sentimos");
}

//Piedra, papel y tijeras

var nameJ1 = prompt("Serás el jugador uno, escoge tu nombre");
console.log(nameJ1);
var j1 = prompt(
  nameJ1 +
    " Introduce la opción con la cual vas a jugar: \n Piedra \n Papel \n Tijeras"
).toLocaleLowerCase();

var nameJ2 = prompt("Serás el jugador dos, escribe tu nombre");
console.log(nameJ2);
var j2 = prompt(
  nameJ2 +
    " Introduce la opción con la cual vas a jugar: \n Piedra \n Papel \n Tijeras"
).toLocaleLowerCase();

function piedraPapelTijera(j1, j2, nameJ1, nameJ2) {
  if (
    (j1 === "piedra" && j2 === "piedra") ||
    (j1 === "papel" && j2 === "papel") ||
    (j1 === "tijeras" && j2 === "tijeras")
  ) {
    console.log("Es un empate");
  } else if (
    (j1 === "piedra" && j2 === "tijeras") ||
    (j1 === "tijeras" && j2 === "papel") ||
    (j1 === "papel" && j2 === "piedra")
  ) {
    console.log(nameJ1 + " has ganado");
  } else if (
    (j2 === "piedra" && j1 === "tijeras") ||
    (j2 === "tijeras" && j1 === "papel") ||
    (j2 === "papel" && j1 === "piedra")
  ) {
    console.log(nameJ2 + " has ganado");
  } else {
    alert(
      "Opción inválida: selecciona algunas de las opciones --> piedra --> papel --> tijeras"
    );
  }
}
piedraPapelTijera(j1, j2, nameJ1, nameJ2);
