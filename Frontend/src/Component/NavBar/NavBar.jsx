import React, { useState, useEffect } from "react";
import "./navbar.css";
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
              ? "navbar navbar-expand-lg shadow ftco-navbar-light nav-backgroung-minhight"
              : "navbar navbar-expand-lg shadow ftco-navbar-light nav-backgroung-maxhight"
          }
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <div className="d-flex">
                <img
                  src="/assets/image/logo/logo-2.png"
                  alt="Company Logo"
                  className={
                    navbar1
                      ? "navbar-logo minimg-size"
                      : "navbar-logo maximage-size"
                  }
                />
                <h5 className={navbar1 ? "min-size-text" : "max-size-text"}>
                  Moving Machines
                </h5>
              </div>
            </a>
            <div
              className="menu-icon navbar-toggler"
              onClick={handleClick}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className={
                  click ? "fas fa-times text-dark" : "fas fa-bars text-dark"
                }
              ></i>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto desktop-view">
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
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    What We Do
                  </a>
                  <div
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9">
                          <p className="text-center navbar-header pt-2">
                            Construction & Industries
                          </p>
                          <div className="row">
                            <div className="col-md-4 pt-1">
                              <p
                                className="text-center"
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
                                Piling Solutions
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
                              <p
                                className="text-center"
                                style={{ color: "#3CADE8" }}
                              >
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
                                Geosynthetic
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/coolant"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Coolant System & Engine <br /> Leak Repair
                              </NavDropdown.Item>
                            </div>
                            <div className="col-md-4 pt-1">
                              <p
                                className="text-center"
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
                                Repair & Maintenance{" "}
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/rental"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Rental Service
                              </NavDropdown.Item>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <p className="text-center navbar-header pt-2">
                            Oil & Gas
                          </p>
                          {/* <p style={{ marginTop: "57px" }}></p> */}
                          <div className="row">
                            <div className="col-md-12 pt-1 oil-gas">
                              <p
                                className="text-center"
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
                                href="/geological"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                E&P Services
                              </NavDropdown.Item>
                            </div>
                          </div>
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

              {/* mobile view */}

              {/* <ul className="navbar-nav mobile-view">
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    What We Do
                  </a>
                  <div
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9">
                          <p className="text-center navbar-header pt-2">
                            Construction & Industries
                          </p>
                          <div className="row">
                            <div className="col-md-4 pt-1">
                              <p
                                className="text-center"
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
                                Piling Solutions
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
                              <p
                                className="text-center"
                                style={{ color: "#3CADE8" }}
                              >
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
                                Geosynthetic
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/coolant"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Coolant System & Engine <br /> Leak Repair
                              </NavDropdown.Item>
                            </div>
                            <div className="col-md-4 pt-1">
                              <p
                                className="text-center"
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
                                Repair & Maintenance{" "}
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                className="dropdown-item"
                                href="/rental"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                Rental Service
                              </NavDropdown.Item>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <p className="text-center navbar-header pt-2">
                            Oil & Gas
                          </p>
                          <div className="row">
                            <div
                              className="col-md-12 pt-1"
                              style={{ background: "#F2F2F2", height: "24rem" }}
                            >
                              <p
                                className="text-center"
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
                                href="/geological"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "400",
                                }}
                              >
                                E&P Services
                              </NavDropdown.Item>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul> */}
            </div>
          </div>

          {/* <div className="container-fluid mobile-view">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div> */}
        </nav>
      </section>
    </section>
  );
}

export default Navbar;
