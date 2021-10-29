// Le dices que requieres la clase padre
const { Mascota } = require("./Mascota");
//Clase hija de Mascota
// Lo extiende a la clase hija
class Gato extends Mascota {
  constructor(vidas) {
    console.log("Se creo el Gato");
    this.vidas = vidas;
  }

  getVidas() {
    return this.vidas;
  }
}

module.exports = {
  Gato,
};
