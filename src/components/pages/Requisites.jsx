import React from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES, requisites } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import "../../styles/Requisites.css";
import { Link } from "react-router-dom";
const Requisites = () => {
  return (
    <div>
      <h2>Реквизиты</h2>
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
                  <th>№</th>
                  <th>Наименование</th>
                  <th>Сведения</th>
                </tr>
              </thead>
              <tbody>
                {requisites.map((el) => (
                  <tr key={el.number}>
                    <td>{el.number}</td>
                    <td>{el.name}</td>
                    <td>{el.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link className="requisites-link" to="">
              <img className="pdf-image" src="../../images/pdf.png" alt="pdf" />
              <p>Скачать PDF версию с печатью и подписью</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
