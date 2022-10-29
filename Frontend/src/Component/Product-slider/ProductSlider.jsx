import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./productsection.css";
import { Link } from "react-router-dom";

function ProductSlider() {
  const settings = {
    className: "owl-theme  pb-5",
    dots: false,
    loop: true,
    center: true,
    // infinite: true,
    slidestoshow: 1,
    slidestoscroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };
  return (
    <section>
      <section className="container mb-5">
        <h2 className="mml-title text-center pt-5 pb-5">Other Product</h2>
        <OwlCarousel {...settings}>
          {/* <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card card-style border-0 ">
                <div className="card-body shadow text-center">
                  <Link to="/sheetpiledriver" className="product-link">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Sheet-Pile-Driver.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Sheet Pile Driver
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card card-style border-0 ">
                <div className="card-body shadow text-center">
                  <Link to="/dieselgenerator" className="product-link">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Generator.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Diesel Generator
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card card-style border-0 ">
                <div className="card-body shadow text-center">
                  <Link to="/aircompressor" className="product-link">
                    <div className="image-box">
                      <img
                        src="/assets/image/products/Portable-Air-Compressor.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Portable Air Compressor
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-4">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/mountedcrane" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/Truck-Mounted-Crane.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Truck Mounted Crane
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-5">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/weldergenerator" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/weldergenerator.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Welder Generator
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-6">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/geotextile" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/Geotextile.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Geotextile
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-7">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/weldingmachine" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/Welding-Machine.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Welding Machine
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-8">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/cutting" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/Cutting-Machine.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Cutting Machine
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item mt-4 mb-4">
            <div className="products">
              <div className="card border-0 shadow card-9">
                <div className="layer"></div>
                <div className="card-body text-center">
                  <Link to="/crimping" className="product-link">
                    <div className=" mx-auto">
                      <img
                        src="/assets/image/products/Crimping-Machine.png"
                        style={{ height: "100px", width: "100px" }}
                        alt="product1"
                        className="img-fluid image-card"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                    Crimping Machine
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/sheetpiledriver">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Sheet-Pile-Driver.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Sheet Pile Driver
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/dieselgenerator">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Generator.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Diesel Generator
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/aircompressor">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Portable-Air-Compressor.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Portable Air Compressor
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/mountedcrane">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Truck-Mounted-Crane.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Truck Mounted Crane
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/weldergenerator">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/weldergenerator.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Welder Generator
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/geotextile">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Geotextile.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Geotextile
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/weldingmachine">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Welding-Machine.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Welding Machine
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/cutting">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Cutting-Machine.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Cutting Machine
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="item mt-4 mb-5">
            <div className="slider-image">
              <Link className="product-link" to="/crimping">
                <div className="card slider_card_style border-0 shadow">
                  <div className="card-body ">
                    <div className="image-box_1">
                      <img
                        src="/assets/image/products/Crimping-Machine.png"
                        alt="product1 "
                        className="product_slider_image"
                      />
                    </div>
                    <h5 className="product-title text-center mt-3">
                      Crimping Machine
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </section>
  );
}

export default ProductSlider;
