import React, { useEffect, useState } from "react";
import {
  deleteDirectorContacts,
  fetchDirectorContacts,
  addDirectorContacts,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
<<<<<<< HEAD
import { directorContactsArr } from "../../utils/consts";

const DirectorContactsAdmin = () => {
  const [directorContacts, setDirectorContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
=======

const DirectorContactsAdmin = () => {
  const [directorContacts, setDirectorContacts] = useState([]);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    internalPhone: "",
<<<<<<< HEAD
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
=======
    phone: Number(),
  });

  useEffect(() => {
    fetchDirectorContacts().then((data) => setDirectorContacts(data));
  }, []);

  const rerenderingDirectorContacts = async (id) => {
    await deleteDirectorContacts(id);
    const updatedDirectorContacts = await fetchDirectorContacts();
    setDirectorContacts(updatedDirectorContacts);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    setLoad(true);
=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("job", formData.job);
      formDataToSend.append("internalPhone", formData.internalPhone);
      formDataToSend.append("phone", formData.phone);

      await addDirectorContacts(formDataToSend);
<<<<<<< HEAD
      setLoad(false);
=======

>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      setFormData({
        name: "",
        job: "",
        internalPhone: "",
<<<<<<< HEAD
        phone: "",
=======
        phone: Number(),
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      });

      const updatedDirectorContacts = await fetchDirectorContacts();
      setDirectorContacts(updatedDirectorContacts);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };
<<<<<<< HEAD

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

=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
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
<<<<<<< HEAD
      <button onClick={() => addAllDirectorsContacts(directorContactsArr)}>
        Добавить все данные с фронта
      </button>
=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    </div>
  );
};

export default DirectorContactsAdmin;
