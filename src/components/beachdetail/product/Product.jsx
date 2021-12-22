import React, { Component } from "react";
import "./productb.css";

const Product = ({ img, link }) => {
  return (
    <div className="pb">
      <div className="pb-browser">
        <div className="pb-circle"></div>
        <div className="pb-circle"></div>
        <div className="pb-circle"></div>
      </div>
      <img src={img} alt="" className="pb-img" />
    </div>
  );
};

export default Product;
