import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="Footer container-fluid overflow-hidden bg-black  p-5   ">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 ">
          <a className="navbar-footer-logo fw-bold display-5" href="#">
            DINE.IN
          </a>
          <p className="text-white">
            Celebrate your special day with a wedding party at DINE.IN! Our
            restaurant provides a charming and elegant setting, perfect for an
            unforgettable celebration. Enjoy a customized menu featuring fresh,
            locally-sourced dishes, exceptional service, and a warm, inviting
            atmosphere.
          </p>
          <h1 className="address">Address</h1>
          <p className="text-white">
            1234 Culinary Avenue Suite 101 Foodie City, FL 34567 United States
          </p>
          <div
            className="Footer-logo-icon  text-white fs-3"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <span>
              {" "}
              <FaFacebookF />{" "}
            </span>
            <span>
              {" "}
              <FaSquareXTwitter />{" "}
            </span>
            <span>
              <FaInstagram />{" "}
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12    text-start py-4 ps-lg-4 ps-md-4    ">
          <ul className="open-hours-time ps-0  ">
            <span className="fw-bold text-white fs-2">OPEN HOURS</span>

            <li className="text-white">Monday 9:00 - 24:00</li>
            <li className="text-white">Tuesday 9:00 - 24:00</li>
            <li className="text-white">Wednesday 9:00 - 24:00</li>
            <li className="text-white">Thursday 9:00 - 24:00</li>
            <li className="text-white">Friday 9:00 - 02:00</li>
            <li className="text-white">Saturday 9:00 - 02:00</li>
            <li className="text-white">Sunday 9:00 - 02:00</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12  py-4 text-start py-3 ps-lg-4 ps-md-4  ">
          <ul className="open-hours-time ps-0  ">
            <span className="fw-bold text-white fs-2">SECTION</span>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                About us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Services
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                blogs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12  py-4 text-start py-5 ">
          <form>
            <h5 className="text-white">Subscribe to our newsletter</h5>
            <p className="text-white">
              Monthly digest of what's new and exciting from us.
            </p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button
                type="button"
                class="btn btn-primary footer-subscribe-btn "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
