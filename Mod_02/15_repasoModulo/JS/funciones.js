// funciones

// function suma(a, b) {
//   return a + b;
// }
// console.log(suma(5, 2));

//mejor practica

function sum(num1, num2) {
  let suma = num1 + num2;
  return console.log(suma);
}

sum(5, 2);

// funciones anonimas
// es una funcion sin nombre
var pelicula = function (nombre) {
  return "la pelicula se titula", nombre;
};

console.log(pelicula("Matrix"));

// callback

// funcion que se ejecuta dentro de otra

function sumame(num1, num2, sumaYmuestrs, sumaPorDos) {
  var sumar = num1 + num2;
  // ejecutando las dos funciones

  sumaYmuestrs(sumar);
  sumaPorDos(sumar);
}

sumame(
  2,
  5,
  function (dato) {
    console.log("La suma es:", dato);
  },
  function (dato) {
    console.log("La multiplicacion por dos es", dato * 2);
  }
);
//arrow function
