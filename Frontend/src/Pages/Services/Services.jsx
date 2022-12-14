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
                Moving Machines believes after sales service makes the difference in the business of machines and equipment. During warranty period, the company provides free services for all the equipment it sells. Moving Machines wants to brand itself as the champion service company through a skilled and customer-centric service team. Our service team checks upon customers’ equipment time to time to assess its condition. We put our best efforts to keep customers’ equipment fully functional all the time so that it performs at the time it is needed.  
                </p>
              </div>
              <div className=" mt-2">
              <h4 className="mml-title px-4 py-3" style={{ fontSize: "23px" }}>Paid Services </h4>
                <p className="px-4 pb-3 justify-content-center geo_consult-content-text">
                Moving Machines also provides repair and maintenance services of construction and industrial equipment. Our experienced and motivated maintenance team is highly skilled in repair works of equipment like crane, excavator, bulldozer, road roller, manlift, air compressor, generator, RMC truck, forklift, water truck, vibro hammer, dump truck, rig, truck-crane, etc. 
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
