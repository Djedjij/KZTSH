import Slider from "react-slick";
import { useState } from "react";
import Modal from "./Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderComponent.css";

const SliderComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <Slider className="slider-wrap" {...settings}>
        {images.map((el, index) => (
          <img
            className="slider-img"
            key={el}
            src={el}
            alt="category"
            onClick={() => showModal(index)}
          />
        ))}
      </Slider>
      {selectedImageIndex !== null && (
        <Modal
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
export default SliderComponent;
