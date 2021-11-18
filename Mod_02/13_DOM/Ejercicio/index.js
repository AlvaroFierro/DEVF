function card() {
  console.log("Funcion card");

  var getContainer = document.querySelector(".container");
  var cardContainer = document.querySelector(".cardContainer");

  var card = document.createElement("div");

  var nombreClienteP = document.createElement("p");
  var direccionClienteP = document.createElement("p");
  var telefonoClienteP = document.createElement("p");
  var eleccionPiñaP = document.createElement("p");

  var imagenPerfil = document.createElement("img");

  var nombreCliente = document.getElementById("nombreCliente");
  var direccionCliente = document.getElementById("direccionCliente");
  var telefonoCliente = document.getElementById("telefonoCliente");
  var eleccionPiña = document.getElementById("eleccionPiña");

  var pizzaSpecs = [
    document.getElementById("eleccionPizza").value,
    document.getElementById("ingredienteExtra").value,
  ];

  card.setAttribute("class", "card col-2");
  card.setAttribute(
    "style",
    "border-radius:15px; border:2px solid gray; margin:1.5rem 1rem; padding:.55%"
  );
  imagenPerfil.setAttribute("style", "width:100%");
  imagenPerfil.setAttribute("src", "./img/pizza.jpg");

  cardContainer.appendChild(card);
  card.appendChild(imagenPerfil);
  card.appendChild(nombreClienteP);
  card.appendChild(direccionClienteP);
  card.appendChild(telefonoClienteP);
  card.appendChild(eleccionPiñaP);

  console.log(nombreCliente.value);
  console.log(direccionCliente.value);
  console.log(telefonoCliente.value);
  console.log(eleccionPiña.value);

  nombreClienteP.innerHTML = `Nombre: ${nombreCliente.value} `;
  direccionClienteP.innerHTML = `Direccion: ${direccionCliente.value} `;
  telefonoClienteP.innerHTML = `Telefono: ${telefonoCliente.value} `;
  eleccionPiñaP.innerHTML = setPiña();
}

function setPiña() {
  if (eleccionPiña.value.toLowerCase() === "si") {
    return `Excelente`;
  } else if (eleccionPiña.value.toLowerCase() === "no") {
    return `Está bien`;
  } else {
    return `Piña: Opcion invalida`;
  }
}
