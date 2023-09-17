import React from "react";
import { Link } from "react-router-dom";
import { SERVISES_ROUTES } from "../../utils/consts";

const ServisesNavbar = () => {
  return (
    <div className="dropdown">
      <ul>
        {SERVISES_ROUTES.map((el) => (
          <li key={el.name}>
            <Link className="Link" to={el.path}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServisesNavbar;
