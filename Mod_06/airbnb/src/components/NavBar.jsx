import React from "react";
import logo from "../img/airbnb-logo.png";

export default function NavBar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="logo" />
    </nav>
  );
}
