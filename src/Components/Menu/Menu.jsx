import React, { useState } from "react";
import "./Menu.css";
import Menuitem from "./Menuitem";
import { useSelector } from "react-redux";

const Menu = () => {
  const MenuItems = useSelector((store) => store.menuitem);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Deserts",
    "Drinks",
  ];
  const handleClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="menu container-fluid overflow-hidden mt-4 ">
      {/* menu heading */}
      <div
        className="special-heading text-center mt-5"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <h1 className="display-1 fw-bold">
          Specialities of <span className="fw-light text-dark">Dine.in</span>
        </h1>
      </div>
      {/* menu-categories */}
      <div
        className="menu-categories-wrapper container p-4"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <div className="col-lg-12 menu-categories p-3 d-lg-flex justify-content-lg-around text-center">
          {categories.map((category) => (
            <p
              key={category}
              className={`fs-2 p-3 fw-bold ${
                activeCategory === category ? "menu-active" : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>
      {MenuItems.map((item) => {
        return (
          <Menuitem
            key={item.id}
            menuitems={item}
            activeMenu={activeCategory}
          ></Menuitem>
        );
      })}
    </div>
  );
};

export default Menu;
