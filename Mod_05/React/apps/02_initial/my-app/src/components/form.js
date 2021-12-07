import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const sendData = (e) => {
    e.preventDefault();
    console.log("Sending...", +data.name + "   " + data.lastName);
  };

  const handleDataFields = (e) => {
    // console.log('elemento',e.target)
    // console.log("atributo name",e.target.name);
    console.log("atributo value", e.target.value);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Contact Form</h1>
      <form className="row" onSubmit={sendData}>
        <div>
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={(e) => handleDataFields(e)}
              name="name"
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              onChange={(e) => handleDataFields(e)}
              name="lastName"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Form
          </button>
        </div>
      </form>

      <ul>
        <li>Name: {data.nombre}</li>
        <li>Last Name: {data.apellido}</li>
      </ul>
    </>
  );
};

export default Form;
