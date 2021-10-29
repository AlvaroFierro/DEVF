class Perro {
  constructor(nombre, color, raza) {
    this.nombre = nombre;
    this.color = color;
    this.raza = raza;
  }

  //Definiendo metodos
  ladrar() {
    return "Estoy ladrando";
  }
  comer(comida) {
    return `${this.nombre} esta comiendo ${comida}`;
  }
}

const Perro1 = new Perro("Hashy", "B/N", "Alaska");
console.log(Perro1);
console.log(Perro1.nombre);
console.log(Perro1.color);
console.log(Perro1.raza);
console.log(Perro1.ladrar());
console.log(Perro1.comer("Croquetas"));
console.log("Este sera el perro 2 =================");
const Perro2 = new Perro("Blacky", "B/N", "Royal Merchant");
// console.log(Perro2);
console.log(Perro2.nombre);
console.log(Perro2.color);
console.log(Perro2.raza);
console.log(Perro2.ladrar());
console.log(Perro2.comer("Carne"));
