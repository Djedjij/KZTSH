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
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [reportingLinksOpen, setReportingLinksOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    setLoad(true);
    fetchReporting()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setReporting(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message || "Произошла ошибка сети");
      });
  }, []);

  const renderReporting = async () => {
    setLoad(true);
    await fetchReporting()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setReporting(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message || "Произошла ошибка сети");
      });
  };

  const rerenderingReporting = async (id) => {
    setLoad(true);
    await deleteReporting(id);
    await fetchReporting()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setReporting(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message || "Произошла ошибка сети");
      });
  };

  const rerenderingReportingLinks = async (id) => {
    setLoad(true);
    await deleteReportingLink(id);
    await fetchReporting()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setReporting(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message || "Произошла ошибка сети");
      });
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
      setLoad(true);
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("name", formData.name);
      await addReporting(formDataToSend);
      setFormData({
        name: "",
      });
      await fetchReporting().then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setReporting(data);
        }
      });
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
