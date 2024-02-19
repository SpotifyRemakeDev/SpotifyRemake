import React from "react";
import { useState, useEffect } from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className = "paragraph-text">
          <p>Preview of Spotify</p>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div>
          <button>Sign up free</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
