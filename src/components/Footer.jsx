import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import InfoNavbar from "./navbars/InfoNavbar";
import ContactsNavbar from "./navbars/ContactsNavbar";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-contacts">
          <p>Тел/факс: +375 1775 2-44-00</p>
          <p>
            Email:
            <Link className="footer-link" to="mailto:kztsh@mail.ru">
              kztsh@mail.ru
            </Link>
          </p>
          <p>Жодино, ул. Кузнечная, 26</p>
          <Link to={"/products"}>
            <button>Каталог продукции</button>
          </Link>
        </div>
        <InfoNavbar className={"footer-info"} />
        <ContactsNavbar className={"footer-info"} />
        <div className="links">
          <Link className="icon-link" to="https://t.me/kztsh_info">
            <img src="./images/Telegram.svg" alt="telegram" />
          </Link>
          <Link
            className="icon-link"
            to="https://www.instagram.com/kztshmolodezh/"
          >
            <img src="./images/Instagram.svg" alt="instagram" />
          </Link>
          <Link className="icon-link" to="mailto:kztsh@mail.ru">
            <img src="./images/Mail.ru.svg" alt="mail" />
          </Link>
        </div>
        <div className="map">
          <iframe
            className="map"
            title="iframe"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A23e3a841babf02adb4d561e6ff4a10f7f4140ed7f6403ed700a4e9c3e011e882&amp;source=constructor"
            width="392"
            height="240"
          ></iframe>
        </div>
      </div>
      <div className="footer-year">
        <hr />
        <p>
          ОАО КЗТШ © 2008-2023 <br></br>
          <Link className="footer-link">
            Условия использования материалов сайта
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
