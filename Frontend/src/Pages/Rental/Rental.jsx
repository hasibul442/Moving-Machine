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
                <p className="px-4 py-3 justify-content-center geo_consult-content-text">
                Moving Machines believe that rental is one of the most effective ways to support a project to progress smoothly. When an equipment breaks-down, or the project growth demands more support of equipment but, the machine is not available for one or two months. MML is always there to provide rental support to cover these interim needs. We also support new/progressing businesses to get into the construction field with highly affordable equipment rental according to your budget. We are ready to support you with high quality heavy construction equipment for you so that you don’t have to slow down your project. With our strong professional team, MML cater to various fields such as construction, civil and mechanical works etc. We have highly skilled and experienced professionals and resources to please our customers with unique solutions to unique problems. Our goal is to become one of the leading rental companies in Bangladesh with integrated solutions and services.
                <br />
                <br />
                Moving Machines is ready to assist your construction projects by helping you meet your goals, according to realistic timeline and budget. Our highly skilled professional is ready to assist you to recognize your needs and recommend you with the perfect solution. We are always available to assist you on your needs and providing the perfect construction equipment for your reach your next big construction milestone.
                </p>
              </div>
            </div>

            <div
              className="col-md-12"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="text-center">
                <div className="">
                  <img
                    src="/assets/image/background/rental-3.jpg"
                    className="img-fluid"
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

export default Rental;
