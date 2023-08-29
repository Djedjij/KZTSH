import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="first-page">
      <h1>
        Наша продукция - <br></br>выбор лидеров!
      </h1>
      <div className="first-page-wrapper">
        <div className="first-page-h4">
          <h4>42 года</h4>
          <p>Опыта работы в машистроительной области</p>
        </div>
        <div className="first-page-h4">
          <h4>90+</h4>
          <p>Постоянных довольных клиентов по РБ и СНГ</p>
        </div>
        <div>
          <h4 className="first-page-h4">100%</h4>
          <p>Гарантия качества нашей продукции</p>
        </div>
      </div>
      <Link to="/about">
        <button>О заводе</button>
      </Link>
      <Link to="/products">
        <button>Каталог продукции</button>
      </Link>
    </div>
  );
};

export default FirstPage;
