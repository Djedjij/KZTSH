import { useState } from "react";
import NewsAdmin from "../AdminComponents/NewsAdmin";
import GaleryAdmin from "../AdminComponents/GaleryAdmin";
import MarketingContactsAdmin from "../AdminComponents/MarketingContactsAdmin";
import DirectorContactsAdmin from "../AdminComponents/DirectorContactsAdmin";
import DirectorPhotoContactsAdmin from "../AdminComponents/DirectorPhotoContactsAdmin";
import ReportingAdmin from "../AdminComponents/ReportingAdmin";
import ItemsAdmin from "../AdminComponents/ItemsAdmin";

const Admin = () => {
  const [newsOpen, setNewsOpen] = useState(false);
  const [galeryOpen, setGaleryOpen] = useState(false);
  const [marketingContactsOpen, setMarketingContactsOpen] = useState(false);
  const [directorContactsOpen, setDirectorContactsOpen] = useState(false);
  const [directorPhotoContactsOpen, setDirectorPhotoContactsOpen] =
    useState(false);
  const [reporting, setReporting] = useState(false);
  const [items, setItems] = useState(false);
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
    </div>
  );
};

export default Admin;
