import React from "react";
import "../Header/index.scss";
import logo from "../../logo.svg";
import avatar from "../../assets/avatar.svg";
import bell from "../../assets/bell.svg";
import { MdArrowDropDown } from "react-icons/md";
import search from "../../assets/search.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-search">
          <img src={logo} alt="logo"></img>

          <form action="">
            <input type="search" placeholder="Search for anything"></input>
            <button type="submit">
              <img src={search} alt="search"></img>
            </button>
          </form>
        </div>

        <div className="user">
          <a href="http://lendsqr.com">Docs</a>
          <img src={bell} alt="bell"></img>
          <img className="avatar" src={avatar} alt="avatar"></img>
          <div className="user__accounts">
            <p>Adedeji</p>
            <MdArrowDropDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
