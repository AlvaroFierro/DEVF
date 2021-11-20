// DOM (Document Object Model)
// Conecta a las paginas web a scripts o lenguajes de programacion.
// Además es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JS

// Usando getElementById
// Lo que hace es obtener el elemento por nombre del Id

document.getElementById("parrafo1").innerHTML =
  "First paragraph made with the DOM";
document.getElementById("parrafo2").innerHTML =
  "Second paragraph made with the DOM";

// Nota:
// innerHTML es para cambiar el contenido del elemento

// Changing the style of an element with the class container
document.getElementsByClassName("container")[0].style.backgroundColor = "blue";
document.getElementsByClassName("container")[0].style.padding = "20px";

// Changing p style with id parrafo1
document.getElementById("parrafo1").style.color = "white";

// Changing p style with id parrafo2
document.getElementById("parrafo2").style.color = "violet";

// Changing button style
document.getElementById("click").style.borderRadius = "20px";
document.getElementById("click").style.marginLeft = "50px";

click.onclick = function () {
  alert("Clicked!");
};
