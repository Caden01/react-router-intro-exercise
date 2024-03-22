import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <h1>Choose what you want from the vending machine:</h1>
      <ul>
        <Link to="/candy">Candy</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/soda">Soda</Link>
      </ul>
    </div>
  );
};

export default VendingMachine;
