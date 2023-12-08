import React, { useEffect, useState } from "react";
import {
  deleteDirectorPhotoContacts,
  fetchDirectorPhotoContacts,
  addDirectorPhotoContacts,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";

const DirectorPhotoContactsAdmin = () => {
  const [directorPhotoContacts, setDirectorPhotoContacts] = useState([]);
<<<<<<< HEAD
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    image: null,
  });

  useEffect(() => {
    setLoad(true);
    fetchDirectorPhotoContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setDirectorPhotoContacts(data);
      }
    });
  }, []);

  const rerenderingDirectorPhotoContacts = async (id) => {
    setLoad(true);
    await deleteDirectorPhotoContacts(id);
    await fetchDirectorPhotoContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setDirectorPhotoContacts(data);
      }
    });
=======
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    image: null, // Добавляем поле для файла изображения
  });

  useEffect(() => {
    fetchDirectorPhotoContacts().then((data) => setDirectorPhotoContacts(data));
  }, []);

  const rerenderingDirectorPhotoContacts = async (id) => {
    await deleteDirectorPhotoContacts(id);
    const updatedDirectorPhotoContacts = await fetchDirectorPhotoContacts();
    setDirectorPhotoContacts(updatedDirectorPhotoContacts);
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
      image: file,
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

      formDataToSend.append("image", formData.image);

      await addDirectorPhotoContacts(formDataToSend);
<<<<<<< HEAD
      setLoad(false);
=======

>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
      setFormData({
        name: "",
        job: "",
        image: null,
      });

<<<<<<< HEAD
      await fetchDirectorPhotoContacts().then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setDirectorPhotoContacts(data);
        }
      });
=======
      const updatedDirectorPhotoContacts = await fetchDirectorPhotoContacts();
      setDirectorPhotoContacts(updatedDirectorPhotoContacts);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

<<<<<<< HEAD
  // const addAllDirectorsPhotoContacts = async (directorPhotoContactsArr) => {
  //   for (const contact of directorPhotoContactsArr) {
  //     // Создаем объект FormData для каждого контакта
  //     const formDataToSend = new FormData();
  //     formDataToSend.append("name", contact.name);
  //     formDataToSend.append("job", contact.job);
  //     formDataToSend.append("image", contact.image);

  //     // Отправляем данные
  //     const response = await addDirectorPhotoContacts(formDataToSend);
  //     // Проверяем успешность запроса
  //     if (response.error) {
  //       console.error(`Ошибка при добавлении контакта: ${response.error}`);
  //       // Если есть ошибка, прекращаем выполнение функции
  //       return;
  //     }
  //   }
  //   // После успешного добавления всех контактов, обновляем данные на странице
  //   const data = await fetchDirectorPhotoContacts();
  //   if (data.error) {
  //     console.error(`Ошибка при получении контактов: ${data.error}`);
  //   } else {
  //     setDirectorPhotoContacts(data);
  //   }
  // };
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
    <div className="admin-content">
      <h2>Добавить фото руководства</h2>
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
          Должность:
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Добавить фото руководства</button>
      </form>
      <div className="admin-data">
        {directorPhotoContacts.map((el) => (
          <div className="admin-elem" key={el.id}>
            <h3 className="blue-text">ФИО:</h3>
            <h3>{el.name}</h3>
            <p>{el.id}</p>
            <h3 className="blue-text">Должность:</h3>
            <p>{el.job}</p>
            <img src={process.env.REACT_APP_API_URL + el.image} alt={el.name} />
            <button onClick={() => rerenderingDirectorPhotoContacts(el.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorPhotoContactsAdmin;
