import React, { Component } from "react";
import "./productListm.css";
import Product from "../product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="py">
      <div className="py-texts">
        <h1 className="py-title">
          {" "}
          <br></br> <br></br>Some Photos From Bromo Mountain
        </h1>
        <p className="py-desc">Bromo Mountain is a stunning place that your journey has been waiting for. Beautiful scenery & a whole lot more awaits inside.</p>
      </div>
      <div className="py-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
