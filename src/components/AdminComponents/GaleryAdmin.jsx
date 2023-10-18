import React, { useEffect, useState } from "react";
import { deleteGalery, fetchGalery, addGalery } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const GaleryAdmin = () => {
  const [galery, setGalery] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    img: null,
  });

  useEffect(() => {
    fetchGalery().then((data) => setGalery(data));
  }, []);

  const rerenderingGalery = async (id) => {
    await deleteGalery(id);
    const updatedGalery = await fetchGalery();
    setGalery(updatedGalery);
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

      formDataToSend.append("name", formData.name);
      formDataToSend.append("img", formData.img);

      await addGalery(formDataToSend);

      setFormData({
        name: "",
        img: null,
      });

      const updatedGalery = await fetchGalery();
      setGalery(updatedGalery);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };
  return (
    <div className="admin-content">
      <h2>Добавить фотографию в галерею</h2>
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
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Добавить фотографию</button>
      </form>
      <div className="admin-data">
        {galery.map((el) => (
          <div className="admin-elem" key={el.id}>
            <h3>{el.name}</h3>
            <img src={process.env.REACT_APP_API_URL + el.img} alt={el.name} />
            <button
              className="red-btn"
              onClick={() => rerenderingGalery(el.id)}
            >
              Удалить изображение
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryAdmin;
