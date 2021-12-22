import React, { Component } from "react";
import "./productListb.css";
import Product from "../product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          {" "}
          <br></br> <br></br>Some Photos From Pink Beach
        </h1>
        <p className="pl-desc">Labuan Bajo is a stunning place that your journey has been waiting for. Beautiful scenery & a whole lot more awaits inside.</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
