import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderGrid.css";
import { Link } from "react-router-dom";
const SliderGrid = () => {
  const gridArray = [
    {
      src: "/images/UI-images/grid-images/1.jpg",
      textHeader: "Залог успеха",
      textLink: "Создание технического задания проекта",
      adress: "/about",
    },
    {
      src: "/images/UI-images/grid-images/2.jpg",
      textHeader: "Спецзаказы",
      textLink: "Изготовление индивидуальных заказов",
      adress: "/products",
    },
    {
      src: "/images/UI-images/grid-images/3.jpg",
      textHeader: "Качество",
      textLink: "Высокое качество и надежность",
      adress: "/documents",
    },
    {
      src: "/images/UI-images/grid-images/4.jpg",
      textHeader: "Вакансии",
      textLink: "Высокоуровневые специалисты",
      adress: "/jobs",
    },
    {
      src: "/images/UI-images/grid-images/5.jpg",
      textHeader: "Товаропроводящая сеть",
      textLink: "Сеть наших дистрибьютеров",
      adress: "/distribution",
    },
    {
      src: "/images/UI-images/grid-images/6.jpg",
      textHeader: "Каталог",
      textLink: "Каталог нашей продуцкии",
      adress: "/products",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    centerPadding: "20px",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-grid">
      <Slider className="slider-grid" {...settings}>
        {gridArray.map((el, index) => (
          <div className={`slider-item-${index}`}>
            <img
              className="slider-grid-img"
              key={index}
              src={el.src}
              alt={index}
            />
            <Link className="slider-grid-link"></Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGrid;
