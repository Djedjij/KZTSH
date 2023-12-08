import React, { useContext } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductsList.css";
import { Link } from "react-router-dom";
import ItemContext from "../../utils/context";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
const ProductsList = () => {
  const itemsProps = useContext(ItemContext);
  const { items, error, load } = itemsProps;

  const itemsLeftMenu = items.map((el) => {
    return {
      name: el.title,
      path: `/products/${el.id}`,
    };
  });
  if (error) {
    return <ErrorMessage />;
  }
  if (load) {
    return (
      <div className="loader-wrapper-app">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h2 className="header-h2">Каталог продукции</h2>
<<<<<<< HEAD
=======

>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
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
              <div className="product-card-wrapper" key={product.id}>
                <img
                  className="icon-image"
                  src={process.env.REACT_APP_API_URL + product.icon}
                  alt="icon"
                ></img>
                <div className="product-card-desc">
                  <h3>{product.title}</h3>
                  <h5>Количество товаров: {product.categories.length}</h5>
                  <p>{product.description}</p>
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
