import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function Coolant() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const brochures = [];
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">
          Coolant system & Engine Leak Repair{" "}
        </h1>
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
              <div className="text-center  my-5">
                <img
                  src="/assets/image/products/k-seal.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "45px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Coolant system & Engine Leak Repair
                </p>
              </div>
              {/* <div>
                    <ul className="product-key-point-list">
                      <li>Cost effective</li>
                      <li>Easy to use</li>
                      <li>Versatile</li>
                      <li>Works on all water-cooled engines</li>
                    </ul>
                  </div> */}
            </div>

            <div
              className="col-md-4 mt-5"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    K-Seal, K-Seal HD and K-Seal Ultimate are a one-step
                    permanent multi-purpose system for coolant leak repair. It
                    permanently repairs leaks in the head gasket, block,
                    radiator, heater core, freeze plug and water pump casing.
                    K-Seal is suitable for use with all water-cooled engines
                    including cars, motorbikes, commercial vehicles and heavy
                    machinery. K-Seal products are compatible with all types of
                    antifreeze/coolant and are not affected by other additives
                    that may already be in the cooling system
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
            <p className="product-block-title">The K-Seal product range</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/K-Seal/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name pt-3">K-Seal®</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/K-Seal/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name pt-3">K-Seal® HD</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/K-Seal/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name pt-3">
                      K-Seal® ULTIMATE
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card border-0">
                <div className=" shadow">
                  <div>
                    <div className="brochures-header seven">
                      <h2 className="text-center py-5 brochures-title">
                        Technical Data Sheet
                      </h2>
                    </div>
                  </div>
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
      </div> */}

      <ProductSlider />
    </section>
  );
}

export default Coolant;
