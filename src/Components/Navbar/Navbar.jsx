import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Sticky, setSticky] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 10 ? setSticky(true) : setSticky(false);
  });

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          Sticky ? "dark-nav" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand fs-2">DINE.IN</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fs-2 fw-bold toggler-icon ">
              <GiHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink to="/" className={`nav-link`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={`nav-link  ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/catering"
                  className={` nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/specialities"
                  className={` nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/testimonial"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }} `}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <center>
              <NavLink to="/booktable">
                {" "}
                <button
                  type="button"
                  class="btn btn-primary ms-lg-5 book-table"
                >
                  Book a Table
                </button>
              </NavLink>
            </center>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
