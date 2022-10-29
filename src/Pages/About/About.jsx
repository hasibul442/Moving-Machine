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
  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <section>
      <section className="aboutus-bg">
        <h1 className="text-center page-title">Who We Are</h1>
      </section>

      <section className="about-section mt-5 mb-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aboutus-description-1">
              <p>
                The products and services of Moving Machines have primarily been
                developed focusing the fields of construction, oil and gas,
                manufacturing, and environmental protection. Our team
                relentlessly works to delight its customers through innovative
                and quality products supported by outstanding consultancy,
                sales, repairment and rental services. Over the years the
                company has been able to establish a long list of delighted
                customers that includes reputed local and international
                construction companies, manufacturing companies and public
                entities.
              </p>
              <p>
                TThe company takes the pride of mentioning its participation in
                various capacities in projects like:
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>Dohazari Cox’s Bazar Railway project</li>
                    <li>Matarbari coal power plant project</li>
                    <li>Kalna bridge project</li>
                    <li>Kalshi flyover project</li>
                    <li>Chattogram flyover project</li>
                    <li>Kuakata Sea Beach Protection Project</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>Meghna ghat power plant project</li>
                    <li>Rooppur Nuclear Power plant project</li>
                    <li>Bangabandhu Sheikh Mujib Railway Bridge Project</li>
                    <li>Western Bridge Project</li>
                    <li>SUSEC Road Project</li>
                  </ul>
                </div>
              </div>
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
                    <h2 className="mml-title text-center pt-5">
                      Mission & Vision
                    </h2>
                    <p className="p-2 vision-content-text">
                      We strive to become the leader in providing sustainable
                      solution to the customers of our areas of operation
                      through delivering quality, innovative and
                      customer-delighting products and services
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="mission">
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
                        <li>
                          To win customers by delivering quality and innovative
                          products
                        </li>
                        <li>
                          To win customers through providing customer-delighting
                          services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
    </section>
  );
}

export default About;
