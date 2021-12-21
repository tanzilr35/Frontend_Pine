import React from "react";
import About from "../riversreamdetail/about/About";
import Intro from "../riversreamdetail/intro/Intro";
import ProductList from "../riversreamdetail/productList/ProductList";
import "../../App.css";

const RiverStreamDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default RiverStreamDetail;
