import React, { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import MainReturnButton from "../../UI/MainReturnButton";
import { ABOUT_ROUTES } from "../../utils/consts";
// import Modal from "../../UI/Modal";
import "../../styles/Galery.css";
import { fetchGalery } from "../../http/allApi";
import Loader from "../../UI/Loader";
import ErrorMessage from "../../UI/Error";
import GaleryArray from "../../UI/GaleryArray";
// import SliderComponent from "../../UI/SliderComponent";

const Galery = () => {
  const [galery, setGalery] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const [productionIndex, setProductionIndex] = useState(null);
  const [workingProcessIndex, setWorkingProcessIndex] = useState(null);
  const [holidaysIndex, setholidaysIndex] = useState(null);

  const [productionActive, setProductionActive] = useState(true);
  const [workingProcessActive, setWorkingProcessActive] = useState(false);
  const [holidaysActive, setHolidaysActive] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    setProductionActive(buttonNumber === 1);
    setWorkingProcessActive(buttonNumber === 2);
    setHolidaysActive(buttonNumber === 3);
  };

  const showProductionModal = (index) => {
    setProductionIndex(index);
  };
  const showWorkingProcessModal = (index) => {
    setWorkingProcessIndex(index);
  };
  const showHolidays = (index) => {
    setholidaysIndex(index);
  };

  const closeProductionModal = () => {
    setProductionIndex(null);
  };
  const closeWorkingProcessModal = () => {
    setWorkingProcessIndex(null);
  };
  const closeHolidays = () => {
    setholidaysIndex(null);
  };
  useEffect(() => {
    setLoad(true);
    fetchGalery()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGalery(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, []);

  const production = [];
  const workingProcess = [];
  const holidays = [];

  if (galery) {
    for (let i = 0; i <= galery.length - 1; i++) {
      if (galery[i].name === "Производство") {
        production.push(galery[i]);
      }
      if (galery[i].name === "Рабочий процесс") {
        workingProcess.push(galery[i]);
      }
      if (galery[i].name === "Праздники") {
        holidays.push(galery[i]);
      }
    }
  }

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div>
      <h2 className="header-h2">Галерея</h2>
      <MainReturnButton />
      <div className="galery">
        <LeftMenu arr={ABOUT_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="galery-content">
            <div className="galery-description">
              <h1>Фотогалерея</h1>
              <p>
                Фотографии могут рассказать больше, чем тексты. Поэтому мы
                пополняем галерею яркими событиями из жизни компании:
                реализованные проекты, корпоративные праздники, рабочие процессы
                и другое. Давайте познакомимся ближе!
              </p>
              <div className="galery-panel">
                <button
                  onClick={() => handleButtonClick(1)}
                  className={productionActive ? "active" : ""}
                >
                  Производство
                </button>
                <button
                  onClick={() => handleButtonClick(2)}
                  className={workingProcessActive ? "active" : ""}
                >
                  Рабочий процесс
                </button>
                <button
                  onClick={() => handleButtonClick(3)}
                  className={holidaysActive ? "active" : ""}
                >
                  Мероприятия
                </button>
              </div>
            </div>
            <GaleryArray
              arrayState={productionActive}
              array={production}
              showModal={showProductionModal}
              selectedImageIndex={productionIndex}
              closeModal={closeProductionModal}
            />
            <GaleryArray
              arrayState={workingProcessActive}
              array={workingProcess}
              showModal={showWorkingProcessModal}
              selectedImageIndex={workingProcessIndex}
              closeModal={closeWorkingProcessModal}
            />
            <GaleryArray
              arrayState={holidaysActive}
              array={holidays}
              showModal={showHolidays}
              selectedImageIndex={holidaysIndex}
              closeModal={closeHolidays}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Galery;
