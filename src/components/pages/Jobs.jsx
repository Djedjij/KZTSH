import React, { useEffect } from "react";
import "../../styles/Jobs.css";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES, jobs, jobsList } from "../../utils/consts";
import ContentField from "../../UI/ContentField.jsx";
import { titleName } from "../../store/routes.js";
const Jobs = () => {
  useEffect(() => {
    document.title = "Вакансии" + titleName;
  }, []);
  return (
    <div>
      <h2 className="header-h2">Вакансии</h2>
      <MainReturnButton />
      <div className="jobs">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="jobs-content">
          <div className="jobs-contacts">
            <div className="jobs-contact">
              <h5>Начальник отдела кадров:</h5>
              <p>
                Мамлиенко Олег Николаевич
                <br /> тел: 8(01775) 2-44-07
              </p>
            </div>
            <div className="jobs-contact">
              <h5>Вопросы по трудоустройству:</h5>
              <p>тел: 8(01775) 2-44-15</p>
            </div>
            <div className="jobs-contact">
              <h5>Электронная почта:</h5>
              <a href="mailto:ok-kztsh@mail.ru">ok-kztsh@mail.ru</a>
            </div>
          </div>
          <div className="jobs-greetins">
            <p>
              Мы рады видеть в команде инициативных и вовлеченных сотрудников,
              готовых решать сложные задачи и реализовывать масштабные проекты
            </p>
          </div>
          <ContentField params={jobs} />
          <div className="jobs-list">
            <h3>Мы предлагаем:</h3>
            <ol>
              {jobsList.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
