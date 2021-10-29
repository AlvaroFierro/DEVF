// Switch (menu de opciones)

var edad = 67;
var imprime = "";

switch (edad) {
  case 18:
    imprime = "acabas de cumplir la mayoria de edad";
    break;
  case 25:
    imprime = "ya eres un adulto";
    break;
  case 40:
    imprime = "crisis de los 40";
    break;
  case 70:
    imprime = "eres un anciano";
    break;

  default:
    imprime = "tu edad es neutra";
    break;
}

console.log(imprime);

console.log("Hola mundo");
