import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <h1>You chose candy!</h1>
      <Link to="/">Vending Machine</Link>
    </div>
  );
};

export default Candy;
