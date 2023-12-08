import Slider from "react-slick";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderComponent.css";
import CafeModal from "./CafeModal";

const CafeSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const showModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div>
      <Slider className="slider-wrap-cafe" {...settings}>
        {images.map((el, index) => (
          <div className="cafe-slider-wrap-img" key={el.id}>
            <img
              className="cafe-slider-img"
              src={process.env.REACT_APP_API_URL + el.img}
              alt="category"
              onClick={() => showModal(index)}
            />
          </div>
        ))}
      </Slider>
      {selectedImageIndex !== null && (
        <CafeModal
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
export default CafeSlider;
