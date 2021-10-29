var nombre = prompt("Cual es tu nombre");
var edad = Number(prompt("Cual es tu edad"));
var frontera = prompt("Vives en frontera?").toLowerCase();
var embarazo = prompt("Estás embarazada?").toLowerCase();

if (edad >= 18 && frontera === "si") {
  console.log("Pasa a vacunarte", nombre);
} else if (edad >= 18 && embarazo === "si") {
  console.log("Pasa a vacuanrte", nombre);
} else if (edad >= 18 ) {
  console.log("Pasa a vacunarte", nombre);
} else {
  console.log("No puedes pasar a vacunarte", nombre);
}
