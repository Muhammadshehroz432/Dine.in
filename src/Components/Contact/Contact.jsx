import React, { useEffect } from "react";
import "./Contact.css";
import Contact_banner from "../../assets/banner-img3.jpg";
import { MdNavigateNext } from "react-icons/md";
import Contactform from "./Contactform";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="Contact container-fluid p-0 ">
      <div className="contact-banner-wrapper">
        <div className="gradient-overlay"></div>
        <img
          src={Contact_banner}
          alt="menu-bannerimg"
          width="100%"
          className="img-fluid"
        />
        <div className="menu-banner-content text-center z-3 position-absolute top-50 start-50 translate-middle text-light">
          <h1
            className="menu-head1 display-1"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            Contact
          </h1>
          <p
            className="menu-head2 "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            home{" "}
            <span>
              <MdNavigateNext />
            </span>{" "}
            contact
          </p>
        </div>
      </div>
      <div className="contact-form-section container overflow-hidden">
        <div className="row mt-2">
          <div
            className="col-lg-6 map-section p-0"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <center>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14421.182401625027!2d68.3442176!3d25.3614077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1724221693507!5m2!1sen!2s"
                width={600}
                height={460}
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </center>
          </div>
          <div
            className="col-lg-6 contact-from-section p-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="fw-bold contact-form-heading">Contact us</h1>
            <Contactform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
