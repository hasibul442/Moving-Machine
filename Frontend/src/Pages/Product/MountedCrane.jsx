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
    window.scrollTo(0, 0);
  }, []);

  const brochures = [
    {
      key: "1",
      title: "UNIC 3T Long UR-V370 C-1919",
      pdf: "/assets/image/brochures/Unic/1.pdf",
      thumbnail: "/assets/image/brochures/Unic/1.png",
    },
    {
      key: "2",
      title: "UNIC 3T Medium UR-V340 C-1918",
      pdf: "/assets/image/brochures/Unic/2.pdf",
      thumbnail: "/assets/image/brochures/Unic/2.png",
    },
    {
      key: "3",
      title: "UNIC 3T Short UR-V290 C-1917",
      pdf: "/assets/image/brochures/Unic/3.pdf",
      thumbnail: "/assets/image/brochures/Unic/3.png",
    },
    {
      key: "4",
      title: "UNIC 5T UR-V550K-TH C-1946",
      pdf: "/assets/image/brochures/Unic/4.pdf",
      thumbnail: "/assets/image/brochures/Unic/4.png",
    },
    {
      key: "5",
      title: "UNIC 8T UR-V800 C-1883",
      pdf: "/assets/image/brochures/Unic/5.pdf",
      thumbnail: "/assets/image/brochures/Unic/5.png",
    },
    {
      key: "6",
      title: "UNIC 10T UR-V1004 C-1977",
      pdf: "/assets/image/brochures/Unic/6.pdf",
      thumbnail: "/assets/image/brochures/Unic/6.png",
    },
    {
      key: "7",
      title: "UNIC 13.6T UR-1504 C-1652",
      pdf: "/assets/image/brochures/Unic/7.pdf",
      thumbnail: "/assets/image/brochures/Unic/7.png",
    },
    {
      key: "8",
      title: "UNIC minicrawler C-2004A",
      pdf: "/assets/image/brochures/Unic/8.pdf",
      thumbnail: "/assets/image/brochures/Unic/8.png",
    },
  ];
  return (
    <section>
      <section className="product-bg">
        <h1 className="text-center page-title">Truck-Mounted Crane</h1>
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
                  src="/assets/image/products/unic.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Truck-Mounted Crane
                </p>
              </div>

              <div>
                <p className="product-key-point-title"></p>
                <ul className="product-key-point-list">
                  <li>Design Philosophy to Pursue High Standards </li>
                  <li>Built on order</li>
                  <li>Thorough Quality Control</li>
                  <li>Diversity of Mounting Methods</li>
                  <li>Compatible with wide range of trucks</li>
                  <li>Compact design, can operate in tight space</li>
                  <li>Highly reliable Japanese construction.</li>
                  <li>Simplistic mechanical design for easy maintenance</li>
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
                    FURUKAWA UNIC's strength is distinguished by its superior
                    quality and technology. Since introducing the first
                    truck-mounted crane in Japan in 1961, the company has been
                    developing new technologies to satisfy the needs of its
                    customers while also improving crane quality. Truck-mounted
                    cranes are cargo-handling machines that are capable of
                    lifting, loading, transporting, and performing other tasks
                    with a single crane and the cargo truck on which the crane
                    is mounted. A single truck-mounted crane may execute
                    numerous functions that would ordinarily necessitate the use
                    of two different types of mobile cranes; loading and
                    unloading are often performed by truck cranes, while cargo
                    transit is typically handled by a cargo truck. As a result,
                    truck-mounted cranes offer a considerable cost benefit since
                    they combine the efficiency of two types of mobile cranes in
                    a single unit, lowering purchase prices, rental fees, and
                    fuel expenses.
                    <br />
                    <a href="https://www.uniccrane-global.com">
                      www.uniccrane-global.com
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
            <p className="product-block-title">TRUCK-MOUNTED CRANEs</p>

            <section className="product-image">
              <div className="row align-items-end  justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/1.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">URV290</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/2.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">URV550K-TH</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <img
                      src="/assets/image/product-description/Unic/4.png"
                      alt=""
                      className="img-fluid product-details-image"
                    />
                    <p className="product-description-name">URV800</p>
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

export default MountedCrane;
