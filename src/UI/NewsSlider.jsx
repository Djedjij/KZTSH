import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import ItemContext from "../utils/context.js";
import ErrorMessage from "./Error.jsx";
import Loader from "./Loader.jsx";

const NewsSlider = () => {
  const itemsProps = useContext(ItemContext);
  const { news, error, load } = itemsProps;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  if (error) {
    return <ErrorMessage />;
  }
  if (load) {
    return (
      <div className="loader-wrapper-app">
        <Loader />
      </div>
    );
  }
  return (
    <div className="news-slider">
      <h2>Новости</h2>
      <Slider className="slider-news-wrap" {...settings}>
        {news.map((el) => (
          <div key={el.id} className="news-slider">
            <Link to={`/news/${el.id}`}>
              <h3>{el.name}</h3>
            </Link>
            <p>{el.smallDescription}</p>
            <p className="news-slider-date">{el.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
