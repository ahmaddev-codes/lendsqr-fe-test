import React from "react";
import "../SideBar/index.scss";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import briefcase from "../../assets/briefcase.svg";
import dashboard from "../../assets/home.svg";
import users from "../../assets/user-friends.svg";
import guarantors from "../../assets/users 1.svg";
import loans from "../../assets/sack.svg";
import decisionModels from "../../assets/handshake-regular.svg";
import savings from "../../assets/piggy-bank.svg";
import loanRequests from "../../assets/loan.svg";
import whitelist from "../../assets/user-check.svg";
import karma from "../../assets/user-times.svg";
import savingsProducts from "../../assets/organization.svg";
import feesAndCharges from "../../assets/vector.svg";
import transfer from "../../assets/transfer.svg";
import galaxy from "../../assets/galaxy.svg";
import serviceAccount from "../../assets/user-cog.svg";
import scroll from "../../assets/scroll.svg";
import chartBar from "../../assets/chart-bar.svg";
import preferences from "../../assets/sliders.svg";
import feesAndPricing from "../../assets/badge-percent.svg";
import auditLogs from "../../assets/clipboard-list.svg";
import systemsMessages from "../../assets/tyre.svg";
import logOut from "../../assets/sign-out.svg";

const SideBar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__header">
          <img src={briefcase} alt="briefcase"></img>
          <p>Switch Organization</p>
          <MdArrowDropDown />
        </div>

        <Link to="/dashboard" className="sidebar__title">
          <img src={dashboard} alt="dashboard"></img>
          <p>Dashboard</p>
        </Link>

        <div className="sidebar__content">
          <p className="list-header">CUSTOMERS</p>
          <Link to="/users" id="active">
            <img src={users} alt="users"></img>
            <p>Users</p>
          </Link>
          <Link to="/guarantors">
            <img src={guarantors} alt="guarantors"></img>
            <p>Guarantors</p>
          </Link>
          <Link to="/loans">
            <img src={loans} alt="loans"></img>
            <p>Loans</p>
          </Link>
          <Link to="/decision-model">
            <img src={decisionModels} alt="decision models"></img>
            <p>Decision Models</p>
          </Link>
          <Link to="/savings">
            <img src={savings} alt="savings"></img>
            <p>Savings</p>
          </Link>
          <Link to="/loan-request">
            <img src={loanRequests} alt="loan requests"></img>
            <p>Loan Requests</p>
          </Link>
          <Link to="/whitelist">
            <img src={whitelist} alt="whitelist"></img>
            <p>Whitelist</p>
          </Link>
          <Link to="/karma">
            <img src={karma} alt="karma"></img>
            <p>Karma</p>
          </Link>
        </div>

        <div className="sidebar__content">
          <p className="list-header">BUSINESSES</p>
          <Link to="/organization">
            <img src={briefcase} alt="organization"></img>
            <p>Organization</p>
          </Link>
          <Link to="/loan-products">
            <img src={loanRequests} alt="loan products"></img>
            <p>Loan Products</p>
          </Link>
          <Link to="/savings-products">
            <img src={savingsProducts} alt="savings product"></img>
            <p>Savings Products</p>
          </Link>
          <Link to="/fees-and-charges">
            <img src={feesAndCharges} alt="fees and charges"></img>
            <p>Fees and Charges</p>
          </Link>
          <Link to="/transactions">
            <img src={transfer} alt="transactions"></img>
            <p>Transactions</p>
          </Link>
          <Link to="/services">
            <img src={galaxy} alt="services"></img>
            <p>Services</p>
          </Link>
          <Link to="/service-account">
            <img src={serviceAccount} alt="service accout"></img>
            <p>Service Account</p>
          </Link>
          <Link to="/settlements">
            <img src={scroll} alt="settlements"></img>
            <p>Settlements</p>
          </Link>
          <Link to="/reports">
            <img src={chartBar} alt="reports"></img>
            <p>Reports</p>
          </Link>
        </div>

        <div className="sidebar__content" id="space">
          <p className="list-header">SETTINGS</p>
          <Link to="/preferences">
            <img src={preferences} alt="preferences"></img>
            <p>Preferences</p>
          </Link>
          <Link to="/fees-and-pricing">
            <img src={feesAndPricing} alt="fees and pricing"></img>
            <p>Fees and Pricing</p>
          </Link>
          <Link to="/audit-logs">
            <img src={auditLogs} alt="audit logs"></img>
            <p>Audit Logs</p>
          </Link>
          <Link to="/systems-messages">
            <img src={systemsMessages} alt="systems messages"></img>
            <p>Systems Messages</p>
          </Link>
        </div>

        <Link to="/log-out" className="sidebar__footer">
          <img src={logOut} alt="log out"></img>
          <p>Log Out</p>
        </Link>

        <p className="version">v1.2.0</p>
      </aside>
    </>
  );
};

export default SideBar;
