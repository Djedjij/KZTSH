import React from "react";
import { useParams } from "react-router";
import { items, itemsLeftMenu } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductPage.css";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const { productId } = useParams();
  const localData = localStorage.getItem("items");

  const items = JSON.parse(localData);
  const product = items.find((product) => product.id === Number(productId));
  // смотреть тут, что-то делать с localstorage
  return (
    <div>
      <h2 className="header-h2">{product.title}</h2>
      <MainReturnButton />
      <div className="product-page">
        <LeftMenu arr={itemsLeftMenu} />
        <div className="product-page-content">
          {product.categories ? (
            product.categories.map((category) => (
              <div className="product-page-card" key={category.id}>
                <img
                  className="product-page-card-img"
                  src={process.env.REACT_APP_API_URL + category.images[0]}
                  alt={category.name}
                />
                <div className="product-page-card-text">
                  <Link to={`/products/${product.id}/${category.id}`}>
                    <h3>{category.name}</h3>
                  </Link>
                  <hr />
                  <p>{category.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div>Такой категории не существует</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
