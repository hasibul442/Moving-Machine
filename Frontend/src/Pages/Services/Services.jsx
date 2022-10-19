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
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="services-bg">
        <h1 className="text-center page-title">Repair & Maintenance</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className=""></div>
              <div className="geo_consult-text">
                {/* <h2 className="mml-title text-center pt-5">Vision</h2> */}
                <p className="p-5 geo_consult-content-text">
                    <b style={{ color: "#ED2226" }}>Moving Machines Limited</b> believes after sales services makes
                    the difference in the business of machines and equipment.
                    MML wants to brand itself as the champion service company
                    through a skilled and customer-centric service team. Thus,
                    our service team is committed to provide prompt and
                    effective service with an objective to delight customers.
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
            </div>

            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className=""></div>
              <div className="geo_consult-text">
                {/* <h2 className="mml-title text-center pt-5">Vision</h2> */}
                <p className="p-5 geo_consult-content-text">
                    <b style={{ color: "#ED2226" }}>Moving Machines Limited</b> believes after sales services makes
                    the difference in the business of machines and equipment.
                    MML wants to brand itself as the champion service company
                    through a skilled and customer-centric service team. Thus,
                    our service team is committed to provide prompt and
                    effective service with an objective to delight customers.
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
                {/* <h2 className="mml-title text-center pt-5">Vision</h2> */}
                <p className="p-5 geo_consult-content-text">
                    <b style={{ color: "#ED2226" }}>Moving Machines Limited</b> believes after sales services makes
                    the difference in the business of machines and equipment.
                    MML wants to brand itself as the champion service company
                    through a skilled and customer-centric service team. Thus,
                    our service team is committed to provide prompt and
                    effective service with an objective to delight customers.
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
            </div>

          </div>
        </div>
      </div>

    
    </section>
  );
}

export default Services;
