import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_ROUTES } from "../../utils/consts";

const AboutNavbar = () => {
  return (
    <div className="dropdown">
      <ul>
        {ABOUT_ROUTES.map((el) => (
          <li key={el.path}>
            <Link className="Link" to={el.path}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutNavbar;
