import React, { Component } from "react";
import "./intror.css";

const Intro = () => {
  return (
    <div className="ir">
      <div className="ir-left">
        <div className="ir-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="ir-intro">Pringkuku, Kab Pacitan, Jawa Timur</h2>
          <h1 className="ir-name">Sungai Maron, Pacitan</h1>
          <div className="ir-title">
            <div className="ir-title-wrapper">
              <div className="ir-title-item"></div>
              <div className="ir-title-item">Informasi Tempat Wisata</div>
              <div className="ir-title-item">Lokasi Sungai Maron</div>
              <div className="ir-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ir-right">
        <div className="ir-bg"></div>
        <img src="../images/maron5.jpg" alt="" className="ir-img" />
      </div>
    </div>
  );
};

export default Intro;
