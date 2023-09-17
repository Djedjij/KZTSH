import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Distribution.css";
import { INFO_ROUTES, distribuion } from "../../utils/consts";
const Distribution = () => {
  return (
    <div>
      <h2 className="header-h2">Товаропроводящая сеть</h2>
      <MainReturnButton />
      <div className="distribution">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="distribution-content">
          <table className="table">
            <thead>
              <tr>
                <th>НАИМЕНОВАНИЕ И ВИД СУБЪЕКТА ТПС</th>
                <th>СТРАНА, АДРЕС</th>
                <th> РЕГИОНЫ ПРОДАЖ</th>
              </tr>
            </thead>
            <tbody>
              {distribuion.map((el) => (
                <tr key={el.name}>
                  <td>{el.name}</td>
                  <td>
                    <p>{el.country}</p>
                    <p>Тел:{el.phone}</p>
                    <p>{el.fax}</p>
                    <a href={"mailto:" + el.mail}>{el.mail}</a>
                    <br />
                    {el.website && <a href={el.website}>{el.website}</a>}
                  </td>
                  <td>{el.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
