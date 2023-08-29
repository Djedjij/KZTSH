import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MAIN_ROUTES } from "../../utils/consts";
const MenuNavbar = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const handleDropdownMenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };
  return (
    <div>
      <FaBars className="header-menu-btn" onClick={handleDropdownMenu} />
      {showDropdownMenu && (
        <div className="dropdown">
          <ul>
            {MAIN_ROUTES.map((el) => (
              <li key={el.name}>
                <Link className="Link" to={el.path}>
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuNavbar;
