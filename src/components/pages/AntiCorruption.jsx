import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/AntiCorruption.css";
import { INFO_ROUTES } from "../../utils/consts";
import { anticorruptionLinks } from "../../store/PDFLinks";
const AntiCorruption = () => {
  return (
    <div>
      <h2>Противодействие коррупции</h2>
      <MainReturnButton />
      <div className="anticorruption">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="anticorruption-content">
          <h3>Нормативные документы:</h3>
          <div className="anticorruption-links">
            {anticorruptionLinks.map((el) => (
              <div key={el.id} className="anticorruption-link">
                <a href={el.src}>
                  <div className="link-img-text">
                    <img src="../../images/pdf-blue.png" alt="pdf" />
                    <p>{el.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default AntiCorruption;
