import React from "react";
import Slider from "react-slick";

const Modal = ({ images, selectedIndex, onClose }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedIndex,
  };

  return (
    <div className="modal fullscreen" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Slider className="slider-wrap" {...settings}>
          {images.map((el) => (
            <div key={el.id}>
              <img
                className="slider-img"
                src={process.env.REACT_APP_API_URL + el}
                alt="category"
              />
            </div>
          ))}
        </Slider>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
