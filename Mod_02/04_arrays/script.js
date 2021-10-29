// Method #2

var newCars = new Array ('Saab', 'Volvo', 'BMW', 'Lotus', 'Ferrari', 'Nissan');
console.log(newCars);


// Method 3

var cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';
cars[3] = 'Lotus';
cars[4] = 'Ferrari';
console.log(cars)

// Split an Array

var banner = 'This is an example of what a banner does in JS'
var singleBanner = banner.split(3);
console.log(singleBanner);

// Slice var 

var cars = new Array("Saab", "Volvo", "BMW", "Lotus", "Ferrari", "Nissan")
filterCars =cars.slice(1,4)
console.log(cars)

// Splice --> Agregar a borrar elementos de un array

var arrayCars = ['Saab', 'Volvo', 'BMW', 'Lotus', 'Ferrari', 'Nissan']
console.log(arrayCars)
arrayCars.splice(1,2,'Toyota');
console.log(arrayCars);
console.log(arrayCars.sort());


// Reverse --> ordena al reves

var numbers = ['0', '1', '2', '3', '4', '5']
console.log(numbers.reverse());

// Concat -->

var cadena = ['Split', 'slice', 'splice']
var years = [1992, 1993, 1994, 1995]
var twistArr = cadena.concat(years,numbers)
console.log(twistArr)
