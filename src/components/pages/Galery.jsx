import React, { useState } from "react";
import LeftMenu from "../../UI/LeftMenu";
import MainReturnButton from "../../UI/MainReturnButton";
import { ABOUT_ROUTES } from "../../utils/consts";
import Modal from "../../UI/Modal";
import { galery } from "../../utils/consts";
import "../../styles/Galery.css";
const Galery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const showModal = (index) => {
    setSelectedImageIndex(index);
  };
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div>
      <h2 className="header-h2">Галерея</h2>
      <MainReturnButton />
      <div className="galery">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="galery-content">
          <div className="image-gallery">
            {galery.map((el, index) => (
              <img
                key={index}
                src={el}
                alt={index}
                onClick={() => showModal(index)}
              />
            ))}
          </div>
          {selectedImageIndex !== null && (
            <Modal
              images={galery}
              selectedIndex={selectedImageIndex}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Galery;
