import React from "react";
import About from "../riversreamdetail/about/About";
import Intro from "../riversreamdetail/intro/Intro";
import ProductList from "../riversreamdetail/productList/ProductList";
import Footer from "../Footer"
import "../../App.css";

const RiverStreamDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default RiverStreamDetail;
