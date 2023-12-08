import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES, requisites } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import "../../styles/Requisites.css";

const Requisites = () => {
  return (
    <div>
      <h2 className="header-h2">Реквизиты</h2>
      <MainReturnButton />
      <div className="requisites">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="requisites-content">
          <p>
            Ниже приведены реквизиты компании, в случае необходимости получения
            дополнительных документов: свидетельства о государственной
            регистрации, идентификационного номера налогоплательщика вы можете
            обратиться в бухгалтерию предприятия.
          </p>
          <div className="requisites-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-number">№</th>
                  <th>Наименование</th>
                  <th>Сведения</th>
                </tr>
              </thead>
              <tbody>
                {requisites.map((el) => (
                  <tr key={el.number}>
                    <td className="table-number">{el.number}</td>
                    <td>{el.name}</td>
                    <td>{el.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pdf-link">
              <a
                className="requisites-link"
                href="../../pdf/Карточка организации.pdf"
              >
                <img
                  className="pdf-image"
                  src="../../images/pdf-blue.png"
                  alt="pdf"
                />
              </a>
              <a
                className="requisites-link-a"
                href="../../pdf/Карточка организации.pdf"
              >
                Скачать PDF версию с печатью и подписью
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
