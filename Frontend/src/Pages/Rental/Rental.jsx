import React from "react";
import "./rental.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Rental() {
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
      <div className="rental-bg">
        <h1 className="text-center page-title">Rental Services</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="">
                {/* <h5 className="mml-title px-4 py-3" style={{ fontSize: "23px" }}>After Sales Services </h5> */}
                <p className="px-4 py-3 justify-content-center aboutus-description-1">
                  Moving Machines considers rental services as one of the most
                  effective ways to support a project to progress smoothly. We
                  are ever willing to provide rental support to meet short-term
                  as well as long-term needs of projects. Our highly skilled
                  professionals are ready to assist customers in recognizing
                  their needs for rent and recommend them the perfect solution.
                  We are always available to assist our customers by providing
                  the right construction equipment in rent at an affordable
                  cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="rental-text-bg">
        <div className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 details1 mt-5 mb-5">
                <h5 className="px-3 pt-3 mml-title" style={{ fontSize: "23px" }}>Why chose Moving Machines</h5>
                <div className="row pb-3">
                  <div className="col-sm-6 aboutus-description-1 ">
                    <ul>
                      <li>Wide range of equipment</li>
                      <li>
                        Integrated import and rental support for heavy equipment
                      </li>
                      <li>
                        All equipment has valid 3rd party inspection certificate
                        and <br /> 1st party insurance
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 aboutus-description-1">
                    <ul>
                      <li>Affordable pricing</li>
                      <li>Ready to assist in challenging difficulties</li>
                      <li>
                        Strong team of operators, technicians and maintenance
                        engineers
                      </li>
                      <li>Technical and breakdown support within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 details1 mt-5 mb-5">
                <p className="px-3 pt-3 mml-title" style={{ fontSize: "23px" }}>List of Equipment</p>
                <div className="row pb-3">
                  <div className="col-sm-4 aboutus-description-1">
                    <ul>
                      <li>Crane</li>
                      <li>Excavator</li>
                      <li>Wheel Loader/Payloader</li>
                      <li>Vibro Rollar/Soil Compactor</li>
                      <li>Dump Truck</li>
                      <li>Bulldozer</li>
                    </ul>
                  </div>

                  <div className="col-sm-4 aboutus-description-1">
                    <ul>
                      <li>Vibro Hammer</li>
                      <li>Sheet-pile Driver</li>
                      <li>Rig machine</li>
                      <li>Man lift</li>
                      <li>Forklift</li>
                      <li>Low bed & high bed trailer</li>
                    </ul>
                  </div>

                  <div className="col-sm-4 aboutus-description-1">
                    <ul>
                      <li>Concrete Pump</li>
                      <li>Mixer Truck (RMC)</li>
                      <li>Water Truck</li>
                      <li>Generator</li>
                      <li>Air Compressor</li>
                      <li>Motor grader</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Rental;
