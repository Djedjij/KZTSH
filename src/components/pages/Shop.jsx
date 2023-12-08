import React from "react";
import { PRODUCTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Contacts.css";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div className="contacts">
      <h2 className="header-h2">Магазин</h2>
      <MainReturnButton />
      <div className="contacts-container">
        <LeftMenu arr={PRODUCTS_ROUTES} />
        <div className="contacts-content">
          <div className="contacts-adress shop-adress">
            <h3 className="contacts-name">
              Магазин ОАО "Кузнечный завод тяжелых штамповок"
            </h3>
            <h3>Адрес</h3>
            <p>222161 Республика Беларусь, г. Жодино, ул. Кузнечная 26,</p>
            <h3>Телефон</h3>
            <p>8-(01775)2-44-77</p>
            <h3>Режим работы</h3>
            <p>с 6-45 до 15-00</p>
            <h3>Обед</h3>
            <p>с 12-30 до 13-00</p>
            <h3>Выходной</h3>
            <p>суббота, воскресение</p>
            <div className="contacts-links">
              <Link className="contacts-icon-link" to="https://t.me/kztsh_info">
                <img src="./images/Telegram.svg" alt="telegram" />
              </Link>
              <Link
                className="contacts-icon-link"
                to="https://www.instagram.com/kztshmolodezh/"
              >
                <img src="./images/Instagram.svg" alt="instagram" />
              </Link>
              <Link className="contacts-icon-link" to="mailto:kztsh@mail.ru">
                <img src="./images/Mail.ru.svg" alt="mail" />
              </Link>
            </div>
          </div>
          <div className="contacts-map">
            <iframe
              title="contacts-map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a2e331c4f104cafe74de5a39b131328e96d4034684b97395633c5b0c13be8e5&amp;source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
