import React from "react";
import logoimg from "../img.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header">
        <header className="app-header">
          <img src={logoimg} className="logo" />
          <h3>
            <span>B</span>reast Cancer Prediction
          </h3>
          <button className="login-btn">
            <Link
              to={`/Login`}
              style={{ color: "black", textDecoration: "none" }}
            >
              Login
            </Link>
          </button>

          {/* <button className="logout-btn">Logout</button> */}
        </header>
      </div>
    </div>
  );
};

export default Header;
