// Pedir el nombre de la persona, dirección y telefóno

var nombre = prompt("Cual es tu nombre");
var direccion = prompt("Cual es tu dirección");
var telefono = prompt("Cual es tu telefono");

// Almacenar y mostrar en un console.log

console.log('Tu nombre es:', nombre);
console.log('Tu dirección es:', direccion);
console.log('Tu telefono es:', telefono);

// Preguntar al usuario su fecha de nacimiento y averiguar su edad
var edadUsuario = prompt("Anota tu edad por favor");
var año = 2021;
var añoNac = año - edadUsuario;
alert("Tu año de nacimiento es: " + añoNac);
