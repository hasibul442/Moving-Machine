import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WelderGenerator() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: false,
  });
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">
          Welder generator/Engine welder
        </h1>
      </section>

      <section className="product-info-background">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-6 mt-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="text-center my-5">
                <img
                  src="/assets/image/products/Denyo.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">Engine Welder</p>
              </div>
            </div>

            <div
              className="col-md-6 mt-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    <span style={{ fontWeight: "bold" }}>Denyo</span> engines
                    are known for their durability, versatility and fuel/energy
                    efficiency. Since foundation of the company in 1948,{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> is making
                    engine driven welder generators.{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> offer the
                    excellent performance and ruggedness unique to Japanese
                    products and have a track record of use in extremely cold
                    wilderness and extremely hot desert. With their over 70
                    years of manufacturing experience,{" "}
                    <span style={{ fontWeight: "bold" }}>Denyo</span> have
                    become one of the main market leaders in the world. Their
                    product line includes both petrol and diesel version which
                    uses high-quality engine from YAMAHA (petrol), Kubota
                    (Diesel) or Yanmar (Diesel) depending on model variation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="card border-0">
            <div className="card-body shadow">
              <h3 className="mml-title text-center pt-5">List</h3>
              <table className="table display">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Document Name</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </td>
                    <td>
                      <a href="/assets/dumy.pdf">
                        <i className="fas fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries,
                    </td>
                    <td>
                      <a href="/assets/dumy.pdf">
                        <i className="fas fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </td>
                    <td>
                      <a href="/assets/dumy.pdf">
                        <i className="fas fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      he point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters,
                    </td>
                    <td>
                      <a href="/assets/dumy.pdf">
                        <i className="fas fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider />
    </>
  );
}

export default WelderGenerator;
