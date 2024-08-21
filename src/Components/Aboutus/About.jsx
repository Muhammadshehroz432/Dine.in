import React, { useEffect } from "react";
import "./About.css";
import Aboutimg_1 from "../../assets/about-img1.jpg";
import Aboutimg_2 from "../../assets/about-img2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="About container p-5 ">
      <div className="row mt-5">
        <div
          className="col-lg-7 about-imgs  p-4  "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <img
            src={Aboutimg_1}
            alt="about-img"
            className=" about-img mb-3   "
          />
          <img src={Aboutimg_2} alt="about-img" className=" about-img mt-5" />
        </div>
        <div
          className="col-lg-5 about-text "
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="about-text">
            <h1 className="display-1">About</h1>
            <h2 className="display-4">DINE.IN</h2>
            <p>
              Welcome to Dine.in, where great food meets a cozy atmosphere. Our
              restaurant offers a variety of delicious dishes, made with fresh
              ingredients and served with care. Whether you're here for a quick
              bite or a special meal, we promise a dining experience that's both
              enjoyable and satisfying. Come to Dine.in and taste the
              difference!
            </p>
            <p className="about-day fs-3">
              Mon-Fri <span className="fw-bold">8 AM - 11 PM</span>
              <p className="about-number fs-1 fw-bold mt-3">+ 1-978-123-4567</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
