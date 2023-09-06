import React from "react";
import { useParams } from "react-router";
import { items } from "../../utils/consts";

const Category = () => {
  const { productId } = useParams();
  const { categoryId } = useParams();

  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {item.images.map((el) => (
        <img src={el} alt={item.name} />
      ))}
    </div>
  );
};

export default Category;
