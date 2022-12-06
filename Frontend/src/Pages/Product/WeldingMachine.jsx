import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function WeldingMachine() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const brochures = [
    {
      key: "1",
      title: "Aristo Feed 3004, 4804 U6 & Aristo U8",
      pdf: "/assets/image/brochures/Esab-w/1.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/1.png",
    },
    {
      key: "2",
      title: "Aristo Mig 5000i Commertial Presentation",
      pdf: "/assets/image/brochures/Esab-w/2.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/2.png",
    },
    {
      key: "3",
      title: "Buddy Mig",
      pdf: "/assets/image/brochures/Esab-w/3.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/3.png",
    },
    {
      key: "4",
      title: "ESAB Flashback Arrestor FRT 2013-08-28",
      pdf: "/assets/image/brochures/Esab-w/4.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/4.png",
    },
    {
      key: "5",
      title: "ESAB India Equipment Product Catalog",
      pdf: "/assets/image/brochures/Esab-w/5.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/5.png",
    },
    {
      key: "6",
      title: "Renegade ET 300iP",
      pdf: "/assets/image/brochures/Esab-w/6.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/6.png",
    },
    {
      key: "7",
      title: "RS400 & RS400S",
      pdf: "/assets/image/brochures/Esab-w/7.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/7.png",
    },
    {
      key: "8",
      title: "TRANSWELD 400",
      pdf: "/assets/image/brochures/Esab-w/8.pdf",
      thumbnail: "/assets/image/brochures/Esab-w/8.png",
    },
  ];
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Welding Machine</h1>
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
                  src="/assets/image/products/esab.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "100px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Welding Machine</p>
              </div>
              <div>
                <p className="product-key-point-title">
                  {/* Advantages of ESAB Welding machines: */}
                </p>
                <ul className="product-key-point-list">
                  <li>Compact Design</li>
                  <li>Electricity efficiency</li>
                  <li>Portability</li>
                  <li>High quality German Technology</li>
                  <li>Simple interface for ease of use</li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-4 mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    ESAB cutting-edge, world-class equipment and solutions are
                    designed with client input and produced with the skills and
                    tradition of a global manufacturing leader. Over the time
                    the company has become one of the world’s leading production
                    companies for welding equipment and consumables.
                    <br />
                    <a href="www.esabindia.com">www.esabindia.com</a>
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
            <p className="product-block-title">WELDING MACHINEs</p>

            <section className="product-image">
              <div className="row align-items-end justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-w/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">RS 400 Rectifier</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-w/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Renegade ES 300i</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-w/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Aristo Mig 5000i/U5000i
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
                <div className="shadow">
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

export default WeldingMachine;
