import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/News.css";
import { INFO_ROUTES, news } from "../../utils/consts";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h2 className="header-h2">Новости</h2>
      <MainReturnButton />
      <div className="news">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="news-content">
          {news.map((el) => (
            <div key={el.id} className="new-card">
              <h6>{el.date}</h6>
              <Link to={`/news/${el.id}`}>
                <h4>{el.name}</h4>
              </Link>
              <img src={el.img} alt={el.name} />
              <p>{el.smallDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
