import React from "react";
import "./rental.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Rental() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: false,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="rental-bg">
        <h1 className="text-center page-title">Rental Services</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container ">
          <p className="rental-text">
            <b style={{ color: "#ED2226" }}>Moving Machine Ltd.</b> has established itself as a fast-growing
            equipment rental service provider. We can provide equipment rental
            service need for{" "}
          </p>

          <div className="row mt-5">
            <div className="col-md-4 mb-3" data-aos="zoom-in">
              <div className="products">
                <div className="card border-0 shadow card-1">
                  <div className="layer"></div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/image/rental/Lifting.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">Lifting</h5>
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
                        src="/assets/image/rental/Earth-Moving.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Earth Moving
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
                        src="/assets/image/rental/pilling.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Sheet-Piling
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
                        src="/assets/image/rental/power.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Power Generation
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 mb-3" data-aos="zoom-in">
              <div className="products">
                <div className="card border-0 shadow card-5">
                  <div className="layer"></div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/image/rental/welding.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Welding
                    </h5>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-md-4 mb-3" data-aos="zoom-in">
              <div className="products">
                <div className="card border-0 shadow card-6">
                  <div className="layer"></div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/image/rental/air.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Air Compressor
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Rental;
