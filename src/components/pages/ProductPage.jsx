import React from "react";
import { useParams } from "react-router";
import { items } from "../../utils/consts";

const ProductPage = () => {
  const { productId } = useParams();
  const product = items.find((product) => product.id === Number(productId));
  return (
    <div>
      {product.categories ? (
        product.categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))
      ) : (
        <div>Такой категории не существует</div>
      )}
    </div>
  );
};

export default ProductPage;
