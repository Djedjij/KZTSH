import React from "react";
import { useParams } from "react-router";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductPage.css";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  const itemsJSON = localStorage.getItem("items");
  const items = JSON.parse(itemsJSON);

  const itemsLeftMenu = items.map((el) => {
    return {
      name: el.title,
      path: `/products/${el.id}`,
    };
  });

  const product = items.find((product) => product.id === Number(productId));

  return (
    <div>
      <h2 className="header-h2">{product.name}</h2>
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

                  {category.characteristics &&
                    category.characteristics.map((el) => (
                      <div
                        className="product-page-card-characteristics-wrapper"
                        key={el.id}
                      >
                        <p className="product-page-card-characteristics">
                          {el.name} - {el.value}
                        </p>
                      </div>
                    ))}
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
