import React, { Component } from "react";
import "./productm.css";

const Product = ({ img, link }) => {
  return (
    <div className="pm">
      <div className="pm-browser">
        <div className="pm-circle"></div>
        <div className="pm-circle"></div>
        <div className="pm-circle"></div>
      </div>
      <img src={img} alt="" className="pm-img" />
    </div>
  );
};

export default Product;
