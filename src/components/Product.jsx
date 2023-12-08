import React from "react";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <div className="product">
      <Link to={`products/${item.id}`}>
        <h3> {item.title}</h3>
      </Link>
      <h5>Количество категорий: {item.categories.length}</h5>
      <img src={process.env.REACT_APP_API_URL + item.image} alt={item.title} />
      <div className="product-desc">{item.description}</div>
    </div>
  );
};

export default Product;
