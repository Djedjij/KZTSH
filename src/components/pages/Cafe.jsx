import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Cafe.css";
import { SERVISES_ROUTES } from "../../utils/consts";
import { Link } from "react-router-dom";
const Cafe = () => {
  return (
    <div>
      <h2 className="header-h2">Кафе "Северное"</h2>
      <MainReturnButton />
      <div className="cafe">
        <LeftMenu arr={SERVISES_ROUTES} />
        <div className="cafe-content">
          <div className="cafe-grid">
            <div className="cafe-child-grid cafe-grid-1">
              <div className="shadow">
                <h3>Адрес</h3>
                <p> Республика Беларусь, г. Жодино, ул. Кузнечная 26</p>
              </div>
            </div>
            <div className="cafe-child-grid cafe-grid-2"></div>
            <div className="cafe-child-grid cafe-grid-3">
              <div className="shadow">
                <h3>Телефон</h3>
                <p> 8 01775 24-476</p>
              </div>
            </div>
            <div className="cafe-child-grid cafe-grid-4">
              <div className="shadow">
                <Link
                  className="cafe-icon-link"
                  to="https://www.instagram.com/kafesev/"
                >
                  <img src="./images/Instagram.svg" alt="instagram" />
                  <p>kafesev</p>
                </Link>
              </div>
            </div>
            <div className="cafe-child-grid cafe-grid-5"></div>
            <div className="cafe-child-grid cafe-grid-6">
              <div className="shadow">
                <h3>Режим работы</h3>
                <div className="cafe-work-time">
                  <p>пн-чт: 11:30-15:00</p>
                  <p>пт: 11:30-15:00, 18:00-01:00</p>
                  <p>сб: 18:00-01:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
