import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import { SERVISES_ROUTES } from "../../utils/consts";
import "../../styles/Hostel.css";
const Hostel = () => {
  return (
    <div>
      <h2 className="header-h2">Общежитие</h2>
      <MainReturnButton />
      <div className="hostel">
        <LeftMenu arr={SERVISES_ROUTES} />
        <div className="hostel-content">
          <div className="hostel-content-desc">
            <div>
              <h3>Адрес</h3>
              <h5>ул. 50 лет Октября, д. 5</h5>
              <h3>График работы</h3>
              <h5>Ежедневно с 6.00 до 2.00</h5>
              <h3>Контактый телефон</h3>
              <h5>8-10-375-1775-2-45-07</h5>
            </div>
            <iframe
              title="hostel-map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7ddcf90bc5fd969a6796c6a0d61563f7cdfae04bceb16a3b4cd94d814357f29&amp;source=constructor"
              width="800"
              height="451"
            ></iframe>
          </div>
          <div>
            <p>
              Наш завод предоставляет общежитие всем иногородним работникам. По
              вопросам заселения обращайтесь по контактному телефону.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
