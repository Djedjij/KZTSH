import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/News.css";
import { INFO_ROUTES, news } from "../../utils/consts";
import { useParams } from "react-router-dom";
import "../../styles/NewsPage.css";
const NewsPage = () => {
  const { newsId } = useParams();
  const localNews = news.find((localNews) => localNews.id === Number(newsId));
  return (
    <div>
      <h2 className="header-h2">Новости</h2>
      <MainReturnButton />
      <div className="news-page">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="news-page-content">
          <h3>{localNews.name}</h3>
          <img src={localNews.img} alt={localNews.name} />
          <p>{localNews.description}</p>
          <p className="news-page-date">{localNews.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
