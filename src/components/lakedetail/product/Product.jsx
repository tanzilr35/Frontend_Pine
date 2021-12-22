import React, { Component } from "react";
import "./productl.css";

const Product = ({ img, link }) => {
  return (
    <div className="x">
      <div className="x-browser">
        <div className="x-circle"></div>
        <div className="x-circle"></div>
        <div className="x-circle"></div>
      </div>
      <img src={img} alt="" className="x-img" />
    </div>
  );
};

export default Product;
