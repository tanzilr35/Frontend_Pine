import React, { Component } from "react";
import "./productListl.css";
import Product from "../product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pll">
      <div className="pll-texts">
        <h1 className="pll-title">
          {" "}
          <br></br> <br></br>Some Photos From Toba Lake
        </h1>
        <p className="pll-desc">Toba Lake is a stunning place that your journey has been waiting for. Beautiful scenery & a whole lot more awaits inside.</p>
      </div>
      <div className="pll-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
