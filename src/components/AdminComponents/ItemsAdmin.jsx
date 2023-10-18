import React, { useEffect, useState } from "react";
import {
  deleteItems,
  fetchItems,
  addItems,
  deleteCategory,
  deleteCharacteristics,
  deleteTableCharacteristics,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
import CategoryAdmin from "./CategoryAdmin";
import TableCharacteristicsAdmin from "./TableCharacteristicsAdmin";
import CharacteristicsAdmin from "./CharacteristicsAdmin";

const ItemsAdmin = () => {
  const [items, setItems] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [characteristicsOpen, setCharacteristicsOpen] = useState(false);
  const [tableCharacteristicOpen, setTableCharacteristicsOpen] =
    useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: null,
  });

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  const renderItems = async () => {
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingItems = async (id) => {
    await deleteItems(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };
  const rerenderingCategory = async (id) => {
    await deleteCategory(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingTableCharacteristics = async (id) => {
    await deleteTableCharacteristics(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingCharacteristics = async (id) => {
    await deleteCharacteristics(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("title", formData.title);
      formDataToSend.append("image", formData.image);
      await addItems(formDataToSend);
      setFormData({
        title: "",
        image: null,
      });

      const updatedItems = await fetchItems();
      setItems(updatedItems);
    } catch (error) {
      console.error("Ошибка при добавлении продукции:", error);
    }
  };

  return (
    <div className="admin-content">
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
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Создать продукцию</button>
      </form>
      <div className="admin-content">
        {items.map((el) => (
          <div key={el.id}>
            <h3>{el.title}</h3>
            <img src={process.env.REACT_APP_API_URL + el.image} alt={el.name} />
            <button className="red-btn" onClick={() => rerenderingItems(el.id)}>
              Удалить продукцию
            </button>
            {el.categories.map((category) => (
              <div key={category.id}>
                <h3>{category.name}</h3>
                <p>{category.id}</p>
                <p>{category.description}</p>
                {category.images.map((img) => (
                  <img
                    key={img}
                    src={process.env.REACT_APP_API_URL + img}
                    alt={category.name}
                  />
                ))}
                <hr />
                <button
                  onClick={() => setCharacteristicsOpen(!characteristicsOpen)}
                >
                  Добавить характеристику
                </button>
                {characteristicsOpen && (
                  <CharacteristicsAdmin
                    id={category.id}
                    renderItems={renderItems}
                  />
                )}
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
                            onClick={() =>
                              rerenderingCharacteristics(characteristics.id)
                            }
                          >
                            Удалить характеристику
                          </button>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <hr />
                <button
                  onClick={() =>
                    setTableCharacteristicsOpen(!tableCharacteristicOpen)
                  }
                >
                  Добавить характеристику в таблицу
                </button>
                {tableCharacteristicOpen && (
                  <TableCharacteristicsAdmin
                    id={category.id}
                    renderItems={renderItems}
                  />
                )}
                {category.tableCharacteristics &&
                  category.tableCharacteristics.map((tableCharacteristics) => (
                    <div key={tableCharacteristics.id}>
                      <p>{tableCharacteristics.name}</p>
                      <p>{tableCharacteristics.value}</p>
                      <button
                        className="red-btn"
                        onClick={() =>
                          rerenderingTableCharacteristics(
                            tableCharacteristics.id
                          )
                        }
                      >
                        Удалить характеристику
                      </button>
                    </div>
                  ))}
                <button
                  className="red-btn"
                  onClick={() => rerenderingCategory(category.id)}
                >
                  Удалить категорию
                </button>
              </div>
            ))}
            <button onClick={() => setCategoryOpen(!categoryOpen)}>
              Добавить категорию
            </button>
            {categoryOpen && (
              <CategoryAdmin id={el.id} renderItems={renderItems} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsAdmin;
