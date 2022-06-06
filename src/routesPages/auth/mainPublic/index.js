import React from "react";
import { LinTest } from "./style";

const MainPublic = () => {
  return (
    <div>
      <p>dentro do Route</p>
      <LinTest to="/">Home</LinTest>
      <LinTest to="/form/">Form</LinTest>
      <LinTest to="/css/">CSS</LinTest>
    </div>
  );
};

export default MainPublic;
