import React from "react";
import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo3.png";
import logo3 from "../assets/images/logos/logo4.png";
import logo4 from "../assets/images/logos/logo5.png";

const Partner = () => {
  return (
    <div className="partner-container">
      <h1>Trusted by Leading Dapp Teams and Enterprises</h1>
      <div className="logo-container">
        <img src={logo1} alt="" />
        <img src={logo3} alt="" />
        <img src={logo2} alt="" />
        <img src={logo4} alt="" />
      </div>
    </div>
  );
};

export default Partner;
