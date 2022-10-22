import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";
function DieselGenerator() {
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
        <h1 className="text-center page-title">Diesel Generator</h1>
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
                  Diesel Generator
                </p>
              </div>

              <div>
                <p className="product-key-point-title">
                  Unique features of Denyo Generator:
                </p>
                <ul className="product-key-point-list">
                  <li>
                    Continuous power delivery for 240 hours at 70% load.
                    (Service to service)
                  </li>
                  {/* <li>12 hours power delivery at 80% load.</li> */}
                  <li>Low fuel consumption</li>
                  <li>Low sound operations</li>
                  <li>
                    Operational sounds lower than 45 dB(A). (Mālie models only)
                  </li>
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
                    Denyo is one of the market leading generator manufacturers
                    in the world. Their product praised for the robust
                    manufacturing, high reliability and long-lasting service.
                    Denyo has a wide range of products for different
                    applications. These generators range from 5kVA up to
                    1100kVA. These generators use engines sourced from a few
                    high-end diesel experts of Japan namely Komatsu, Mitsubishi,
                    Yanmar, Kobuta, Isuzu. The alternators and genset assemblies
                    are designed, developed, and manufactured at Denyo in Japan
                    with exception of some smaller models (up to 125) being
                    manufactured at Denyo’s factory in Indonesia and Vietnam.
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
            <p className="product-block-title">DIESEL GENERATOR EQUIPMENT</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center">
                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-2">
                  <p className="product-description-name">DCA-45USKE</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name">Malie DCA-45MZ</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name"> DCA-25USIE</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name"> DA-6000SS</p>
                </div>
                <div className="col-md-2">
                  <p className="product-description-name"> DCA-6LSX</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* <section className="pt-5 pb-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row justyify-content-center">
                <div className="col-md-6">
                </div>
               </div> 
            </div>
          </div>
        </div>
      </section> */}

      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card border-0">
                <div className="shadow">
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

export default DieselGenerator;
