import React from "react";
import "./Login.scss";
import Form from "./Form";
import logo from "../../logo.svg";
import vector from "../../assets/sign-in-vector.svg";

const Login = () => {
  return (
    <main className="login">
      <img className="logo" src={logo} alt="logo"></img>

      <div className="login__content">
        <img className="desktop" src={vector} alt="vector"></img>

        <div className="details">
          <div className="details__header">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <img className="mobile" src={vector} alt="vector"></img>
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Login;
