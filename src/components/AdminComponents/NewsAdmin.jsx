import React, { useEffect, useState } from "react";
import { deleteNews, fetchNews, addNews } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    smallDescription: "",
    date: Number(),
    img: null, // Добавляем поле для файла изображения
  });

  useEffect(() => {
    fetchNews().then((data) => setNews(data));
  }, []);

  const rerenderingNews = async (id) => {
    await deleteNews(id);
    const updatedNews = await fetchNews();
    setNews(updatedNews);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      img: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("smallDescription", formData.smallDescription);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("img", formData.img);

      await addNews(formDataToSend);

      setFormData({
        name: "",
        description: "",
        smallDescription: "",
        date: Number(),
        imageFile: null,
      });

      const updatedNews = await fetchNews();
      setNews(updatedNews);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

  return (
    <div className="admin-content">
      <h2>Добавить новость</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <textarea
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Описание:
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Краткое описание:
          <textarea
            type="text"
            name="smallDescription"
            value={formData.smallDescription}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Дата:
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Добавить новость</button>
      </form>

      <div className="admin-data">
        {news.map((el) => (
          <div className="admin-elem" key={el.id}>
            <h3>
              <h3 className="blue-text">Название новости:</h3> {el.name}
            </h3>
            <p>id: {el.id}</p>
            <p>
              <h3 className="blue-text">Описание:</h3> {el.description}
            </p>
            <p>
              <h3 className="blue-text">Кратское описание:</h3>
              {el.smallDescription}
            </p>
            <img src={process.env.REACT_APP_API_URL + el.img} alt={el.name} />
            <button className="red-btn" onClick={() => rerenderingNews(el.id)}>
              Удалить новость
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAdmin;
