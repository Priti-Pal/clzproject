import React from "react";
import "./Register.css";
import hopeimg from "../hope.webp";
import Header from "./Header";
import Footer from "./Footer";
import hope from "../hope.webp";
// import axios from "axios";
import { Link } from "react-router-dom";
// import { useState } from "react";
const Register = () => {
  return (
    <div>
      <Header />
      <div className="login">
        <div className="log-head">
          <h2>Feel free to connect with us</h2>
        </div>
        <div className="con-container">
          <div className="con-content">
            <img src={hope} />
          </div>
          <form className="con-form1">
            <h2>Register Here!</h2>
            <div className="form-group">
              {/* <label for="email">First Name:</label> */}

              <input
                type="text"
                name="first_name"
                class="form-control"
                placeholder="Enter First Name"
                id="f_name"
              />
            </div>
            <div className="form-group">
              {/* <label for="pwd">Last Name:</label> */}
              <input
                type="text"
                name="last_name"
                class="form-control"
                placeholder="Enter Last Name"
                id="l_name"
              />
            </div>
            <div className="form-group">
              {/* <label for="email">Email:</label> */}
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Enter Email"
                id="email"
              />
            </div>
            <div className="form-group">
              {/* <label for="email">Password:</label> */}
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Enter Password"
                id="email"
              />
            </div>
            <div className="form-group">
              <button className="log-btn">Register</button>
              <br />
              <button className="create-account">
                <Link to={`/Login`} className="link">
                  Already have an account?
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

export default Register;
