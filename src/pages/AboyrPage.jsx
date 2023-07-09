import React from "react";
import Banner from "../componats/Banner/Banner";
import Testimonial from "../componats/Testimonial/Testimonial";
import Aboutus from "../componats/Aboutus/Aboutus";
import "./AboyrPage.css";
import Lsatview from "../componats/Lsat-view/Lsatview";
import Servicewraper from "../componats/service-wraper/Servicewraper";
import TeamSec from "../componats/team-wraper/TeamSec";
import Footrs from "../componats/Footer/Footrs";

const AboyrPage = () => {
  return (
    <>
      <Banner title="About Us" smtitle="About Us" />
      <Aboutus />

      <Servicewraper />

      <TeamSec />

      <Testimonial />

      <Lsatview />
      <Footrs />
    </>
  );
};

export default AboyrPage;
