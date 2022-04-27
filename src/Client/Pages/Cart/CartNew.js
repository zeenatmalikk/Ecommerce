import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";

import { connect, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const KEY =
  "pk_test_51JmYLkSBnPjkDaqT5sdhumPnzSa73EcG1Gw217GK9OHqqvJ7fwuXsFjSm2NXLiBsMrBklfeAaqBj3i4cQDUq0MRV00zBDbiUcH";

const CartNew = () => {
  console.log("f");
  const [stripeToken, setstripeToken] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector((state) => state.shop.cart);
  console.log("CARTTTT", cart);
  const navigate = useNavigate();

  const ship = 100;
  const onToken = (token) => {
    setstripeToken(token);
  };
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
  useEffect(() => {
    console.log("CARTTTT", cart);

    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    
      <Grid container>
          <Grid item md={8} xs={12}/>
          <Grid item md={4} xs={12} style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <div>
          <span className="totalprice-cart">TOTAL: </span>
          {/* ({totalItems} items) */}
          <p className="totalprice">INR {totalPrice}</p>
          </div>
          <StripeCheckout
                name="Sana By Gypsy rose"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is ${totalPrice}`}
                amount={totalPrice * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="checkout">CHECKOUT NOW</button>
              </StripeCheckout>

          </Grid>
      </Grid>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.shop.cart,
//   };
// };

export default CartNew;
