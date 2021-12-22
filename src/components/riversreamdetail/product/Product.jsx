import React, { Component } from "react";
import "./productr.css";

const Product = ({ img, link }) => {
  return (
    <div className="pr">
      <div className="pr-browser">
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
      </div>
      <img src={img} alt="" className="pr-img" />
    </div>
  );
};

export default Product;
