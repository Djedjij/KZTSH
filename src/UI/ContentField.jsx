import React from "react";
import "../styles/ContentField.css";
const ContentField = (props) => {
  const jobsPhone = "+375 44 702-58-38";
  return (
    <div>
      {props.params.map((el) => (
        <div key={el.name} className="contentField">
          <div className="content">
            <h3 className="content-header">{el.name}</h3>
            <div className="content-salary">
              <p> Заработная плата от: {el.salary}р</p>
            </div>
            <div className="content-desc">
              <p>
                {el.description} тел:{jobsPhone}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentField;
