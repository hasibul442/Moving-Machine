import React from "react";
import "./services.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
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
      <div className="services-bg">
        <h1 className="text-center page-title">Repair & Maintenance</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-8"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="">
                <h5 className="mml-title px-4 py-3" style={{ fontSize: "23px" }}>After Sales Services </h5>
                <p className="px-4 pb-3 justify-content-center geo_consult-content-text">
                  Moving Machines Limited believes after
                  sales services makes the difference in the business of
                  machines and equipment. During warranty period, MML provides
                  free services for all the equipment. MML wants to brand itself
                  as the champion service company through a skilled and
                  customer-centric service team. We are committed in keeping our
                  affiliate branded equipment running in prime condition as long
                  as possible. Our service team checks upon your equipment time
                  to time to check its condition. We will notify you about any
                  possibilities of breakdown before it happens to keep your
                  projects flowless.
                </p>
              </div>
              <div className=" mt-2">
              <h4 className="mml-title px-4 py-3" style={{ fontSize: "23px" }}>Paid Services </h4>
                <p className="px-4 pb-3 justify-content-center geo_consult-content-text">
                Moving Machines also provides repair and maintenance to almost all types of construction and industrial equipment. Our repair and maintenance team are highly skilled about cranes, crawlers, bulldoggers, excavators, heavy trucks, RMC trucks, truck cranes alongside the product line of MML.
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/services-1.png"
                    className="img-fluid"
                    alt="Geological Consultancy"
                   
                  />
                </div>
              </div>
            </div>

            {/* <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/services-1.png"
                    className="img-fluid"
                    alt="Geological Consultancy"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className=""></div>
              <div className="geo_consult-text">
                <h2 className="mml-title text-center pt-5">Vision</h2>
                <p className="p-5 geo_consult-content-text">
                  <b style={{ color: "#ED2226" }}>Moving Machines Limited</b>{" "}
                  believes after sales services makes the difference in the
                  business of machines and equipment. MML wants to brand itself
                  as the champion service company through a skilled and
                  customer-centric service team. Thus, our service team is
                  committed to provide prompt and effective service with an
                  objective to delight customers.
                </p>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className=""></div>
              <div className="geo_consult-text">
                <h2 className="mml-title text-center pt-5">Vision</h2>
                <p className="p-5 geo_consult-content-text">
                  <b style={{ color: "#ED2226" }}>Moving Machines Limited</b>{" "}
                  believes after sales services makes the difference in the
                  business of machines and equipment. MML wants to brand itself
                  as the champion service company through a skilled and
                  customer-centric service team. Thus, our service team is
                  committed to provide prompt and effective service with an
                  objective to delight customers.
                </p>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/services-1.png"
                    className="img-fluid"
                    alt="Geological Consultancy"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
