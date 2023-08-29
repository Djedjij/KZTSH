import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import PDFLink from "../../UI/PDFLink";
import {
  reporting2016,
  reporting2017,
  reporting2018,
  reporting2019,
  reporting2020,
  reporting2021,
  reporting2022,
} from "../../store/PDFLinks.js";
import "../../styles/Reporting.css";
import MainReturnButton from "../../UI/MainReturnButton";

const Reporting = () => {
  return (
    <div>
      <h2>Отчетность</h2>
      <MainReturnButton />
      <div className="reporting">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="reporting-links">
          <div>
            <h3>За 2016 год:</h3>
            <PDFLink reporting={reporting2016} />
          </div>
          <div>
            <h3>За 2017 год:</h3>
            <PDFLink reporting={reporting2017} />
          </div>
          <div>
            <h3>За 2018 год:</h3>
            <PDFLink reporting={reporting2018} />
          </div>
          <div>
            <h3>За 2019 год:</h3>
            <PDFLink reporting={reporting2019} />
          </div>
          <div>
            <h3>За 2020 год:</h3>
            <PDFLink reporting={reporting2020} />
          </div>
          <div>
            <h3>За 2021 год:</h3>
            <PDFLink reporting={reporting2021} />
          </div>
          <div>
            <h3>За 2022 год:</h3>
            <PDFLink reporting={reporting2022} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
