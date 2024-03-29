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
          <Link className="products-button" to={"/products"}>
            <button>Каталог продукции</button>
          </Link>
        </div>
        <InfoNavbar className={"footer-info"} />
        <ContactsNavbar className={"footer-info footer-info-adapt"} />
        <div className="links">
          <Link className="icon-link" to="https://t.me/kztsh_info">
            <img src="/images/Telegram.svg" alt="tele" />
          </Link>
          <Link
            className="icon-link"
            to="https://www.instagram.com/kztshmolodezh/"
          >
            <img src="/images/Instagram.svg" alt="inst" />
          </Link>
          <Link className="icon-link" to="mailto:kztsh@mail.ru">
            <img src="/images/Mail.ru.svg" alt="mail" />
          </Link>
        </div>
      </div>
      <div className="footer-year">
        <hr />
        <p className="footer-year-p">
          ОАО КЗТШ © 2008-2024 <br></br>
          <Link className="footer-link">
            Условия использования материалов сайта
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
