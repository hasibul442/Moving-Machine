import React from "react";
import "./about.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  const settings = {
    className: "owl-theme  pb-5",
    dots: false,
    loop: true,
    center: true,
    // infinite: true,
    slidestoshow: 1,
    slidestoscroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };

  AOS.init({
    duration: 500,
    delay: 300,
    mirror: false,
  });
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <section className="aboutus-bg">
        <h1 className="text-center page-title">Who We Are</h1>
      </section>

      <section className="about-section mt-5 mb-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aboutus-description-1">
              <p>
              The products and services of Moving Machines have primarily been developed focusing the fields of construction, oil and gas, manufacturing, and environmental protection. Our team relentlessly works to delight its customers through sourcing and delivering innovative and quality products supported by outstanding consultancy, sales, repairment and rental services. Over the years the company has been able to establish a long list of delighted customers that includes reputed local and international construction companies, manufacturing companies and public entities.
              </p>
              <p>
              The products and services of Moving Machines have primarily been developed focusing the fields of construction, oil and gas, manufacturing, and environmental protection. Our team relentlessly works to delight its customers through sourcing and delivering innovative and quality products supported by outstanding consultancy, sales, repairment and rental services. Over the years the company has been able to establish a long list of delighted customers that includes reputed local and international construction companies, manufacturing companies and public entities.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>Dohazari Cox’s Bazar Railway project</li>
                    <li>Matarbari coal power plant project</li>
                    <li>Kalna bridge project</li>
                    <li>Kalshi flyover project</li>
                    <li>Chattogram flyover project</li>
                    <li>Kuakata Sea Beach Protection Project</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>Meghna ghat power plant project</li>
                    <li>Rooppur Nuclear Power plant project</li>
                    <li>Bangabandhu Sheikh Mujib Railway Bridge Project</li>
                    <li>Western Bridge Project</li>
                    <li>SUSEC Road Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="brands-section">
        <div className="container">
          <h2 className="mml-title text-center pt-5 pb-5">Brands</h2>
          <div>
            <OwlCarousel {...settings}>
              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/movex.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/denyo.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/tencate.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/airman.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/esab.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/unic.jpeg"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item mt-4 mb-4">
                <div className="card card-shadow border-0">
                  <div className="card-body border-0">
                    <div className="text-center mx-auto">
                      <img
                        src="/assets/image/brands/lillbacka.png"
                        alt="Brand logo"
                        style={{ height: "180px", width: "200px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
