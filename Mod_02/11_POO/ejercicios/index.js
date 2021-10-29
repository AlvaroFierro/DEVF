/*
​
                            Objetos Literales
​
-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/

console.log("------------ 1 ------------ ");
var myPenguin = {
  character: "Alfred",
  origin: "Zig et Puce",
  author: "Alain Saint-Ogan",
  notes: "Alain Saint-OganThe pet penguin of the title characters",
};
console.log(myPenguin);
/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
  de bienvenida. La salida debe ser algo como:
  "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/
console.log("------------ 2 ------------ ");
console.log(
  `Que hay, sino lo sabes soy un pingüino y mi nombre es ${myPenguin.character}`
);
/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
  pingüino llamada puedeVolar y asignalo a falso.
  Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/
console.log("------------ 3 ------------ ");
myPenguin.puedeVolar = false;
console.log(myPenguin.puedeVolar);

/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
  consola: "kaww kaww!!"
  Nota: Sí, así suenan los pingüinos
  Nota de la Nota: No modifiques el código previo. Hazlo en una
  nueva línea de código.
-----------------------------------------------------------------------
*/
console.log("------------ 4 ------------ ");
myPenguin.graznar = "kaww kaww";
console.log(myPenguin.graznar);
/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
  consola el mismo mensaje que escribimos para la bienvenida.
  Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/
console.log("------------ 5 ------------ ");
myPenguin.saludar = function () {
  console.log(
    `Que hay, sino lo sabes soy un pingüino y mi nombre es ${this.character}`
  );
};
myPenguin.saludar();
/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
  "Señor Pingu" y llama al método "saludar" para verificar que 
  se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/
console.log("------------ 6 ------------ ");
myPenguin.character = "Señor Pingu";
myPenguin.saludar();

/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
  consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
  en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
  "No puedo volar :("
-----------------------------------------------------------------------
*/
console.log("------------ 7 ------------ ");
myPenguin.volar = () => {
  if (myPenguin.volar) {
    console.log("Puedo volar!");
  } else {
    console.log("No puedo volar :(");
  }
};

myPenguin.volar();
/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
  llamar el método 'volar' para verificar que el cambio se efectuó
  correctamente.
-----------------------------------------------------------------------
*/
console.log("------------ 8 ------------ ");

myPenguin.volar = () => true;
myPenguin.volar();

/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
  para preparar Mole. Debe contener las propiedades de
  título (string), porciones (numero) e ingredientes (un
  arreglo de strings). Muestra la información de la receta
  para que luzca así:
  
  Mole
  Porciones: 2
  Ingredientes:
  canela
  comino
  cocoa
-------------------------------------------------------------
*/
console.log("------------ 9 ------------ ");

var mole = {
  titulo: "mole",
  porciones: 2,
  ingredientes: ["canela", "comino", "cocoa"],
};

console.log(mole.titulo);
console.log(mole.porciones);
console.log(mole.ingredientes);
/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
  un libro y tenga las propiedades para titulo(string),
  autor(string) y leido(booleano para indicar si se ha 
  leido o no). Itera sobre el arreglo de libros, y por 
  cada libro imprime el titulo y autor, junto con su 
  status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/
console.log("------------ 10 ------------ ");

var arrLibros = [
  {
    titulo: "Libro 1",
    autor: "Autor 1",
    leido: true,
  },
  {
    titulo: "Libro 2",
    autor: "Autor 2",
    leido: false,
  },
];
arrLibros.forEach((item) => {
  console.log("Titulo", item.titulo);
  console.log("Autor", item.autor);
  console.log("Leido", item.leido);
});
/*
​
                          Objetos
​
-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
 calcularIMC()
 esMayorDeEdad()
 El constructor pide nombre, edad,sexo,peso y altura
 Generar el RFC a partir de el nombre, edad y sexo
-----------------------------------------------------------------------
*/
console.log("------------ 11 ------------ ");

class Persona {
  constructor(
    nombre = "",
    APM = "",
    APP = "",
    edad = Number,
    sexo,
    peso = Number,
    altura = Number,
    fecha = new Date()
  ) {
    this.nombre = nombre;
    this.APM = APM;
    this.APP = APP;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.fecha = fecha;
  }
  calcularIMC() {
    return this.peso / this.altura ** 2;
  }
  esMayorDeEdad() {
    if (this.edad > 1) {
      return true;
    } else {
      return false;
    }
  }
  rcf() {
    let app1 = this.uper(this.APM);
    let app2 = this.uper(this.APP);
    let año = this.fecha.getUTCFullYear().toString().slice(-2);
    let mes = this.numberCombersor(this.fecha.getUTCMonth() + 1);
    let day = this.numberCombersor(this.fecha.getUTCDate());
    let concat = app1 + app2 + año + mes + day;
    return concat;
  }
  uper(x = "") {
    let a = x.toUpperCase(),
      b;
    b = a.slice(0, 2);
    return b;
  }
  numberCombersor(x) {
    return ("0" + x).slice(-2);
  }
}

const Alvaro = new Persona(
  "Christofer Alvaro",
  "Herrera",
  "Fierro",
  18,
  "H",
  65,
  1.7,
  new Date("2003-09-03")
);

// console.log(Alvaro);
console.log("El IMC de", Alvaro.nombre, "es", Alvaro.calcularIMC());
console.log(
  "La edad de ",
  Alvaro.nombre,
  "es mayor o igual a 18",
  Alvaro.esMayorDeEdad()
);
console.log("El RFC de", Alvaro.nombre, "es", Alvaro.rcf());
/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
 -Titular y cantidad
 -ingresar(cantidad)
 -retirar(cantidad)
 Hacer las validaciones previas
 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/
console.log("------------ 12 ------------ ");

class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  ingresar(cantidad) {
    if (this.cantidad + cantidad > 900) {
      return "Has superado el limite de $900 \n Operacion Cancelada";
    } else {
      this.cantidad += cantidad;
      return "Operacion exitosa el saldo actual es:  " + this.cantidad;
    }
  }

  retirar(cantidad) {
    if (this.cantidad - cantidad < 10) {
      return "No puedes dejar tu cuenta en 0, el monto minimo es de $10";
    } else {
      this, (cantidad -= cantidad);
      return (
        "Has retirado $" + cantidad + " tu saldo actual es " + this.cantidad
      );
    }
  }
}

let cuenta = new Cuenta("Alvaro", 350);
console.log("Tu saldo es:", cuenta.cantidad);
console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));
console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));
