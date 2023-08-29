import React from "react";
import { Link } from "react-router-dom";
import { CONTACTS_ROUTES } from "../../utils/consts";
const ContactsNavbar = (props) => {
  return (
    <div className={props.className}>
      <ul>
        {CONTACTS_ROUTES.map((el) => (
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

export default ContactsNavbar;
