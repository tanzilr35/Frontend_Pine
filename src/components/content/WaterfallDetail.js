import React from "react";
import { useContext } from "react";
import About from "../waterfalldetail/about/About";
import Intro from "../waterfalldetail/intro/Intro";
import Footer from "../Footer";
import ProductList from "../waterfalldetail/productList/ProductList";

import "../../App.css";

const WaterfallDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default WaterfallDetail;
