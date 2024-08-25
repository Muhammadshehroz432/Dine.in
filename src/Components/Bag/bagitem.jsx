import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Bag.css";
import { useDispatch } from "react-redux";
import { BagAction } from "../../Store/bag";

const Bagitem = ({ item }) => {
  const dispatch = useDispatch();

  const Removeitembag = () => {
    dispatch(BagAction.removeBag(item.id));
  };

  // Check if item is not defined, render a message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <div
        className="card mb-3 mt-5 p-3 overflow-hidden"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <span className="remove-cart fs-3" onClick={Removeitembag}>
            <RiDeleteBin5Fill />
          </span>
          <div className="col-md-4">
            <img
              src={item.image}
              className="img-fluid rounded-start mt-3"
              alt={item.name || "Food item"} // Better alt text for accessibility
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text fs-3 fw-bold">Rs {item.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bagitem;
