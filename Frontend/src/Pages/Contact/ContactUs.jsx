import React from "react";
import "./contactus.css";
function ContactUs() {
  return (
    <>
      <div className="contact-bg">
        <h1 className="text-center page-title">Contact Us</h1>
      </div>
      {/* <div className="custome-shape">
        <img
          src="/assets/image/background/Asset-1.png"
          className="shape-image img-fluid"
          alt="Custom Shape"
        />
      </div> */}

      <div className="mt-5">
        <div className="container ">
          <h2 className="mml-title text-center mb-5">Get In Touch</h2>
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card box card-bg">
                <div className="p-4">
                  <div className="text-center">
                    <i
                      className="fas fa-location fa-2x icon-border"
                      style={{ color: "#f94892" }}
                    ></i>
                    <p className="contactus-title text-center">Address</p>
                    <div className="mt-3">
                      <p className="contactus-text">
                        House # 428 (A); Road # 30 New DOHS, Mohakhali,
                        Dhaka-1206
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-4 p-3">
              <div className="card box card-bg">
                <div className="p-4">
                  <div className="text-center">
                    <i
                      className="fas fa-phone fa-2x icon-border"
                      style={{ color: "#6fedd6" }}
                    ></i>
                    <p className="contactus-title text-center">Phone</p>
                    <div className="mt-3">
                      <p className="contactus-text">
                        Telephone: +880248811048<br/>
                        Phone: +8801321120451
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card box card-bg">
                <div className="p-4">
                  <div className="text-center">
                    <i
                      className="fas fa-mailbox fa-2x icon-border"
                      style={{ color: "#9c9efe" }}
                    ></i>
                    <p className="contactus-title text-center">Email</p>
                    <div className="mt-3">
                      <p className="contactus-text">
                        info@mmlbd.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="container">
          <h2 className="mml-title text-center mb-5">Messages Us</h2>

          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">
                    {" "}
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="email">
                    {" "}
                    Email <small className="text-danger">*</small>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="phone">
                    {" "}
                    Phone Number <small className="text-danger">*</small>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    aria-describedby="phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="org-name">
                    {" "}
                    Organization Name <small className="text-danger">*</small>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="org-name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Oraganization Name"
                  />
                </div>
                <br />
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label className="name">
                    {" "}
                    Position <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Position Name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="name">
                    {" "}
                    Subject <small className="text-danger">*</small>
                  </label>
                  <select 
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Subject Line"
                  >
                    <option defaultValue disabled>Choose One Option</option>
                    <option value="Genarel Query">Genarel Query</option>
                    <option value="Product Inquery">Product Inquery</option>
                    <option value="Servicesy">Services</option>
                    <option value="Rental">Rental</option>
                    <option value="Geological Consultancy">Geological Consultancy</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label className="name">
                    {" "}
                    Message <small className="text-danger">*</small>
                  </label>
                  <textarea
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="pb-3 text-center">
              <button className="btn btn-primary button-style" type="submit">
                <span>Send Message</span>
                {/* <div className="wave"></div> */}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h1 className="mml-title text-center mt-5">Get Deriction From Here</h1>
        <div className="pt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.1236660739463!2d90.39293329463926!3d23.7789377304539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79a2d8cb3a9%3A0x1404066de0b425a6!2sMoving%20Machines%20Limited!5e0!3m2!1sen!2sbd!4v1661944753160!5m2!1sen!2sbd"
            width="100%"
            height="250"
            style={{ border: 0, padding: 0, margin: 0 }}
            allowFullScreen=""
            title="Google Map Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
