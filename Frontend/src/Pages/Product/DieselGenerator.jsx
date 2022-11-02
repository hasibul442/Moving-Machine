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
                  Features of Denyo Generator:
                </p>
                <ul className="product-key-point-list">
                  <li>Continuous power delivery</li>
                  <li>Easy maintenance </li>
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
                    Denyo is a renowned manufacturer of engine-driven generators
                    with a strong market presence. These units are highly useful
                    in locations where traditional power supply infrastructure
                    is absent. There are many different versions of
                    engine-driven generators available, ranging from 0.9kVA to
                    1,100kVA. There are also primary and emergency generators
                    available. Denyo's generators are long-lasting,
                    energy-efficient, and soundproof, thanks to cutting-edge
                    technology and creativity.
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
            <p className="product-block-title">DIESEL GENERATOR's</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">DCA-6LSX</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">DCA-1100SPK</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Deyno-g/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Malie DCA-45MZ</p>
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
                <div className="shadow">
                  <Brochures />
                  <div className="brochures-name">
                    <a
                      href="/assets/image/brochures/Denyo-G/1.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Denyo-G/1.png"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Denyo 5.5kVA single phase</p>
                        </div>
                        <div className="col-sm-2">
                          <div className="pt-3">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <hr />

                    <a
                      href="/assets/image/brochures/Denyo-G/2.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Denyo-G/2.png"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Denyo DCA series-single phase (5kVA to 33kVA)</p>
                        </div>
                        <div className="col-sm-2">
                          <div className="pt-3">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <hr />
                    
                    <a
                      href="/assets/image/brochures/Denyo-G/3.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Denyo-G/3.png"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Denyo DCA series-three phase (10.5kVA to 1100kVA)</p>
                        </div>
                        <div className="col-sm-2">
                          <div className="pt-3">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <hr />
                    
                    <a
                      href="/assets/image/brochures/Denyo-G/4.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Denyo-G/4.png"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Denyo DCA Ultra silent (20 and 37kVA three phase)</p>
                        </div>
                        <div className="col-sm-2">
                          <div className="pt-3">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <hr />
                                        
                    <a
                      href="/assets/image/brochures/Denyo-G/5.pdf"
                      className="brochures-download"
                    >
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="text-center">
                            <img
                              src="/assets/image/brochures/Denyo-G/5.png"
                              className=""
                              alt="Sheet Pile Driven"
                              style={{ height: "50px", width: "30px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <p className="pt-3">Denyo TLG series (5kVA to 16kVA single and three phase)</p>
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

export default DieselGenerator;
