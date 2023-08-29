import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <h3> {props.item.title}</h3>
      <h5>Количество категорий: {props.item.count}</h5>
      <img src={props.item.image} alt={props.item.title} />
      <div className="product-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt.
      </div>
    </div>
  );
};

export default Product;
