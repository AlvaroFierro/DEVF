// Funciones
// es un conjuto de instrucciones para realizar una tarea

// nombre de mi funcion
// () es si necesita parametros -> ingredientes
// {} Dentro de los corchetes van los pasos a seguir

console.log("hoisting", saludar());

function holaAtodos() {
  return "Hola a todos";
}

console.log(holaAtodos());

// function suma(n1, n2) {
//   console.log('primer paramatro:', n1);
//   console.log('segundo paramatro:', n2);
//   var total = n1 + n2;
//   console.log('total', total);
// };

// suma( 1, 2 );

function suma(n1, n2) {
  console.log("primer paramatro:", n1);
  console.log("segundo paramatro:", n2);
  var total = n1 + n2;
  return total;
}

var resultadoUno = suma(1, 2);
var resultadoDos = suma(1, 6);
var resultadoTres = suma(6, 1);

console.log(resultadoUno + resultadoDos + resultadoTres);

// Anidando Funciones
function obtenerMarcador() {
  var partido1 = 3;
  var partido2 = 2;
  console.log(partido1);
  var totalDeGoles = partido1 + partido2;

  function agregar() {
    var nombre = "Pedrito";
    return nombre + " anoto: " + totalDeGoles + " goles";
  }

  return agregar();
}

var pedro = obtenerMarcador();

// Funcion Impura

function sumaRandom(n1) {
  return n1 + Math.random() * 10;
}

var resultadoImpuroUno = sumaRandom(2);
var resultadoImpuroDos = sumaRandom(2);
var resultadoImpuroTres = sumaRandom(2);

console.log(resultadoImpuroUno + resultadoImpuroDos + resultadoImpuroTres);

// Scope
// Alcance de funciones/variables

var partido1 = 3;
var partido2 = 2;
console.log("goles en partido 2, declarado", partido2);

function scopeGlobal(n1, n2) {
  var partido1 = 3;
  partido2 = 5;
  console.log("goles en partido 2, deentro de la funcion", partido2);
  var totalDeGoles = partido1 + partido2;

  function scopeLocal() {
    var nombre = "Pedrito";
    return nombre + " anoto: " + totalDeGoles + " goles";
  }

  return scopeLocal();
}
console.log("goles en partido 2, previo a funcion", partido2);

// console.log(scopeGlobal());

console.log("goles en partido 2, post funcion", partido2);

// Como declaramos funciones

// Funcion por declaracion
// function nombre(p1, p2...) { }

function saludar() {
  return "Hola";
}

console.log(saludar());

console.log(typeof saludar);

// Funciones como expresion
// var nombre = function(p1, p2...) { }

var saludo = function () {
  return "Hola";
};
saludo();
console.log("funcion como expresion", saludo);
console.log("funcion como expresion", saludo());

// Funciones como objeto
// new Function(p1, p2..., code);

var hello = new Function("return 'hello';");

console.log("funcion como objeto", hello);
console.log("funcion como objeto", hello());

// Funcion suma, multiplicacion, resta y división

function suma(a, b) {
  return a + b;
}

console.log(suma(1, 5));

function resta(c, d) {
  return c - d;
}

console.log(resta(7, 2));

function multiplicación(e, f) {
  return e * f;
}

console.log(multiplicación(5, 4));

function div(g, h) {
  return g / h;
}

console.log(div(6, 2));

// // Mayor de edad

var edad = Number(prompt("Introduce tu edad"));

function mayorDeEdad(edad) {
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}
mayorDeEdad(edad);

// // Numero positivo o negativo
var numero = Number(prompt("Introduce un número"));
function numPositivoNegativo(numero) {
  if (numero > 0) {
    console.log("Número positivo");
  } else if (numero < 0) {
    console.log("Número negativo");
  } else {
    console.log("Es cero");
  }
}
numPositivoNegativo(numero);

// // Saber si es consonante o vocal

var letra = prompt("Introduce solo una letra").toLowerCase();

function vocalConsonante(letra) {
  if (
    letra.toLowerCase() == "a" ||
    letra.toLowerCase() == "e" ||
    letra.toLowerCase() == "i" ||
    letra.toLowerCase() == "o" ||
    letra.toLowerCase() == "u"
  ) {
    console.log("Es vocal");
  } else {
    console.log("Es consonante");
  }
}

vocalConsonante(letra);

// En un array colocar los numeros pares entre el 0 y 100
function pares(Number) {
  var arrayPares = [];
  for (var index = 2; index <= 100; index++) {
    if (index % 2 == 0) {
      arrayPares.push(index);
    }
  }
  return arrayPares;
}

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

// Cambiar el juego de piedra, papel y tijeras por funciones
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
