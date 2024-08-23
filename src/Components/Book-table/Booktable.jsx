import React, { useEffect } from "react";
import Banner_img from "../../assets/banner-img2.jpg";
import { MdNavigateNext } from "react-icons/md";
import "./Booktable.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Booktable = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="Book-table container-fluid p-0 overflow-hidden ">
      <div className="Book-table-banner-wrapper">
        <div className="gradient-overlay"></div>
        <img
          src={Banner_img}
          alt="menu-bannerimg"
          width="100%"
          className="img-fluid"
        />
        <div className="menu-banner-content text-center  z-3  position-absolute top-50 start-50 translate-middle text-light">
          <h1
            className="menu-head1 display-1"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            Book Table
          </h1>
          <p
            className="menu-head2 "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            {" "}
            home{" "}
            <span>
              <MdNavigateNext />
            </span>{" "}
            Book Table
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row  p-5 ">
          <div
            className="book-table-heading "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="display-1 fw-bold book-table-head1">Book Table </h1>
            <h3>Reservation</h3>
          </div>
          <form
            action=""
            className="  ps -5 py-3"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <div className="username">
              <label for="username" className="mb-2 fw-bold fs-5">
                Username:
              </label>
              <br />
              <input className="book-input p-2" type="text" />
            </div>
            <div className="email mt-3">
              <label for="email" className="mb-2 fw-bold fs-5">
                Email:
              </label>
              <br />
              <input className="book-input p-2" type="Email" />
            </div>
            <div className="phone mt-3">
              <label for="phone" className="mb-2 fw-bold fs-5">
                Phone:
              </label>
              <br />
              <input className="book-input p-2" type="number" />
            </div>
            <div className="Date mt-3">
              <label for="date" className="mb-2 fw-bold fs-5">
                Date:
              </label>
              <br />
              <input className="book-input p-2" type="date" />
            </div>
            <div className="time mt-3">
              <label for="time" className="mb-2 fw-bold fs-5">
                Time:
              </label>
              <br />
              <input className="book-input p-2" type="time" />
            </div>
            <div className="person mt-3">
              <label for="person" className="mb-2 fw-bold fs-5">
                Persons:
              </label>
              <br />
              <select name="persons">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button
              type="sumbit"
              class="btn btn-primary sumbit-book-table  mt-4 fs-4"
            >
              make a Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booktable;
