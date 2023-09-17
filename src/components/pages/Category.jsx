import React from "react";
import { useParams } from "react-router";
import { items } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
import IconsLinks from "../../UI/IconsLinks";
const Category = () => {
  const { productId } = useParams();
  const { categoryId } = useParams();

  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );
  return (
    <div>
      <h2 className="header-h2">{item.name}</h2>
      <MainReturnButton />
      <div className="category">
        <div className="category-slider">
          <SliderComponent images={item.images} />
        </div>
        <div className="category-description">
          <p>{item.description}</p>
          <div className="category-characteristics">
            <h3>Характеристики</h3>
            {item.characteristics.map((el) => (
              <div key={el.id}>
                <p>
                  {el.name}---
                  {el.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-page-info">
        <p>
          Внимание! Кузнечный завод тяжелых штамповок имеет возможность
          изготовления продукции не предтавленной в этом каталоге, по
          индивидуальному заказу.
        </p>
      </div>
      <IconsLinks />
    </div>
  );
};

export default Category;
