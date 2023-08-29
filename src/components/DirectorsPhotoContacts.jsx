import React from "react";
import "../styles/DirectorPhotoContacts.css";
import { directorPhotoContacts } from "../utils/consts";
const DirectorsPhotoContacts = () => {
  return (
    <div className="directorPhotoContacts">
      {directorPhotoContacts.map((el) => (
        <div key={el.job} className="director-photo">
          <img src={el.img} alt={el.name} />
          <p>{el.job}</p>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectorsPhotoContacts;
