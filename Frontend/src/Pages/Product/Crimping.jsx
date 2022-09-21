import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Crimping() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">Crimping Machine</h1>
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
              <div className="text-center  my-5">
                <img
                  src="/assets/image/products/lillbacka.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "55px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Crimping Machines
                </p>
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
                    Every year,{" "}
                    <span style={{ fontWeight: "bold" }}>Lillbacka </span>{" "}
                    Powerco Oy produces thousands of crimping machines, as well
                    as hose cutting and nut crimping equipment. Finn-Power is
                    well-known for its high-quality, long-lasting hydraulic
                    crimping machines, which are manufactured by{" "}
                    <span style={{ fontWeight: "bold" }}>Lillbacka </span>{" "}
                    Powerco, a Finnish company with over 50 years of
                    manufacturing expertise. They provide dependable,
                    long-lasting, and precise crimping machines to fulfill the
                    needs of various sectors. Finn-Power crimping machines are
                    built with cutting-edge manufacturing equipment and
                    technology. Precision made parts, along with our engineering
                    and assembly experience, as well as our quality control and
                    final testing methods, result in dependable and precise
                    crimping machines for your production needs.
                  </p>
                </div>
              </div>
            </div>
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
                  <div className="brochures-header">
                    <h2 className="text-center py-3 brochures-title">
                      Brochures
                    </h2>
                  </div>
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
    </>
  );
}

export default Crimping;
