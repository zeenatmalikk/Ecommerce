import { Grid } from "@material-ui/core";
import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Footer.css";
import { Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";
const Footer = () => {
  const openMap = () => {
    window.open("https://goo.gl/maps/NJLYtibsVHUrFXpz6");
  };
  const facebook = () => {
    window.open("https://www.facebook.com/sananightwear");
  };
  const instagram = () => {
    window.open("https://www.instagram.com/sanaloungewear/");
  };
  const pintrest = () => {
    window.open("https://www.pinterest.ca/sanaloungewear/");
  };
  return (
    <div className="f-links">
      <Button>
        <a href="tel:+1-555-555-1212">
          <LocalPhoneIcon style={{color:'#fff'}} />{" "}
        </a>
      </Button>
      <Button>
        <a href="mailto:email@domain.com">
          <MailIcon style={{color:'#fff'}} />
        </a>
      </Button>
      <Button onClick={openMap}>
        <LocationOnIcon style={{color:'#fff'}} />
      </Button>
      <div>
        <p>Copyright @ sananightwear.com 2022. All rights reserved.</p>
      </div>
      <Button onClick={facebook}>
        <FacebookIcon style={{color:'#fff'}} />
      </Button>
      <Button onClick={instagram}>
        <Instagram style={{color:'#fff'}} />
      </Button>
      <Button onClick={pintrest}>
        <PinterestIcon style={{color:'#fff'}} />
      </Button>
    </div>
  );
};

export default Footer;
