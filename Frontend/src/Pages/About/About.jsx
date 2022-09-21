import React from "react";
import "./about.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
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

  AOS.init({
    duration: 500,
    delay: 300,
    mirror: false,
    // anchorPlacement:"top"
  });
  return (
    <>
      <section className="aboutus-bg">
        <h1 className="text-center page-title">About Us</h1>
      </section>

      <section className="about-section mt-5 mb-5" id="about">
        <div className="container">
          <div className="row">
            <h2 className="mml-title text-center mb-5">Who We Are</h2>

            {/* <div className="col-md-6">
              <div className="text-center">
                <div className="mx-auto">
                  <img
                    src="/assets/image/homepage/Jaso-poster.png"
                    alt=""
                    className="about-us-box"
                  />
                </div>
              </div>
            </div> */}

            <div className="col-md-12 aboutus-description-1">
              <p>
                Moving Machines Limited, a private limited company, was
                established in early 2014 with a mission to source machines and
                equipment of cutting-age technology for customers of
                construction industry in Bangladesh. Subsequently the company
                expanded its operation in the fields of manufacturing, oil and
                gas and environment protection. To fulfill its mission the
                company relentlessly worked to delight its customers through
                exclusive and quality products supported by outstanding
                consultancy, sales, repairment and rental services. Over the
                years the company has been able to establish a long list of
                delighted customers that includes reputed local and
                international construction companies, manufacturing companies
                and public entities.
                <br />
                <br />
                The company takes the pride of mentioning its participation in
                various capacities in projects like Chattogram-Cox’s Bazar Rail
                Line project, Matarbari coal power plant project, Kalna bridge
                project, Kalshi flyover project, Chattogram flyover project,
                Meghna ghat power plant project, Rooppur Power plant project,
                and Jamuna Railway Bridge Project.{" "}
              </p>
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
                  className="col-md-6 vision-text "
                  data-aos="fade-right"
                  data-aos-offset="20"
                  data-aos-anchor-placement="top-bottom"
                >
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
                <div
                  className="col-md-6 vision-text"
                  data-aos="fade-left"
                  data-aos-offset="20"
                  data-aos-anchor-placement="top-bottom"
                >
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
                <div
                  className="col-md-12 core-value-content-body"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-anchor-placement="top-bottom"
                >
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
                            Becoming the finest in corresponding fields
                          </p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-user-headset fa-4x"
                            style={{ color: "#0078AA" }}
                          ></i>
                          <p className="pt-3">
                            Providing top-notch customer support
                          </p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-check fa-4x"
                            style={{ color: "#3CCF4E" }}
                          ></i>
                          <p className="pt-3">
                            Offering quality advanced products
                          </p>
                        </div>

                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-users fa-4x"
                            style={{ color: "#EB1D36" }}
                          ></i>
                          <p className="pt-3">Building teamwork</p>
                        </div>
                        <div className="col-md-2 text-center">
                          <i
                            className="fas fa-balance-scale fa-4x"
                            style={{ color: "#610C63" }}
                          ></i>
                          <p className="pt-3">Upholding integrity</p>
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
      </section>

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

export default About;
