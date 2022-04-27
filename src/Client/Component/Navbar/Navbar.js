import React, { useState,useEffect } from "react";
import "./Navbar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  console.log("userrrnav", user);
  const [cartCount, setCartCount] = useState(0);
  const quantity = useSelector((state) => state.cart.quantity);
  const cart=useSelector((state)=>state.shop.cart)
  // console.log("CART", quantity);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const logoutHandler = () => {
    // console.log("logout");
    window.localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            alt="logo"
            src="https://d1qek42f5a2sdm.cloudfront.net/logos/64498/logo_1599105184.JPEG"
            className="logo"
          ></img>
        </Link>
        <div className="btn-nav">
          {user?.accessToken ? (
            <button
              onClick={logoutHandler}
              variant="outlined"
              className="btn-signup"
            >
              <LogoutIcon />
            </button>
          ) : (
            <Link to="/register">
              <button variant="outlined" className="btn-signup">
                <PersonOutlineIcon />
              </button>
            </Link>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "initial" }}>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon style={{ color: "#fff" }} />
            </Badge>
          </Link>
        </div>
      </nav>
    </div>
  );
  {
    /* <div className='mobile-menu-icon' onClick={()=>setisMobile(!isMobile)}>
  {isMobile ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}

  </div> */
  }
};

export default Navbar;
