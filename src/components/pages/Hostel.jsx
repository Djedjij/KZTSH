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
            <div className="hostel-content-adress">
              <div>
                <h3>Адрес</h3>
                <h5>ул. 50 лет Октября, д. 5</h5>
              </div>
              <div>
                <h3>График работы</h3>
                <h5>Ежедневно с 6.00 до 2.00</h5>
              </div>
              <div>
                <h3>Контактый телефон</h3>
                <h5>8-10-375-1775-2-45-07</h5>
              </div>
            </div>
            <img src="/images/hostel.jpg" alt="hostel" />
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
