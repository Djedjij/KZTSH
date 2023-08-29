import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import "../styles/PhoneContact.css";
import { Link } from "react-router-dom";

const PhoneContact = () => {
  const [showDropdownPhone, setShowDropdownPhone] = useState(false);
  const handleDropdownPhone = () => {
    setShowDropdownPhone(!showDropdownPhone);
  };
  return (
    <div className="phone-contact">
      <ul onMouseEnter={handleDropdownPhone} onMouseLeave={handleDropdownPhone}>
        <p>
          <FaPhone />
          +375 1775 2-44-22 ↓
        </p>
        {showDropdownPhone && (
          <ul>
            <li>
              <h6>Бюро внешних связей</h6>
            </li>
            <li>
              +375 1775 2-44-00
              <h6>Приемная</h6>
            </li>

            <li>
              Ул. Кузнечная 26, 222161 г. Жодино
              <h6>Адрес</h6>
            </li>
            <li>
              Пн-Пт: 7.30 - 16.30
              <h6>Время работы</h6>
            </li>
            <div className="phone-links">
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
          </ul>
        )}
      </ul>
    </div>
  );
};

export default PhoneContact;
