import React, { useState } from "react";
<<<<<<< HEAD
import {
  addTableCharacteristics,
  addTableNameCharacteristics,
} from "../../http/allApi";

const TableCharacteristicsAdmin = (props) => {
  const [array, setArray] = useState([]);
  const [arrayName, setArrayName] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState(false);

  const handleSubmit = async () => {
    try {
      // Отправка массива на сервер
      await addTableCharacteristics(array, props.id);

      setSubmitted(true);
    } catch (error) {
      console.error("Ошибка при отправке на сервер", error);
    }
  };

  const handleNameSubmit = async () => {
    try {
      // Отправка массива на сервер
      await addTableNameCharacteristics(arrayName, props.id);

      setSubmittedName(true);
    } catch (error) {
      console.error("Ошибка при отправке на сервер", error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // Разбиваем введенную строку по переносам строк и удаляем пустые элементы
    const newArray = value.split("\n").filter((item) => item !== "");
    setArray(newArray);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    // Разбиваем введенную строку по переносам строк и удаляем пустые элементы
    const newArray = value.split("\n").filter((item) => item !== "");
    setArrayName(newArray);
  };

  return (
    <div>
      <div>
        <textarea rows="5" cols="50" onChange={handleNameChange} />
        <br />
        <button onClick={handleNameSubmit}>Отправить</button>
        {submittedName && <p>Заголовок успешно отправлен на сервер!</p>}
      </div>
      <div>
        <textarea rows="5" cols="50" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Отправить</button>
        {submitted && <p>Массив успешно отправлен на сервер!</p>}
      </div>
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    </div>
  );
};

export default TableCharacteristicsAdmin;
