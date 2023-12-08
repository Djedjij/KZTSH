import React, { useEffect, useState } from "react";
import {
  deleteMarketingContacts,
  fetchMarketingContacts,
  addMarketingContacts,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
<<<<<<< HEAD
import { marketingContactsArr } from "../../utils/consts";

const MarketingContactsAdmin = () => {
  const [marketingContacts, setMarketingContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
=======

const MarketingContactsAdmin = () => {
  const [marketingContacts, setMarketingContacts] = useState([]);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    internalPhone: "",
    phone: Number(),
  });

  useEffect(() => {
<<<<<<< HEAD
    setLoad(true);
    fetchMarketingContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setMarketingContacts(data);
      }
    });
  }, []);

  const rerenderingMarketingContacts = async (id) => {
    setLoad(true);
    await deleteMarketingContacts(id);
    fetchMarketingContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setMarketingContacts(data);
      }
    });
=======
    fetchMarketingContacts().then((data) => setMarketingContacts(data));
  }, []);

  const rerenderingMarketingContacts = async (id) => {
    await deleteMarketingContacts(id);
    const updatedMarketingContacts = await fetchMarketingContacts();
    setMarketingContacts(updatedMarketingContacts);
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
    e.preventDefault();
    try {
<<<<<<< HEAD
      setLoad(true);
=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("job", formData.job);
      formDataToSend.append("internalPhone", formData.internalPhone);
      formDataToSend.append("phone", formData.phone);

      await addMarketingContacts(formDataToSend);
<<<<<<< HEAD
      setLoad(false);
=======

>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      setFormData({
        name: "",
        job: "",
        internalPhone: "",
        phone: Number(),
      });
<<<<<<< HEAD
      fetchMarketingContacts().then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setMarketingContacts(data);
        }
      });
=======

      const updatedMarketingContacts = await fetchMarketingContacts();
      setMarketingContacts(updatedMarketingContacts);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };
<<<<<<< HEAD

  // Удалить функцию после добавления данных

  const addAllMarketingContacts = async (marketingArray) => {
    setLoad(true);

    for (const marketing of marketingArray) {
      try {
        const formDataToSend = new FormData();

        formDataToSend.append("name", marketing.name);
        formDataToSend.append("job", marketing.job);
        formDataToSend.append("internalPhone", marketing.internalPhone);
        formDataToSend.append("phone", marketing.phone);

        await addMarketingContacts(formDataToSend);
      } catch (error) {
        console.error("Ошибка при добавлении контакта:", error);
      }
    }
    const updatedDirectorContacts = await fetchMarketingContacts();
    setMarketingContacts(updatedDirectorContacts);
    setLoad(false);
  };
  // ---------------------------------------------------------------------

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
            {marketingContacts &&
              marketingContacts.map((el) => (
                <tr key={el.job}>
                  <td>{el.job} </td>
                  <td>{el.name}</td>
                  <td>{el.internalPhone}</td>
                  <td>{el.phone}</td>
                  <button
                    className="red-btn"
                    onClick={() => rerenderingMarketingContacts(el.id)}
                  >
                    Удалить информацию
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
<<<<<<< HEAD
      <button onClick={() => addAllMarketingContacts(marketingContactsArr)}>
        Добавить данные с фронта
      </button>
=======
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    </div>
  );
};

export default MarketingContactsAdmin;
