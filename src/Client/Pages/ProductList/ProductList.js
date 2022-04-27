import React, { useState } from "react";
import Product from "../../Component/ProductList.js/Product";
import Products from "../../Component/ProductList.js/Products";
import { useLocation } from "react-router";
import "./ProductList.css";
const ProductList = () => {
  const location = useLocation();
  const cat = ("location:", location.pathname.split("/")[2]);
  const [filter, setfilter] = useState({});
  const [sort, setsort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  console.log("filter", filter);
  return (
    <div>
      <h2 className="list-title">{cat}</h2>
      <div className="filter-list">
        <select name="color" onChange={handleFilters}>
          <option disabled>Color</option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Green</option>
        </select>
        <select name="size" onChange={handleFilters}>
          <option disabled>Size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <div>
          <select onChange={(e) => setsort(e.target.value)}>
            <option>Sort</option>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="dsc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Product cat={cat} filters={filter} sort={sort} />
    </div>
  );
};

export default ProductList;
