import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./navbars/MenuNavbar";
import { MAIN_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <MenuNavbar />
      <Link to={MAIN_ROUTE}>
        <img className="header-logo" src="/images/kztsh-logo.jpg" alt="logo" />
      </Link>
      <h3>КЗТШ</h3>
      <Navbar />
    </div>
  );
};

export default Header;
