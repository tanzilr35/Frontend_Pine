import React, { Component } from "react";
import "./introw.css";

const Intro = () => {
  return (
    <div className="iw">
      <div className="iw-left">
        <div className="iw-left-wrapper">
          <br />
          <br />
          <br />
          <h2 className="iw-intro">Flores Barat, Nusa Tenggara Timur</h2>
          <h1 className="iw-name">Air Terjun Kanto Lampo, Bali</h1>
          <div className="iw-title">
            <div className="iw-title-wrapper">
              <div className="iw-title-item">Informasi Tempat Wisata</div>
              <div className="iw-title-item">Lokasi Kanto Lampo</div>
              <div className="iw-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="iw-right">
        <div className="iw-bg"></div>
        <img src="../images/kanto1.jpg" alt="" className="iw-img" />
      </div>
    </div>
  );
};

export default Intro;
