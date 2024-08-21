import React, { useEffect } from "react";
import "./Blog.css";
import Blog_img1 from "../../assets/blog-img1.jpg";
import Blog_img2 from "../../assets/blog-img2.jpg";
import Blog_img3 from "../../assets/blog-img3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="blog overflow-hidden container  p-5">
      <div
        className="blog-heading text-center mt-5"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <h1 className="display-1">Blog</h1>
        <h2>Recent Post</h2>
      </div>
      <div className="row blog-wrapper  p-5">
        <div
          className="col-lg-4  "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="blog-content">
            <img src={Blog_img1} alt="blog-img" className="img-fluid" />
            <div className="blog-text">
              <p className="mt-2">Aug 06 2019 Admin</p>
              <h4 className="fw-bold">Taste the delicious foods in Asia</h4>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="blog-content ">
            <img src={Blog_img2} alt="blog-img" className="img-fluid mt-4" />
            <div className="blog-text">
              <p className="mt-2">Aug 06 2019 Admin</p>
              <h4 className="fw-bold">Taste the delicious foods in Asia</h4>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="100"
        >
          <div className="blog-content">
            <img src={Blog_img3} alt="blog-img" className="img-fluid" />
            <div className="blog-text">
              <p className="mt-2">Aug 06 2019 Admin</p>
              <h4 className="fw-bold">Taste the delicious foods in Asia</h4>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
