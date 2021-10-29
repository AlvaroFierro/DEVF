// Variable = forma de guardar/almacenar datos para poderlos reutilizar después
// Ejemplo: 
var nombreDeMiVariable = 5; // camelCase
var NombreDeMiVariable = 1; // UpperCamelCase || PascalCase
var nombre_de_mi_variable = 2; // lower_snake_case o snake_case
var NOMBRE_DE_MI_VARIABLE = 3; // SCREAM_SNAKE_CASE o upper_case
// var nombre-de-mi-variable = 5; kebab-case
var NOMBREDEMIVARIABLE = 4;

console.log(nombreDeMiVariable + 5);
console.log(NombreDeMiVariable + 5);
console.log(nombre_de_mi_variable + 5) ;
console.log(NOMBRE_DE_MI_VARIABLE + 5);


// Tipos de Datos
// String = cadena de texto, representa datos textuales.
var nombre = 'Alvaro';
var apellido = "Fierro";

console.log('nombre', nombre);
console.log('apellido', apellido);

// Number = dato numerico, comprende los datos flotantes, decimales || otros
var numero = 1;
var otroNumero = 2;
var tercerNumero = 3 * 'hola';
var cuartoNumero = 1 + 'hola';

console.log('Numero', nombre);
console.log('Numero', otroNumero);
console.log('Numero', tercerNumero); //NaN
console.log('Numero', cuartoNumero);
