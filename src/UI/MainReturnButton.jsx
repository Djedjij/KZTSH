import React from "react";
import { Link } from "react-router-dom";
import "./MainReturnButton.css";
import { MAIN_ROUTE } from "../utils/consts";
const MainReturnButton = () => {
  return (
    <Link className="MainReturnButton" to={MAIN_ROUTE}>
      Главная
    </Link>
  );
};

export default MainReturnButton;
