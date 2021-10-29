// Los objetos son una estructura de datos
// Se denomina objeto literal al objeto cuyas propiedades estan declaradas TEXTUALMENTE EN EL CODIGO
// Forma basica de creación de objetos
// forma que más se usa
var objeto = {
  String: "string",
  number: 1,
};

// Forma compleja

var segundoObjeto = new Object();
segundoObjeto.valor = "valor";

// Iterar dentro de un objeto (moverse dentro de un archivo)

let mascota = {
  // clave   valor    tipo de dato
  nombre: "Hashy", // string
  color: "Negro", // string
  edad: 7, // Number, int
  macho: true, // Boolean
};

// ----- Accediendo a los valores del objecto -----

//  ----- Notacion por punto -----
// nombre del objeto, valor
console.log("--- Notacion por punto ---");
console.log(mascota.nombre);
console.log(mascota.color);

// ----- Notacion por corchetes -----
console.log("--- Notacion por corchetes [] ---");
console.log(mascota["nombre"]);
console.log(mascota["edad"]);
