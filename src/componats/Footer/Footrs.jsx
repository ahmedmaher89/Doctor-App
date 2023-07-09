import React from "react";

const Footrs = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3">
              <img className="footerlogo" src="/imgs/logo.png" alt="" />
              <p>
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <div className="footer-contact">
                <div className="footer-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-text">
                  <h6>Contact Us</h6>
                  <h4>+123 456 7890</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="AboyrPage">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Booking</a>
                </li>
                <li>
                  <a href="#">Faq's</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Out Team</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <h2>Our Service</h2>
              <ul>
                <li>
                  <a href="#">Dental Care</a>
                </li>
                <li>
                  <a href="#">Cardiac Clinic</a>
                </li>
                <li>
                  <a href="#">Booking</a>
                </li>
                <li>
                  <a href="#">Massege Therapy</a>
                </li>
                <li>
                  <a href="#">Cardiology</a>
                </li>
                <li>
                  <a href="#">Precise Diagnosis</a>
                </li>
                <li>
                  <a href="#">Abmbulance Services</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <h2>Subcribe</h2>
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subcribe Now</button>
              </form>
              <ul className="social">
                <li>
                  <a href="#">
                    <img src="/imgs/face.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/imgs/li.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/imgs/insta.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/imgs/twiter.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bootom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <p>
                  Copyright © 2023 Developed by <i>Ahmed maher</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="pt-img1" src="/imgs/shape5.png" alt=""/>
        <img className="pt-img2" src="/imgs/shape6.png" alt=""/>
        <img className="pt-img3" src="/imgs/shape4.png" alt=""/>
        <img className="pt-img4" src="/imgs/shape4.png" alt=""/>
      </footer>
    </>
  );
};

export default Footrs;
