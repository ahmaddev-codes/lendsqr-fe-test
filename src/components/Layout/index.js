import React from "react";
import "../Layout/index.scss";
import "../Layout/index";
import Header from "../Header/index";
import SideBar from "../SideBar/index";
import Users from "../Users/index";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <SideBar />
      <Users />
    </div>
  );
};

export default Layout;
