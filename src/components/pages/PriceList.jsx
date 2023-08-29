import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/PriceList.css";
import { PRODUCTS_ROUTES } from "../../utils/consts";
import { pricesLinks } from "../../store/PDFLinks";

const PriceList = () => {
  return (
    <div>
      <h2>Прайс-листы</h2>
      <MainReturnButton />

      <div className="price-list">
        <LeftMenu arr={PRODUCTS_ROUTES} />
        <div className="price-content">
          <h3>
            Цены в прайс-листах, размещенных на этой странице, действительны на
            текущий момент!
          </h3>
          <div className="price-links">
            {pricesLinks.map((el) => (
              <div key={el.name} className="price-link">
                <a href={el.src}>
                  <div className="link-img-text">
                    <img src="../../images/pdf-blue.png" alt="pdf" />
                    <p>{el.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
