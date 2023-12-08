import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import DirectorsPhotoContacts from "../DirectorsPhotoContacts";
import { fetchDirectorPhotoContacts } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
import "../../styles/Management.css";
const Management = () => {
  const [directorPhotoContacts, setDirectorPhotoContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetchDirectorPhotoContacts()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setDirectorPhotoContacts(data);
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
      <h2 className="header-h2">Руководство</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="management-content">
            <DirectorsPhotoContacts
              directorPhotoContacts={directorPhotoContacts}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Management;
