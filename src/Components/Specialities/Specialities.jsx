import React, { useEffect } from "react";
import "./Specialities.css";
import Special_menu1 from "../../assets/special-menu1.jpg";
import Special_menu2 from "../../assets/special-menu2.jpg";
import Special_menu3 from "../../assets/special-menu3.jpg";
import Special_menu4 from "../../assets/special-menu4.jpg";
import Special_menu5 from "../../assets/special-menu5.jpg";
import Special_menu6 from "../../assets/special-menu6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Specialities = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="menu container-fluid overflow-hidden mt-4 ">
      <div
        className="special-heading text-center mt-5"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <h1 className="display-1 fw-bold">
          Specialities of <span className=" fw-light text-dark">Dine.in</span>
        </h1>
      </div>

      <div className="container 1-special-menu ">
        <div
          className="row  special-menu-1-row  p-4 ps-0  "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="col-lg-6  special-menu">
            <img
              src={Special_menu1}
              alt="special menu 1"
              className=" special-menu-img "
            />

            <div className="special-menu-text  p-2">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>
              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="col-lg-6  special-menu">
            <img
              src={Special_menu2}
              alt="special menu 1"
              className=" special-menu-img "
            />

            <div className="special-menu-text p-2 ">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>

              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="row  special-menu-2-row p-4 ps-0 overflow-hidden "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="col-lg-6  special-menu">
            <div className="special-menu-text  p-2 ">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>

              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
            <img
              src={Special_menu3}
              alt="special menu 1"
              className=" special-menu-img  "
            />
          </div>
          <div className="col-lg-6  special-menu">
            <div className="special-menu-text  p-2 ">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>

              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
            <img
              src={Special_menu4}
              alt="special menu 1"
              className=" special-menu-img "
            />
          </div>
        </div>
        <div
          className="row  special-menu-3-row p-4 ps-0"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="col-lg-6  special-menu">
            <img
              src={Special_menu5}
              alt="special menu 1"
              className=" special-menu-img "
            />

            <div className="special-menu-text p-2 ">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>

              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="col-lg-6  special-menu">
            <img
              src={Special_menu6}
              alt="special menu 1"
              className=" special-menu-img "
            />

            <div className="special-menu-text p-2 ">
              <h4 className="fw-bold fs-2">Grilled Beef with Potatoes</h4>

              <p>Meat,Potatoes,Rice,Tomato </p>
              <button
                type="button"
                class="btn btn-primary special-menu-btn fs-3 fw-bold "
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
