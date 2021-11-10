const request = require("request");
// Consigue la URL de la API
const URL_SOURCE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";

// Create --> POST
// Creando un autor
// Objeto de creacion
// { // Nombre del source de la api -- el nombre que va a tener
//   "name": name,
//   "last_name": lastName,
//   "nacionalidad": nacionalidad,
//   "biography": biography,
//   "gender": gender,
//   "age": age,
//   "is_alive": isAlive
// }

const createAuthor = (
  name,
  last_name,
  nacionalidad,
  biography,
  gender,
  age,
  is_alive
) => {
  const URL_POST = `${URL_SOURCE}/authors/`;
  console.log("ruta", URL_POST);

  // Primer manera de hacer las cosas
  const jsonSend = {
    name,
    last_name,
    nacionalidad,
    biography,
    gender,
    age,
    is_alive,
  };

  // Segunda manera de hacer las cosas TAMBIEN ES VALIDA
  // const jsonSend = {
  //   "name": name,
  //   "last_name": lastName,
  //   "nacionalidad": nacionalidad,
  //   "biography": biography,
  //   "gender": gender,
  //   "age": age,
  //   "is_alive": isAlive
  // }

  return request.post(URL_POST, { form: jsonSend }, (error, response, body) => {
    if (response.statusCode === 201) {
      const newAuthor = JSON.parse(body);
      console.log("Autor creado", newAuthor);

      return newAuthor;
    } else {
      console.log("ERROR", response.statusCode);
      return error;
    }
  });
};

// Creando el autor
// createAuthor("Alvaro", "Fierro", "MX", "Estudiante", "M", 18, true);

// Read --> GET
// Obtener todos los autores de la lista

const getAllAuthors = () => {
  const GET_URL = `${URL_SOURCE}/authors/`;
  console.log("Ruta:", GET_URL);

  return request.get(GET_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      const allAuthors = JSON.parse(body);
      console.log("Todos los autores son :", allAuthors);
      return allAuthors;
    } else {
      console.log("Error:", response.statusCode);
    }
  });
};

// getAllAuthors();

// Get an author by id
// Parameter ----> id with (get)

const findById = (id) => {
  const GET_URL = `${URL_SOURCE}/authors/${id}`;
  console.log("Ruta:", GET_URL);

  return request.get(GET_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      const author = JSON.parse(body);
      console.log(author);
      return author;
    } else {
      console.log("Error:", response.statusCode);
    }
  });
};

// findById(14648);

// Update --> PUT
// Actualizar un autor
// Objeto de update:
// {
//   "name": name,
//   "last_name": lastName,
//   "nacionalidad": nacionalidad,
//   "biography": biography,
//   "gender": gender,
//   "age": age,
//   "is_alive": isAlive
// }

const updateAuthor = (
  id,
  name,
  last_name,
  nacionalidad,
  biography,
  gender,
  age,
  is_alive
) => {
  const PUT_URL = `${URL_SOURCE}/authors/${id}/`;
  console.log("Ruta:", URL_SOURCE);

  const jsonSend = {
    name,
    last_name,
    nacionalidad,
    biography,
    gender,
    age,
    is_alive,
  };

  return request.put(PUT_URL, { form: jsonSend }, (error, response, body) => {
    if (response.statusCode === 200) {
      const updatedAuthor = JSON.parse(body);
      console.log("Autor actualizado", updatedAuthor);
      return updatedAuthor;
    } else {
      console.log("Error:", response.statusCode);
    }
  });
};

// updateAuthor(14648, "Alvaro", "Fierro", "MX", "DEVF student", "M", 18, true);

// Delete --> DELETE
// Borrado fisico de un autor por id
// Parametro ----> id with (delete)

const deleteAuthor = (id) => {
  const DEL_URL = `${URL_SOURCE}/authors/${id}/`;
  console.log("Ruta:", DEL_URL);

  return request.delete(DEL_URL, (error, response, body) => {
    if (response.statusCode === 204) {
      console.log(`El autor con id ${id}, ha sido borrado fisicamente`);
    } else {
      console.log("Error:", response.statusCode);
    }
  });
};

// deleteAuthor(6467);
// findById(6467);
