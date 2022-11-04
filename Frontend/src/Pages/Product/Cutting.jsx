import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";

function Cutting() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: true,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brochures = [
    {
      key: "1",
      title: "ESAB - MACHINE OVERVIEW",
      pdf: "/assets/image/brochures/Esab-c/1.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/1.png",
    },
    {
      key: "2",
      title: "ESAB-A-Series-Fact Sheet",
      pdf: "/assets/image/brochures/Esab-c/2.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/2.png",
    },
    {
      key: "3",
      title: "ESAB-A-Series-Low Power Plasma System",
      pdf: "/assets/image/brochures/Esab-c/3.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/3.png",
    },
    {
      key: "4",
      title: "ESAB-Crossbow HD-Portable & Flexible CNC Cutting Machine",
      pdf: "/assets/image/brochures/Esab-c/4.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/4.png",
    },
    {
      key: "5",
      title: "ESAB-DMX-Plasma Beveling System",
      pdf: "/assets/image/brochures/Esab-c/5.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/5.png",
    },
    {
      key: "6",
      title: "ESAB-iSeries System-Plasma Cutting Control System",
      pdf: "/assets/image/brochures/Esab-c/6.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/6.png",
    },
    {
      key: "7",
      title: "ESAB-iSGM-CNC Gantry Cutting Machine",
      pdf: "/assets/image/brochures/Esab-c/7.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/7.png",
    },
    {
      key: "8",
      title: "ESAB-PUG-Portable Cutting Machine",
      pdf: "/assets/image/brochures/Esab-c/8.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/8.png",
    },
    {
      key: "9",
      title: "ESAB-Suprarex-CNC Plasma Cutting Machine",
      pdf: "/assets/image/brochures/Esab-c/9.pdf",
      thumbnail: "/assets/image/brochures/Esab-c/9.png",
    },
  ];
  // console.log(data);
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Cutting Machine</h1>
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
                <p className="product-name text-center mb-5">Cutting Machine</p>
              </div>
              <div>
                <p className="product-key-point-title">
                  {/* Advantages of ESAB cutting Machine: */}
                </p>
                <ul className="product-key-point-list">
                  <li>Cutting-edge CNC technology</li>
                  <li>
                    Compact design with CNC control ideal for small business
                  </li>
                  <li>High-tech Plasma technology for efficient cutting</li>
                  <li>
                    Water Plasma technology which brings down consumption of gas
                  </li>
                  <li>Multi-head gantry design for versatility of cutting</li>
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
                    ESAB cutting-edge, world-class equipment and solutions are
                    designed with client input and produced with the skills and
                    tradition of a global manufacturing leader. Over the time
                    they have become one of the world’s leading production
                    companies for cutting equipment and consumables.
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
            <p className="product-block-title">CUTTING MACHINE's</p>

            <section className="product-image">
              <div className="row align-items-end justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-c/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Global Oxy-Fuel IR-CBU Pro
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-c/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Suprarex™ HDX</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-c/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      A-Series Power Supply
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Esab-c/5.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      m2 200i Plasma Cutting Systems
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

export default Cutting;
