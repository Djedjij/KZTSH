import React from "react";
import Header from "../Header";
import { adminRoutes, userRoutes } from "../../store/routes";
import { Routes, Route } from "react-router";
import Footer from "../Footer";
import ButtonUp from "../../UI/ButtonUp";
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
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
