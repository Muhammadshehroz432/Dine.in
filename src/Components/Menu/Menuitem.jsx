import React, { useEffect } from "react";
import "./Menu.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { BagAction } from "../../Store/bag";
const Menuitem = ({ menuitems, activeMenu }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  console.log(`The active menu is: ${activeMenu}`);

  const filteredMenuItems =
    activeMenu === "All"
      ? menuitems
      : menuitems.filter((item) => item.Dish === activeMenu);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(BagAction.addBag(menuitems.id));
  };
  return (
    <div className={`menu-item container`}>
      <div className="row menu-item-row-1 d-flex">
        <h1
          className="menu-heading fw-bold display-1"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          {activeMenu}
        </h1>
        {filteredMenuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item col-lg-12 d-flex p-3"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <img src={item.image} alt={item.name} className="menuitem-img" />
            <div className="menu-item-info ms-2 mt-3">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-detail">{item.description}</p>
              <p className="menu-item-price fs-3 fw-bold">Rs {item.price}</p>
              <button
                className="menu-item-btn p-2 fs-5"
                onClick={handleAddToCart}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menuitem;
