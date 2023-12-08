<<<<<<< HEAD
import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import "../../styles/Reporting.css";
import MainReturnButton from "../../UI/MainReturnButton";
import ReportingDropdown from "../../UI/ReportingDropdown";
import { fetchReporting } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe

const Reporting = () => {
  const [reporting, setReporting] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("reporting");
    if (localData) {
      setReporting(JSON.parse(localData));
    } else {
      setLoad(true);
      fetchReporting()
        .then((data) => {
          setLoad(false);
          if (data.error) {
            setError(data.error);
          } else {
            setReporting(data);
            localStorage.setItem("reporting", JSON.stringify(data)); // Save to localStorage.
          }
        })
        .catch((error) => {
          setLoad(false);
          setError(error.message);
        });
    }
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h2 className="header-h2">Отчетность</h2>
      <MainReturnButton />
      <div className="reporting">
        <LeftMenu arr={ABOUT_ROUTES} />
<<<<<<< HEAD
        {load ? (
          <Loader />
        ) : (
          <div className="reporting-content">
            {reporting.map((el) => (
              <ReportingDropdown
                key={el.id}
                reporting={el.reportingLinks}
                header={el.name}
              />
            ))}
          </div>
        )}
=======
        <div className="reporting-content">
          <ReportingDropdown reporting={reporting2016} header="За 2016 год" />
          <ReportingDropdown reporting={reporting2017} header="За 2017 год" />
          <ReportingDropdown reporting={reporting2018} header="За 2018 год" />
          <ReportingDropdown reporting={reporting2019} header="За 2019 год" />
          <ReportingDropdown reporting={reporting2020} header="За 2020 год" />
          <ReportingDropdown reporting={reporting2021} header="За 2021 год" />
          <ReportingDropdown reporting={reporting2022} header="За 2022 год" />
        </div>
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      </div>
    </div>
  );
};

export default Reporting;
