import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";

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
import ReportingDropdown from "../../UI/ReportingDropdown";

const Reporting = () => {
  return (
    <div>
      <h2>Отчетность</h2>
      <MainReturnButton />
      <div className="reporting">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="reporting-content">
          <ReportingDropdown reporting={reporting2016} header="За 2016 год" />
          <ReportingDropdown reporting={reporting2017} header="За 2017 год" />
          <ReportingDropdown reporting={reporting2018} header="За 2018 год" />
          <ReportingDropdown reporting={reporting2019} header="За 2019 год" />
          <ReportingDropdown reporting={reporting2020} header="За 2020 год" />
          <ReportingDropdown reporting={reporting2021} header="За 2021 год" />
          <ReportingDropdown reporting={reporting2022} header="За 2022 год" />
        </div>
      </div>
    </div>
  );
};

export default Reporting;
