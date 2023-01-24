import React from "react";
import "../Dashboard/index.scss";
import "./index";
import Header from "../Header/index";
import SideBar from "../SideBar/index";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header />
      <SideBar />
    </section>
  );
};

export default Dashboard;
