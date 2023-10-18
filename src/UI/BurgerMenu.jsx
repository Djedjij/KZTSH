import React from "react";
import { useSpring, animated } from "react-spring";
import { stack as Menu } from "react-burger-menu";
import { MAIN_ROUTES } from "../utils/consts";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";

const BurgerMenu = () => {
  const MenuItem = ({ title, children, path }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleSubMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      // Добавляем обработчик события click на document для закрытия меню при клике вне элемента
      const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          closeMenu();
        }
      };

      document.addEventListener("click", handleOutsideClick);

      // Очищаем обработчик при размонтировании компонента
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    const dropdownAnimation = useSpring({
      opacity: isOpen ? 1 : 0,
      maxHeight: isOpen ? "200px" : "0px",
      config: {
        duration: 300, // Длительность анимации
      },
    });

    const menuItemStyles = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      cursor: "pointer",
    };

    return (
      <div className="MenuItem" ref={menuRef}>
        <div style={menuItemStyles} onClick={toggleSubMenu}>
          <Link to={path}>{title}</Link>
          {isOpen ? (
            <span className="burger-menu-span">&#9650;</span>
          ) : (
            <span className="burger-menu-span">&#9660;</span>
          )}
        </div>
        <animated.ul
          style={dropdownAnimation}
          className={`dropdown-burger-menu ${isOpen ? "open" : ""}`}
        >
          <div className="dropdown-burger-menu">
            {isOpen &&
              children.map((el) => (
                <Link key={el.path} to={el.path}>
                  <div className="burger-link">{el.name}</div>
                </Link>
              ))}
          </div>
        </animated.ul>
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
