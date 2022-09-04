import React from "react";
import { Carousel } from "react-bootstrap";

import "./homepage.css";
import "./../Custom/card-hover.css";

import "animate.css";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function seemore() {
  return (
    <section>
      <br />
      <button className="learn-more button-style-2 border-0">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">See More</span>
      </button>
    </section>
  );
}
function seeless() {
  return (
    <section>
      <br />
      <button className="learn-more button-style-2 border-0">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">See Less</span>
      </button>
    </section>
  );
}
function HomePage() {
  AOS.init({
    duration: 800,
    delay: 200,
    mirror: true,
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
    autoplaySpeed: 8000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };
  return (
    <>
    <div className="navbar-space"></div>
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide8.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide1.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide2.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide3.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide4.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide5.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
                src="/assets/image/slider/Slide6.PNG"
                alt="Banner_Photo"
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/aboutus">
              <img
                className="d-block w-100"
                // style={{ height: "650px" }}
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
                {/* <div className="mx-auto image-block">
                  <img
                    src="/assets/image/homepage/Jaso-poster.png"
                    alt=""
                    className="img-fluid image-style-1"
                  />
                </div> */}
                <div className="my-auto">
                <p className="about-us-title">About Us</p>
                </div>
              </div>
            </div>

            <div className="col-md-8 aboutus-description">
              {/* <ShowMoreText
                lines={6}
                more={seemore()}
                less={seeless()}
                className="content-css"
                anchorClass="my-anchor-css-class"
                expanded={false}
                truncatedEndingComponent={" . . . . . . "}
              > */}
              <p>
                Moving Machines Limited, a private limited company, was
                established in early 2014 with a mission to source machines and
                equipment of cutting-age technology for customers of
                construction industry in Bangladesh. Subsequently the company
                expanded its operation in the fields of manufacturing, oil and
                gas and environment protection. To fulfill its mission the
                company relentlessly worked to delight its customers through
                exclusive and quality products supported by outstanding
                consultancy, sales, repairment and rental services.
              </p>
              <div>
              <Link to="/about-us" className="learn-more button-style-2 border-0">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">See More</span>
              </Link>
              </div>
              {/* </ShowMoreText> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mission-vision-value-bg">
        <section id="vision" className="pt-5">
          <div className="vision">
            <div className="container">
              <div className="row">
                <div className="col-md-6 vision-text">
                  <div className="">
                    <h2 className="mml-title text-center pt-5">Vision</h2>
                    <p className="p-2 vision-content-text">
                      To become the leader in providing solution to the
                      customers of its areas of operation through quality
                      advanced product and customer-delighting service.
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission">
          <div className="mission pt-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 vision-text">
                  <div className=" ">
                    <h2 className="mml-title text-center pt-5">Mission</h2>
                    <div className="p-2 mission-content-text">
                      <ul>
                        <li>To deliver advanced and quality products.</li>
                        <li>
                          To delight customers in need of services the company
                          provides.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="core-value">
          <div className="core-value pt-4 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12 core-value-content-body">
                  <div className="my-auto">
                    <h2 className="mml-title text-center pt-5">Core Value</h2>
                    <div className="ml-5 value-content-text">
                      <div className="row pt-3">
                        <div className="col-md-1"></div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-award fa-4x"
                            style={{ color: "#EF5B0C" }}
                          ></i>
                          <p className="pt-3">
                            Becoming the Best In Tis Area of operation
                          </p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-user-headset fa-4x"
                            style={{ color: "#0078AA" }}
                          ></i>
                          <p className="pt-3">Delighting customer</p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-check fa-4x"
                            style={{ color: "#3CCF4E" }}
                          ></i>
                          <p className="pt-3">Quality advanced product</p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-users fa-4x"
                            style={{ color: "#EB1D36" }}
                          ></i>
                          <p className="pt-3">Teamwork</p>
                        </div>
                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-balance-scale fa-4x"
                            style={{ color: "#610C63" }}
                          ></i>
                          <p className="pt-3">Integrity</p>
                        </div>

                        <div className="col-md-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section> */}

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
            <div></div>
            <h2 className="mml-title text-center mt-5 pt-5 mb-5">Products</h2>
            <div className="row">
              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-1">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Sheet-Pile-Driver.png"
                          style={{ height: "100px", width: "100px" }}
                          alt="product1"
                          className="img-fluid"
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
                          style={{ height: "100px", width: "100px" }}
                          alt="product1"
                          className="img-fluid"
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
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-4">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Truck-Mounted-Crane.png"
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-5">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/weldergenerator.png"
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-6">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Geotextile.png"
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-7">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Welding-Machine.png"
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-8">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Cutting-Machine.png"
                          style={{ height: "100px", width: "100px" }}
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
              </div>

              <div className="col-md-4 mb-3" data-aos="zoom-in">
                <div className="products">
                  <div className="card border-0 shadow card-9">
                    <div className="layer"></div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="/assets/image/products/Crimping-Machine.png"
                          style={{ height: "100px", width: "100px" }}
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
    </>
  );
}

export default HomePage;
