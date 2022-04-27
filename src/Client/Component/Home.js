import React from "react";
import CategoryItem from "./Categories/CategoryItem";
import Footer from "./Footer/Footer";
import Newsletter from "./Newsletter/Newsletter";
import Product from "./ProductList.js/Product";
import Slide1 from "./Slider/Slide1";
import Slider from "./Slider/Slider";


const Home = () => {
  return (
    <div>
  <Slide1/>
  {/* <svg style={{marginTop:'-5%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9F9" fill-opacity="1" d="M0,160L720,160L1440,256L1440,0L720,0L0,0Z"></path></svg> */}

    <CategoryItem/>
    <Newsletter/>
    <Product/>
    {/* <Footer/> */}
    </div>
  );
};

export default Home;
