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
          {/* Carousel Item 1 */}
          <div className="carousel-item active" data-bs-interval="1300">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img1}
              className="d-block w-100 img-fluid position-relative"
              alt="Banner"
            />
            <div className="carousel-caption lh-1 z-3 position-absolute top-50 start-50 translate-middle">
              <h1 className="banner-head mb-0">DINE.IN</h1>
              <p className="fs-2 banner-para">"Savour your Moment"</p>
            </div>
          </div>
          {/* Carousel Item 2 */}
          <div className="carousel-item" data-bs-interval="1300">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img2}
              className="d-block w-100 img-fluid position-relative"
              alt="Banner"
            />
            <div className="carousel-caption lh-1 z-3 position-absolute top-50 start-50 translate-middle">
              <h1 className="banner-head mb-0">DINE.IN</h1>
              <p className="fs-2 banner-para">"Taste the Difference"</p>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item" data-bs-interval="1300">
            <div className="gradient-overlay"></div>
            <img
              src={Banner_img3}
              className="d-block w-100 img-fluid position-relative"
              alt="Banner"
            />
            <div className="carousel-caption lh-1 z-3 position-absolute top-50 start-50 translate-middle">
              <h1 className="banner-head mb-0 ">DINE.IN</h1>
              <p className="fs-2 banner-para">"Where Flavor Meets Tradition"</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      {/* Menu Section */}
      <div className="banner-section-menu p-5 container-fluid">
        <div className="row">
          {[Banner_menu1, Banner_menu2, Banner_menu3, Banner_menu4].map(
            (img, index) => (
              <div className="col-lg-3 col-md-6" data-aos="fade-up" key={index}>
                <center>
                  <img
                    src={img}
                    alt={`banner-menu-img ${index + 1}`}
                    className="img-fluid rounded-circle banner-menu-img mt-2"
                  />
                </center>
                <div className="banner-menu-text text-center mt-3">
                  <h4>Grilled Beef with Potatoes</h4>
                  <p className="banner-menu-para">
                    Meat, Potatoes, Rice, Tomato
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
