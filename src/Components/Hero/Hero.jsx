import React, { useEffect } from "react";
import "./Hero.css";
import Banner_img1 from "../../assets/banner-img1.jpg";
import Banner_img2 from "../../assets/banner-img2.jpg";
import Banner_img3 from "../../assets/banner-img3.jpg";
import Banner_menu1 from "../../assets/banner-menu1.jpg";
import Banner_menu2 from "../../assets/banner-menu2.jpg";
import Banner_menu3 from "../../assets/banner-menu3.jpg";
import Banner_menu4 from "../../assets/banner-menu4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="home">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade banner-slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1500">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img1}
              className="d-block w-100 img-fluid position-relative"
              alt="Bannerimg"
            />
            <div className="carousel-caption lh-1  z-3   position-absolute top-50 start-50 translate-middle ">
              <div className="animated-caption" data-aos="fade-up">
                <center>
                  <h1 className="banner-heading mb-0">DINE.IN</h1>
                </center>
                <p className=" fs-1 banner-para">"Savor Every Moment"</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img2}
              className="d-block w-100 img-fluid position-relative"
              alt="Bannerimg"
            />
            <div className="carousel-caption lh-1  z-3   position-absolute top-50 start-50 translate-middle ">
              <center>
                <h1 className="banner-heading mb-0">DINE.IN</h1>
              </center>
              <p className="fs-1 banner-para">"Taste the Difference"</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img3}
              className="d-block w-100 img-fluid position-relative"
              alt="Bannerimg"
            />
            <div className="carousel-caption lh-1  z-3   position-absolute top-50 start-50 translate-middle ">
              <center>
                <h1 className="banner-heading mb-0">DINE.IN</h1>
              </center>
              <p className="fs-1 banner-para">"Where Flavor Meets Tradition"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section-menu p-5  container-fluid ">
        <div className="row ">
          <div className="col-lg-3 " data-aos="fade-up">
            <center>
              <img
                src={Banner_menu1}
                alt="banner-menu-img"
                className="img-fluid  rounded-circle  banner-menu-img mt-2"
              />
            </center>
            <div className="banner-menu-text text-center mt-3">
              <h4>Grilled Beef with potatoes</h4>
              <p className=" banner-menu-para">Meat, Potatoes, Rice, Tomatoe</p>
            </div>
          </div>
          <div className="col-lg-3  " data-aos="fade-up">
            <center>
              <img
                src={Banner_menu2}
                alt="banner-menu-img"
                className="img-fluid  rounded-circle  banner-menu-img mt-2"
              />
            </center>
            <div className="banner-menu-text text-center mt-3">
              <h4>Grilled Beef with potatoes</h4>
              <p className=" banner-menu-para">Meat, Potatoes, Rice, Tomatoe</p>
            </div>
          </div>
          <div className="col-lg-3  " data-aos="fade-up">
            <center>
              <img
                src={Banner_menu3}
                alt="banner-menu-img"
                className="img-fluid  rounded-circle  banner-menu-img mt-2"
              />
            </center>
            <div className="banner-menu-text text-center mt-3">
              <h4>Grilled Beef with potatoes</h4>
              <p className=" banner-menu-para">Meat, Potatoes, Rice, Tomatoe</p>
            </div>
          </div>
          <div className="col-lg-3  " data-aos="fade-up">
            <center>
              <img
                src={Banner_menu4}
                alt="banner-menu-img"
                className="img-fluid  rounded-circle  banner-menu-img mt-2"
              />
            </center>
            <div className="banner-menu-text text-center mt-3">
              <h4>Grilled Beef with potatoes</h4>
              <p className=" banner-menu-para">Meat, Potatoes, Rice, Tomatoe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
