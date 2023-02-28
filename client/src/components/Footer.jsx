import React from "react";
import postifyLogo from "../img/postifyLogo.png";

const Footer = () => {
  return (
    <footer>
      <img src={postifyLogo} alt="" />
      <span>
        My first React project <span>👋 ⚛️</span>
      </span>
    </footer>
  );
};

export default Footer;
