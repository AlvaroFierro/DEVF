// Requiere las clase padre en este caso mascota
const { Mascota } = require("./Mascota");
//Clase hija de Mascota
class Perro extends Mascota {
  constructor(raza, color, nombre) {
    // super pide la herencia del padre, en este caso se pide patas y nombre
    super(4, nombre);
    console.log("Se creo el Perro");
    this.raza = raza;
    this.color = color;
  }

  getRaza() {
    return this.raza;
  }
}

module.exports = {
  Perro,
};
