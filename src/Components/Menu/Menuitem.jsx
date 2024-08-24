import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch } from "react-redux";
import { BagAction } from "../../Store/bag";

const MenuItem = ({ menuitems, activeMenu }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const dispatch = useDispatch();

  const handleAddItem = (id) => {
    dispatch(BagAction.addBag(id));
  };

  const renderMenuItems = (startIndex, endIndex) => {
    return menuitems.slice(startIndex, endIndex).map((item) => (
      <div className="col-lg-6 menu-1-1 d-flex p-2" key={item.id}>
        <img src={item.image} alt="menu-img" className="img-fluid menu-img" />
        <div className="menu-text ps-3">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h3 className="Price me-4 mt-3 fw-bold">RS {item.price}</h3>
          <button
            className="menu-btn fs-5"
            onClick={() => {
              console.log(`Item ID: ${item.id} clicked`);
              handleAddItem(item.id);
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container overflow-hidden p-4">
      {(activeMenu === "Breakfast" || activeMenu === "All") && (
        <div
          className="breakfast"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <h1 className="breakfast-heading display-1 mb-3 fw-bold">
            Breakfast
          </h1>
          <div className="row menu-row-Breakfast1 p-3">
            {renderMenuItems(0, 6)}
          </div>
        </div>
      )}
      {(activeMenu === "Lunch" || activeMenu === "All") && (
        <div
          className="lunch"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <h1 className="Lunch-heading display-1 mb-3 fw-bold">Lunch</h1>
          <div className="row menu-row-Lunch1 p-3">
            {renderMenuItems(6, 12)}
          </div>
        </div>
      )}
      {(activeMenu === "Dinner" || activeMenu === "All") && (
        <div
          className="dinner"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <h1 className="Dinner-heading display-1 mb-3 fw-bold">Dinner</h1>
          <div className="row menu-row-Dinner1 p-3">
            {renderMenuItems(12, 18)}
          </div>
        </div>
      )}
      {(activeMenu === "Deserts" || activeMenu === "All") && (
        <div
          className="deserts"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <h1 className="Deserts-heading display-1 mb-3 fw-bold">Deserts</h1>
          <div className="row menu-row-Deserts1 p-3">
            {renderMenuItems(18, 24)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
