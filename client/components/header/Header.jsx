import React from "react";
import { useState, useEffect } from "react";
import Home_Search from "./Home_search";
import "../styles/header.css";
import fireball from "../../.././images/fireball.png";

const Header = () => {
  return (
    <>
      <div id="navbar">
        <Home_Search />
        <div className="premium-signup-login">
          <div>
            <img id="fireball" src={`${fireball}`} alt="fireball" />
            <img id="fireball" src={`${fireball}`} alt="fireball" />
          </div>
          <div className="center-div">
            <p className="premium">Premium</p>
            <p className="support">Support</p>
            <p className="download">Download</p>
          </div>
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
