import React, { useState } from "react";
import "./Cartnew.css";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../Redux/ShoppingActionsToolkit";
import { connect, useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const cart = useSelector((state) => state.shop.cart);
  console.log("CARTTTT", cart);
  //   console.log("item", item);
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  const removeCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <Grid container className="cart">
        <Grid item md={2} xs={6} className="cart-img-container">
          <img className="cart-img" src={item.img} alt="" />
        </Grid>
        <Grid item md={2} xs={6} className="cart-dets-container">
          <p className="cart-prod-title">{item.title}</p>
        </Grid>
        <Grid item md={2} xs={4} className="cart-dets-container">
          <p className="cart-prod-title">{item.size}</p>
        </Grid>
        <Grid item md={2} xs={4} className="cart-dets-container">
          <p className="cart-prod-title">{item.color}</p>
        </Grid>
        <Grid item md={1} xs={4} className="cart-dets-container">
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            className="input-quantity"
            value={input}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item md={2} xs={12} className="cart-img-container">
          <p className="cart-prod-price"> INR {item.price * item.qty}</p>
        </Grid>
        <Grid item md={1} xs={12} className="cart-img-container">
          <button className="remove-cart" onClick={() => removeCart(item._id)}>
            <CloseIcon style={{ color: "red" }} />
          </button>
        </Grid>
      </Grid>

      {/* <hr className="bottom"></hr> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
