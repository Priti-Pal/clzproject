import React from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import hope from "../hope.webp";
// import axios from "axios";
import { Link } from "react-router-dom";
// import { useState } from "react";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="login">
        <div className="log-head">
          <h2>Hey Welcome Back Please Login Here!</h2>
        </div>
        <div className="con-container">
          <div className="con-content">
            <img src={hope} />
          </div>
          <form className="con-form1">
            <h2>Login Here!</h2>
            <div className="form-group">
              {/* <label for="email">Email address:</label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                autoComplete="off"
                placeholder=" Enter email address"
              />
            </div>
            <div className="form-group">
              {/* <label for="pwd">Password:</label> */}
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your Password"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <button className="log-btn">
                <Link
                  to={`/Info`}
                  className="link"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Login
                </Link>
              </button>
              <br />
              <button className="create-account">
                <Link to={`/Register`} className="link">
                  Don't have an account?
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
