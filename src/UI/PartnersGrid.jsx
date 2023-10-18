import React from "react";
import "../styles/PartnersGrid.css";
import { Link } from "react-router-dom";
const PartnersGrid = () => {
  return (
    <div className="partners-grid-wrapper">
      <h2>Наши партнеры</h2>
      <div className="partners-grid">
        <div className="partners-child-grid partners-grid-1">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://amkodor.by/">
              <h4>АМКОДОР</h4>
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-2">
          <div className="shadow">
            <Link
              className="partners-grid-link"
              to="https://belarus-tractor.com/"
            >
              <h4>БЕЛАРУС</h4>
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-3">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://belaz.by/">
              <h4>БЕЛАЗ</h4>
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-4">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://maz.by/">
              <h4>МАЗ</h4>
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-5">
          <div className="shadow">
            <Link className="partners-grid-link" to="http://www.moaz.ru/">
              <h4>МОАЗ</h4>
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-6">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://mzkt.by/">
              <h4>МЗКТ</h4>
            </Link>
          </div>
        </div>
      </div>
      <hr className="partners-grid-hr" />
    </div>
  );
};

export default PartnersGrid;
