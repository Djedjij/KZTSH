import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import "../../styles/Reporting.css";
import MainReturnButton from "../../UI/MainReturnButton";
import ReportingDropdown from "../../UI/ReportingDropdown";
import { fetchReporting } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";

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
      </div>
    </div>
  );
};

export default Reporting;
