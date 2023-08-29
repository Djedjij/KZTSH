import React from "react";
import "../styles/ButtonUp.css";
import { useState } from "react";

const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (!showButton && window.pageYOffset > 400) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 400) {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`scroll-to-top ${showButton ? "fade-in" : ""}`}
      style={{ display: showButton ? "block" : "none" }}
      onClick={handleClick}
    >
      <div className={`fa fa-chevron-up ${showButton}`}>
        <img src="./images/UI-images/arrowUp.png" alt="arrow" />
      </div>
    </div>
  );
};

export default ButtonUp;
