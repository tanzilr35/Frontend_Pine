import React from "react";
import { useContext } from "react";
import About from "../parkforestdetail/about/About";
import Contact from "../parkforestdetail/contact/Contact";
import Intro from "../parkforestdetail/intro/Intro";
import ProductList from "../parkforestdetail/productList/ProductList";
import { ThemeContext } from "../parkforestdetail/context";
import "../../App.css";

const ParkForestDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default ParkForestDetail;
