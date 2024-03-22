import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/Soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
