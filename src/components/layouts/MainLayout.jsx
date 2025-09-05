import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Index";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>footer</div>
    </>
  );
};

export default MainLayout;
