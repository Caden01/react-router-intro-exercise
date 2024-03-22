import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <h1>You chose soda!</h1>
      <Link to="/">Vending Machine</Link>
    </div>
  );
};

export default Soda;
