import React from "react";
import "../styles/ContentField.css";
const ContentField = (props) => {
  const jobsPhone = "+375 44 702-58-38";
  return (
    <div>
      {props.params.map((el) => (
        <div className="contentField">
          <div className="content">
            <h3 className="content-header">{el.name}</h3>
            <div className="content-salary">
              <h4>Заработная плата от: {el.salary}р</h4>
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
