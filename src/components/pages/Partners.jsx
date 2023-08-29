import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import "../../styles/Partners.css";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div>
      <h2>Партнеры</h2>
      <MainReturnButton />
      <div className="partners">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="partners-cards">
          <div className="partners-card">
            <Link to="https://belaz.by/">
              <img src="../../images/partners/belaz.png" alt="belaz" />
              <h5>Белаз</h5>
            </Link>
          </div>
          <div className="partners-card">
            <Link to="https://maz.by/">
              <img src="../../images/partners/maz.png" alt="maz" />
              <h5>Маз</h5>
            </Link>
          </div>
          <div className="partners-card">
            <Link to="https://amkodor.by/">
              <img src="../../images/partners/amkador.png" alt="amkador" />
              <h5>Амкодор</h5>
            </Link>
          </div>
          <div className="partners-card">
            <Link to="http://www.moaz.ru/">
              <img src="../../images/partners/moaz.png" alt="moaz" />
              <h5>МоАЗ</h5>
            </Link>
          </div>
          <div className="partners-card">
            <a href="https://mzkt.by/">
              <img src="../../images/partners/volat.png" alt="volat" />
              <h5>Волат</h5>
            </a>
          </div>
          <div className="partners-card">
            <Link to="https://belarus-tractor.com/">
              <img src="../../images/partners/belarus.png" alt="belarus" />
              <h5>Беларус</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
