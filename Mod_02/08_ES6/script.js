console.log("🤷‍♂️", "🤦‍♀️");
const multiplo = 90;
// For each

var fruits = ["apple", "orange", "blueberry", "watermelon"];
var numeros = [1, 2, 3, 4, 5];
suma = 0;

// // Seleccionar el arreglo (fruits)

fruits.forEach((item) => {
  console.log(item);
});

numeros.forEach((number) => {
  suma = number + multiplo;
  console.log(suma);
});

// for (más largo)

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// Palindromo

var palabra = prompt("Introduce una palabra").toLowerCase();
function palindrome(palabra) {
  const sentencia = palabra.replace(/[\W_]/g, "").toLowerCase();
  const sentenciaReversed = sentencia.split("").reverse().join("");
  if (sentenciaReversed == sentencia) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(palabra));

// // Farenheit to Celcius

var fahrenheit = prompt(
  "Introduce los grados fahrenheit para convertir a celcius"
);

function fahrenheitToCelcius(fahrenheit) {
  var gFahrenheit = fahrenheit;
  var gCelcius = ((fahrenheit - 32) * 5) / 9;
  var fahrenheitConverted =
    fahrenheit + "\xB0F son " + gCelcius.toFixed(2) + "\xB0C";
  console.log(fahrenheitConverted);
}

fahrenheitToCelcius(fahrenheit);

// Longest Country

const paises = ["México", "Panamá", "Guatemala", "El Salvador"];

function longestCountry(paises) {
  var longitudCadena = 0;
  var longestC;

  for (var i = 0; i < paises.length; i++) {
    if (paises[i].length > longitudCadena) {
      var longitudCadena = paises[i].length;
      longestC = paises[i];
    }
  }
  return longestC;
}
longestCountry(paises);

console.log(longestCountry(paises));
