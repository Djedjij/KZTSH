import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import ContactsTable from "../ContactsTable";
import "../../styles/Management.css";
import { fetchMarketingContacts } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";

const MarketingTeam = () => {
  const [marketingContacts, setMarketingContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetchMarketingContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setMarketingContacts(data);
      }
    });
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <h2 className="header-h2">Отдел маркетинга</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="management-content">
            <ContactsTable contactsList={marketingContacts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingTeam;
