import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";
// import { Link } from "react-router-dom";

function SheetPileDriver() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Sheet Pile Driver</h1>
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
                  src="/assets/image/products/movex.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "50px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Pile Drivers</p>
              </div>
              <div>
                <p className="product-key-point-title">
                MOVAX solutions are:
                </p>
                <ul className="product-key-point-list">
                  <li>Fastest way to handle, pitch, drive, and extract piles</li>
                  <li>High accuracy due to excavator mounting and side grip driving</li>
                  <li>High level control and efficiency. Excavator mounted, can be easily manipulated</li>
                  <li>Higher versatility compared to crane mounted drive</li>
                  <li>Unmatched safety thanks to the side grip technology's intrinsic safety, high-quality manufacturing from Europe</li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-4 mt-5"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text">
                  MOVAX Oy, founded in 1993, is a privately held Finnish company that is a world-leading creator, developer, and manufacturer of excavator-mounted piling and foundation equipment with innovative automatic control systems and information management solutions. MOVAX holds more than 40 patents in innovation of piling equipment sector. Their excavator-mounted piling and foundation equipment has a positive track record of being high quality and being produced in Finland. They provide wide range of products such as, pile drivers, piling hammers, piling drills, multi-tool leaders and stabilization leaders.
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
            <p className="product-block-title">Sheet piling equipment</p>

            <section className="product-image">
              <div className="row align-items-end justify-content-center">
                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-2">
                  <p className="product-description-name">PILE DRIVERS</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name">PILING HAMMERS</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name">PILING DRILLS</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name">PILING DRILLS</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name">PILING DRILLS</p>
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
                  <div className="brochures-name mt-5">
                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-4 bd-highlight">
                          <img
                            src="/assets/image/brochures/b-1.jpg"
                            className=""
                            alt="Sheet Pile Driven"
                            style={{ height: "50px", width: "30px" }}
                          />
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />

                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-4">
                          <img
                            src="/assets/image/brochures/b-1.jpg"
                            className=""
                            alt="Sheet Pile Driven"
                            style={{ height: "50px", width: "30px" }}
                          />
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-4">
                          <img
                            src="/assets/image/brochures/b-1.jpg"
                            className=""
                            alt="Sheet Pile Driven"
                            style={{ height: "50px", width: "30px" }}
                          />
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />
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

export default SheetPileDriver;
