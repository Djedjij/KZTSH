import React from "react";
import { INFO_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Info.css";
const Info = () => {
  return (
    <div className="info">
      <h2 className="header-h2">Информация</h2>
      <MainReturnButton />
      <div className="info-container">
        <LeftMenu arr={INFO_ROUTES} />
        <div className="info-content">
          <img
            className="info-img"
            src="/images/kztsh-info.jpg"
            alt="kztsh-info"
          />
          <p className="info-p">
            Наш кузнечный завод является лидирующим производителем тяжелых
            штамповок, предоставляющим высококачественные и надежные продукты
            для различных отраслей промышленности. Мы специализируемся на
            производстве разнообразных штампованных деталей, которые отличаются
            превосходным качеством, точностью и долговечностью.
          </p>
          <p>Преимущества работы с нами:</p>
          <p>
            Опыт и экспертиза: Мы находимся в индустрии кузнечного производства
            уже много лет и накопили обширный опыт в создании высококачественных
            штампованных деталей. Наша команда специалистов обладает глубокими
            знаниями и навыками, чтобы эффективно выполнять заказы любой
            сложности.
          </p>

          <p>
            Индивидуальный подход: Мы понимаем, что каждый клиент имеет
            уникальные потребности, и поэтому мы готовы разработать
            индивидуальное решение для каждого проекта. Мы тщательно изучаем
            требования клиента и предлагаем наиболее оптимальные технические
            решения для достижения желаемых результатов.
          </p>
          <p>
            Контроль качества: Мы придерживаемся высоких стандартов качества во
            всех этапах производства. Наша компания имеет строгую систему
            контроля качества, которая гарантирует соответствие наших продуктов
            высоким стандартам, удовлетворение потребностей клиентов и
            соблюдение всех регулирующих норм и стандартов.
          </p>
          <p></p>
            Гибкость и надежность: Мы ценим наших клиентов и готовы предложить
            гибкие условия сотрудничества. Мы стремимся к долгосрочным
            партнерским отношениям и всегда готовы поддержать вас во всех ваших
            потребностях по производству штампованных деталей.
          </p>
          <p>
            Мы гордимся своей работой и стремимся стать вашим надежным партнером
            в производстве тяжелых штамповок. Если у вас есть какие-либо вопросы
            или вы хотели бы обсудить свой проект с нами, пожалуйста, свяжитесь
            с нами, и наши специалисты ответят на все ваши вопросы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
