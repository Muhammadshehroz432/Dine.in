import React from "react";
import "./Bag.css";
import { useSelector } from "react-redux";

const Bagsummary = () => {
  const bag = useSelector((store) => store.bag);

  const bagQuantity = bag.length;

  // Calculate the total price
  const totalPrice = bag.reduce((accumulator, item) => {
    // Assuming each item in the bag has a price property
    return accumulator + item.price;
  }, 0);

  return (
    <div>
      <div className="card mb-3 mt-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-title">Total items: {bagQuantity}</p>
          <h2 className="card-text">Total Price: Rs {totalPrice}</h2>
          <a href="#" className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bagsummary;
