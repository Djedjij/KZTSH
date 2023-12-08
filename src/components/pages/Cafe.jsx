import React, { useState, useEffect } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Cafe.css";
import { SERVISES_ROUTES } from "../../utils/consts";
import { Link } from "react-router-dom";
import { fetchGalery } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import CafeSlider from "../../UI/CafeSlider";

const Cafe = () => {
  const [galery, setGalery] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedGaleryData = localStorage.getItem("galery");
    if (cachedGaleryData) {
      return setGalery(JSON.parse(cachedGaleryData));
    }
    setLoad(true);
    fetchGalery()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGalery(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, []);
  if (error) {
    return <ErrorMessage />;
  }

  const cafeGalery = [];

  if (galery) {
    for (let i = 0; i <= galery.length - 1; i++) {
      if (galery[i].name === "Кафе") {
        cafeGalery.push(galery[i]);
      }
    }
  }

  return (
    <div>
      <h2 className="header-h2">Кафе "Северное"</h2>
      <MainReturnButton />
      <div className="cafe">
        <LeftMenu arr={SERVISES_ROUTES} />
        <div className="cafe-content">
          {!load && (
            <div className="cafe-card">
              <div className="cafe-adress">
                <h1>Адрес</h1>
                <p>Республика Беларусь, г. Жодино, ул. Кузнечная 26</p>
                <h1>Режим работы</h1>
                <p>пн-чт: 11:30-15:00</p>
                <p>пт: 11:30-15:00, 18:00-01:00</p>
                <p>сб: 18:00-01:00</p>
                <h1>Услуги</h1>
                <p>
                  "Кафе 'Северное' предоставляет широкий спектр услуг для
                  проведения различных мероприятий, включая свадьбы,
                  корпоративные вечера, юбилеи и другие торжественные события. У
                  нас вы найдете идеальное место для деловых встреч, приятных
                  посиделок с друзьями или уютных вечеров в кругу семьи.
                </p>
                <p>
                  В нашем кафе вас ждет не только приятная атмосфера, но и
                  разнообразное меню, включающее в себя ваши любимые блюда. Мы
                  гордимся разумными ценами, которые делают наше заведение
                  доступным для широкого круга посетителей.
                </p>
                <p>
                  Чтобы сделать ваше мероприятие незабываемым, наши
                  профессиональные организаторы с удовольствием помогут вам в
                  подготовке и проведении. Для оставления заявки или получения
                  дополнительной информации, пожалуйста, звоните по указанному в
                  контактах телефону.
                </p>
                <p>
                  Кафе 'Северное' - ваш выбор для особенных событий и приятного
                  времяпровождения!"
                </p>
                <div className="cafe-slider">
                  <CafeSlider images={cafeGalery} />
                </div>
              </div>
              <div className="cafe-contatcs">
                <h1>Телефон</h1>
                <p>
                  Для оформления заявок на проведение мероприятний и уточнения
                  других вопросов звоните по номеру: <br /> 8-01775-24-476
                </p>
                <Link
                  className="cafe-icon-link"
                  to="https://www.instagram.com/kafesev/"
                >
                  <img src="./images/Instagram.svg" alt="instagram" />
                  <p className="cafe-icon-link-p">kafesev</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cafe;
