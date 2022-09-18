import React from 'react'
import ProductSlider from '../../Component/Product-slider/ProductSlider'
import './product.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function SheetPileDriver() {
  AOS.init({
    duration: 500,
    delay: 200,
    mirror: false,
  })
  return (
    <>
      <section className="product-bg">
        <h1 className="text-center page-title">Sheet Pile Driver</h1>
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
              <div className="text-center  my-5">
                <img
                  src="/assets/image/products/movex.png"
                  className="img-fluid"
                  alt="Sheet Pile Driven"
                  style={{ height: '30px', width: '200px' }}
                />
                <p className="product-name text-center mb-5">Pile Drivers</p>
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
                  <p className="product-text">
                    <b>MOVAX</b> Oy, founded in 1993, is a privately held
                    Finnish company that is a world-leading creator, developer,
                    and manufacturer of excavator-mounted piling and foundation
                    equipment with innovative automatic control systems and
                    information management solutions. <b>MOVAX</b> holds more
                    than 40 patents in innovation of piling equipment sector.
                    Their excavator-mounted piling and foundation equipment has
                    a positive track record of being high quality and being
                    produced in Finland. They provide wide range of products
                    such as, pile drivers, piling hammers, piling drills,
                    multi-tool leaders and stabilization leaders.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-5 pb-5">
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
      </section> */}

      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card border-0">
                <div className=" shadow">
                  <div className="brochures-header">
                    <h2 className="text-center py-3 brochures-title">
                      Brochures
                    </h2>
                  </div>
                  <div className="brochures-name mt-5">
                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-3 py-2 bd-highlight">1</div>
                        <div className="px-2 py-2 bd-highlight">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />

                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-3 py-2 bd-highlight">2</div>
                        <div className="px-2 py-2 bd-highlight">
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries,
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="/assets/dumy.pdf" className="brochures-download">
                      <div className="d-flex justify-content-between">
                        <div className="px-3 py-2 bd-highlight">3</div>
                        <div className="px-2 py-2 bd-highlight">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </div>
                        <div className="px-2 py-2 bd-highlight">
                          <span></span>
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSlider />
    </>
  )
}

export default SheetPileDriver
