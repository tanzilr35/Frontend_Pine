import React, { Component }  from 'react';
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-pengenalan">Taman Nasional Bromo Semeru Tengger.</h2>
          <h1 className="i-name">Gunung Bromo, Jawa Timur</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"></div>
              <div className="i-title-item">Informasi Tempat Wisata</div>
              <div className="i-title-item">Lokasi Gunung Bromo</div>
              <div className="i-title-item">Rute menuju Gunung Bromo</div>
              <div className="i-title-item">Aktifitas dan Biaya</div>
            </div>
          </div>
          <p className="i-desc">
          Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Gunung Bromo, Jawa Timur.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="../images/bromo.jpg" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
