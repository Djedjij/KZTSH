import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
const Products = ({ items }) => {
  return (
    <div className="products">
      <div className="description">
        <h1>Каталог продукции</h1>
        <p>
          На сайте вы найдете многое: поковки и штамповки, изделия легкой
          промышденности, строительные материалы и т.д. Наша продукция занимает
          лидирующие позиции на рынке Беларуси. Мы уверены в надежности и
          длительном сроке службы и предоставляем гарантию на все товары.
        </p>
        <Link to="/products">
          <button>Весь каталог ›</button>
          <span>›</span>
        </Link>
      </div>
      <div className="product-main-list">
        {items.map((el) => (
          <Product key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
};

export default Products;
