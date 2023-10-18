import React from "react";
import "../styles/Grid.css";
import { Link } from "react-router-dom";
const Grid = () => {
  return (
    <div className="grid-wrapper">
      <hr className="grid-hr" />
      <div className="grid">
        <div className="child-grid grid-1">
          <Link className="grid-link" to="/about">
            <h5>Залог успеха</h5>
            <h4>Создание технического задания проекта</h4>
          </Link>
        </div>
        <div className="child-grid grid-2">
          <Link className="grid-link" to="/products">
            <h5>Спецзаказы</h5>
            <h4>Изготовление индивидуальных заказов</h4>
          </Link>
        </div>
        <div className="child-grid grid-3">
          <Link className="grid-link" to="/documents">
            <h5>Качество</h5>
            <h4>Высокое качество и надежность</h4>
          </Link>
        </div>
        <div className="child-grid grid-4">
          <Link className="grid-link" to="/jobs">
            <h5>Вакансии</h5>
            <h4>Высокоуровневые специалисты</h4>
          </Link>
        </div>
        <div className="child-grid grid-5">
          <Link className="grid-link" to="/distribution">
            <h5>Товаропроводящая сеть</h5>
            <h4>Сеть наших дистрибьютеров</h4>
          </Link>
        </div>
        <div className="child-grid grid-6">
          <Link className="grid-link" to="/products">
            <h5>Каталог</h5>
            <h4>Каталог нашей продуцкии</h4>
          </Link>
        </div>
      </div>
      <hr className="grid-hr" />
    </div>
  );
};

export default Grid;
