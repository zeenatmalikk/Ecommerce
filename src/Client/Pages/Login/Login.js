import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/ApiCalls";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
 console.log("fetchh",isFetching)
 console.log("error",error)
  const handleLogin = (e) => {
    window.location.replace('/')

    e.preventDefault();
    login(dispatch, { username, password });
    console.log("loginn");
  };
  
  return (
    <div>
      <Grid container>
        <Grid item md={12} xs={12} className="login">
          {/* <h2 className='title-r'>Hey!</h2> */}
          <div className="log-card">
            <h3 className="sub-l">Welcome back!</h3>

            <input
              className="input-reg"
              variant="outlined"
              fullWidth
              placeholder="enter username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              className="input-reg"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="enter password"
            />
            {/* <p className="pass-f">Forgot Password?</p> */}

            <button className="btn-2" color="primary" disabled={isFetching} onClick={handleLogin}>
              Login
            </button>
            {error ? <span style={{color:"red"}}>Something went wrong</span>:""}
            <p className="old-user">
              New user?<Link to="/register">Register</Link>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
