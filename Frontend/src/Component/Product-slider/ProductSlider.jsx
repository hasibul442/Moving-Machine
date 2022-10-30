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
