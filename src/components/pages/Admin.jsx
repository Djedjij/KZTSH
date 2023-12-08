<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
import NewsAdmin from "../AdminComponents/NewsAdmin";
import GaleryAdmin from "../AdminComponents/GaleryAdmin";
import MarketingContactsAdmin from "../AdminComponents/MarketingContactsAdmin";
import DirectorContactsAdmin from "../AdminComponents/DirectorContactsAdmin";
import DirectorPhotoContactsAdmin from "../AdminComponents/DirectorPhotoContactsAdmin";
import ReportingAdmin from "../AdminComponents/ReportingAdmin";
import ItemsAdmin from "../AdminComponents/ItemsAdmin";
<<<<<<< HEAD
import Login from "../AdminComponents/Login";
import { checkToken } from "../../http/allApi";
=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe

const Admin = () => {
  const [newsOpen, setNewsOpen] = useState(false);
  const [galeryOpen, setGaleryOpen] = useState(false);
  const [marketingContactsOpen, setMarketingContactsOpen] = useState(false);
  const [directorContactsOpen, setDirectorContactsOpen] = useState(false);
  const [directorPhotoContactsOpen, setDirectorPhotoContactsOpen] =
    useState(false);
  const [reporting, setReporting] = useState(false);
  const [items, setItems] = useState(false);
<<<<<<< HEAD
  const [load, setLoad] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const removeToken = () => {
    setLoad(true);
    localStorage.removeItem("token");
    setLoggedIn(false);
    setLoad(false);
  };

  useEffect(() => {
    setLoad(true);
    checkToken()
      .then((data) => {
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoggedIn(false);
      })

      .finally(() => setLoad(false));
  }, []);

  if (load) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && (
        <div className="admin-wrapper">
          <button onClick={() => setNewsOpen(!newsOpen)}>
            Редактировать новости
          </button>
          {newsOpen && <NewsAdmin />}
          <button onClick={() => setGaleryOpen(!galeryOpen)}>
            Редактировать галерею
          </button>
          {galeryOpen && <GaleryAdmin />}
          <button
            onClick={() => setMarketingContactsOpen(!marketingContactsOpen)}
          >
            Редактировать данные отдела маркетинга
          </button>
          {marketingContactsOpen && <MarketingContactsAdmin />}
          <button
            onClick={() => setDirectorContactsOpen(!directorContactsOpen)}
          >
            Редактировать данные руководства
          </button>
          {directorContactsOpen && <DirectorContactsAdmin />}
          <button
            onClick={() =>
              setDirectorPhotoContactsOpen(!directorPhotoContactsOpen)
            }
          >
            Редактировать фото руководства
          </button>
          {directorPhotoContactsOpen && <DirectorPhotoContactsAdmin />}
          <button onClick={() => setReporting(!reporting)}>
            Редактировать отчетность
          </button>
          {reporting && <ReportingAdmin />}
          <button onClick={() => setItems(!items)}>
            Редактировать продукцию
          </button>
          {items && <ItemsAdmin />}
          <button onClick={() => removeToken()}>Выйти со страницы</button>
        </div>
      )}
=======
  return (
    <div className="admin-wrapper">
      <button onClick={() => setNewsOpen(!newsOpen)}>
        Редактировать новости
      </button>
      {newsOpen && <NewsAdmin />}
      <button onClick={() => setGaleryOpen(!galeryOpen)}>
        Редактировать галерею
      </button>
      {galeryOpen && <GaleryAdmin />}
      <button onClick={() => setMarketingContactsOpen(!marketingContactsOpen)}>
        Редактировать данные отдела маркетинга
      </button>
      {marketingContactsOpen && <MarketingContactsAdmin />}
      <button onClick={() => setDirectorContactsOpen(!directorContactsOpen)}>
        Редактировать данные руководства
      </button>
      {directorContactsOpen && <DirectorContactsAdmin />}
      <button
        onClick={() => setDirectorPhotoContactsOpen(!directorPhotoContactsOpen)}
      >
        Редактировать фото руководства
      </button>
      {directorPhotoContactsOpen && <DirectorPhotoContactsAdmin />}
      <button onClick={() => setReporting(!reporting)}>
        Редактировать отчетность
      </button>
      {reporting && <ReportingAdmin />}
      <button onClick={() => setItems(!items)}>Редактировать продукцию</button>
      {items && <ItemsAdmin />}
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    </div>
  );
};

export default Admin;
