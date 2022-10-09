import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function MountedCrane() {
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
        <h1 className="text-center page-title">Truck-Mounted Crane</h1>
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
                  src="/assets/image/products/unic.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Crane</p>
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
                    <span style={{ fontWeight: "bold" }}>FURUKAWA UNIC's</span>{" "}
                    strength is distinguished by its superior quality and
                    technology. Since the introduction of the first
                    truck-mounted crane in Japan in 1961, they have been
                    developing new technologies to fulfill the demands of the
                    customers while also improving in quality. They provide a
                    wide range of truck mounted cranes. Truck mounted cranes
                    work like a two in one vehicle, providing the facility of
                    both carrying and lifting heavy goods. These trucks are
                    designed to be well balanced and easily maneuverable.{" "}
                    <span style={{ fontWeight: "bold" }}>UNIC</span> cranes are
                    straight-boom type cranes which provide greater accuracy of
                    reach over obstacles and straight and stable lifting
                    ability.
                    <span style={{ fontWeight: "bold" }}>UNIC</span> also have
                    compact crawler crane for challenging terrains.
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
            TRUCK-MOUNTED CRANE EQUIPMENT & CUSTOMIZED SOLUTIONS{" "}
            </p>

            <section className="product-image">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <p className="product-description-name">URV290</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name">URV550K-TH</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name">URV550H</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name">URV800</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name">URV1004-CNCT</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <p className="product-description-name">UR1504</p>
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/6.png"
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

export default MountedCrane;
