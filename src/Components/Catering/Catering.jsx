import React from "react";
import { useEffect } from "react";
import "./Catering.css";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
const Catering = ({ Sectionref3 }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      className="services container-fluid p-4  overflow-hidden"
      ref={Sectionref3}
    >
      <div
        className="catering-heading text-center  "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <h1 className="display-1 fw-bold">Services</h1>
        <h3 className="display-5">Catering</h3>
      </div>

      <div className="row catering-wrapper   sm-mt-0 ">
        <div
          className="col-lg-4   text-center "
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="display-1 catering-icon">
            <FaBirthdayCake />
          </span>
          <div className="birthday-content text-center">
            <h2>Birthday Party</h2>
            <p>
              Celebrate your special day at Dine.in! Our restaurant offers a
              warm and inviting atmosphere, perfect for hosting unforgettable
              birthday parties. Enjoy a delightful menu tailored to your tastes,
              with a variety of delicious dishes and desserts that will make
              your celebration truly special. Let us take care of the details so
              you can relax and enjoy your day with friends and family. Make
              your birthday at Dine.in a memorable one!
            </p>
          </div>
        </div>
        <div
          className="col-lg-4  text-center "
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="display-1 catering-icon">
            <FaRegHandshake />
          </span>
          <div className="birthday-content text-center">
            <h2>Bussiness Meeting </h2>
            <p>
              Host your next business meeting at Dine.in, where professionalism
              meets comfort. Our elegant and quiet setting provides the perfect
              environment for productive discussions and important decisions.
              Enjoy our carefully curated menu, offering a selection of gourmet
              dishes that cater to all tastes, ensuring your meeting is both
              successful and satisfying. With exceptional service and attention
              to detail, Dine.in is the ideal place to impress your clients and
              colleagues
            </p>
          </div>
        </div>
        <div
          className="col-lg-4  text-center "
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="display-1 catering-icon">
            <LuPartyPopper />
          </span>
          <div className="birthday-content text-center">
            <h2>Wedding Party</h2>
            <p>
              Celebrate your love story at Dine.in, where elegance and romance
              come together to create the perfect wedding party. Our
              sophisticated venue offers a stunning backdrop for your special
              day, with personalized menus that reflect your unique tastes.
              Whether you envision an intimate gathering or a grand celebration,
              our team is dedicated to making your wedding dreams come true.
              From exquisite dishes to exceptional service, Dine.in ensures that
              every moment of your celebration is as unforgettable as your love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
