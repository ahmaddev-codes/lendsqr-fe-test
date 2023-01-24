import { React, useState, useEffect } from "react";
import "../UserDetailsPage/index.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import avatar from "../../assets/userdetails.svg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";

const UserDetailsPage = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="userdetails">
        <Link to="/users">
          <BsArrowLeft />
          Back to Users
        </Link>

        <section className="userdetails__subheader">
          <h1>User Details</h1>

          <div className="buttons">
            <button>BLACKLIST USER</button>
            <button>ACTIVATE USER</button>
          </div>
        </section>

        <section className="userdetails__header">
          <div className="userdetails__header__details">
            <img src={avatar} alt="avatar"></img>

            <div className="text">
              <h4>{data.profile.firstname}</h4>
              <p>gh47gy1hjg0</p>
            </div>

            <div className="text">
              <h4>User's Tier</h4>
              <div className="rank">
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>

            <div className="text">
              <h4>N400,000.00</h4>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>

          <div className="userdetails__header__link">
            <Link to="general-details" className="active">
              General Details
            </Link>
            <Link to="documents">Documents</Link>
            <Link to="bank-details">Bank Details</Link>
            <Link to="loans">Loans</Link>
            <Link to="savings">Savings</Link>
            <Link to="app-and-system">App and System</Link>
          </div>
        </section>

        <div className="userdetails__content">
          <div className="userdetails__content__heading">
            <h5>Personal Information</h5>

            <div className="texts first">
              <div className="texts__text">
                <p>FULL NAME</p>
                <p>Grace Effion</p>
              </div>

              <div className="texts__text">
                <p>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>

              <div className="texts__text">
                <p>EMAIL ADDRESS</p>
                <p>grace@gmail.com</p>
              </div>

              <div className="texts__text">
                <p>BVN</p>
                <p>07060780922</p>
              </div>

              <div className="texts__text">
                <p>GENDER</p>
                <p>Female</p>
              </div>

              <div className="texts__text">
                <p>MARITAL STATUS</p>
                <p>Single</p>
              </div>

              <div className="texts__text">
                <p>CHILDREN</p>
                <p>None</p>
              </div>

              <div className="texts__text">
                <p>TYPE OF RESIDENCE</p>
                <p>Parent's Aprtment</p>
              </div>
            </div>
          </div>

          <div className="userdetails__content__heading">
            <h5>Education and Employment</h5>

            <div className="texts">
              <div className="texts__text">
                <p>LEVEL OF EDUCATION</p>
                <p>B.Sc</p>
              </div>

              <div className="texts__text">
                <p>EMPLYMENT STATUS</p>
                <p>Employed</p>
              </div>

              <div className="texts__text">
                <p>SECTOR OF EMPLOYMENT</p>
                <p>FinTech</p>
              </div>

              <div className="texts__text">
                <p>DURATION OF EMPLOYMENT</p>
                <p>2 years</p>
              </div>

              <div className="texts__text">
                <p>OFFICE EMAIL</p>
                <p>grace@lendsqr.com</p>
              </div>

              <div className="texts__text">
                <p>MONTHLY INCOME</p>
                <p>N200,000.00 - N400,00.00</p>
              </div>

              <div className="texts__text">
                <p>LOAN REPAYMENT</p>
                <p>N40,000</p>
              </div>
            </div>
          </div>

          <div className="userdetails__content__heading">
            <h5>Socials</h5>

            <div className="texts">
              <div className="texts__text">
                <p>TWITTER</p>
                <p>@grace_effion</p>
              </div>

              <div className="texts__text">
                <p>FACEBOOK</p>
                <p>Grace Effion</p>
              </div>

              <div className="texts__text">
                <p>INSTAGRAM</p>
                <p>@grace_effion</p>
              </div>
            </div>
          </div>

          <div className="userdetails__content__heading">
            <h5>Guarantor</h5>

            <div className="texts">
              <div className="texts__text">
                <p>FULL NAME</p>
                <p>Debby Ogana</p>
              </div>

              <div className="texts__text">
                <p>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>

              <div className="texts__text">
                <p>EMAIL ADDRESS</p>
                <p>debby@gmail.com</p>
              </div>

              <div className="texts__text">
                <p>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>

          <div className="userdetails__content__heading">
            <div className="texts">
              <div className="texts__text">
                <p>FULL NAME</p>
                <p>Debby Ogana</p>
              </div>

              <div className="texts__text">
                <p>EMAIL</p>
                <p>debby@gmail.com</p>
              </div>

              <div className="texts__text">
                <p>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetailsPage;
