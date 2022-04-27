import { Container, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../RequestMethod";
import AddIcon from "@mui/icons-material/Add";
import ArrowRight from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Cart.css";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addProduct, decreaseCart } from "../../../Redux/CartRedux";
import {
  removeFromCart,
  adjustItemQty,
} from "../../../Redux/ShoppingActionsToolkit";

import * as productaction from "../../../Redux/ShoppingActionsToolkit";

const KEY =
  "pk_test_51JmYLkSBnPjkDaqT5sdhumPnzSa73EcG1Gw217GK9OHqqvJ7fwuXsFjSm2NXLiBsMrBklfeAaqBj3i4cQDUq0MRV00zBDbiUcH";

const Cart = () => {
  const dispatch = useDispatch();

  const [stripeToken, setstripeToken] = useState(null);
  const [quantity, setquantity] = useState(1);

  const navigate = useNavigate();
  const ship = 100;
  const onToken = (token) => {
    setstripeToken(token);
  };
  // console.log(stripeToken);

  const cart = useSelector((state) => state.shop.cart);
  console.log("carttt",cart)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [input, setInput] = useState(cart.qty);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total,
          }
        );
        console.log(res.data);
        navigate("/success", { data: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
    console.log("clickeed", decreaseCart);
  };
  const handleIncrease = (product) => {
    console.log("prddd", product);
    dispatch(addProduct(product));
  };

  const handlequantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setquantity(quantity - 1);
    } else {
      setquantity(quantity + 1);
    }
  };
  const onchangehandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(cart.id, e.target.value));
  };
  return (
    <div>
      <Container>
        <h1 className="cart-title">CART</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <img src="https://static8.depositphotos.com/1000422/828/v/450/depositphotos_8287880-stock-illustration-shopping-cart.jpg" />
            <p>Your cart is empty!</p>
            <Link to="/" className="link-shop">
              Go to Shop
              <ArrowRight />
            </Link>
          </div>
        ) : (
          cart.map((product) => (
            // console.log("prrrr", product);
            // <Link to={`product/${product.id}`}>
              <Grid  container key={product.id} className="card-cart">
                <Grid
                  item
                  md={2}
                  xs={12}
                  className="cart-img-div"
                  // style={{ backgroundColor: "red" }}
                >
                  <img src={product.img} className="cart-img" alt="" />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                  className="cart-details"
                  // style={{ backgroundColor: "yellow" }}
                >
                  <div className="cart-dets-title">
                    <h2 className="cart-item-title">{product.title}</h2>
                    <p>{product.color}</p>
                  </div>
                </Grid>
                <Grid item md={2} xs={12} className="cart-details-quan">
                  <div className="cart-dets">
                    <RemoveIcon
                      style={{
                        backgroundColor: "#DA251C",
                        padding: "3px",
                        margin: "0 3px",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                      // onClick={() => handleDecreaseCart(product)}
                      onClick={() => handlequantity("dec")}
                    />

                    {/* <h2 className="cart-item-quantity" onChange={onchangehandler} defaultValue={input}  >{product.qty}</h2> */}
                    <input
                      min="1"
                      type="number"
                      id="qty"
                      name="qty"
                      value={product.qty}
                      className="quantity-sel"
                      onChange={onchangehandler}
                    />
                    <AddIcon
                      style={{
                        backgroundColor: "#DA251C",
                        padding: "3px",
                        margin: "0 3px",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                      onClick={() => handlequantity("inc")}
                      // onClick={() =>
                      //   handleIncrease(productaction.addToCart(product))
                      // }
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                  className="cart-details-price"
                  // style={{ backgroundColor: "green" }}
                >
                  <p className="cart-item-size">{product.size} </p>

                  <p className="cart-item-price">INR {product.price} </p>

                  <div className="cart-item-price">
                    <Button onClick={() => handleDelete(product._id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </Grid>
              </Grid>
            // </Link>
          ))
        )}
        {cart.length === 0 ? (
          ""
        ) : (
          <Grid container>
            <Grid item md={8} xs={12} />

            <Grid item md={4} xs={12}>
              <div className="subtotal">
                <div className="subt-cart">
                  <p>Total Items:</p>
                  <p>{totalItems} </p>
                </div>
                <div className="subt-cart">
                  <p>Shipping</p>
                  <p>INR {ship}</p>
                </div>
              </div>
              <div className="subt-cart">
                <p>Total</p>
                <p>INR {totalPrice ? totalPrice : 0}</p>
              </div>
              <StripeCheckout
                name="Lama Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="checkout">CHECKOUT NOW</button>
              </StripeCheckout>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Cart;
