import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../Redux/ShoppingActionsToolkit";
import "./Products.css";
//this is design of product card
const Products = ({ item }) => {
  const dispatch = useDispatch();
  const handleCart = (id) => {
    console.log("clcked");
    //update Cart
    // dispatch(addProduct({ ...product, quantity }));
    dispatch(addToCart(id))
  };
  console.log(item);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div className="container"> */}
      <div className="card-prod">
          <img src={item.img} alt="" className="p-img" />
          <div className="icon-cont">
        <Link to={`/product/${item._id}`} style={{color:'initial'}}>
            <i class="fas fa-search"></i>
        </Link>
            <i style={{cursor:"pointer"}} onClick={()=>handleCart(item)} class="fas fa-shopping-cart"></i>
            {/* <i class="far fa-heart"></i> */}
          </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Products;
