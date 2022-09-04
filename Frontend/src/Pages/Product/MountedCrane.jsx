import React from "react";
import ProductSlider from "../../Component/Product-slider/ProductSlider";
import "./product.css";

function MountedCrane() {
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">Truck-Mounted Crane</h1>
      </section>

      <section className="product-info-background">
        <div className="container">

          <div className="row mb-5">
          <div className="col-md-4 mt-5">
              <div className="text-center  my-5">
                <img
                  src="/assets/image/products/unic.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: "40px", width: "200px" }}
                />
                <p className="product-name text-center mb-5">
                  Crane
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    <span style={{ fontWeight: "bold" }}>
                      FURUKAWA UNIC's
                    </span>{" "}
                    strength is distinguished by its superior quality and
                    technology. Since the introduction of the first
                    truck-mounted crane in Japan in 1961, they have been
                    developing new technologies to fulfill the demands of the
                    customers while also improving in quality. They provide a
                    wide range of truck mounted cranes. Truck mounted cranes
                    work like a two in one vehicle, providing the facility of
                    both carrying and lifting heavy goods. These trucks are
                    designed to be well balanced and easily maneuverable.{" "}
                    <span style={{fontWeight: "bold" }}>
                      UNIC
                    </span> cranes are straight-boom type cranes which provide greater
                    accuracy of reach over obstacles and straight and stable
                    lifting ability.
                    <span style={{fontWeight: "bold" }}>
                       UNIC  
                    </span> also have compact crawler crane for challenging terrains.
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

export default MountedCrane;
