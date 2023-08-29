import { Link } from "react-router-dom";
import "../styles/LeftMenu.css";
import { useState } from "react";

const LeftMenu = (props) => {
  const [activeLink, setActiveLink] = useState(false);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="menu">
      {props.arr.map((el, index) => (
        <Link
          className={activeLink === index ? "a-active" : "a"}
          onClick={() => handleLinkClick(index)}
          to={el.path}
          key={el.path}
        >
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;
