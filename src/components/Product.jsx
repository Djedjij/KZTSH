import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="product">
      <Link to={`products/${props.item.id}`}>
        <h3> {props.item.title}</h3>
      </Link>
      <h5>Количество категорий: {props.item.count}</h5>
      <img src={props.item.image} alt={props.item.title} />
      <div className="product-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt.
      </div>
    </div>
  );
};

export default Product;
