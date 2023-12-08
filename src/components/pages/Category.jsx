import React, { useState } from "react";
import { useParams } from "react-router";
import { useSpring, animated } from "react-spring";
import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
import IconsLinks from "../../UI/IconsLinks";
<<<<<<< HEAD
=======
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe

const Category = () => {
  const itemsJSON = localStorage.getItem("items");
  const items = JSON.parse(itemsJSON);
  const { productId } = useParams();
  const { categoryId } = useParams();
  const categoryRef = useRef(null);
  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );

<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const dropdownAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? "1000px" : "0px",
    config: {
      duration: 300, // Длительность анимации
      delay: isOpen ? 0 : 200, // Задержка перед началом анимации исчезновения
    },
  });

=======
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
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
<<<<<<< HEAD
            {item.characteristics.length ? (
              <table className="category-table">
                <thead></thead>
                <tbody>
                  {item.characteristics.map((el) => (
=======
            <table className="category-table">
              <thead></thead>
              <tbody>
                {item.characteristics.map((el) =>
                  el.name !== "" ? (
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
                    <tr key={el.name}>
                      <td>{el.name}</td>
                      <td>{el.value}</td>
                    </tr>
<<<<<<< HEAD
                  ))}
                </tbody>
              </table>
            ) : (
              <h4 className="category-noInfo">
                К сожалению у этого товара еще нет описания
              </h4>
            )}
=======
                  ) : (
                    <p>К сожалению у данного товара пока нет описания</p>
                  )
                )}
              </tbody>
            </table>
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
          </div>
          <div className="product-page-info">
            Внимание! Кузнечный завод тяжелых штамповок имеет возможность
            изготовления продукции не предтавленной в этом каталоге, по
            индивидуальному заказу.
          </div>
        </div>
      </div>
<<<<<<< HEAD
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
=======
      <div className="table-characteristics">
        {item.tableCharacteristics ? (
          <div className="category-table-container">
            <button className="category-button" onClick={toggleTable}>
              Все характеристики ⮟
            </button>
            <CSSTransition
              in={showTable}
              timeout={10}
              classNames="category-table"
              unmountOnExit
              nodeRef={categoryRef}
            >
              <table className="category-table">
                <thead>
                  {item.tableNameCharacteristics.map((el, index) => (
                    <tr key={index}>
                      {el.map((value, subIndex) => (
                        <th key={subIndex}>{value}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {item.tableCharacteristics.map((el, index) => (
                    <tr key={index}>
                      {el.map((value, subIndex) => (
                        <td key={subIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CSSTransition>
          </div>
        ) : (
          ""
        )}
      </div>
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      <IconsLinks />
    </div>
  );
};

export default Category;
