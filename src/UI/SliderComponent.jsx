import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="../../images/kztsh-about.png" alt="Slider 1" />
      </div>
      <div>
        <img src="../../images/kztsh-zlavnaya.png" alt="Slider 2" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
