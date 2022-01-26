const request = require("request");

// request.get(
//   "https://rickandmortyapi.com/api/character/?/name=morty&status=alive",
//   (error, response, body) => {
//     if (error) {
//       console.log(error);
//       return null;
//     }

//     console.log(response.statusCode);
//     console.log(body);
// );

const getCharacterByName = (name) => {
  const URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`;
  console.log("URL", URL);

  request.get(URL, (error, response, body) => {
    if (error) {
      console.log(error);
      return null;
    }

    const { results } = JSON.parse(body);
    console.log(results);
    const characters = results.map((character, index) => {
      console.log(index);
      const {
        name,
        origin: { name: originName },
        image,
      } = character;
      return { name, originName, image };
    });

    console.log(characters);
  });
};

getCharacterByName("evil morty");
