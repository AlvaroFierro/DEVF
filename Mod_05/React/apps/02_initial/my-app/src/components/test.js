import React, { useState } from "react";

const Test = () => {
  //set props, states, constant, functions, request(API), context
  // this is a prop
  const name = "This is my first prop";
  const temperature = 21;
  const [numbers, setNumber] = useState([1, 2, 3, 4, 5, 6]);
  const [time, setTime] = useState(1);
  const [movies, setMovie] = useState({
    name: "007",
    year: "1997",
  });

  const aumentar = () => {
    setTime(time + 1);
    setNumber([...numbers, time + 6]);

    setMovie({
      ...movies,
      director: "James Cameron",
    });
  };
  return (
    <>
      <div>
        <ul>
          <button onClick={aumentar}>Aumentar</button>
          <p>Tiempo: {time}</p>
          {numbers.map((element, index) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
      {/* <h1>{name}</h1>
      <h2>Frio o calor</h2>
      <p>
        {
          temperature > 20 ? "Calor" : "Frio"
        }
        </p>
      <ul>
        {
          numbers.map((element, index) => {
            <li>{index} - {element}</li>;
            )};
        }
      </ul> */}
    </>
  );
};

export default Test;
