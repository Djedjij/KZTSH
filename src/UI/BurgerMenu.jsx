import React from "react";
import { stack as Menu } from "react-burger-menu";
import { MAIN_ROUTES } from "../utils/consts";
import { Link } from "react-router-dom";
import { useState } from "react";

const BurgerMenu = () => {
  const MenuItem = ({ title, children, path }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const handleClickLink = (link) => {
      if (link === activeLink) {
        toggleSubMenu();
      } else {
        setActiveLink(link);
      }
    };
    const toggleSubMenu = () => {
      setIsOpen(!isOpen);
    };
    const menuItemStyles = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      cursor: "pointer",
    };
    return (
      <div className="MenuItem">
        <div style={menuItemStyles} onClick={toggleSubMenu}>
          <Link to={path}>{title}</Link>
          {children.map((el) => (
            <Link
              key={el.path}
              to={el.path}
              onClick={() => handleClickLink(el.path)}
            >
              <div className="burger-link">{el.name}</div>
            </Link>
          )) && isOpen ? (
            <span className="burger-menu-span">&#9650;</span>
          ) : (
            <span className="burger-menu-span">&#9660;</span>
          )}
        </div>
        {isOpen &&
          children.map((el) => (
            <Link key={el.path} to={el.path}>
              <div className="burger-link">{el.name}</div>
            </Link>
          ))}
      </div>
    );
  };
  return (
    <div>
      <Menu
        className="myMenu"
        customBurgerIcon={<img src="/images/burger-icon.svg" alt="icon" />}
      >
        {MAIN_ROUTES.map((el) => (
          <MenuItem
            key={el.name}
            title={el.name}
            children={el.links}
            path={el.path}
          />
        ))}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
