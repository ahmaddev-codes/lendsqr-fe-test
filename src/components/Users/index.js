import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../Users/index.scss";
import "../Users/userMenu.scss";
import "../Users/filter.scss";

import users from "../../assets/users.svg";
import activeUsers from "../../assets/active-users.svg";
import usersWithLoans from "../../assets/users-with-loans.svg";
import usersWithSavings from "../../assets/users-with-savings.svg";
import filter from "../../assets/filter.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import menu from "../../assets/menu.svg";
import view from "../../assets/view.svg";
import blacklist from "../../assets/blacklist.svg";
import activate from "../../assets/activate.svg";

const User = () => {
  /* state management for user component */
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const OrgName = (data) => {
    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="text">{data.orgName}</p>
            </div>
          );
        })}
      </>
    );
  };

  const UserName = (data) => {
    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="text">{data.userName}</p>
            </div>
          );
        })}
      </>
    );
  };

  const Email = (data) => {
    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="text">{data.email}</p>
            </div>
          );
        })}
      </>
    );
  };

  const PhoneNumber = (data) => {
    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="text">{data.phoneNumber}</p>
            </div>
          );
        })}
      </>
    );
  };

  const CreatedAt = (data) => {
    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="text">{data.createdAt}</p>
            </div>
          );
        })}
      </>
    );
  };

  const Status = (data) => {
    const UserMenu = () => {
      return (
        <div
          className={showMenu ? "usermenu" : "usermenu hideMenu"}
          onMouseLeave={() => {
            setShowMenu(false);
          }}
        >
          <Link to="/user-details-page" className="usermenu__details">
            <img src={view} alt="view"></img>
            <p>Vew Details</p>
          </Link>

          <Link to="/blacklist-user" className="usermenu__details">
            <img src={blacklist} alt="view"></img>
            <p>Blacklist User</p>
          </Link>

          <Link to="/activate-user" className="usermenu__details">
            <img src={activate} alt="view"></img>
            <p>Activate User</p>
          </Link>
        </div>
      );
    };

    return (
      <>
        {data.map((data) => {
          return (
            <div key={data.id} className="content__details">
              <p className="status">Inactive</p>
              <button
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <img src={menu} alt="menu"></img>
              </button>
              <UserMenu />
            </div>
          );
        })}
      </>
    );
  };

  const Filter = () => {
    return (
      <form
        className={showFilter ? "headerfilter" : "headerfilter hidefilter"}
        onMouseLeave={() => {
          setShowFilter(false)
        }}
      >
        <div className="headerfilter__input">
          <p>Organization</p>
          <select placeholder="Select">
            <option>Select</option>
            <option>Organization</option>
            <option>Individual</option>
          </select>
        </div>

        <div className="headerfilter__input">
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
          ></input>
        </div>

        <div className="headerfilter__input">
          <p>Email</p>
          <input type="email" placeholder="Email"></input>
        </div>

        <div className="headerfilter__input">
          <p>Date</p>
          <input type="date" placeholder="Date"></input>
        </div>

        <div className="headerfilter__input">
          <p>Phone Number</p>
          <input type="tel" placeholder="Phone Number"></input>
        </div>

        <div className="headerfilter__input">
          <p>Status</p>
          <select>
            <option>Select</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Blacklisted</option>
          </select>
        </div>

        <div className="headerfilter__buttons">
          <button>Reset</button>
          <button>Filter</button>
        </div>
      </form>
    );
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage === 1) {
      setCurrentPage(itemsPerPage);
    }
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage === itemsPerPage) {
      setCurrentPage(firstPage);
    }
  };

  const itemsPerPage = 10;
  const firstPage = 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(user.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumber = pages.map((number) => {
    return (
      <li
        className={
          number === currentPage
            ? "pagination__number active"
            : "pagination__number"
        }
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </li>
    );
  });

  const fetchData = () => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="users">
      <h1>Users</h1>

      <div className="users__cards">
        <div className="card">
          <img src={users} alt="users"></img>
          <p>USERS</p>
          <h2>2,453</h2>
        </div>

        <div className="card">
          <img src={activeUsers} alt="active users"></img>
          <p>ACTIVE USERS</p>
          <h2>2,453</h2>
        </div>

        <div className="card">
          <img src={usersWithLoans} alt="users with loans"></img>
          <p>USERS WITH LOANS</p>
          <h2>22,453</h2>
        </div>

        <div className="card">
          <img src={usersWithSavings} alt="users with savings"></img>
          <p>USERS WITH SAVINGS</p>
          <h2>102,453</h2>
        </div>
      </div>

      <div className="users__board">
        <div className="users__board__content">
          <div className="content">
            <div className="content__head">
              ORGANIZATION
              <button
                onClick={() => {
                  setShowFilter(true);
                }}
              >
                <img className="filter" src={filter} alt="filter"></img>
              </button>
              <Filter />
            </div>
            {OrgName(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              USERNAME
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {UserName(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              EMAIL
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {Email(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              PHONE NUMBER
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {PhoneNumber(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              DATE JOINED
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {CreatedAt(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              STATUS
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {Status(currentItems)}
          </div>
        </div>
      </div>

      <div className="users__pagination">
        <div className="page-number">
          <p>Showing</p>
          <div className="current">
            <p>{currentPage}</p>
            <RiArrowRightSLine />
          </div>
          <p>
            out of <span className="p2">{itemsPerPage}</span>
          </p>
        </div>

        <ul className="pagination">
          <button className="arrow" onClick={handlePrevBtn}>
            <RiArrowRightSLine />
          </button>

          {pageNumber}

          <button className="arrow" onClick={handleNextBtn}>
            <RiArrowRightSLine />
          </button>
        </ul>
      </div>
    </section>
  );
};

export default User;
