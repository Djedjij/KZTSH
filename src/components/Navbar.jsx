import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsNavbar from "./navbars/ProductsNavbar";
import AboutNavbar from "./navbars/AboutNavbar";
import InfoNavbar from "./navbars/InfoNavbar";
import ContactsNavbar from "./navbars/ContactsNavbar";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  INFO_ROUTE,
  PRODUCTS_ROUTE,
  SERVISES_ROUTE,
} from "../utils/consts";
import ServisesNavbar from "./navbars/ServisesNavbar";
const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownProducts, setShowDropdownProducts] = useState(false);
  const [showDropdownInfo, setShowDropdownInfo] = useState(false);
  const [showDropdownContacts, setShowDropdownContacts] = useState(false);
  const [showDropdownServises, setShowDropdownServises] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownProducts = () => {
    setShowDropdownProducts(!showDropdownProducts);
  };

  const handleDropdownInfo = () => {
    setShowDropdownInfo(!showDropdownInfo);
  };
  const handleDropdownContacts = () => {
    setShowDropdownContacts(!showDropdownContacts);
  };
  const handleDropdownServises = () => {
    setShowDropdownServises(!showDropdownServises);
  };

  return (
    <nav className="main-navbar">
      <ul>
        <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
          <Link className="Link" to={ABOUT_ROUTE}>
            О заводе
          </Link>
          {showDropdown && <AboutNavbar />}
        </li>
        <li
          onMouseEnter={handleDropdownProducts}
          onMouseLeave={handleDropdownProducts}
        >
          <Link className="Link" to={PRODUCTS_ROUTE}>
            Продукция
          </Link>
          {showDropdownProducts && <ProductsNavbar />}
        </li>
        <li
          onMouseEnter={handleDropdownServises}
          onMouseLeave={handleDropdownServises}
        >
          <Link className="Link" to={SERVISES_ROUTE}>
            Услуги
          </Link>
          {showDropdownServises && <ServisesNavbar className={"dropdown"} />}
        </li>
        <li onMouseEnter={handleDropdownInfo} onMouseLeave={handleDropdownInfo}>
          <Link className="Link" to={INFO_ROUTE}>
            Информация
          </Link>
          {showDropdownInfo && <InfoNavbar className={"dropdown"} />}
        </li>
        <li
          onMouseEnter={handleDropdownContacts}
          onMouseLeave={handleDropdownContacts}
        >
          <Link className="Link" to={CONTACTS_ROUTE}>
            Контакты
          </Link>
          {showDropdownContacts && <ContactsNavbar className={"dropdown"} />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
