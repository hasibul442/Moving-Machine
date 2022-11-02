import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar1, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 280) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <section>
      <section id="nav-bar">
        <nav
          className={
            navbar1
              ? "navbar navbar-expand-lg shadow navbar-dark ftco_navbar bg-dark ftco-navbar-light nav-backgroung-minhight"
              : "navbar navbar-expand-lg shadow navbar-dark ftco_navbar bg-dark ftco-navbar-light nav-backgroung-maxhight"
          }
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="/assets/image/logo/logo-2.png"
                alt="Company Logo"
                className={
                  navbar1
                    ? "navbar-logo  minimg-size"
                    : "navbar-logo maximage-size"
                }
              />
            </a>
            <div
              className="menu-icon navbar-toggler text-dark"
              onClick={handleClick}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item">
                  <a href="/home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about-us" className="nav-link">
                    WHO WE ARE
                  </a>
                </li>

                <li className="nav-item dropdown dropdown_auto">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#products_list"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    What We Do
                  </a>
                  <div
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <div className="px-2 py-2">
                      <div className="row">
                        <div className="col-md-9 pt-1">
                          <p
                            className="text-center"
                            style={{
                              color: "#2F75B5",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            Industrial & Constructor Sector
                          </p>
                          <div className="row">
                            <div className="col-md-4 pt-1">
                              <p
                                className="px-3"
                                style={{
                                  color: "#3CADE8",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}
                              >
                                Machines & Equipment
                              </p>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/dieselgenerator"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Diesel Generator{" "}
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/weldergenerator"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Welder Generator
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/sheetpiledriver"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Sheet Pile Driver
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/aircompressor"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Portable Air Compressor
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/mountedcrane"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Truck-Mounted Crane
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/crimping"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Crimping Machine
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/weldingmachine"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Welding Machine
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/cutting"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Cutting Machine
                              </NavDropdown.Item>
                            </div>
                            <div
                              className="col-md-4 pt-1"
                              style={{
                                color: "#3CADE8",
                                fontSize: "16px",
                                fontWeight: "600",
                                background: "#F2F2F2",
                              }}
                            >
                              <p className="px-3" style={{ color: "#3CADE8" }}>
                                Materials
                              </p>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/geotextile"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Geotextile
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/coolant"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Engine Leak Repair
                              </NavDropdown.Item>
                            </div>
                            <div className="col-md-4 pt-1">
                              <p
                                className="px-3"
                                style={{
                                  color: "#3CADE8",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}
                              >
                                Services
                              </p>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/services"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Repaire & Maintenance{" "}
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/rental"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Rental Services
                              </NavDropdown.Item>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-3 pt-1"
                          style={{ background: "#F2F2F2" }}
                        >
                          <p
                            className="text-center"
                            style={{
                              color: "#2F75B5",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            Oil & Gas Sector
                          </p>
                          <p style={{ marginTop: "57px" }}></p>
                          <NavDropdown.Item
                            className="dropdown-item text-center"
                            href="/geological"
                            style={{
                              fontSize: "15px",
                              fontWeight: "400",
                            }}
                          >
                            Geological E&P Services
                          </NavDropdown.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/contactus" className="nav-link">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/career" className="nav-link">
                    Career
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </section>
  );
}

export default Navbar;
