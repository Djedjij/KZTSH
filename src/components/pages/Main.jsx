import React from "react";
import "../../App.css";

import FirstPage from "./FirstPage";

import Products from "../Products";
import { items } from "../../utils/consts";
import IconsLinks from "../../UI/IconsLinks";

const Main = () => {
  return (
    <div>
      <div className="app">
        <FirstPage />
      </div>
      <IconsLinks />
      <Products items={items} />
    </div>
  );
};

export default Main;
