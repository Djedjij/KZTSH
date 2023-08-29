import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES, directorContacts } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import DirectorsContacts from "../ContactsTable";

import "../../styles/Management.css";
const ManagementTeam = () => {
  return (
    <div>
      <h2>Руководство</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        <div className="management-content">
          <DirectorsContacts contactsList={directorContacts} />
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
