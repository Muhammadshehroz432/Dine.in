import React from "react";
import "./Bag.css";
import { RiDeleteBinFill } from "react-icons/ri";
const Bagitem = () => {
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src="" />
      </div>
      <div className="item-right-part">
        <div className="item-name">
          <h2></h2>
        </div>
        <div className="item-description">
          <p></p>
        </div>
        <div className="item-price">
          <p className="fs-3">Rs </p>
        </div>
      </div>
      <div className="remove-from-cart">
        <RiDeleteBinFill />
      </div>
    </div>
  );
};

export default Bagitem;
