import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 page-banner-entry">
            <h2>{props.title}</h2>
            <li>
              <Link to="/">
                <i className="fa-solid fa-house"></i> Home
              </Link>
              <i className="slash">/</i>
              {props.smtitle}
            </li>
          </div>
        </div>
      </div>
      <img className="shap2" src="/imgs/shape5.png" alt="" />
      <img className="shap3" src="/imgs/shape6.png" alt="" />
    </section>
  );
};

export default Banner;
