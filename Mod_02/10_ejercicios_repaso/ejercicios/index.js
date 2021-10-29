/*
            Arrow Functions
---------------------------------------------
1.- Hacer una función que convierta de grados
    centígrados a Farenheit
---------------------------------------------
*/
var gradosCelcius = prompt(
  "Introduce los grados que quieras convertir de celcius a fahrenheit"
);
const celciusToFahrenheit = (gradosCelcius) => {
  if (gradosCelcius == "") {
    alert("Debes de ingresar un valor");
  } else {
    let fahrenheit = (gradosCelcius * 9) / 5 + 32;
    return fahrenheit;
  }
};
let val = celciusToFahrenheit(gradosCelcius);
console.log(
  `${gradosCelcius} grados celcius equivale a : ${val} grados Fahrenheit`
);

/*
---------------------------------------------
2.- Hacer una función que muestre la tabla de
  multiplicar de un número
---------------------------------------------
*/
const numero = prompt("Introduce el numero a multipllicar:");
console.log(`La tabla de multiplicar del ${numero} es:`);
tablaMultiplicar = (numero) => {
  if (numero == "") {
    alert("Debes de ingresar un valor");
  } else {
    for (let i = 1; i <= 10; i++) {
      const result = numero * i;
      console.log(`${numero} x ${i} = ${result}`);
    }
  }
  return numero;
};
tablaMultiplicar(numero);

/*
---------------------------------------------
3.- Función que pida N parametros y devuelva
  cuantos parámetros se le pasaron
---------------------------------------------
*/

/*
---------------------------------------------
4.- Leer un arreglo de enteros y sacar su media aritmetica y promedio
---------------------------------------------
*/

let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => (current += previous));
let avg = sum / values.length;
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;

console.log(`el promedio es ${avg}, la media es ${median}`);

/*
---------------------------------------------
5.- Leer el nombre y sueldo de 8 empleados y
  mostrar el nombre y sueldo del empleado
  que más gana
---------------------------------------------
*/
var sueldoM = 0;
var nombreM = "";
calcularSueldo = (nombre, sueldo) => {
  for (let i = 1; i <= 8; i++) {
    var nombre = String(prompt("Introduce tu nombre"));
    var sueldo = Number(prompt("Introduce tu sueldo"));

    if (sueldo > sueldoM) {
      sueldoM = sueldo;
      nombreM = nombre;
    }
    console.log(`Hola ${nombre}, tu sueldo es ${sueldo}`);
  }
};
calcularSueldo();
console.log(`${nombreM} es quien gana mas con un salario de ${sueldoM}`);

/*
---------------------------------------------
6.- Guardar en un array los 20 primeros
  números pares
---------------------------------------------
*/
var arrayPares = [];
const numParesArray = (arrayPares) => {
  for (i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
      arrayPares.push(i);
    }
  }
  return arrayPares;
};
console.log(numParesArray(arrayPares));

/*
---------------------------------------------
7.- Hacer una funcion que calcule el tiempo
  necesario para que un automóvil que se
  mueve con una velocidad de 73000 m/h
  recorra una distancia de 120 km.
            (TIEMPO = d/v)
---------------------------------------------
*/
var dist = 120; //km
var vel = 73000 * 1.609; // para convertirlo directamente

calcularDistancia = (dist, vel) => {
  var total = (dist / vel) * 60; // convertirlo a segundos
  return total;
};
console.log(
  "El tiempo necesario para que el automovil recorra la distancia de 120km son",
  calcularDistancia(dist, vel),
  "segundos"
);

/*
---------------------------------------------
8.- Crear una funcion que reciba como
  parametro una oración y defina si
  es palindromo
---------------------------------------------
*/
var strPalindromo = prompt(
  "Introduce una palabra, se verificara si es palindromo o no"
);

const palindromo = (strPalindromo) => {
  var delValues = /[\W_]/g;
  var lowerString = strPalindromo.toLowerCase().replace(delValues, "");
  var reversedString = lowerString.split("").reverse().join("");
  if (reversedString === lowerString) {
    alert(`${strPalindromo} si es un palindromo`);
  } else {
    alert(`${strPalindromo} no es un palindromo`);
  }
  return strPalindromo;
};
palindromo(strPalindromo);

/*
---------------------------------------------
9.- Mostrar los primeros 10 dígitos de la
  serie Fibbonacci
---------------------------------------------
*/
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const fiboNum = prompt(
  "Introduce cuantos digitos de la serie fibbonacci quieres"
);

if (fiboNum <= 0) {
  console.log("Introduce un numero mayor que cero");
} else {
  for (let i = 0; i < fiboNum; i++) {
    console.log(fibonacci(i));
  }
}
/*
          Condicionales
​
---------------------------------------------
10.- Escribe una función que halle
   el máximo entre dos números
---------------------------------------------
*/
var numUno = Number(prompt("Ingresa el primer numero a comparar"));
var numDos = Number(prompt("Ingresa el segundo numero a comparar"));
function mayor(numUno, numDos) {
  if (numUno > numDos) {
    console.log(`${numUno} es mayor que ${numDos}`);
  } else {
    console.log(`${numDos} es mayor que ${numUno}`);
  }
  return mayor;
}

mayor(numUno, numDos);

/*
---------------------------------------------
11.- Escribe una función que halle
   el máximo entre tres números
---------------------------------------------
*/
var nUno = Number(prompt("Introduce el primer numero"));
var nDos = Number(prompt("Introduce el segundo numero"));
var nTres = Number(prompt("Introduce el tercer numero"));
function mayorTres(nUno, nDos, nTres) {
  largest = Math.max(nUno, nDos, nTres);
}

mayorTres(nUno, nDos, nTres);
console.log("El numero mas grande es", largest);

/*
---------------------------------------------
12.- Escribe una función  que cheque si un
   número es negativo, positivo o cero
---------------------------------------------
*/
var inputNumber = Number(prompt("Introduce un numero"));
var checarNum = (inputNumber) => {
  if (inputNumber > 0) {
    console.log(` ${inputNumber} es positivo`);
  } else if (inputNumber < 0) {
    console.log(` ${inputNumber} es negativo`);
  } else {
    console.log("El numero ingresado es cero");
  }
  return inputNumber;
};

checarNum(inputNumber);
/*
---------------------------------------------
13.- Escribe una función para verificar si
   un número es divisible entre 5 y 11
   o no lo es
---------------------------------------------
*/
var verificarNumero = prompt("Ingresa un numero");
function numDivisibles(verificarNumero) {
  if (verificarNumero % 5 == 0 && verificarNumero % 11 == 0) {
    console.log(`${verificarNumero} es divisible entre 5 & 11`);
  } else {
    console.log(`${verificarNumero} no es divisible entre 5 & 11`);
  }
  return numDivisibles;
}

numDivisibles(verificarNumero);
/*
---------------------------------------------
14.- Escriba una función para ingresar
   cualquier letra del alfabeto y verifique
   si es vocal o consonante
---------------------------------------------
*/
var vocalConsonante = String(prompt("Escribe una letra")).toLocaleLowerCase();

const funVocalConsonante = (vocalConsonante) => {
  if (
    vocalConsonante == "a" ||
    vocalConsonante == "e" ||
    vocalConsonante == "i" ||
    vocalConsonante == "o" ||
    vocalConsonante == "u"
  ) {
    alert(`${vocalConsonante} es una vocal`);
  } else {
    alert(`${vocalConsonante} no es vocal`);
  }
  return funVocalConsonante;
};

funVocalConsonante(vocalConsonante);
/*
          Ciclos For
---------------------------------------------
15.- Escribe una función que imprima todos
   los números naturales de 1 hasta n
---------------------------------------------
*/
console.log("Numeros del 1 hasta N");

function numNaturales() {
  for (let i = 1; i <= 25; i++) {
    console.log(i);
  }
  return numNaturales;
}
numNaturales();
console.log("=========================");

/*
---------------------------------------------
16.- Escribe una función que imprima todos
   los números naturales en reversa,
   desde n hasta 1.
---------------------------------------------
*/
console.log("Numeros en reversa de N a 1");

function numNaturalesReversed() {
  for (let i = 25; i >= 1; i--) {
    console.log(i);
  }
  return numNaturalesReversed;
}
numNaturalesReversed();

console.log("=========================");
/*
---------------------------------------------
17.- Escribe una función que imprima todos
   los números pares entre 1 y 100
---------------------------------------------
*/
console.log("Numeros pares");

function numPares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  return numPares;
}
numPares();

console.log("==========================");
/*
---------------------------------------------
18.- Escribe una función que imprima todos
   los números nones entre 1 y 100
---------------------------------------------
*/
console.log("Numeros impares");
function numImpares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
  return numImpares;
}

numImpares();
/*
---------------------------------------------
19.- Escribe una función que halle la suma
   de todos los numeros naturales entre
   1 y n
---------------------------------------------
*/
var sumaNum = Number(prompt("Introduce hasta que numeo te gustaria sumar"));
var sum = 0;
function sumaNumNat(sumaNum) {
  for (let i = 1; i <= sumaNum; i++) {
    sum += i;
  }
  return sumaNum;
}

sumaNumNat(sumaNum);
console.log(`La suma de los numeros del 0 al ${sumaNum} es de: ${sum}`);

/*
---------------------------------------------
20.- Escribe una función que imprima una
   pirámide de astericos como la siguiente:

                   *
                  * *
                 * * *
                * * * *
               * * * * *
---------------------------------------------
*/

function piramide(n) {
  for (let i = 1; i <= n; i++) {
    let espacio = " ".repeat(n - i);

    let estrella = "*".repeat(i * 2 - 1);

    console.log(espacio + estrella + espacio);
  }
}

piramide(5);
