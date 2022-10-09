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
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">
          Welder generator/Engine welder
        </h1>
      </section>

      <section className="product-info-background">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-6 mt-5"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center my-5">
                <img
                  src="/assets/image/products/Denyo.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "50px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Engine Welder</p>
              </div>
            </div>

            <div
              className="col-md-6 mt-5"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    <span style={{ fontWeight: "bold" }}>Denyo</span> engines
                    are known for their durability, versatility and fuel/energy
                    efficiency. Since foundation of the company in 1948,{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> is making
                    engine driven welder generators.{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> offer the
                    excellent performance and ruggedness unique to Japanese
                    products and have a track record of use in extremely cold
                    wilderness and extremely hot desert. With their over 70
                    years of manufacturing experience,{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> have
                    become one of the main market leaders in the world. Their
                    product line includes both petrol and diesel version which
                    uses high-quality engine from YAMAHA (petrol), Kubota
                    (Diesel) or Yanmar (Diesel) depending on model variation.
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
            <p className="product-block-title">
              ENGINE WELDER EQUIPMENT & CUSTOMIZED SOLUTIONS{" "}
            </p>

            <section className="product-image">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <p className="product-description-name"> DCW-480ESW</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name"> DLW-200X2LS</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name"> DLW-300LS</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name"> DLW-300LSW2</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name"> DLW-400LSW</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-w/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
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

export default WelderGenerator;
