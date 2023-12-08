import React from "react";
import "./App.css";
import AppRouter from "./components/pages/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGalery, fetchItems, fetchNews, fetchVideo } from "./http/allApi";
import ItemContext from "./utils/context";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  const [news, setNews] = useState([]);
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState([]);
  const [galery, setGalery] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const localData = localStorage.getItem("items");
      const newsLocalData = localStorage.getItem("news");
      const galeryLocalData = localStorage.getItem("galery");
      setLoad(true);
      try {
        const data = await fetchItems();
        const newsData = await fetchNews();
        const videoData = await fetchVideo(1);
        const galeryData = await fetchGalery();
        if (data.error) {
          setError(data.error);
        } else {
          const dataStr = JSON.stringify(data);
          if (dataStr !== localData) {
            localStorage.setItem("items", dataStr); // Save to localStorage if data changed.
          }
          setItems(data);
        }
        if (newsData.error) {
          setError(data.error);
        } else {
          const newsDataStr = JSON.stringify(newsData);
          if (newsDataStr !== newsLocalData) {
            localStorage.setItem("news", newsDataStr);
          }
          setNews(newsData);
        }
        if (videoData.error) {
          setError(data.error);
        } else {
          setVideo(videoData);
        }
        if (galeryData.error) {
          setError(data.error);
        } else {
          const galeryDataStr = JSON.stringify(galeryData);
          if (galeryDataStr !== galeryLocalData) {
            localStorage.setItem("galery", galeryDataStr);
          }
          setGalery(galeryData);
        }
      } catch (error) {
        setError(error.toString());
        if (localData) {
          setItems(JSON.parse(localData));
        }
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  const itemProps = { items, news, load, error, video, galery };
  return (
    <ItemContext.Provider value={itemProps}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </ItemContext.Provider>
  );
}

export default App;
