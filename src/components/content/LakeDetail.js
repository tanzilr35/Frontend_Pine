import React from "react";
import { useContext } from "react";
import About from "../lakedetail/about/About";
import Intro from "../lakedetail/intro/Intro";
import Footer from "../Footer";
import ProductList from "../lakedetail/productList/ProductList";

import "../../App.css";

const LakeDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default LakeDetail;
