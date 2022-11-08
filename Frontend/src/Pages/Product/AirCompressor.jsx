import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";
function AirCompressor() {
  AOS.init({
    duration: 500,
    delay: 300,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brochures = [
    {
      key: "1",
      title: "Engine Compressor PDS Series",
      pdf: "/assets/image/brochures/Airman/Airman-PDS-series.pdf",
      thumbnail: "/assets/image/brochures/Airman/Air-T.gif",
    },
  ];
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Portable Air Compressor</h1>
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
                  src="/assets/image/products/airman.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  PORTABLE Air Compressor
                </p>
              </div>
              <div>
                {/* <p className="product-key-point-title">Why choose AIRMAN?</p> */}
                <ul className="product-key-point-list">
                  <li>Compact design</li>
                  <li>Low noise</li>
                  <li>Low emissions, thus eco-friendly</li>
                  <li>Highly reliable Japanese quality</li>
                  <li>Easy maintenance</li>
                  <li>High re-sale value</li>
                  <li>Screw type operation for high efficiency</li>
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
                  <p className="product-text text-justify">
                    AIRMAN is the one of the leading manufacturers of portable
                    compressors in the world. Since its inception more than 80
                    years ago, AIRMAN has been making and supplying compressors,
                    and they are skilled of every stage of production, from
                    development to manufacture to support and service. As a
                    comprehensive producer of industrial gear, AIRMAN is able to
                    provide our clients with unique and creative products.
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
            <p className="product-block-title">PORTABLE AIR COMPRESSORs</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Airman/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Standard Type PDS Series
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Airman/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      After-Cooler Type PDS-C Series
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Airman/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Leak Gard Type PDS-L Series
                    </p>
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

export default AirCompressor;
