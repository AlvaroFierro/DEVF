// Un objeto es algo que se constituye por metodos y atributos

// El metodo es la accion que va a realizar

// perro metodos
// camina, olfatea. hace del bano come, respira

// Atributo es lo que hace el objeto
// perro atributos
// piernas, raza,color

// Propiedades

// asosiacion entre un nombre y un valor, osea un metodo del objeto

const ayudanteDeSanta = {
  raza: "galgo",
  color: "cafe",
  ladrar: function () {
    return "wauu";
  },
  comer: function () {
    return "yomi yomi";
  },
};

console.log(ayudanteDeSanta.ladrar());

var snoopy = {
  raza: "beagle",
  color: "negro y blanco",
  ladrar: function () {
    return "wauu";
  },
  comer: function () {
    return "yomi yomi";
  },
};

console.log(snoopy);

// Atributos de un carro
// color, velocidad, ruedas, motor

// Metodos del carro
// arranca(), frena(), dobla()
