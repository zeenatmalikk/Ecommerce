import React from "react";
import "./Newsletter.css";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  
  return (
    <div className="n-body">
      <h1 className="n-title">HEY! WAIT</h1>
      <p className="n-desc">Subscribe to our newsletter and stay in loop!</p>
      <div className="n-search">
        <input type="email"  placeholder="Please Enter your Email...." />
        {/* <button className="n-search-btn"> */}
        <div className="send-n">
          <SendIcon style={{ color: "#333" }} />
        </div>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Newsletter;
