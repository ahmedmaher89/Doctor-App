import React from "react";
import "./Lsat-view.css";

const Lsatview = () => {
  return (
    <>
    
      <section className="section-area section-sp1 blog-area">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Latest News</h6>
            <h2 className="title">Our Latest News</h2>
          </div>
          <div className="blog-slide ">
            <div className="slick-listB">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="slick-trackB">
                    <div
                      data-index="-3"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                    >
                      <div>
                        <div className="slider-itemB" tabIndex="-1">
                          <div className="blog-card">
                            <div className="post-media">
                              <a href="#">
                                <img src="/imgs/pic1.a3848a11.jpg" alt="" />
                              </a>
                            </div>
                            <div className="post-info">
                              <ul className="post-meta">
                                <li className="author">
                                  <a href="#">
                                    <img
                                      src="data:image/jpeg;base64,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"
                                      alt=""
                                    />
                                    Sonar Moyna
                                  </a>
                                </li>
                                <li className="date">
                                  <i className="far fa-calendar-alt"></i>19 July
                                  2021
                                </li>
                              </ul>
                              <h5 className="post-title">
                                <a href="#">
                                  In this hospital there are special surgeon
                                </a>
                              </h5>
                              <a
                                className="btn btn-outline-primary btn-sm"
                                href="#"
                              >
                                Read More{" "}
                                <i className="btn-icon-bx fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="slick-trackB">
                    <div
                      data-index="-3"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                    >
                      <div>
                        <div className="slider-itemB" tabIndex="-1">
                          <div className="blog-card">
                            <div className="post-media">
                              <a href="#">
                                <img src="/imgs/pic2.67db6c47.jpg" alt="" />
                              </a>
                            </div>
                            <div className="post-info">
                              <ul className="post-meta">
                                <li className="author">
                                  <a href="#">
                                    <img
                                      src="data:image/jpeg;base64,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"
                                      alt=""
                                    />
                                    Sonar Moyna
                                  </a>
                                </li>
                                <li className="date">
                                  <i className="far fa-calendar-alt"></i>19 July
                                  2021
                                </li>
                              </ul>
                              <h5 className="post-title">
                                <a href="#">
                                  Can you get a diflucan prescription online?
                                </a>
                              </h5>
                              <a
                                className="btn btn-outline-primary btn-sm"
                                href="#"
                              >
                                Read More{" "}
                                <i className="btn-icon-bx fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="slick-trackB">
                    <div
                      data-index="-3"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                    >
                      <div>
                        <div className="slider-itemB" tabIndex="-1">
                          <div className="blog-card">
                            <div className="post-media">
                              <a href="#">
                                <img src="/imgs/pic3.89b83151.jpg" alt="" />
                              </a>
                            </div>
                            <div className="post-info">
                              <ul className="post-meta">
                                <li className="author">
                                  <a href="#">
                                    <img
                                      src="data:image/jpeg;base64,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"
                                      alt=""
                                    />
                                    Sonar Moyna
                                  </a>
                                </li>
                                <li className="date">
                                  <i className="far fa-calendar-alt"></i>19 July
                                  2021
                                </li>
                              </ul>
                              <h5 className="post-title">
                                <a href="#">Why Is Skin Surgeon Considered</a>
                              </h5>
                              <a
                                className="btn btn-outline-primary btn-sm"
                                href="#"
                              >
                                Read More{" "}
                                <i className="btn-icon-bx fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="pt-img1" src="/imgs/shape1.png" alt="" />
        <img className="pt-img2" src="/imgs/shapD.png" alt="" />
        <img className="pt-img4" src="/imgs/shape4.png" alt="" />
        <img className="pt-img3" src="/imgs/serv1.png" alt="" />
      </section>
    </>
  );
};

export default Lsatview;
