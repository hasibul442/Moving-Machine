import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Brochures from "../../Component/Brochures/Brochures";
function Crimping() {
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
      title: "Crimping HeavyDuty",
      pdf: "/assets/image/brochures/Lillbacka/1.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/1.png",
    },
    {
      key: "2",
      title: "Crimping HeavyDuty KC800",
      pdf: "/assets/image/brochures/Lillbacka/2.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/2.png",
    },
    {
      key: "3",
      title: "Crimping HeavyDuty KC2000",
      pdf: "/assets/image/brochures/Lillbacka/3.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/3.png",
    },
    {
      key: "4",
      title: "Crimping Nut & Cable CC22",
      pdf: "/assets/image/brochures/Lillbacka/4.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/4.png",
    },
    {
      key: "5",
      title: "Crimping Nut & Cable CC26",
      pdf: "/assets/image/brochures/Lillbacka/5.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/5.png",
    },
    {
      key: "6",
      title: "Crimping Nut & Cable NC20",
      pdf: "/assets/image/brochures/Lillbacka/6.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/6.png",
    },
    {
      key: "7",
      title: "Crimping Nut & Cable NC30",
      pdf: "/assets/image/brochures/Lillbacka/7.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/7.png",
    },
    {
      key: "8",
      title: "Crimping Nut & Cable NC40",
      pdf: "/assets/image/brochures/Lillbacka/8.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/8.png",
    },
    {
      key: "9",
      title: "Crimping Nut & Cable NC60",
      pdf: "/assets/image/brochures/Lillbacka/9.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/9.png",
    },
    {
      key: "10",
      title: "Crimping Service_P16HP",
      pdf: "/assets/image/brochures/Lillbacka/10.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/10.png",
    },
    {
      key: "11",
      title: "Crimping Service_P20AP",
      pdf: "/assets/image/brochures/Lillbacka/11.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/11.png",
    },
    {
      key: "12",
      title: "Crimping Service_P20CS",
      pdf: "/assets/image/brochures/Lillbacka/12.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/12.png",
    },
    {
      key: "13",
      title: "Crimping Service_P20HP",
      pdf: "/assets/image/brochures/Lillbacka/13.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/13.png",
    },
    {
      key: "14",
      title: "Crimping Service_P20NMS",
      pdf: "/assets/image/brochures/Lillbacka/14.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/14.png",
    },
    {
      key: "15",
      title: "Crimping Service_P20X",
      pdf: "/assets/image/brochures/Lillbacka/15.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/15.png",
    },
    {
      key: "16",
      title: "Crimping Service_P32CS",
      pdf: "/assets/image/brochures/Lillbacka/16.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/16.png",
    },
    {
      key: "17",
      title: "Crimping Service_P32NMS",
      pdf: "/assets/image/brochures/Lillbacka/17.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/17.png",
    },
    {
      key: "18",
      title: "Crimping Service_P32X",
      pdf: "/assets/image/brochures/Lillbacka/18.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/18.png",
    },
    {
      key: "19",
      title: "Crimping Service_P51",
      pdf: "/assets/image/brochures/Lillbacka/19.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/19.png",
    },
    {
      key: "20",
      title: "Crimping Service_P60",
      pdf: "/assets/image/brochures/Lillbacka/20.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/20.png",
    },
    {
      key: "21",
      title: "Crimping SideFeed_SP100",
      pdf: "/assets/image/brochures/Lillbacka/21.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/21.png",
    },
    {
      key: "22",
      title: "Crimping SideFeed_SP350",
      pdf: "/assets/image/brochures/Lillbacka/22.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/22.png",
    },
    {
      key: "23",
      title: "Crimping SideFeed_SP1200",
      pdf: "/assets/image/brochures/Lillbacka/23.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/23.png",
    },
    {
      key: "24",
      title: "Crimping SideFeed_SP2000",
      pdf: "/assets/image/brochures/Lillbacka/24.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/24.png",
    },
    {
      key: "25",
      title: "Crimping SideFeed_SP5000",
      pdf: "/assets/image/brochures/Lillbacka/25.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/25.png",
    },
    {
      key: "26",
      title: "Crimping Workshop_CM30",
      pdf: "/assets/image/brochures/Lillbacka/26.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/26.png",
    },
    {
      key: "27",
      title: "Crimping Workshop_CM30CS",
      pdf: "/assets/image/brochures/Lillbacka/27.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/27.png",
    },
    {
      key: "28",
      title: "Crimping Workshop_CM35",
      pdf: "/assets/image/brochures/Lillbacka/28.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/28.png",
    },
    {
      key: "29",
      title: "Crimping Workshop_CM75",
      pdf: "/assets/image/brochures/Lillbacka/29.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/29.png",
    },
    {
      key: "30",
      title: "Crimping Workshop_CM75_SAFE",
      pdf: "/assets/image/brochures/Lillbacka/30.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/30.png",
    },
    {
      key: "31",
      title: "Crimping Workshop_CM75QT",
      pdf: "/assets/image/brochures/Lillbacka/31.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/31.png",
    },
    {
      key: "32",
      title: "Crimping Workshop_CM91",
      pdf: "/assets/image/brochures/Lillbacka/32.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/32.png",
    },
    {
      key: "33",
      title: "Crimping Workshop_CM91_SAFE",
      pdf: "/assets/image/brochures/Lillbacka/33.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/33.png",
    },
    {
      key: "34",
      title: "Skiving Workshop_FS50",
      pdf: "/assets/image/brochures/Lillbacka/34.pdf",
      thumbnail: "/assets/image/brochures/Lillbacka/34.png",
    },
    
  ];

  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Crimping Machine</h1>
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
                  src="/assets/image/products/lillbacka.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "55px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Crimping Machine
                </p>
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
                    Every year, Lillbacka Powerco Oy produces thousands of
                    crimping machines, as well as hose cutting and nut crimping
                    equipment. Finn-Power is well-known for its high-quality,
                    long-lasting hydraulic crimping machines, which are
                    manufactured by Lillbacka Powerco, a Finnish company with
                    over 50 years of manufacturing expertise. The company
                    provides dependable, long-lasting, and precise crimping
                    machines to fulfill the needs of various sectors. Finn-Power
                    crimping machines are built with cutting-edge manufacturing
                    equipment and technology. Precision made parts, along with
                    engineering and assembly experience, as well as quality
                    control and final testing methods, result in dependable and
                    precise crimping machines for your production needs.
                    <br />
                    <a href="https://www.finnpower.fi">www.finnpower.fi</a>
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
            <p className="product-block-title">CRIMPING MACHINES</p>

            <section className="product-image">
              <div className="row align-items-end justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Lillbacka/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">P20CS SCC</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Lillbacka/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">IM2</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Lillbacka/3.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">P32CS SCC</p>
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

export default Crimping;
