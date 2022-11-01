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
                <p className="product-key-point-title">MOVAX solutions are:</p>
                <ul className="product-key-point-list">
                  <li>
                    Fastest way to handle, pitch, drive, and extract piles
                  </li>
                  <li>
                    High accuracy due to excavator mounting and side grip
                    driving
                  </li>
                  <li>High level control and efficiency</li>
                  <li>High degree of maneuverability</li>
                  <li>Versatility of operational area</li>
                  <li>Unmatched safety </li>
                  <li>Designed and manufactured in Europe</li>
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
                  MOVAX is a world-leading developer and manufacturer of excavator-mounted, automatically controlled piling and foundation equipment - and the inventor of the patented, modular side grip technology. MOVAX Side grip pile drivers are excavator-mounted, high-frequency, vibratory-type pile drivers that provide the best solution for a wide range of piling requirements, particularly when a high degree of precision is required; and for piling in sensitive environments with limited space, head room, or access.
                    <br />
                    The same unit can handle, pitch, drive, and extract various types of piles and can complete the whole piling process without the use of physical handling or auxiliary technology.
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
              <div className="row align-items-end justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Piling Drills</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">PILING HAMMERS</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Movax/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Side Grip Pile Drivers</p>
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
                    <a
                      href="/assets/image/brochures/Airman/Airman-PDS-series.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Airman/Air-T.gif"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Engine Compressor PDS Series</p>
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
