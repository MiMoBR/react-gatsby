import React from "react";
import { LinTest } from "./style";

const MainPublic = () => {
  return (
    <div>
      <p>dentro do Route</p>
      <LinTest to="/form">Form</LinTest>
    </div>
  );
};

export default MainPublic;
