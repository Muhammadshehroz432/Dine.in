import React from "react";
import "./Bag.css";
import Bagsummary from "./Bagsummary";
import Bagitem from "./bagitem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bag = useSelector((state) => state.bag);
  console.log(bag);
  return (
    <div className="bag overflow-hidden container p-5 mt-5">
      <div className="row p-3">
        <div className="col-lg-7 bag-item-wrapper p-2">
          return <Bagitem />;
        </div>
        <div className="col-lg-5 me-3 bag-summary-wrapper p-3">
          <Bagsummary />
          <button type="button" className="btn btn-primary checkout-btn">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
