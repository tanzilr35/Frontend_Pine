import React from "react";
import { useContext } from "react";
import About from "../parkforestdetail/about/About";
import Intro from "../parkforestdetail/intro/Intro";
import ProductList from "../parkforestdetail/productList/ProductList";
import Footer from "../Footer";
import "../../App.css";

const ParkForestDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ParkForestDetail;
