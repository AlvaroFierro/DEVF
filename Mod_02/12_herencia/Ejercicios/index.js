/*
------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {
  constructor(materia) {
    this.materia = materia;
  }

  promedio(calificaciones = []) {
    var suma = 0;
    calificaciones.forEach((element) => {
      suma += element;
    });
    console.log(suma / calificaciones.length);
  }
}

class MaestroFisica extends Maestro {
  constructor(antiguedad) {
    this.antiguedad = antiguedad;
    super("fisica");
  }
}

class MaestroMusica extends Maestro {
  constructor(edad) {
    this.edad = Number(edad);
    super("musica");
  }
}
console.log("------------ 1 ------------");
var prom = new Maestro("fisica");
prom.promedio([10, 8, 9]);
/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/
console.log("------------ 2 ------------");

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
}

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/
console.log("------------ 3 ------------");

class Lavadora extends Electrodomestico {
  constructor(carga) {
    super(50, "color", 20);
    this.carga = carga;
  }
  precioFinal() {
    console.log(`Precio total `, this.consumoEnergetico * this.carga);
  }
}
var lava = new Lavadora(25);
lava.precioFinal();

/*
------------------------------------------------------------
4.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros 
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
------------------------------------------------------------
*/
console.log("------------ 4 ------------");

class Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    this.numPuertas = numPuertas;
    this.numVentanas = numVentanas;
    this.numPisos = numPisos;
    this.direccion = direccion;
    this.altura = altura;
    this.largo = largo;
    this.ancho = ancho;
  }
  metrosCuadrados() {
    console.log(`Los metros^2 son:`, this.ancho ** 2);
  }

  direccion() {
    console.log(`La direccion es:`, this.direccion);
  }

  direccionAlterada(nuevaDireccion) {
    this.direccion = nuevaDireccion;
  }
}

class Casa extends Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
  }
}

class Edificio extends Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
  }
}

var casa1 = new Casa(7, 7, 5, "Casa 1", 2.5, 4, 6);
console.log(casa1);
casa1.direccionAlterada("Casa 2");
console.log(casa1.direccion);
casa1.metrosCuadrados();

/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
------------------------------------------------------------
*/
console.log("------------ 5 ------------");

class Bebida {
  constructor(cantidad) {
    this.cantidad = cantidad;
  }
  getCantidad() {
    return this.cantidad;
  }
  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
}
class Cerveza extends Bebida {
  constructor(porcentajeAlcohol, cantidad) {
    super(cantidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }
  getPorcentajeAlcohol() {
    return this.porcentajeAlcohol;
  }
  setPorcentajeAlcohol(porcentajeAlcohol) {
    this.porcentajeAlcohol = porcentajeAlcohol;
  }
}
class Refresco extends Bebida {
  constructor(azucar, cantidad) {
    super(cantidad);
    this.azucar = azucar;
  }
  getAzucar() {
    return this.azucar;
  }
  setAzucar(azucar) {
    this.azucar = azucar;
  }
}
var refresc = new Refresco(120, 240);
console.log(`La medida del refresco es:`, refresc.getAzucar());
refresc.setAzucar(75);
console.log(`Se tiene de azucar`, refresc.getAzucar(), `g`);
