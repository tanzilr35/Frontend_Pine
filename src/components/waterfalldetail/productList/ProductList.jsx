import React, { Component } from "react";
import "./productListw.css";
import Product from "../product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="xw">
      <div className="xw-texts">
        <h1 className="xw-title">
          {" "}
          <br></br> <br></br>Some Photos From Air Terjun Kanto Lampo, Bali
        </h1>
        <p className="xw-desc">Kanto Lampo is a stunning xwace that your journey has been waiting for. Beautiful scenery & a whole lot more awaits inside.</p>
      </div>
      <div className="xw-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
