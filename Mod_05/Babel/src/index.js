const getItems = () => {
  return console.log("This is an arrow function with babel");
};

const movies = {
  name: "Star Wars",
  year: 1977,
  duration: "121min",
};

const food = ["pizza", "chicken", "bread"];

food.forEach((element) => {
  return console.log("This is a food: ", element);
});

let arr = [1, 2, 3, 4];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr);

/// ---- Ejercicios ---- ///

// 1. Escribe una arrow function JavaScript que invierta un número.

const numeroInvertido = (numero) =>
  parseFloat(numero.toString().split("").reverse().join("")) *
  Math.sign(numero);

console.log(`El número invertido es: ${numeroInvertido(123)}`);

// 2. Escribe una función JavaScript que genere todas las combinaciones de una cadena

// 3. Escribir una función JavaScript que acepte una cadena como parámetro y convierta la primera letra de cada palabra de la cadena en mayúscula

// 4. Escriba una función JavaScript que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena
