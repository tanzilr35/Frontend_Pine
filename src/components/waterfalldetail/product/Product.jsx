import React, { Component } from "react";
import "./productw.css";

const Product = ({ img, link }) => {
  return (
    <div className="pw">
      <div className="pw-browser">
        <div className="pw-circle"></div>
        <div className="pw-circle"></div>
        <div className="pw-circle"></div>
      </div>
      <img src={img} alt="" className="pw-img" />
    </div>
  );
};

export default Product;
