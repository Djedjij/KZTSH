import React, { useEffect, useState } from "react";
import {
  deleteItems,
  fetchItems,
  addItems,
  deleteCategory,
  deleteCharacteristics,
  deleteTableCharacteristics,
  deleteTableNameCharacteristics,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
import CategoryAdmin from "./CategoryAdmin";
import TableCharacteristicsAdmin from "./TableCharacteristicsAdmin";
import CharacteristicsAdmin from "./CharacteristicsAdmin";

const ItemsAdmin = () => {
  const [items, setItems] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState([]);
  const [characteristicsOpen, setCharacteristicsOpen] = useState(false);
  const [tableCharacteristicOpen, setTableCharacteristicsOpen] =
    useState(false);
  const [categoryStates, setCategoryStates] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    icon: null,
  });

  const fetchLoaderItems = () => {
    setLoad(true);
    fetchItems()
      .then((data) => {
        setLoad(false);

        if (data.error) {
          setError(data.error);
        } else {
          setItems(data);
          const initialCategoryStates = {};
          data.forEach((el) => {
            initialCategoryStates[el.id] = false;
          });
          setCategoryOpen(initialCategoryStates);
          setCategoryStates(initialCategoryStates);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message || "Произошла ошибка сети");
      });
  };

  useEffect(() => {
    fetchLoaderItems();
  }, []);

  const renderItems = async () => {
    fetchLoaderItems();
  };

  const rerenderingItems = async (id) => {
    await deleteItems(id);
    fetchLoaderItems();
  };
  const rerenderingCategory = async (id) => {
    await deleteCategory(id);
    fetchLoaderItems();
  };

  const rerenderingTableCharacteristics = async (id) => {
    await deleteTableCharacteristics(id);
    fetchLoaderItems();
  };
  const rerenderingTableNameCharacteristics = async (id) => {
    await deleteTableNameCharacteristics(id);
    fetchLoaderItems();
  };

  const rerenderingCharacteristics = async (id) => {
    await deleteCharacteristics(id);
    fetchLoaderItems();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      icon: file,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("icon", formData.icon);
      await addItems(formDataToSend);
      setFormData({
        title: "",
        description: "",
        image: null,
        icon: null,
      });

      fetchLoaderItems();
    } catch (error) {
      console.error("Ошибка при добавлении продукции:", error);
    }
  };

  const toggleCategory = (categoryId) => {
    setCategoryStates((prevStates) => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId],
    }));
  };

  const toggleCategoryOpen = (categoryId) => {
    setCategoryOpen((prevStates) => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId],
    }));
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
    <div className="admin">
      <h2>Создать новую продукцию</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input
            type="text"
            name="title"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Описание:
          <textarea
            type="text"
            name="description"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Иконка:
          <input type="file" accept="image/*" onChange={handleIconChange} />
        </label>
        <br />
        <button type="submit">Создать продукцию</button>
      </form>
      <div className="admin-content">
        {items.map((el) => (
          <div className="item-admin" key={el.id}>
            <h3>Наименование продукции: {el.title}</h3>
            <img
              src={process.env.REACT_APP_API_URL + el.image}
              alt={el.title}
            />
            <button className="red-btn" onClick={() => rerenderingItems(el.id)}>
              Удалить продукцию
            </button>
            <button onClick={() => toggleCategory(el.id)}>
              {categoryStates[el.id]
                ? "Закрыть категории"
                : "Открыть категории"}
            </button>
            {categoryStates[el.id] &&
              el.categories.map((category) => (
                <div className="category-admin" key={category.id}>
                  <h3>Наименование категории: {category.name}</h3>
                  <p>Описание категории: {category.description}</p>
                  {category.images.map((img) => (
                    <img
                      className="category-img"
                      key={img}
                      src={process.env.REACT_APP_API_URL + img}
                      alt={category.name}
                    />
                  ))}
                  <hr />
                  <CharacteristicsComponent
                    {...{
                      category,
                      rerenderingCharacteristics,
                      setCharacteristicsOpen,
                      characteristicsOpen,
                      renderItems,
                    }}
                  />
                  <hr />
                  <TableCharacteristicsComponent
                    {...{
                      rerenderingTableCharacteristics,
                      rerenderingTableNameCharacteristics,
                      setTableCharacteristicsOpen,
                      tableCharacteristicOpen,
                      category,
                      renderItems,
                    }}
                  />
                  <hr />
                  <button
                    className="red-btn"
                    onClick={() => rerenderingCategory(category.id)}
                  >
                    Удалить категорию
                  </button>
                </div>
              ))}
            <button onClick={() => toggleCategoryOpen(el.id)}>
              {categoryOpen[el.id]
                ? "Скрыть добавление категории"
                : `Добавить категорию к продукции: ${el.title}`}
            </button>
            {categoryOpen[el.id] && (
              <CategoryAdmin id={el.id} renderItems={renderItems} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemsAdmin;

const TableCharacteristicsComponent = (props) => {
  const {
    rerenderingTableCharacteristics,
    rerenderingTableNameCharacteristics,
    setTableCharacteristicsOpen,
    tableCharacteristicOpen,
    category,
    renderItems,
  } = props;

  return (
    <div className="category-characteristics">
      <h3>Характеристики в таблице</h3>
      <table className="category-table">
        <thead>
          {category.tableNameCharacteristics.map((el, index) => (
            <tr key={index}>
              {el.name.map((value, subIndex) => (
                <th key={subIndex}>{value}</th>
              ))}
              <button
                className="red-btn"
                onClick={() => rerenderingTableNameCharacteristics(el.id)}
              >
                Удалить заголовок
              </button>
            </tr>
          ))}
        </thead>
        <tbody>
          {category.tableCharacteristics &&
            category.tableCharacteristics.map((elem, index) => (
              <tr key={index}>
                {elem.name.map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
                <td>
                  <button
                    className="red-btn"
                    onClick={() => rerenderingTableCharacteristics(elem.id)}
                  >
                    Удалить характеристику
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className="characteristics-btn"
        onClick={() => setTableCharacteristicsOpen(!tableCharacteristicOpen)}
      >
        {tableCharacteristicOpen
          ? "Скрыть"
          : "Добавить характеристику в таблицу"}
      </button>
      {tableCharacteristicOpen && (
        <TableCharacteristicsAdmin id={category.id} renderItems={renderItems} />
      )}
    </div>
  );
};

const CharacteristicsComponent = (props) => {
  const {
    category,
    rerenderingCharacteristics,
    setCharacteristicsOpen,
    characteristicsOpen,
    renderItems,
  } = props;
  return (
    <div className="category-characteristics">
      <h3>Характеристики</h3>
      <table className="category-table">
        <thead></thead>
        <tbody>
          {category.characteristics.map((characteristics) => (
            <tr key={characteristics.name}>
              <td>{characteristics.name}</td>
              <td>{characteristics.value}</td>
              <button
                className="red-btn"
                onClick={() => rerenderingCharacteristics(characteristics.id)}
              >
                Удалить характеристику
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="characteristics-btn"
        onClick={() => setCharacteristicsOpen(!characteristicsOpen)}
      >
        {characteristicsOpen ? "Скрыть" : "Добавить характеристику"}
      </button>
      {characteristicsOpen && (
        <CharacteristicsAdmin id={category.id} renderItems={renderItems} />
      )}
    </div>
  );
};
