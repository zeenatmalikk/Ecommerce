import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
const Categories = ({ item }) => {
  console.log('itemmmmmcat',item);
  return (
    <div className="center-cat">
     <Link to={`products/${item.cat}`}>
     <div className={item.cName}>
        <h2 className="ribbon">{item.title}</h2>
        <i class="fas fa-arrow-right"></i>
      </div>
     </Link>
      {/* <div class="container">
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img alt="" class="content-image" src={item.img} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">{item.title}</h3>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
