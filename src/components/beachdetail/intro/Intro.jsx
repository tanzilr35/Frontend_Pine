import React, { Component } from "react";
import "./introb.css";

const Intro = () => {
  return (
    <div className="ib">
      <div className="ib-left">
        <div className="ib-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="ib-intro">Flores Barat, Nusa Tenggara Timur</h2>
          <h1 className="ib-name">Pink Beach, Labuan Bajo</h1>
          <div className="ib-title">
            <div className="ib-title-wrapper">
              <div className="ib-title-item">Informasi Tempat Wisata</div>
              <br />
              <div className="ib-title-item">Lokasi Labuan Bajo</div>
              <br />
              <div className="ib-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ib-right">
        <div className="ib-bg"></div>
        <img src="../images/labuan6.jpg" alt="" className="ib-img" />
      </div>
    </div>
  );
};

export default Intro;
