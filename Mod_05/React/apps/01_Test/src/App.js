import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  // prop
  // const name = "Mundo";
  // state
  const [count, setCount] = useState(0);

  const countable = () => {
    return setCount(count + 1);
  };

  return (
    <div className="App">
      <div>
        <p>You clicked {count} times </p>
        <button onClick={() => countable()}>Click me</button>
      </div>
    </div>
  );
}

export default App;
