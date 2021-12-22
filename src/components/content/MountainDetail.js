import React from "react";
import { useContext } from "react";
import About from "../mountaindetail/about/About";
import Intro from "../mountaindetail/intro/Intro";
import ProductList from "../mountaindetail/productList/ProductList";
import Footer from "../Footer";
import "../../App.css";

const MountainDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Footer />
    </div>
  );
};

export default MountainDetail;
