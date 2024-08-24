import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [Sticky, setSticky] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 10 ? setSticky(true) : setSticky(false);
  });
  const bag = useSelector((store) => store.bag);
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          Sticky ? "dark-nav" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand fs-2">DINE.IN</a>

          {/* Add to Cart for mobile/tablet - appears before the toggle menu */}
          <div className="add-to-cart d-lg-none order-1 ">
            <span className="fs-1 position-relative">
              <NavLink to="/bag">
                <span className="cart" style={{ color: "#c8a97e" }}>
                  <FaShoppingCart />
                </span>
              </NavLink>
              <span className="badge text-bg-secondary fs-6 cart-badge bg-danger ms-3">
                {bag.length}
              </span>
            </span>
          </div>

          <button
            className="navbar-toggler order-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fs-2 fw-bold toggler-icon">
              <GiHamburgerMenu />
            </span>
          </button>

          <div
            className="collapse navbar-collapse order-lg-1 order-4"
            id="navbarSupportedContent"
          >
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
                  }}`}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/catering"
                  className={` nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }}`}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className={` nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }}`}
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/testimonial"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }}`}
                >
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }}`}
                >
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={`nav-link ${(e) => {
                    return e.isActive ? "active " : "";
                  }}`}
                >
                  Contact
                </NavLink>
              </li>
              <NavLink to="/booktable">
                <button className="book-btn">Book a table</button>
              </NavLink>

              {/* Add to Cart for desktop/laptop - appears after the "Book a Table" button */}
              <div className="add-to-cart d-none d-lg-block ms-3">
                <span className="fs-2 position-relative">
                  <NavLink to="/bag">
                    <span className="cart" style={{ color: "#c8a97e" }}>
                      <FaShoppingCart />
                    </span>
                  </NavLink>

                  <span className="badge text-bg-secondary fs-6 cart-badge bg-danger ms-1 add-cart-badge">
                    {bag.length}
                  </span>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
