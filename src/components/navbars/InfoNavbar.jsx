import React from "react";
import { Link } from "react-router-dom";
import { INFO_ROUTES } from "../../utils/consts";
const InfoNavbar = (props) => {
  return (
    <div className={props.className}>
      <ul>
        {INFO_ROUTES.map((el) => (
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

export default InfoNavbar;
