const request = require("request");

// 1.- Hacer una petición a la PokeAPI para obtener cualquier Pokémon.  Muestra sus tipos en consola mediante un for.
//                     https://pokeapi.co/

// const getPokemonByName = (pokemon) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

//   request.get(url, (err, response, body) => {
//     if (err || response.statusCode === 404) {
//       console.log(err);
//       return null;
//     }

//     const pokemon = JSON.parse(body);

//     const { name, types } = pokemon;

//     const type = types.map((type) => {
//       const { type: { name } } = type;
//       return name;
//     });

//     console.log(`${name} tiene los siguientes tipos: ${type}`);
//   });
// };

// getPokemonByName('pikachu');

// 2.- Escribe una función que al ejecutarse realice una petición a la API de Open Library.
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot)

// const getAuthorByBook = (book) => {

// 3.- Hacer una petición por autor y devolver la lista de
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

// 5.- Hacer una petición a la swapi para obtener un personaje y también obtener
//     las películas donde aparece.
//                     https://swapi.co/

// 7.- Traer los primeros 151 pokemon de la primera generacion y
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño
//     y peso.
//                       https://pokeapi.co/
