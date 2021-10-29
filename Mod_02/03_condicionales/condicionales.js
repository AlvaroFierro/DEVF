// Condicionales - evaluar una decision que puede dar como resultado algo verdadero o falso

// Operadores aritmeticos

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

// If elsse if
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
    console.log('No se cual es el valor')
}
