import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function WelderGenerator() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brochures = [
    {
      key: "1",
      title: "Denyo 480A single head or 240A duel head",
      pdf: "/assets/image/brochures/Denyo-W/1.pdf",
      thumbnail: "/assets/image/brochures/Denyo-W/1.png",
    },
    {
      key: "2",
      title: "Denyo welder 500A Single head",
      pdf: "/assets/image/brochures/Denyo-W/2.pdf",
      thumbnail: "/assets/image/brochures/Denyo-W/2.png",
    },
    {
      key: "3",
      title: "Denyo welder DAW-500ss Single head",
      pdf: "/assets/image/brochures/Denyo-W/3.pdf",
      thumbnail: "/assets/image/brochures/Denyo-W/3.png",
    },
    {
      key: "4",
      title: "Denyo welders upto 380A (Single and Duel head)",
      pdf: "/assets/image/brochures/Denyo-W/4.pdf",
      thumbnail: "/assets/image/brochures/Denyo-W/4.png",
    },
  ];
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Welder generator</h1>
      </section>

      <section className="product-info-background">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-8 mt-5 px-5"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center">
                <img
                  src="/assets/image/products/Denyo.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "50px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Welder generator
                </p>
              </div>

              <div>
                <ul className="product-key-point-list">
                  <li>Fuel economy</li>
                  <li>High efficiency for remote welding</li>
                  <li>Duty cycle of 100% realized</li>
                  <li>Automatic standby and auto start feature</li>
                  <li>Automatic engine rpm control</li>
                  <li>
                    Dual head welding setup available. (Selective models only)
                  </li>
                  <li>Compact design for easy mobility</li>
                  <li>Easy maintenance</li>
                  <li>
                    Can also be used as regular generator for power delivery
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-4 mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    Denyo's engine-driven welders are not only simple to
                    operate, but they also produce quality results. They are
                    also long-lasting, adaptable, energy-efficient, and
                    reasonably priced. Denyo has continued to develop engine
                    welders that satisfy all of these requirements since its
                    inception in 1948. Denyo products are utilized not only in
                    the construction and manufacturing industries, but also on
                    oil and gas and mining sites. Denyo provides extraordinary
                    performance and toughness that is unique to Japanese
                    products, and it has been utilized in both severely cold
                    wilderness and extremely hot desert. Denyo is always at your
                    side, assisting you in producing your best work.
                    <br />
                    <a href="www.sg.denyogroup.com">www.sg.denyogroup.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="product-block">
          <div className="container-fluid">
            <p className="product-block-title">Welder Generators</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name"> DLW-300LS</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name"> DLW-300LSW2</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name"> DLW-400LSW</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name"> DCW-480ESW</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card border-0">
                <div className=" shadow">
                  <Brochures />
                  <div className="brochures-name">
                    {brochures.map((item) => (
                      <div key={item.key}>
                        <a href={item.pdf} className="brochures-download">
                          <div className="row">
                            <div className="col-sm-2">
                              <div className="text-center">
                                <img
                                  src={item.thumbnail}
                                  className=""
                                  alt="Sheet Pile Driven"
                                  style={{ height: "50px", width: "30px" }}
                                />
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <p className="pt-3">{item.title}</p>
                            </div>
                            <div className="col-sm-2">
                              <div className="pt-3">
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSlider />
    </section>
  );
}

export default WelderGenerator;
