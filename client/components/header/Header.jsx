import React from "react";
import { useState, useEffect } from "react";
import Home_Search from "./Home_search";
import "../styles/header.css";
import chevronLeft from "../../.././images/chevron-left.png";
import chevronRight from "../../.././images/chevron-right.png";

const Header = () => {
  return (
    <>
      <div id="navbar">
        <Home_Search />
        <div className="premium-signup-login">
          <div>
            <img id="chevronLeftID" src={`${chevronLeft}`} alt="chevronLeft" />
            <img
              id="chevronRightID"
              src={`${chevronRight}`}
              alt="chevronRight"
            />
          </div>
          {/* <div className="center-div">
            <p className="premium">Premium</p>
            <p className="support">Support</p>
            <p className="download">Download</p>
          </div> */}
          <div>
            <button id="signup">Sign up</button>
            <button id="login">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
