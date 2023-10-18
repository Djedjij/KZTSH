import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import PDFlink from "../UI/PDFLink.jsx";
import "../styles/Reporting.css";
const ReportingDropdown = ({ reporting, header }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? "200px" : "0px",
    config: {
      duration: 300, // Длительность анимации
      delay: isOpen ? 0 : 200, // Задержка перед началом анимации исчезновения
    },
  });

  return (
    <div>
      <button className="reporting-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <div className="button-text">
            <h4>{header}</h4>
            <span className="reporting-menu-span">&#9650;</span>
          </div>
        ) : (
          <div className="button-text">
            <h4>{header}</h4>
            <span className="reporting-menu-span">&#9660;</span>
          </div>
        )}
      </button>
      <animated.ul
        style={dropdownAnimation}
        className={`dropdown-reporting ${isOpen ? "open" : ""}`}
      >
        {isOpen && <PDFlink reporting={reporting} />}
      </animated.ul>
    </div>
  );
};

export default ReportingDropdown;
