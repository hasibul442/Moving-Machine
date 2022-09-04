import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";
function DieselGenerator() {
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">Diesel Generator</h1>
      </section>


      <section className="product-info-background">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mt-5">
              <div className="text-center my-5">
              <img
                  src="/assets/image/products/Denyo.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                Diesel Generator
                </p>
              </div>
            </div>

            <div className="col-md-8 mt-5">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text">
                    <span style={{    fontWeight: "bold" }}>Denyo </span>
                     is one of the market leading generator manufacturers in the
                    world. Their product praised for the robust manufacturing,
                    high reliability and long-lasting service. <span style={{    fontWeight: "bold" }}>Denyo</span> has a wide
                    range of products for different applications. Their
                    generators range from 25kVA up to 1100kVA. The engines for
                    the generators are sourced from a few high-end diesel
                    experts of Japan namely Komatsu, Mitsubishi, Yanmar, Kobuta,
                    Isuzu. The alternators and genset assemblies are designed,
                    developed and manufactured at <span style={{    fontWeight: "bold" }}>Denyo</span> in Japan with exception
                    of some smaller models (up to 125) being manufactured at 
                    <span style={{    fontWeight: "bold" }}> Denyo's</span> factory in Indonesia and Vietnam.
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
              <h3 className="mml-title text-center pt-5">
                List
              </h3>
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

export default DieselGenerator;
