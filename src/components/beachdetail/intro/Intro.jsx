import React, { Component } from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Flores Barat, Nusa Tenggara Timur</h2>
          <h1 className="i-name">Pink Beach, Labuan Bajo</h1>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="../images/labuan6.jpg" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
