import React from "react";
import Header from "../Header";
import { adminRoutes, userRoutes } from "../../store/routes";
import { Routes, Route } from "react-router";
import Footer from "../Footer";
import ButtonUp from "../../UI/ButtonUp";
import ProductPage from "./ProductPage";
import Category from "./Category";
import Grid from "../../UI/Grid";

const AppRouter = () => {
  const isAuth = true;

  return (
    <div className="wrapper">
      <Header />
      <ButtonUp />
      <Routes>
        {isAuth &&
          adminRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products/:productId/:categoryId" element={<Category />} />
      </Routes>
      <Grid/>
      <Footer />
    </div>
  );
};

export default AppRouter;
