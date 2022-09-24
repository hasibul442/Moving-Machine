import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
// import ScrollspyNav  from 'react-scrollspy-nav';
// import "./nav.js";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar1, setNavbar] = useState(false);
  const [navbarlogo, setNavbarLogo] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 280) {
      setNavbar(true);
      setNavbarLogo(true);
    } else {
      setNavbar(false);
      setNavbarLogo(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <section id="nav-bar">
        <nav className={ navbar1 ? "navbar navbar-expand-lg shadow navbar-dark ftco_navbar bg-dark ftco-navbar-light nav-backgroung-minhight" : "navbar navbar-expand-lg shadow navbar-dark ftco_navbar bg-dark ftco-navbar-light nav-backgroung-maxhight"} id="ftco-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/image/logo/logo-2.png"
                alt="Company Logo"
                // height="40px"
                className={ navbar1 ? "navbar-logo  minimg-size" : "navbar-logo maximage-size"}
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

                {/* <li className="nav-item dropdown dropdown_auto">
            
            <div className="nav-link dropdown-toggle"  id="dropdown04"  aria-haspopup="true" aria-expanded="false">About Us</div>
              
          <ScrollspyNav  scrollTargetIds={ ['vision','mission','core-value' ] } offset={-100}
                    activeNavClass="is-active"
                    scrollDuration="500"
                    headerBackground="true">
              <div className="dropdown-menu dropdown_auto_menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#vision">Vision</a>
                  <a className="dropdown-item" href='#mission'>Mission</a>
                  <a className="dropdown-item" href='#core-value'>Core Values</a>
              </div>
            </ScrollspyNav>
              
            
            </li> */}

                <li className="nav-item dropdown dropdown_auto">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#products_list"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <Link className="dropdown-item" to="/sheetpiledriver">
                      Sheet Pile Driver{" "}
                    </Link>
                    <Link className="dropdown-item" to="/dieselgenerator">
                      Diesel Generator
                    </Link>
                    <Link className="dropdown-item" to="/weldergenerator">
                      Welder Generator/Engine Welder
                    </Link>
                    <Link className="dropdown-item" to="/aircompressor">
                      Portable Air Compressor
                    </Link>
                    <Link className="dropdown-item" to="/mountedcrane">
                      Truck-Mounted Crane
                    </Link>
                    {/* <Link className="dropdown-item" to="/">Gantry Crane</Link> */}
                    <Link className="dropdown-item" to="/geotextile">
                      Geotextile
                    </Link>
                    <Link className="dropdown-item" to="/weldingmachine">
                      Welding Machine
                    </Link>
                    <Link className="dropdown-item" to="/cutting">
                      Cutting Machine
                    </Link>
                    <Link className="dropdown-item" to="/crimping">
                      Crimping Machine
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown dropdown_auto">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#services"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu dropdown_auto_menu"
                    aria-labelledby="dropdown04"
                  >
                    <Link className="dropdown-item" to="/services">
                      Repaire & Maintenance{" "}
                    </Link>
                    <Link className="dropdown-item" to="/rental">
                      Rental
                    </Link>
                    <Link className="dropdown-item" to="/geological">
                      Geological E&P Services
                    </Link>
                    
                  </div>
                </li>

                {/* <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/rental" className="nav-link">
                    Rental
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Geological-Consultancy" className="nav-link">
                    Geological Consultancy
                  </Link>
                </li> */}
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
    </>
  );
}

export default Navbar;
