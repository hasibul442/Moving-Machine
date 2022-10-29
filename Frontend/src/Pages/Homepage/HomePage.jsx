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

function HomePage() {
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
    // infinite: true,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="navbar-space"></div>
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide1.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide2.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide3.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide4.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide5.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/image/slider/Slide6.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100 carousel-image"
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
            <div className="col-md-4">
              <div className="text-center">
                <div className="my-auto">
                  <p className="about-us-title">About Us</p>
                </div>
              </div>
            </div>

            <div className="col-md-8 aboutus-description">
              <p>
                Moving Machines Limited, a private limited company, was
                established in early 2014 with a mission to source machines and
                equipment of cutting-age technology for customers of
                construction industry in Bangladesh. Subsequently the company
                expanded its operation in the fields of . . .
              </p>
              <div>
                <Link
                  to="/about-us"
                  className="learn-more button-style-2 border-0"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">See More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        className="services-section mt-5 mb-5 scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#ftco-navbar"
        data-bs-offset="0"
        tabIndex="0"
      >
        <div id="products_list">
          <div className="container">
            <h2 className="mml-title text-center mt-5 pt-5 mb-5">Products</h2>
            {/* <div className="row">
              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-1">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Sheet-Pile-Driver.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Sheet Pile Driver
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-2">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Generator.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Diesel Generator
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-3">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Portable-Air-Compressor.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Portable Air Compressor
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-4">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Truck-Mounted-Crane.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Truck Mounted Crane
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-5">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/weldergenerator.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Welder Generator
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-6">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Geotextile.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Geotextile
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-7">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Welding-Machine.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Welding Machine
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-8">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Cutting-Machine.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Cutting Machine
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-9">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Crimping-Machine.png"
                          alt="product1"
                          className="img-fluid product-list-image"
                        />
                      </div>
                      <h5 className="product-title text-center mt-3">
                        Crimping Machine
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row justify-content-center">
              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0 ">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Sheet-Pile-Driver.png"
                        alt="product1"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Sheet Pile Driver
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Generator.png"
                        alt="product1"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Diesel Generator
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Portable-Air-Compressor.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Portable Air Compressor
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Truck-Mounted-Crane.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Truck Mounted Crane
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/weldergenerator.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Welder Generator
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Geotextile.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Geotextile
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Welding-Machine.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Welding Machine
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Cutting-Machine.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Cutting Machine
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5" data-aos="zoom-in">
                <div className="card card-style border-0">
                  <div className="card-body shadow">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Crimping-Machine.png"
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                     Crimping Machine
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="mml-title text-center pt-5 pb-5">Brands</h2>
          <div>
            <OwlCarousel {...settings}>
              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/movex.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/denyo.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/tencate.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/airman.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/esab.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/unic.jpeg"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/lillbacka.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
