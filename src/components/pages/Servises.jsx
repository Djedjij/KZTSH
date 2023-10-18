import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import MainReturnButton from "../../UI/MainReturnButton";
import { SERVISES_ROUTES } from "../../utils/consts";
import "../../styles/Servises.css";
const Servises = () => {
  return (
    <div>
      <h2 className="header-h2">Услуги</h2>
      <MainReturnButton />
      <div className="servises">
        <LeftMenu arr={SERVISES_ROUTES} />
        <div className="servises-content">
          <h1>Оказываем услуги:</h1>
          <div className="servise">
            <div className="service-icon">
              <img src="/images/icons/smith.png" alt="smith" />
              <h3>Изготовление</h3>
            </div>
            <ul className="servise-ul">
              <li>
                Изготовление инструментально - штамповой оснастки и режущего
                инструмента, товаров для дачного участка, металлоконструкций.
              </li>
              <li>
                Принимаем заказы на изготовление отливок из стали и чугуна.
              </li>
              <li>
                Изготовление изделий и деталей по чертежам заказчика, резка
                заготовок.
              </li>
            </ul>
          </div>
          <div className="servise">
            <div className="service-icon">
              <img src="/images/icons/bottle.png" alt="smith" />
              <h3>Иследования | Испытания</h3>
            </div>
            <ul className="servise-ul">
              <li>
                Проведение лабораторных исследований и испытаний металлов и
                материалов.
              </li>
            </ul>
          </div>
          <div className="servise">
            <div className="service-icon">
              <img src="/images/icons/competation.png" alt="smith" />
              <h3>Прочие</h3>
            </div>
            <ul className="servise-ul">
              <li>
                Профессиональная подготовка и повышение квалификации профильных
                рабочих.
              </li>
              <li>Пассажирские и грузоперевозки.</li>
              <li>Семейный отдых и оздоровление</li>
            </ul>
          </div>
          <div className="servise">
            <div className="service-icon">
              <img src="/images/icons/hammer.png" alt="smith" />
              <h3>Выполняем работы</h3>
            </div>
            <ul className="servise-ul">
              <li>
                Сварочно-восстановительные, токарные, фрезерные, шлифовальные,
                слесарные работы.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servises;
