import React, { Component } from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          {" "}
          <br></br> <br></br>
          <br></br>
          <br></br>Some Photos From Hutan Pinus Mangunan
        </h1>
        <p className="pl-desc">mangunan pine forest is a stunning place that your journey has been waiting for. Beautiful scenery & a whole lot more awaits inside.</p>
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
