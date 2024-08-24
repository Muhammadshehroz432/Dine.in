import React from "react";
import "./Bag.css";
import Bagitem from "./bagitem";
import Bagsummary from "./Bagsummary";

const Bag = () => {
  return (
    <div className="bag overflow-hidden container   p-5 mt-5">
      <div className="row bg-danger p-3">
        <div className="col-lg-7 bg-warning bag-item-wrapper p-2">
          <Bagitem />
        </div>
        <div className="col-lg-5 bg-success bag-Summary p-3 ">
          <Bagsummary />
          <button type="button" class="btn btn-primary checkout-btn">
            Procced to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
