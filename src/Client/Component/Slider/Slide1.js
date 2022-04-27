import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import "./Slide1.css";
const Slide1 = () => {
  const[query,setquery]=useState("")
  return (
    <div className="body-slider">
      <div className="search">
        <input type="search" placeholder="search...." onChange={(e)=>setquery(e.target.value)} />
        <button className="search-btn">
          <i class="fas sear fa-search"></i>
        </button>
      </div>
      <Grid container>
        <Grid item md={2} xs={2}>
          <div className="callouts1"></div>
        </Grid>
        <Grid item md={4} xs={4}>
          <div className="flex-img1">
            <div className="callouts"></div>
          </div>
          {/* <div className="flex-img2">
            <div className="callouts2"></div>
            <div className="callouts3"></div>
          </div> */}
        </Grid>
        <Grid item md={3} xs={2}>
          <div className="callouts4"></div>
        </Grid>
        <Grid item md={3} xs={4}>
          <div className="flex-img3">
            <div className="callouts5"></div>
            {/* <div className="callouts6"></div> */}
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className="callouts2"></div>
        </Grid>
        <Grid item md={2} xs={12}>
          <div className="callouts3"></div>
        </Grid>
        <Grid item md={3}/>
        <Grid item md={3} xs={12}>
        <div className="callouts6"></div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Slide1;
