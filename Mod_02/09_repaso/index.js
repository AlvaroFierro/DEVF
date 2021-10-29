"use strict";

// var: Declaracion de variable globales
// let: Depende de su
// const: es una constante, significa que no puede cambiar su tipo de dato y dependiendo de su escope

// Declaracion con var

var saludo;
saludo = 'hola'
saludo = 'adios'
if (saludo) {
    var saludo = "adios x2"
    console.log(saludo)
}

console.log(saludo)

// Declaracion con let

let saludo;
saludo = "hola";
saludo = "adios";
if (saludo) {
  var saludo = "adios x2";
  console.log(saludo);
}

console.log(typeof saludo);

// Declaracion con const

const saludo = "hola"
//saludo = 'hola
//saludo = 'adios
if (saludo) {
  const saludo = "adios x2";
  console.log(saludo);
}

console.log(typeof saludo);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.pop();
console.log(numbers);

// Estructuras de control

console.log(1 === "1"); // Tipo de dato y valor

// Comparando valores
// No se usa 👀
console.log("Cinco es igual a cinco", 5 == 5);
// Compara valores y tipos de datos
console.log("Cinco es igual a cinco", 5 === "5");

// !=

// Diferente de (valores)
console.log("5 es igual a cinco>", 5 != 5);

// Diferente de ( y tipo de dato valores)
console.log("5 es igual a cinco>", 5 !== "5");

// Menor que <
console.log("5 es menor que 2>", 5 < 2);
console.log("5 es menor que 10>", 5 < 2);
console.log("5 es menor que 5>", 5 < 5);

// Menor o igual que <=
console.log("5 es menor o igual que 2>", 5 < 2);

// <
// Mayor
console.log("5 es menor que 2>", 5 > 2);
console.log("5 es menor que 10>", 5 > 2);
console.log("5 es menor que 5>", 5 > 5);

// Mayor o igual que >=
console.log("5 es mayor o igual que 5>", 5 < 5);

// =
// Declarar a osignar una variable

var miVariable = 1;

// OPERADORES LOGICOS

// OPERADOR AND es para evaluar dos o más condiciones
// &&

console.log("10 > 3 &&  10 > 2 && 1", 10 > 3 && 10 > 2 && 1 > 2);
console.log("10 > 9 && 10 > 1", 10 > 9 && 10 > 1);

// OPERADOR OR para evaluar que todas sus condiciones sean verdaderas aunque una de sus condicione sean verdaderas
// Si una se cumple es verdadero
// ||

console.log("10 > 3 || 2 && 1", 10 > 3 || (2 && 1));
console.log("10 > 9 || 10 > 1", 10 > 9 || 10 > 1);

// Operador NOT se usa para contradecir

var verdadero = true;
var falso = false;

console.log("Verdadero ", !verdadero);
console.log("Falso ", !falso);

// TOMANDO DECISIONES IF && ELSE

if (1 === 1) {
  console.log("es el mismo valor");
}

var firstName = "Alvaro";
var lastName = "Alvaro";

console.log(firstName === lastName);

if (firstName === lastName) {
  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("Las variables son iguales");
}

// If Else ejecutar el codigo en caso que una condicion no se cumpla

// if (condition) {
//  sentencia
// } else {
// ..
// }

if (1 === 2) {
  console.log("El primer valor es igual al segundo valor");
} else {
  console.log("El valor es diferente");
}

// If else if
// if (condition) {
//    ..
// } else if {
// ..
// } else {
// }

if (1 === 2) {
  console.log("El primer valor es igual al segundo valor");
} else if (2 !== 2) {
  console.log("El valor es diferente de 2");
} else if (3 !== 3) {
  console.log("El valor es diferente de 3");
} else {
  console.log("No se cual es el valor");
}

const edad = 18;
const ine = true;

if (edad >= 18 || ine) {
  console.log("Eres mayor de edad");
} else {
  console.log("eres menor de edad o no tienes ine");
}

const semaforo = "verde";

if (semaforo === "verde") {
  console.log("avance");
} else if (semaforo === "amarillo") {
  console.log("desacelere");
} else {
  console.log("detente");
}

// Ciclos

const array = [1, 2, 3];
console.log("Normal loop");
for (var index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
console.log("of");

for (const iterator of array) {
  console.log(iterator);
}

console.log("For each");
const forEachArray
array.forEach(element => {
    let newElement = element + 1
    console.log(newElement)
    return newElement
});

console.log("map");
const mapArray = array.map(element => {
    let newElement = element +1
    console.log(newElement)
    return newElement
});

console.log('for each Array', forEachArray)
console.log('map array', mapArray)

// Funciones

function normal(params) {
    console.log('estos son los parametros', params)
}

var miFuncion = function (params) {
    console.log('estos son los parametros', params);
}

var normalFunction = normal ('hola a todos')

var funcionVar = miFuncion("hola a todos desde var")

// Template strings

var templateString = "hola a todos soy un template string \n" + "soy un template string"

const n1 = 1;
const n2 = 3;
var templateString = `la suma de los valores es = ${n1 + n2}`;

console.log(templateString);

let collection = [
  {
    id: 1,
    title: "La vida es bella",
  },
  {
    id: 2,
    title: "titanic",
  },
];

// const myId = 3;
// console.log(
//   `Titulo de la pelicula: ${collection.find((item) => item.id === myId).title}`
// );

const titulo = "titanic";
const edad = 26;
// let miVariable;
// if (titulo) {
//     miVariable = titulo;
// } else {
//     miVariable = 'No hay titulo'
// }

// console.log(miVariable);

// conidcion ? la respuesta positiva : la respuesta negativa

const miVariable = titulo // la condicion si existe el titulo
  ? `el titulo es ${titulo}` // la parte positiva
  : "no hay titulo";

console.log(miVariable);

//Destructuting -- destructuracion
// descomponer un array u objeto en diferentes variables
// Spread operator nos ayuda transformar los elementos en argumentos, parametros de manera individual

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const [a, valor, c, d] = myArray;

console.log(myArray[1]);
console.log(valor);

let numeros = [4, 26, 54, 249, 861, 564];

const numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

const perro = {
  nombre: "snoopy",
  edadPerro: 5,
  altura: 155,
  adoptado: true,
  dueno: {
      name: 'Charlie Brown',
      edad: 10,
      serie:'peanuts'
  }
};

const {
     nombre, 
     edad: edadPerrito, 
     dueno: {nombre:nombreDelDueno}
    } = perro;

console.log(nombre);
console.log(edadPerrito);
console.log(name);
