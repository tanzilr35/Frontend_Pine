import React from "react";
import About from "../riversreamdetail/about/About";
import Contact from "../riversreamdetail/contact/Contact";
import Intro from "../riversreamdetail/intro/Intro";
import ProductList from "../riversreamdetail/productList/ProductList";
import "../../App.css";

const RiverStreamDetail = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default RiverStreamDetail;
