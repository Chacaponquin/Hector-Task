import React from "react";
import bitcoin from "../assets/images/bitcoin-logo.png";
import bitcoin_bg from "../assets/images/Bitcoin-bg.png";
import RectangleButton from "../assets/svg/RectangleButton";

const ContentPrincipal = () => {
  return (
    <div className="content-principal">
      <div>
        <h1>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</h1>
        <p>
          We provide blockchain development services and also assure you
          comprehensive security in blockchain development
        </p>

        <RectangleButton />
      </div>

      <div>
        <img src={bitcoin} alt="bitcoin-logo" />
        <div className="bitcoin-bg">
          <img src={bitcoin_bg} alt="bitcoin-bg" />
        </div>
      </div>
    </div>
  );
};

export default ContentPrincipal;
