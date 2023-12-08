import React, { useState } from "react";
import { addCategory } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const CategoryAdmin = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: [], // Добавляем поле для файла изображения
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setFormData({
      ...formData,
      images: [...files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formData.images.forEach((file, index) => {
        formDataToSend.append(`images`, file);
      });

      await addCategory(formDataToSend, props.id);
      await props.renderItems();
      setFormData({
        name: "",
        description: "",
        images: [],
      });
    } catch (error) {
      console.error("Ошибка при добавлении категории:", error);
    }
  };

  return (
    <div className="admin-content">
      <h2>Добавить категорию</h2>
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
          Изображения:
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </label>
        <br />
        <button type="submit">Добавить категорию</button>
      </form>
      <div className="admin-content"></div>
    </div>
  );
};

export default CategoryAdmin;
