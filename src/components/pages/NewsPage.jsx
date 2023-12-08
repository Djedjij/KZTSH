<<<<<<< HEAD
import { useEffect } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/News.css";
import { INFO_ROUTES } from "../../utils/consts";
import { useParams } from "react-router-dom";
import "../../styles/NewsPage.css";
import { useState } from "react";
import { fetchOneNews } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";

const NewsPage = () => {
  const { newsId } = useParams();
  const [localNews, setLocalNews] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedNewsData = localStorage.getItem("news");
    if (cachedNewsData) {
      return setLocalNews(
        JSON.parse(cachedNewsData).find((el) => el.id === Number(newsId))
      );
    }
    setLoad(true);
    fetchOneNews(newsId)
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setLocalNews(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, [newsId]);
  if (error) {
    return <ErrorMessage />;
  }
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return (
    <div>
      <h2 className="header-h2">Новости</h2>
      <MainReturnButton />
      <div className="news-page">
        <LeftMenu arr={INFO_ROUTES} />
<<<<<<< HEAD
        {load ? (
          <Loader />
        ) : (
          localNews && (
            <div className="news-page-content">
              <h3>{localNews.name}</h3>
              <img
                src={process.env.REACT_APP_API_URL + localNews.img}
                alt={localNews.name}
              />
              <p>{localNews.description}</p>
            </div>
          )
        )}
=======
        <div className="news-page-content">
          <h3>{localNews.name}</h3>
          <img src={localNews.img} alt={localNews.name} />
          <p>{localNews.description}</p>
          <p className="news-page-date">{localNews.date}</p>
        </div>
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      </div>
    </div>
  );
};

export default NewsPage;
