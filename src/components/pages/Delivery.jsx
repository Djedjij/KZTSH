import React, { useEffect } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Delivery.css";
import { INFO_ROUTES } from "../../utils/consts";
import { titleName } from "../../store/routes";
const Delivery = () => {
  useEffect(() => {
    document.title = "Доставка" + titleName;
  }, []);
  return (
    <div>
      <h2 className="header-h2">Доставка</h2>
      <MainReturnButton />
      <div className="delivery">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="delivery-content">
          <img src="/images/delivery.jpg" alt="delivery.jpg" />
          <p>
            Оборудование очень просто повредить при транспортировке, поэтому
            необходимо серьезно отнестись к доставке техники. Чтобы защитить
            дорогое техническое оснащение, лучше обратиться к профессионалам.
          </p>
          <p>
            Наша компания предоставляет услуги доставки оборудования на проект.
            Мы осуществляем доставку в нужные сроки в любую точку России, СНГ и
            дальнего зарубежья. Используем специальный безопасный транспорт:
            грузовики, электропогрузчики, автомобили с гидробортом и т. д. Также
            можем воспользоваться железнодорожными контейнерами.
          </p>
          <ul>
            Обратите внимание! Для оформления услуги доставки необходимо
            предоставить следующие данные:
            <li>
              <span>контактное лицо;</span>
            </li>
            <li>
              <span>номер телефона для связи;</span>
            </li>
            <li>
              <span>точный адрес места разгрузки;</span>
            </li>
            <li>
              <span>желаемая дата прибытия груза;</span>
            </li>
            <li>
              <span>возможность разгрузки в выходные и праздничные дни.</span>
            </li>
          </ul>
          <p>
            Вы можете забрать груз самостоятельно. Перед этим вам нужно
            согласовать дату приезда и взять доверенность на получение груза.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
