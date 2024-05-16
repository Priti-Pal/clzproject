import React from "react";
import "./Home.css";
import "./Footer";
import "./Header";
import Bcancerimg from "../Dr1.png";
import Header from "./Header";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1 className="heading">
          <span>W</span>elcome to Breast Cancer Prediction
        </h1>
        <p>
          This website helps predict the likelihood of breast cancer based on
          various factors.
        </p>
        <div className="features">
          <h2>Symptoms</h2>
          <ul>
            <li>
              Fatigue or extreme tiredness that doesn’t get better with rest.
            </li>
            <li>
              Weight loss or gain of 10 pounds or more for no known reason
            </li>
            <li>
              Eating problems such as not feeling hungry, trouble swallowing,
              belly pain, or nausea and vomiting
            </li>
            <li>Thickening or lump in the breast or other part of the body</li>
          </ul>
        </div>
      </div>
      <div className="right_section">
        <div className="right">
          <img src={Bcancerimg} className="Bcancer"></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
