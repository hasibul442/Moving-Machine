import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

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
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/image/logo/logo-2.png"
                alt="Company Logo"
                className={
                  navbar1
                    ? "navbar-logo  minimg-size"
                    : "navbar-logo maximage-size"
                }
              />
            </Link>
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
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about-us" className="nav-link">
                    WHO WE ARE
                  </NavLink>
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
                  <ul
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <li className="second-dropdown">
                      <a className="dropdown-item " href="#">
                        <div className="d-flex justify-content-between">
                          <div>Industrial & Constructor Sector </div>
                          <div className="px-2">
                            {" "}
                            <i className="fas fa-caret-right "></i>{" "}
                          </div>
                        </div>
                      </a>
                      <ul className="second_dropdown_body">
                        <li className="nav-item second-dropdown">
                          <a className="dropdown-item " href="#">
                            <div className="d-flex justify-content-between">
                              <div>Machines & Equipment</div>
                              <div className="px-2">
                                {" "}
                                <i className="fas fa-caret-right "></i>{" "}
                              </div>
                            </div>
                          </a>
                          <ul className="third_dropdown_body">
                            <li className="nav-item">
                              <Link
                                className="dropdown-item demo5"
                                to="/dieselgenerator"
                              >
                                Diesel Generator
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="dropdown-item"
                                to="/weldergenerator"
                              >
                                Welder Generator
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="dropdown-item"
                                to="/sheetpiledriver"
                              >
                                Sheet Pile Driver{" "}
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="dropdown-item"
                                to="/aircompressor"
                              >
                                Portable Air Compressor
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="dropdown-item"
                                to="/mountedcrane"
                              >
                                Truck-Mounted Crane
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="dropdown-item" to="/crimping">
                                Crimping Machine
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="dropdown-item"
                                to="/weldingmachine"
                              >
                                Welding Machine
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="dropdown-item" to="/cutting">
                                Cutting Machine
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item second-dropdown">
                          <a className="dropdown-item" href="#">
                          <div className="d-flex justify-content-between">
                              <div>Materials</div>
                              <div className="px-2">
                                {" "}
                                <i className="fas fa-caret-right "></i>{" "}
                              </div>
                            </div>
                          </a>
                          <ul className="third_dropdown_body">
                            <li className="nav-item">
                              <Link className="dropdown-item" to="/geotextile">
                                Geotextile
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item second-dropdown">
                          <a className="dropdown-item" href="#" >
                          <div className="d-flex justify-content-between">
                              <div>Services</div>
                              <div className="px-2">
                                {" "}
                                <i className="fas fa-caret-right "></i>{" "}
                              </div>
                            </div>
                          </a>
                          <ul className="third_dropdown_body">
                            <li className="nav-item">
                            <Link className="dropdown-item" to="/services">
                            Repaire & Maintenance{" "}
                          </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="dropdown-item" to="/rental">
                            Rental Services
                          </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item second-dropdown">
                      <a className="dropdown-item " href="#">
                        <div className="d-flex justify-content-between">
                          <div>Oil & Gas Sector </div>
                          <div className="px-2">
                            {" "}
                            <i className="fas fa-caret-right "></i>{" "}
                          </div>
                        </div>
                      </a>
                      <ul className="second_dropdown_body">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="/geological">
                            Geological E&P Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className="nav-link">
                    Career
                  </Link>
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