import React from "react";
import { useContext } from "react";
import About from "../beachdetail/about/About";
import Intro from "../beachdetail/intro/Intro";
import ProductList from "../beachdetail/productList/ProductList";
import Footer from "../Footer";
import "../../App.css";

const BeachDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default BeachDetail;
