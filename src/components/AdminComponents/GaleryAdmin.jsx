import React, { useEffect, useState } from "react";
import { deleteGalery, fetchGalery, addGalery } from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const GaleryAdmin = () => {
  const [galery, setGalery] = useState([]);
<<<<<<< HEAD
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: null, // Добавляем поле для файла изображения
  });

  useEffect(() => {
    setLoad(true);
    fetchGalery().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setGalery(data);
      }
    });
  }, []);

  const rerenderingGalery = async (id) => {
    setLoad(true);
    await deleteGalery(id);
    await fetchGalery().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setGalery(data);
      }
    });
=======
  const [formData, setFormData] = useState({
    name: "",
    img: null,
  });

  useEffect(() => {
    fetchGalery().then((data) => setGalery(data));
  }, []);

  const rerenderingGalery = async (id) => {
    await deleteGalery(id);
    const updatedGalery = await fetchGalery();
    setGalery(updatedGalery);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      img: file,
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

      formDataToSend.append("name", formData.name);
      formDataToSend.append("img", formData.img);

      await addGalery(formDataToSend);
<<<<<<< HEAD
      setLoad(false);
=======

>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      setFormData({
        name: "",
        img: null,
      });

<<<<<<< HEAD
      await fetchGalery().then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setGalery(data);
        }
      });
    } catch (error) {
      setLoad(false);
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

=======
      const updatedGalery = await fetchGalery();
      setGalery(updatedGalery);
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return (
    <div className="admin-content">
      <h2>Добавить фотографию в галерею</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <textarea
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Добавить фотографию</button>
      </form>
      <div className="admin-data">
        {galery.map((el) => (
          <div className="admin-elem" key={el.id}>
            <h3>{el.name}</h3>
            <img src={process.env.REACT_APP_API_URL + el.img} alt={el.name} />
            <button
              className="red-btn"
              onClick={() => rerenderingGalery(el.id)}
            >
              Удалить изображение
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryAdmin;
