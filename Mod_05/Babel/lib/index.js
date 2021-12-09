"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getItems = function getItems() {
  return console.log("This is an arrow function with babel");
};

var movies = {
  name: "Star Wars",
  year: 1977,
  duration: "121min"
};
var food = ["pizza", "chicken", "bread"];
food.forEach(function (element) {
  return console.log("This is a food: ", element);
});
var arr = [1, 2, 3, 4];
var arr2 = [4, 5];
arr = [].concat(_toConsumableArray(arr), arr2);
console.log(arr); /// ---- Ejercicios ---- ///
// 1. Escribe una arrow function JavaScript que invierta un número.

var numeroInvertido = function numeroInvertido(numero) {
  return parseFloat(numero.toString().split("").reverse().join("")) * Math.sign(numero);
};

console.log("El n\xFAmero invertido es: ".concat(numeroInvertido(123))); // 2. Escribe una función JavaScript que genere todas las combinaciones de una cadena

function combinator(s) {
  combinations = [];

  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      combinations.push(s.slice(i, j));
    }
  }

  return combinations;
}

console.log(combinator("dog")); // 3. Escribir una función JavaScript que acepte una cadena como parámetro y convierta la primera letra de cada palabra de la cadena en mayúscula

function capitalize(str) {
  return str.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}

console.log(capitalize("Funcion que convierte la primer letra a mayuscula")); // 4. Escriba una función JavaScript que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena

function largestWord(str) {
  var words = str.split(" ");
  var longestWord = words.reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

console.log(largestWord("What's the longest word in this sentence"));