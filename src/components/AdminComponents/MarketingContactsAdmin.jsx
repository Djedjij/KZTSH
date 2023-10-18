import React, { useEffect, useState } from "react";
import {
  deleteMarketingContacts,
  fetchMarketingContacts,
  addMarketingContacts,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const MarketingContactsAdmin = () => {
  const [marketingContacts, setMarketingContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    internalPhone: "",
    phone: Number(),
  });

  useEffect(() => {
    fetchMarketingContacts().then((data) => setMarketingContacts(data));
  }, []);

  const rerenderingMarketingContacts = async (id) => {
    await deleteMarketingContacts(id);
    const updatedMarketingContacts = await fetchMarketingContacts();
    setMarketingContacts(updatedMarketingContacts);
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
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("job", formData.job);
      formDataToSend.append("internalPhone", formData.internalPhone);
      formDataToSend.append("phone", formData.phone);

      await addMarketingContacts(formDataToSend);

      setFormData({
        name: "",
        job: "",
        internalPhone: "",
        phone: Number(),
      });

      const updatedMarketingContacts = await fetchMarketingContacts();
      setMarketingContacts(updatedMarketingContacts);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };
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
    </div>
  );
};

export default MarketingContactsAdmin;
