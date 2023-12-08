import React, { useState } from "react";
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
    </div>
  );
};

export default TableCharacteristicsAdmin;
