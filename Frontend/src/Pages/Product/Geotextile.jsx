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

  const brochures = [
    {
      key: "1",
      title: "Gen Broc -  Geosynthetics For Mining Infrastructure (100 338 gb 0520)",
      pdf: "/assets/image/brochures/Tencate/1.pdf",
      thumbnail: "/assets/image/brochures/Tencate/1.png",
    },
    {
      key: "2",
      title: "Gen Broc - Geosynthetics for Sludge Pond Capping",
      pdf: "/assets/image/brochures/Tencate/2.pdf",
      thumbnail: "/assets/image/brochures/Tencate/2.png",
    },
    {
      key: "3",
      title: "Gen Broc - Subgrade Stabilization (200 311-gb-0216)",
      pdf: "/assets/image/brochures/Tencate/3.pdf",
      thumbnail: "/assets/image/brochures/Tencate/3.png",
    },
    {
      key: "4",
      title: "Gen Broc -Basal Reinforcement (100 300-gb-0412)",
      pdf: "/assets/image/brochures/Tencate/4.pdf",
      thumbnail: "/assets/image/brochures/Tencate/4.png",
    },
    {
      key: "5",
      title: "Gen Broc -Enviromat Geosynthetic Clay Liners GCL (100 336-gb)",
      pdf: "/assets/image/brochures/Tencate/5.pdf",
      thumbnail: "/assets/image/brochures/Tencate/5.png",
    },
    {
      key: "6",
      title: "Gen Broc -Environmental Sustainability (100 302-gb-1012)",
      pdf: "/assets/image/brochures/Tencate/6.pdf",
      thumbnail: "/assets/image/brochures/Tencate/6.png",
    },
    {
      key: "7",
      title: "Gen Broc -Erosion Control with High Performance Turf Reinforcement Mat",
      pdf: "/assets/image/brochures/Tencate/7.pdf",
      thumbnail: "/assets/image/brochures/Tencate/7.png",
    },
    {
      key: "8",
      title: "Gen Broc -Infrastructure (100 303-gb-1115)",
      pdf: "/assets/image/brochures/Tencate/8.pdf",
      thumbnail: "/assets/image/brochures/Tencate/8.png",
    },
    {
      key: "9",
      title: "Gen Broc -Slope & Wall Reinforcement (100 301-gb-1012)",
      pdf: "/assets/image/brochures/Tencate/9.pdf",
      thumbnail: "/assets/image/brochures/Tencate/9.png",
    },
    {
      key: "10",
      title: "Gen Broc -Soft Foundation Consolidation (100 336-gb)",
      pdf: "/assets/image/brochures/Tencate/10.pdf",
      thumbnail: "/assets/image/brochures/Tencate/10.png",
    },
    {
      key: "11",
      title: "Geotube Brochure For Municipal Sludge Dewatering",
      pdf: "/assets/image/brochures/Tencate/11.pdf",
      thumbnail: "/assets/image/brochures/Tencate/11.png",
    },
    {
      key: "12",
      title: "Geotube Brochure For Palm Oil Mill Effluent Sludge Dewatering (POME)",
      pdf: "/assets/image/brochures/Tencate/12.pdf",
      thumbnail: "/assets/image/brochures/Tencate/12.png",
    },
    {
      key: "13",
      title: "Geotube Coastal & Marine Engineering",
      pdf: "/assets/image/brochures/Tencate/13.pdf",
      thumbnail: "/assets/image/brochures/Tencate/13.png",
    },
    {
      key: "14",
      title: "Geotube Dewatering for Mining and Mineral",
      pdf: "/assets/image/brochures/Tencate/14.pdf",
      thumbnail: "/assets/image/brochures/Tencate/14.png",
    },
    {
      key: "15",
      title: "Geotube Industrial Fabrics Dewatering Systems",
      pdf: "/assets/image/brochures/Tencate/15.pdf",
      thumbnail: "/assets/image/brochures/Tencate/15.png",
    },
    {
      key: "16",
      title: "Geotube Waterways & Impoundments",
      pdf: "/assets/image/brochures/Tencate/16.pdf",
      thumbnail: "/assets/image/brochures/Tencate/16.png",
    },
    {
      key: "17",
      title: "Leaflet -GT Deebag (600 703-lf-0313)",
      pdf: "/assets/image/brochures/Tencate/17.pdf",
      thumbnail: "/assets/image/brochures/Tencate/17.png",
    },
  ];

  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Geosynthetics</h1>
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
                <p className="product-name text-center mb-5">
                  Geosynthetics <br />
                  (SOLMAX)
                </p>
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
                    TenCate Geosynthetics (SOLMAX) is the world’s leading
                    provider of geosynthetics and industrial fabrics. TENCATE
                    Geosynthetics offers a worldwide manufacturing platform, a
                    commercial and technical organization, and has effectively
                    consolidated and grown key markets to optimize client value.
                    TENCATE Geosynthetics develop, manufacture, and provide
                    innovative and dependable geosynthetics by processing
                    synthetic raw materials. In Asia, TENCATE Geosynthetics
                    headquarter is located in Malaysia having manufacturing
                    facilities in Selengor, Malaysia and Zhuhai, China. <br />
                    <a href="https://www.tencategeo.asia/en-as/">
                      www.tencategeo.asia/en-as/
                    </a>
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
            <p className="product-block-title">Few TENCATE Geosynthetics Products</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Mirafi® PP (Woven)
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">
                      Polyfelt® Envirocell (Geocell)
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Miragrid GX</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Tencate/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">Tancate® Geotube</p>
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

export default Geotextile;
