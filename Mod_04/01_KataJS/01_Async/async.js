// Sincrono

// Tarea 1 --> 2 --> 3 --> Fin

// Asincrono
// Tarea 1 --> 2 --/ Aun no se ha hecho nada --/ Tarea 3

// Que son los callbacks
// Una funcion que recibe como parametro otra funcion y la ejecuta

function saludar(nombre) {
  console.log(`Hola, yo soy ${nombre}`);
}

function despedida(nombre) {
  console.log(`Nos vemos, fue un gusto, ${nombre}`);
}

function crearNombre(callback) {
  console.log("Callback", callback);
  const nombre = "Alvaro";
  callback(nombre);
}

crearNombre(saludar);
crearNombre(despedida);

function soyCien() {
  return 100;
}

function soyDoscientos() {
  return 200;
}

function sumaDosFunciones(function1, function2) {
  const suma = function1() + function2();
  return suma;
}

const sumaDeFunciones = sumaDosFunciones(soyCien, soyDoscientos);
console.log("La suma de las funciones es:", sumaDeFunciones);

// SetTimeout
// le da un tiempo a la ejecucion de una funcion

const miliSegundos = 3000;

setTimeout(() => {
  console.log(`Hola, Pasaron ${miliSegundos} milisegundos`);
}, miliSegundos);

// Event Loop
// A JS se le considera un lenguage single threaded, asincrono y no bloqueante

// JS posee un modelo de event loop (concurrencia)
// Es el motor
// Esta el pendiente de que elementos se pasan a la cola o a la pila de ejecucion
// Encargado de mantener el orden de ejecucion
// Nunca interrumpe otros programas en la ejecucion.

console.log("--- Todo en pila de ejecucion ---");

console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 2000);
console.log(4);

console.log("--- Esperando en la cola de ejecucion---");
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(3);
}, 2000);
console.log(4);

console.log("--- Simulando cuello de botella ---");

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);

for (let index = 0; index < 99; index++) {
  console.log(`index`, index);
}
