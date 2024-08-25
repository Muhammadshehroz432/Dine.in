import React from "react";
import Bagitem from "../Bag/Bagitem";
import Bagsummary from "./Bagsummary";
import { useSelector } from "react-redux";
import "./Bag.css";
const Bag = () => {
  const bag = useSelector((state) => state.bag);

  console.log(bag);
  return (
    <div className=".container  p-5 ">
      <h1 className="text-center bag-heading mt-5 display-1 fw-bold">
        Add to Cart
      </h1>
      {bag.map((item) => {
        console.log(item);
        return <Bagitem key={item.id} item={item} />;
      })}

      <Bagsummary />
    </div>
  );
};

export default Bag;
