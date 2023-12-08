import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import DirectorsContacts from "../ContactsTable";
import { fetchDirectorContacts } from "../../http/allApi";
import "../../styles/Management.css";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
const ManagementTeam = () => {
  const [directorContacts, setDirectorContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetchDirectorContacts()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setDirectorContacts(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <h2 className="header-h2 ">Команда управления</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="management-content">
            <DirectorsContacts contactsList={directorContacts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagementTeam;
