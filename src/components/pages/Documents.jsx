import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import "../../styles/Documents.css";
const Documents = () => {
  return (
    <div>
      <h2>Документы</h2>
      <MainReturnButton />
      <div className="documents">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="documents-img">
          <img
            className="big-img"
            src="../../images/documents-images/politika_v_oblasti_kachestva_2022_1.jpg"
            alt="documents-img"
          />
          <img
            className="big-img"
            src="../../images/documents-images/sertificat_2021_eng.jpg"
            alt="documents-img"
          />
          <img
            className="big-img"
            src="../../images/documents-images/sertificat_2021_eng (1).jpg"
            alt="documents-img"
          />
          <h3 className="documents-h3">Нормативные документы:</h3>
          <div className="documents-a">
            <a
              className="img-link"
              href="../../pdf/Руководство по качеству для поставщиков ОАО КЗТШ.pdf"
            >
              <img className="pdf-img" src="../../images/pdf.png" alt="pdf" />
            </a>
            <a
              className="documents-link"
              href="../../pdf/Руководство по качеству для поставщиков ОАО КЗТШ.pdf"
            >
              Руководство по качеству для поставщиков ОАО "КЗТШ"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
