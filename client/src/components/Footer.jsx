import React from "react";
import postifyLogo from "../img/postifyLogo.png";

const Footer = () => {
  return (
    <footer>
      <img src={postifyLogo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
