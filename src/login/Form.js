import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Login.scss";

const Form = ({login}) => {
  /*  state hook to update email and password if available  */
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  /*  state updating function  */
  const handleChange = (e) => {
    setState(e.target.value);
  };

  /*  show or hide password on switch  */
  const showPassword = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else if (password.type === "text") {
      password.type = "password";
    }
  };

  return (
    <form className="form">
      <input
        type="email"
        placeholder="Email"
        id="email"
        value={state.email}
        onChange={handleChange}
      ></input>
      <p className="message" id="emailMessage"></p>

      <input
        type="password"
        placeholder="Password"
        id="password"
        value={state.password}
        onChange={handleChange}
      ></input>
      <p className="showPassword" onClick={showPassword}>
        SHOW
      </p>

      <a href="/#">FORGOT PASSWORD?</a>

      <Link className="link" to="/dashboard" type="submit">LOG IN</Link>
    </form>
  );
};

export default Form;
