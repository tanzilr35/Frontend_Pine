import React, { Component } from "react";
import "./introl.css";

const Intro = () => {
  return (
    <div className="il">
      <div className="il-left">
        <div className="il-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="il-intro">Bukit Barisan, Sumatera Utara</h2>
          <h1 className="il-name">Danau Toba, Samosir</h1>
          <div className="il-title">
            <div className="il-title-wrapper">
              <div className="il-title-item"></div>
              <div className="il-title-item">Informasi Tempat Wisata</div>
              <div className="il-title-item">Lokasi Danau Toba</div>
              <div className="il-title-item">Rute menuju Danau Toba</div>
              <div className="il-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="il-right">
        <div className="il-bg"></div>
        <img src="../images/toba3.jpg" alt="" className="il-img" />
      </div>
    </div>
  );
};

export default Intro;
