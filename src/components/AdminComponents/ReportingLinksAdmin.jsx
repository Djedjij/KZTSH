import React, { useState } from "react";
import { addReportingLink } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const ReportingLinksAdmin = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    src: null, // Добавляем поле для файла изображения
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePDFChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      src: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("src", formData.src);

      await addReportingLink(formDataToSend, props.id);
      await props.renderReporting();
      setFormData({
        name: "",
        src: null,
      });
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

  return (
    <div className="admin-content">
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Файл:
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePDFChange}
            />
          </label>
          <br />
          <button type="submit">Добавить файл</button>
        </form>
      </div>
    </div>
  );
};

export default ReportingLinksAdmin;
