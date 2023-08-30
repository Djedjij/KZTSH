import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./navbars/MenuNavbar";
import { MAIN_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import BurgerMenu from "../UI/BurgerMenu";
const Header = () => {
  return (
    <div className="header">
      {/* <MenuNavbar /> */}
      <BurgerMenu />
      <Link to={MAIN_ROUTE}>
        <img className="header-logo" src="/images/logo.png" alt="logo" />
      </Link>

      <Navbar />
    </div>
  );
};

export default Header;
