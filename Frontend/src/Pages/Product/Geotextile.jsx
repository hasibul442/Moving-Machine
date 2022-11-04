import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function Geotextile() {
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
        <h1 className="text-center page-title">Geotextile</h1>
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
                  src="/assets/image/products/tencate.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "45px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Geotextile</p>
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
                  Every year, Lillbacka Powerco Oy produces thousands of crimping machines, as well as hose cutting and nut crimping equipment. Finn-Power is well-known for its high-quality, long-lasting hydraulic crimping machines, which are manufactured by Lillbacka Powerco, a Finnish company with over 50 years of manufacturing expertise. The company provides dependable, long-lasting, and precise crimping machines to fulfill the needs of various sectors. Finn-Power crimping machines are built with cutting-edge manufacturing equipment and technology. Precision made parts, along with engineering and assembly experience, as well as quality control and final testing methods, result in dependable and precise crimping machines for your production needs.
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
            <p className="product-block-title">Few Grotextiles</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Mirafi® PET</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Polyfelt® TS & KET</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                    Polyfelt® Heavy Duty TS & KE
                  </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Polyfelt® F</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-2">
                  
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

export default Geotextile;
