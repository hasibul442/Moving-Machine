import React from 'react'
import ProductSlider from '../../Component/Product-slider/ProductSlider'
import './product.css'
function Cutting() {
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">Cutting Machine</h1>
      </section>

      <section className="product-info-background">
        <div className="container">
          <h2 className="product-name text-center mt-5 mb-5">
            <span style={{ color: '#EE6983' }}>ESAB</span> Cutting Machine
          </h2>

          <div className="row mb-5">
            <div className="col-md-6 mt-5">
              <div className="text-center">
                <img
                  src="/assets/image/products/Slide2.PNG"
                  className="img-fluid geological-consultancy-box"
                  alt="Sheet Pile Driven"
                />
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <p className="product-text text-justify">
                    <span style={{fontWeight: 'bold' }}>
                      ESAB
                    </span>{' '}
                    cutting-edge, world-class equipment and solutions are
                    designed with client input and produced with the skills and
                    tradition of a global manufacturing leader. Over the time
                    they have become one of the world’s leading production
                    companies for welding and cutting equipment and consumables.
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
  )
}

export default Cutting
