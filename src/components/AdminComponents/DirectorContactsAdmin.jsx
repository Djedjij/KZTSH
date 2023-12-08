import React, { useEffect, useState } from "react";
import {
  deleteDirectorContacts,
  fetchDirectorContacts,
  addDirectorContacts,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
import { directorContactsArr } from "../../utils/consts";

const DirectorContactsAdmin = () => {
  const [directorContacts, setDirectorContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    internalPhone: "",
    phone: "",
  });

  useEffect(() => {
    setLoad(true);
    fetchDirectorContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setDirectorContacts(data);
      }
    });
  }, []);

  const rerenderingDirectorContacts = async (id) => {
    setLoad(true);
    await deleteDirectorContacts(id);
    fetchDirectorContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setDirectorContacts(data);
      }
    });
  };
  // добавление всего массива
  const addAllDirectorsContacts = async (directorsArray) => {
    setLoad(true);

    for (const director of directorsArray) {
      try {
        const formDataToSend = new FormData();

        formDataToSend.append("name", director.name);
        formDataToSend.append("job", director.job);
        formDataToSend.append("internalPhone", director.internalPhone);
        formDataToSend.append("phone", director.phone);

        await addDirectorContacts(formDataToSend);
      } catch (error) {
        console.error("Ошибка при добавлении контакта:", error);
      }
    }
    const updatedDirectorContacts = await fetchDirectorContacts();
    setDirectorContacts(updatedDirectorContacts);
    setLoad(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("job", formData.job);
      formDataToSend.append("internalPhone", formData.internalPhone);
      formDataToSend.append("phone", formData.phone);

      await addDirectorContacts(formDataToSend);
      setLoad(false);
      setFormData({
        name: "",
        job: "",
        internalPhone: "",
        phone: "",
      });

      const updatedDirectorContacts = await fetchDirectorContacts();
      setDirectorContacts(updatedDirectorContacts);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

  if (load) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h2>Добавить информацию</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ФИО
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Должность
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Рабочий телефон
          <input
            type="text"
            name="internalPhone"
            value={formData.internalPhone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Телефон
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Добавить информацию</button>
      </form>

      <div className="admin-content">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Должность</th>
              <th>ФИО</th>
              <th className="phone-th">Внутренний телефон</th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody>
            {directorContacts &&
              directorContacts.map((el) => (
                <tr key={el.job}>
                  <td>{el.job} </td>
                  <td>{el.name}</td>
                  <td>{el.internalPhone}</td>
                  <td>{el.phone}</td>
                  <button
                    className="red-btn"
                    onClick={() => rerenderingDirectorContacts(el.id)}
                  >
                    Удалить информацию
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => addAllDirectorsContacts(directorContactsArr)}>
        Добавить все данные с фронта
      </button>
    </div>
  );
};

export default DirectorContactsAdmin;
