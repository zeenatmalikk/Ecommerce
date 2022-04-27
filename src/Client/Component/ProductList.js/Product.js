import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { popularProducts } from "../Data";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/ShoppingActionsToolkit";
//this is where mapping is done of product card
const Product = ({ cat, filters, sort }) => {
  const [products, setproducts] = useState([]);
  const [filteredproducts, setfilteredproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/product?category=${cat}`
            : "http://localhost:8000/api/product"
        );
        setproducts(res.data);
        console.log("dataaaaa", res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    //if there is a category setfiltered products by using filter
    cat &&
      setfilteredproducts(
        //filter products by taking each item and that item has filter eg we will take each key and value key:color,size; value:yellow,blue,XS and match with product item
        products.filter((item) =>
          //filtering every item by taking key and value
          Object.entries(filters).every(([key, value]) =>
            //if item key includes value then display
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]); //this will filter products
  console.log("filter");

  useEffect(() => {
    if (sort === "newest") {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredproducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
 const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "5%" }}>
      <button onClick={()=>dispatch(addProduct(products))}></button>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {products.map((item, key) => (
          <Grid item md={3} xs={12}>
            <Products item={item} key={key} />
          </Grid>
        ))} */}
        {cat
          ? filteredproducts.map((item) => (
              <Grid item md={3} xs={12}>
                <Products item={item} key={item.id} />
              </Grid>
            ))
          : products
              .slice(0, 8)
              .map((item) => <Products item={item} key={item.id} />)}
      </Grid>
    </div>
  );
};

export default Product;
