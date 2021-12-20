import React from "react";
import { useContext } from "react";
import About from "../mountaindetail/about/About";
import Contact from "../mountaindetail/contact/Contact";
import Intro from "../mountaindetail/intro/Intro";
import ProductList from "../mountaindetail/productList/ProductList";
import { ThemeContext } from "../mountaindetail/context";
import "../../App.css";

const MountainDetail = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default MountainDetail;
