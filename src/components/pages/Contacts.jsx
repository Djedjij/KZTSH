import React from "react";

import {
  CONTACTS_ROUTES,
  directorContacts,
  marketingContacts,
} from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Contacts.css";
import DirectorsContacts from "../ContactsTable";
import DirectorsPhotoContacts from "../DirectorsPhotoContacts";
const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <MainReturnButton />
      <div className="contacts-container">
        <LeftMenu arr={CONTACTS_ROUTES} />
        <div className="contacts-content">
          <DirectorsPhotoContacts />
          <h3>Руководство завода:</h3>
          <DirectorsContacts contactsList={directorContacts} />
          <h3>Отдел маркетинга:</h3>
          <DirectorsContacts contactsList={marketingContacts} />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
