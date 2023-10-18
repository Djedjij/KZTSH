import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductsList.css";
import { items, itemsLeftMenu } from "../../utils/consts";
import { Link } from "react-router-dom";
const ProductsList = () => {
  return (
    <div>
      <h2 className="header-h2">Каталог продукции</h2>

      <MainReturnButton />

      <div className="product-list">
        <LeftMenu arr={itemsLeftMenu} />
        <div className="product-content">
          {items.map((product) => (
            <Link
              key={product.id}
              className="product-card"
              to={`/products/${product.id}`}
            >
              <div key={product.id}>
                <img
                  className="icon-image"
                  src={`../../images/product-icons/${product.id}.png`}
                  alt="icon"
                ></img>
                <div className="product-card-desc">
                  <h3>{product.title}</h3>
                  <p>Количество товаров:{product.count}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, culpa!
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
