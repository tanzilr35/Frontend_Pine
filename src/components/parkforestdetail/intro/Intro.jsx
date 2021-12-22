import React, { Component } from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="i-intro">Daerah Istimewa Yogyakarta</h2>
          <h1 className="i-name">Hutan Pinus Mangunan, Bantul</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"></div>
              <div className="i-title-item">Informasi Tempat Wisata</div>
              <div className="i-title-item">Lokasi Hutan Pinus</div>
              <div className="i-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="../images/mangunan.jpg" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
