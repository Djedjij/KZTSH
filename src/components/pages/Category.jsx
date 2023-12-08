import React, { useState } from "react";
import { useParams } from "react-router";
import { useSpring, animated } from "react-spring";
import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
import IconsLinks from "../../UI/IconsLinks";

const Category = () => {
  const itemsJSON = localStorage.getItem("items");
  const items = JSON.parse(itemsJSON);
  const { productId } = useParams();
  const { categoryId } = useParams();

  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );

  const [isOpen, setIsOpen] = useState(false);
  const dropdownAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? "1000px" : "0px",
    config: {
      duration: 300, // Длительность анимации
      delay: isOpen ? 0 : 200, // Задержка перед началом анимации исчезновения
    },
  });

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
            {item.characteristics.length ? (
              <table className="category-table">
                <thead></thead>
                <tbody>
                  {item.characteristics.map((el) => (
                    <tr key={el.name}>
                      <td>{el.name}</td>
                      <td>{el.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h4 className="category-noInfo">
                К сожалению у этого товара еще нет описания
              </h4>
            )}
          </div>
          <div className="product-page-info">
            Внимание! Кузнечный завод тяжелых штамповок имеет возможность
            изготовления продукции не предтавленной в этом каталоге, по
            индивидуальному заказу.
          </div>
        </div>
      </div>
      {item.tableCharacteristics.length !== 0 ? (
        <div className="table-characteristics">
          {item.tableCharacteristics && item.tableNameCharacteristics ? (
            <div className="category-table-container">
              <button
                className="category-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Все характеристики 🠝" : "Все характеристики 🠟"}
              </button>

              <animated.ul
                style={dropdownAnimation}
                className={`dropdown-category ${isOpen ? "open" : ""}`}
              >
                <table className="category-table">
                  <thead>
                    {item.tableNameCharacteristics.map((obj) => (
                      <tr key={obj.id}>
                        {obj.name.map((value, subIndex) => (
                          <th key={subIndex}>{value}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {item.tableCharacteristics.map((obj) => (
                      <tr key={obj.id}>
                        {obj.name.map((value, subIndex) => (
                          <td key={subIndex}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </animated.ul>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <IconsLinks />
    </div>
  );
};

export default Category;
