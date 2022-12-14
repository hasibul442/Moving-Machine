import React from "react";
import "./geologicalconsultancy.css";

import AOS from "aos";
import "aos/dist/aos.css";

function GeologicalConsultancy() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: false,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="geological-bg">
        <h1 className="text-center page-title">Geological Consultancy</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container ">
          {/* <h2 className="mml-title text-center mb-5">Get In Touch</h2> */}

          <div className="row">
            <div className="col-md-6"   data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/geo-1.jpg"
                    className="img-fluid geo-img"
                    alt="Geological Consultancy"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 "   data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="geo_consult-text">
                <p className="p-5 geo_consult-content-text">
                  We provide independent geoscientific assessment of onshore and
                  offshore oil and gas. Our team has extensive experience in
                  assessing these natural resources needed in our society. We
                  are committed to providing critical advice and workable
                  solutions for sustainable management of oil and gas reserves
                  for the rapidly developing economy of Bangladesh.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 "   data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="geo_consult-text">
                <p className="p-5 geo_consult-content-text">
                  Our team is built with industry-recognized experts in oil and
                  gas sectors in Bangladesh. The team is also supported by
                  internally reputed consultant companies for feasibility
                  studies, development, exploration, optimization, restoration
                  and after use. We also can unlock the potential value in oil
                  and gas operations. We can advise our clients appropriately at
                  every stage of unique challenges in their projects.
                </p>
              </div>
            </div>

            <div className="col-md-6"   data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
            <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/geo-2.jpg"
                    className="img-fluid geo-img"
                    alt="Geological Consultancy"
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

export default GeologicalConsultancy;
