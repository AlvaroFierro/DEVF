// Data set que simula una base de datos
// Arreglo de objetos con todos los empleados creados.
const empleados = [
  {
    id: 1,
    name: "Alvaro",
  },
  {
    id: 2,
    name: "Mikee",
  },
  {
    id: 3,
    name: "Dash",
  },
  {
    id: 4,
    name: "Chanchito Feliz",
  },
];

// Arreglo de objetos con los salarios de algunos empleados
const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

// Palabra reservada para exportar variables, funciones
module.exports = { empleados, salarios };
