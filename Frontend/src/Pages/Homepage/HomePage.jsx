import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";

import "./homepage.css";
import "./../Custom/card-hover.css";

import "animate.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function HomePage()  {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: false,
  });

  const settings = {
    className: "owl-theme  pb-5",
    dots: false,
    loop: true,
    center: true,
    slidestoshow: 1,
    slidestoscroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <div>
      <div className="navbar-space"></div>
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item interval={2000}>
            <Link to="/dieselgenerator">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide1.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/aircompressor">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide2.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/weldergenerator">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide3.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/sheetpiledriver">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide4.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/mountedcrane">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide5.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/crimping">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide6.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Link to="/geotextile">
              <img
                className="d-block w-100"
                src="/assets/image/slider/Slide7.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="about-section mt-5 mb-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <div className="my-auto">
                  <p className="about-us-title pt-3">Inception</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 aboutus-description">
              <p>
                Moving Machines Limited, a private limited company, was
                established early 2014 with a commitment to source and supply of
                machines and equipment of cutting-age technology for customers
                of construction industry in Bangladesh. Subsequently the company
                expanded its services to customers in the fields of oil and gas,
                manufacturing and environmental protection.
              </p>
              <div>
                {/* <Link
                  to="/about-us"
                  className="learn-more button-style-2 border-0"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">See More</span>
                </Link> */}
              </div>
              {/* </ShowMoreText> */}
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-value-bg">
        <section id="vision" className="pt-5">
          <div className="vision">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 vision-text "
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="">
                    <div className="py-5">
                      <h2 className="mml-title text-center">
                        Mission & Vision
                      </h2>
                      <p className="px-5 mx-5 text-center pt-2 vision-content-text">
                        We strive to become the leader in providing sustainable
                        solution to the customers of our areas of operation
                        through delivering quality, innovative and
                        customer-delighting products and services
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6"></div> */}
              </div>
            </div>
          </div>
        </section>

        <section id="core-value">
          <div className="core-value pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 core-value-content-body"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="my-auto">
                    <div className="py-5">
                      <h2 className="mml-title text-center">Core Value</h2>
                      <div className="ml-5 value-content-text">
                        <div className="row justify-content-center pt-3">
                          <div className="col-md-3 px-5 text-center">
                            <i
                              className="fas fa-award fa-4x"
                              style={{ color: "#2A0944" }}
                            ></i>
                            <p className="pt-3 text-description">
                              Becoming the logical choice in our field
                              {/* in our fields of operation */}
                            </p>
                          </div>

                          <div className="col-md-3 px-5 text-center">
                            <i
                              className="fas fa-check fa-4x"
                              style={{ color: "#3CCF4E" }}
                            ></i>
                            <p className="pt-3 text-description">
                              Offering high-quality, sophisticated products
                            </p>
                          </div>

                          <div className="col-md-3 px-5 text-center">
                            <i
                              className="fas fa-users fa-4x"
                              style={{ color: "#358d7e" }}
                            ></i>
                            <p className="pt-3 text-description">
                              Serving through an empowered team
                            </p>
                          </div>

                          <div className="col-md-3 px-5 text-center">
                            {/* 610C63 */}
                            <i
                              className="fas fa-balance-scale fa-4x"
                              style={{ color: "#EB1D36" }}
                            ></i>
                            <p className="pt-3 text-description">
                              {" "}
                              Preserving Integrity
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Brand Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="mml-title text-center pt-5">BRANDS WE DEAL</h2>
          <div>
            <OwlCarousel {...settings}>
              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/movex.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/denyo.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/tencate.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/airman.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item  mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/esab.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/unic.jpeg"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/lillbacka.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="item mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="justify-content-center">
                      <img
                        src="/assets/image/brands/k-seal.png"
                        alt="Brand logo"
                        style={{ height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
