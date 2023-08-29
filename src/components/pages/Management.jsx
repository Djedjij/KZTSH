import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import DirectorsPhotoContacts from "../DirectorsPhotoContacts";
import "../../styles/Management.css";
const Management = () => {
  return (
    <div>
      <h2>Руководство</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        <div className="management-content">
          <DirectorsPhotoContacts />
        </div>
      </div>
    </div>
  );
};

export default Management;
