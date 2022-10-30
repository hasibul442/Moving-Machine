import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section>
      <section>
        <div className="footer">
          <div className="container-fluid">
            <div className="row pt-4">
              <div className="col-lg-1"></div>

              <div className="col-lg-6">
                <div >
                  <div className="p-2">
                    <h5 className="text-white pb-1">
                      <span className="footer-headline">Contact Us</span>
                    </h5>

                    <div className="d-flex flex-row pb-2">
                      <div className="">
                        <div className="icon-block" style={{ marginTop:"10px" }}>
                          <i
                            className="fas fa-map-marker-alt"
                            style={{ color: "#D61C4E" }}
                          ></i>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="cont-us-text">
                          <a
                            className="touch-with-us-text"
                            href="https://goo.gl/maps/fNXbEh9e6tEeKg718"
                          >
                            House# 428A (3rd Floor), Road# 30,
                            <br /> New DOHS Mohakhali, Dhaka
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row pb-2">
                      <div className="">
                        <div className="icon-block">
                          <i
                            className="fas fa-phone-office"
                            style={{ color: "#590696" }}
                          ></i>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="cont-us-text">
                          <a
                            className="touch-with-us-text"
                            href="tel:+880248811048"
                          >
                            (+880) 248811048
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row pb-2">
                      <div className="">
                        <div className="icon-block">
                          <i
                            className="fas fa-mobile-alt"
                            style={{ color: "#00FFAB" }}
                          ></i>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="cont-us-text">
                          <a
                            className="touch-with-us-text"
                            href="tel:+8801713090871"
                          >
                            (+880) 1321120451
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row pb-1">
                      <div className="">
                        <div className="icon-block">
                          <i
                            className="fas fa-envelope"
                            style={{ color: "#F806CC" }}
                          ></i>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="cont-us-text">
                          <a
                            className="touch-with-us-text"
                            href="mailto:info@mmlbd.com"
                          >
                            info@mmlbd.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <h5 className="text-white">
                  <span className="footer-headline"> Social Link</span>
                </h5>
                <div className="mx-auto pt-2">
                  <div className="effect aeneas">
                    <div className="buttons">
                      <a
                        href="https://www.facebook.com/Moving-Machines-Ltd-101141516021371"
                        className="fb"
                        title="Join us on Facebook"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href="https://wa.me/8801321120451"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="whatsup"
                        title="Join us on Whats Apps"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a
                        href="/"
                        className="linkedin"
                        title="Join us on Facebook"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <p className=" footer-text  pt-5">
                  Copyright © {new Date().getFullYear()} Moving Mechines Ltd.{" "}
                  <br />
                  <span className="">
                    Developed by{" "}
                    <a href="https://hasibulhasan.web.app/" className="hasib">
                      Hasib
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
