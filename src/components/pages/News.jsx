import { useState, useEffect } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import { INFO_ROUTES } from "../../utils/consts";
import { Link } from "react-router-dom";
import { fetchNews } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
import "../../styles/News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedNewsData = localStorage.getItem("news");
    if (cachedNewsData) {
      return setNews(JSON.parse(cachedNewsData));
    }
    setLoad(true);
    fetchNews()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setNews(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, []);
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div>
      <h2 className="header-h2">Новости</h2>
      <MainReturnButton />
      <div className="news">
        <LeftMenu arr={INFO_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="news-content">
            {news.map((el) => (
              <div key={el.id} className="new-card">
                <Link to={`/news/${el.id}`}>
                  <h4>{el.name}</h4>
                </Link>
                <img
                  src={process.env.REACT_APP_API_URL + el.img}
                  alt={el.name}
                />
                <p>{el.smallDescription}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
