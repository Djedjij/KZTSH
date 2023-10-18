import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES, marketingContacts } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import ContactsTable from "../ContactsTable";

import "../../styles/Management.css";
const MarketingTeam = () => {
  return (
    <div>
      <h2 className="header-h2">Отдел маркетинга</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        <div className="management-content">
          <ContactsTable contactsList={marketingContacts} />
        </div>
      </div>
    </div>
  );
};

export default MarketingTeam;
