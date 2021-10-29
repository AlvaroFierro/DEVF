// MDN MOZILLA

// Creacion de objetos, se inicia con la creacion de una variable

// Sintaxis

/*
var nombreObjeto = {
  miembro1Nombre: miembro1Valor, //puede ser un string
  miembro2Nombre: miembro2Valor, // puede ser un arreglo
  miembro3Nombre: miembro3Valor  // un numero, dos arreglos y dos funciones etc
} 
*/

// Objetos literales
// String, numeros y arreglos son PROPIEDADES
// Funciones son METODOS --> OSEA QUE PUEDES HACER ALGO CON ELLOS (TRANSFORMARLOS)

var persona = {
  nombre: {
    pila: "Bob",
    apellido: "Smith",
  },
  edad: 32,
  genero: "masculino",
  intereses: ["música", "esquí"],
  bio: function () {
    alert(
      this.nombre[0] +
        "" +
        this.nombre[1] +
        " tiene " +
        this.edad +
        " años. Le gusta " +
        this.intereses[0] +
        " y " +
        this.intereses[1] +
        "."
    );
  },
  saludo: function () {
    alert("Hola, Soy " + this.nombre[0] + ". ");
  },
};

// This is dot notation
console.log(persona.genero);
console.log((persona.genero = "Femenino"));

// This is brackets notation
// Establece dinamicamento. No solo valores, sino tambien los nombres de los miembros

console.log(persona["edad"]);
console.log((persona["edad"] = 45));

// Creando nuevas propiedades y metodos

// persona.ojos = "Miel";
// console.log(persona.ojos); // No se pero aqui se ve raro

// persona["ojos"] = "Azules";
// console.log(persona["ojos"]); // Siento que esta es mejor
// persona.despedida = function () {
//   alert("Hola a todos");
// };
// persona.despedida();
