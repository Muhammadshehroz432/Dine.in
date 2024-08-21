import React, { useEffect } from "react";
import "./Testimonial.css";
import Review_1 from "../../assets/review-1.jpg";
import Review_2 from "../../assets/review-2.jpg";
import Review_3 from "../../assets/review-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // This code helps re-initialize Bootstrap carousel for mobile devices
    const carousel = document.querySelector("#carouselExample");
    if (carousel) {
      const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 1500,
        wrap: true,
      });
    }
  }, []);

  return (
    <div
      className="testimonial container p-5" // Removed overflow-hidden to test if it helps
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-offset="100"
    >
      <div className="testimonial-heading text-center">
        <h1 className="display-1">Review</h1>
        <h2>Our Testimonial</h2>
      </div>
      <div className="row testimonial-crousel">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1500">
              <div className="review-content mt-4">
                <center>
                  <img src={Review_1} alt="Review 1" className="review-img" />
                </center>
                <div className="review-text-content text-center mt-4">
                  <h2 className="display-5 fw-bold">Review One</h2>
                  <p className="text-dark fs-4">
                    DINE.IN is a fantastic spot for a casual meal. The food is
                    delicious and the service is quick and friendly. The
                    ambiance is cozy, making it a great place to relax and enjoy
                    a meal with friends or family.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <div className="review-content mt-4">
                <center>
                  <img src={Review_2} alt="Review 2" className="review-img" />
                </center>
                <div className="review-text-content text-center mt-4">
                  <h2 className="display-5 fw-bold">Review Two</h2>
                  <p className="text-dark fs-4">
                    I had a wonderful experience at DINE.IN. The menu offers a
                    variety of tasty options, and everything I tried was fresh
                    and flavorful. The staff is attentive and welcoming. Highly
                    recommend for a nice dining experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1500">
              <div className="review-content mt-4">
                <center>
                  <img src={Review_3} alt="Review 3" className="review-img" />
                </center>
                <div className="review-text-content text-center mt-4">
                  <h2 className="display-5 fw-bold">Review Three</h2>
                  <p className="text-dark fs-4">
                    DINE.IN exceeded my expectations. The dishes were expertly
                    prepared and the flavors were amazing. The restaurant is
                    clean and the atmosphere is inviting. The staff made sure we
                    had a great time. Will definitely return!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
