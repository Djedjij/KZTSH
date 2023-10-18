import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteReporting,
  fetchReporting,
  addReporting,
  deleteReportingLink,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
import ReportingLinksAdmin from "./ReportingLinksAdmin";

const ReportingAdmin = () => {
  const [Reporting, setReporting] = useState([]);
  const [reportingLinksOpen, setReportingLinksOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    fetchReporting().then((data) => setReporting(data));
  }, []);

  const renderReporting = async () => {
    const updatedReporting = await fetchReporting();
    setReporting(updatedReporting);
  };

  const rerenderingReporting = async (id) => {
    await deleteReporting(id);
    const updatedReporting = await fetchReporting();
    setReporting(updatedReporting);
  };

  const rerenderingReportingLinks = async (id) => {
    await deleteReportingLink(id);
    const updatedReporting = await fetchReporting();
    setReporting(updatedReporting);
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
      await addReporting(formDataToSend);
      setFormData({
        name: "",
      });

      const updatedReporting = await fetchReporting();
      setReporting(updatedReporting);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

  return (
    <div className="admin-content">
      <h2>Создать новую отчетность</h2>
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
        <button type="submit">Создать</button>
      </form>
      <div className="admin-data">
        {Reporting.map((el) => (
          <div className="admin-elem" key={el.id}>
            <h2>{el.name}</h2>
            {el.reportingLinks.map((link) => (
              <div className="admin-link" key={link.id}>
                <Link to={process.env.REACT_APP_API_URL + link.src}>
                  <h3>{link.name}</h3>
                </Link>
                <button
                  className="red-btn"
                  onClick={() => rerenderingReportingLinks(link.id)}
                >
                  Удалить документ
                </button>
              </div>
            ))}
            <button onClick={() => setReportingLinksOpen(!reportingLinksOpen)}>
              Добавить документ
            </button>
            {reportingLinksOpen && (
              <ReportingLinksAdmin
                id={el.id}
                renderReporting={renderReporting}
              />
            )}
            <button
              className="red-btn"
              onClick={() => rerenderingReporting(el.id)}
            >
              Удалить отчетность
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportingAdmin;
