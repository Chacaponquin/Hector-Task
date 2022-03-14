import React from "react";
import box_image from "../assets/images/package.png";
import NavigartionSide from "./NavigartionSide";

const LeftSide = () => {
  return (
    <div className="content-first">
      <section>
        <p>
          PK194-ABI
          <br />
          San Francisco
        </p>
        <img src={box_image} alt="box" />
      </section>

      <NavigartionSide />
    </div>
  );
};

export default LeftSide;
