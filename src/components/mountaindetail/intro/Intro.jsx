import React, { Component } from "react";
import "./introm.css";

const Intro = () => {
  return (
    <div className="im">
      <div className="im-left">
        <div className="im-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="im-intro">Taman Nasional Bromo Semeru Tengger.</h2>
          <h1 className="im-name">Gunung Bromo, Jawa Timur</h1>
          <div className="im-title">
            <div className="im-title-wrapper">
              <div className="im-title-item"></div>
              <div className="im-title-item">Informasi Tempat Wisata</div>
              <div className="im-title-item">Lokasi Gunung Bromo</div>
              <div className="im-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="im-right">
        <div className="im-bg"></div>
        <img src="../images/bromo.jpg" alt="" className="im-img" />
      </div>
    </div>
  );
};

export default Intro;
