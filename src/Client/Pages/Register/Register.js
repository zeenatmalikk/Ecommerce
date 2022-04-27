import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [data, setdata] = useState("");
  const submitUser = (e) => {
    // if (password.length > 5) {
    //   // alert("successfully registered");
    //   alert("Password should be 5-7 characters");
    // } else if(password !== confirmpassword) {
    //   // alert("Password should be 5-7 characters");
    //   alert("Password should match confirm password field");

    // }
    // else{
    //   alert("successfully registered");

    // }

    // if (password !== confirmpassword) {
    //   alert("Password should match confirm password field");
    // } else {
    //   alert("successfully registered");
    // }
    e.preventDefault();

    axios({
      method: "post",
      url: `http://localhost:8000/api/auth/register`,
      data: { username: username, email: email, password: password },
    })
      .then((res) => {
        console.log(res);
        setdata(res.data);
        res.data && window.location.replace("/login");
      })

      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <Grid container>
        <Grid item md={12} xs={12} className="register">
          {/* <h2 className='title-r'>Hey!</h2> */}
          <div className="reg-card">
            <h3 className="sub-r">Welcome!</h3>
            <p className="desc-r">
              Your every purchase will be delivered with pleasure!
            </p>

            <form name="myform" className="myform">
              <input
                className="input-reg"
                variant="outlined"
                fullWidth
                onChange={(e) => setusername(e.target.value)}
                placeholder="enter username"
              />
              <input
                className="input-reg"
                variant="outlined"
                fullWidth
                type='email'
                placeholder="enter email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="input-reg"
                variant="outlined"
                fullWidth
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="enter password"
                type="password"
              />
              <span id="a"></span>
              {/* <p className="pass-f">Forgot Password?</p> */}
              <input
                className="input-reg"
                variant="outlined"
                fullWidth
                placeholder="enter confirm password"
                type="password"
              />
              <Button variant="contained" color="primary" onClick={submitUser}>
                Create Account
              </Button>
            </form>
            <p className="old-user">
              Already a user?<Link to="/login">Login</Link>{" "}
            </p>
          </div>
        </Grid>
        {/* <Grid item md={5} xs={12} className="bg-right">
          <div className="bgr">
              <img className="bgr-img" src="https://cdn.pixabay.com/photo/2012/04/12/12/41/basket-29863_960_720.png" alt=""/>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Register;
