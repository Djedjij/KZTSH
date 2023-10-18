import React, { useState } from "react";
import { addTableCharacteristics } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const TableCharacteristicsAdmin = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    value: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("value", formData.value);
      await addTableCharacteristics(formDataToSend, props.id);
      await props.renderItems();
      setFormData({
        name: "",
        value: "",
      });
    } catch (error) {
      console.error("Ошибка при добавлении характеристики в таблицу:", error);
    }
  };
  return (
    <div>
      <h2>Добавить характеристики в таблицу</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Значение
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Добавить информацию</button>
      </form>
    </div>
  );
};

export default TableCharacteristicsAdmin;
