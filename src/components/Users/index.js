import React, { useState, useEffect } from "react";
import "../Users/index.scss";
import users from "../../assets/users.svg";
import activeUsers from "../../assets/active-users.svg";
import usersWithLoans from "../../assets/users-with-loans.svg";
import usersWithSavings from "../../assets/users-with-savings.svg";
import filter from "../../assets/filter.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import menu from "../../assets/menu.svg";
import axios from "axios";

const orgName = (data) => {
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

const userName = (data) => {
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

const email = (data) => {
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

const phoneNumber = (data) => {
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

const createdAt = (data) => {
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

const status = (data) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id} className="content__details">
            <p className="status">Inactive</p>
            <img src={menu} alt="menu"></img>
          </div>
        );
      })}
    </>
  );
};

const User = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {orgName(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              USERNAME
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {userName(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              EMAIL
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {email(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              PHONE NUMBER
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {phoneNumber(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              DATE JOINED
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {createdAt(currentItems)}
          </div>

          <div className="content">
            <div className="content__head">
              STATUS
              <img className="filter" src={filter} alt="filter"></img>
            </div>
            {status(currentItems)}
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
