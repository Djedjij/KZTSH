import React from "react";
import "../styles/PDFLink.css";
const PDFLink = (props) => {
  return (
    <div className="reporting-links">
      {props.reporting.map((el) => (
        <a
          className="reporting-link"
          href={process.env.REACT_APP_API_URL + el.src}
          key={el.src}
        >
          {el.name}
        </a>
      ))}
    </div>
  );
};

export default PDFLink;
