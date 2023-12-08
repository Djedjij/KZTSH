import React from "react";
import "../styles/DirectorPhotoContacts.css";

const DirectorsPhotoContacts = (props) => {
  return (
    <div className="directorPhotoContacts">
      {props.directorPhotoContacts.map((el) => (
        <div key={el.job} className="director-photo">
          <img src={process.env.REACT_APP_API_URL + el.image} alt={el.name} />
          <p>{el.job}</p>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectorsPhotoContacts;
