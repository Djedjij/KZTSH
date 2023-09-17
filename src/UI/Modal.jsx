import React from "react";

const Modal = ({ images, selectedIndex, onClose }) => {
  const selectedImage = images[selectedIndex];

  return (
    <div className="modal fullscreen" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage} alt={selectedImage} />
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
