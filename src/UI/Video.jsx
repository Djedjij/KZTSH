import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../utils/context";
const Video = () => {
  const itemsProps = useContext(ItemContext);
  const { video } = itemsProps;
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const isPageRefreshed = performance.navigation.type === 1;
    if (isPageRefreshed) {
      setAutoplay(false);
    }
    const handleFullScreenChange = () => {
      const isInFullScreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isInFullScreen) {
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
    };
  }, []);
  return (
    <>
      <div className="video">
        <div className="video-description">
          <h2>Наш девиз</h2>
          <h5 className="video-p">
            "Обеспечение высокого качества продукции, охраны труда, сохранения
            здоровья работников – залог успешного функционирования и постоянного
            развития организации."
          </h5>
          <h2>Основная цель деятельности:</h2>
          <h5>
            - обеспечение успеха организации и роста благосостояния всех
            работников на основе производства и поставки потребителям
            качественной продукции, удовлетворяющей их требования;
          </h5>
          <h5>
            - создание здоровых и безопасных условий труда работникам
            организации путем сведения к минимуму причин производственного
            травматизма и профессиональных заболеваний насколько это практически
            осуществимо с учетом характера деятельности организации.
          </h5>
        </div>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={process.env.REACT_APP_API_URL + video.url}
            title="Kztsh-video"
            autoPlay={autoplay}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            muted
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <hr className="grid-hr" />
    </>
  );
};

export default Video;
