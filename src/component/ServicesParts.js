import React from "react";
import digitalimg from "../assets/digital-img.jpg";
import "./css/services.css";
const ServicesParts = () => {
  return (
    <>
      <div className="services-container">
        <div className="services-left">
          <img src={digitalimg} alt="" />
        </div>
        <div className="services-right">
          <h1>Digital Marketing</h1>
          <p>
            In today's cut-throat competitive environment, enterprises in order
            to find their footing, must market themselves digitally and develop
            a strong online presence. <br /> <br />We at Lejhro help businesses in strong
            relationship building with their clients by delivering customized
            and superior results.
          </p>
        </div>
      </div>
      <div className="services-container2">
        <div className="services-left">
          <img src={digitalimg} alt="" />
        </div>
        <div className="services-right">
          <h1>Digital Marketing</h1>
          <p>
            In today's cut-throat competitive environment, enterprises in order
            to find their footing, must market themselves digitally and develop
            a strong online presence. <br /> <br />We at Lejhro help businesses in strong
            relationship building with their clients by delivering customized
            and superior results.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesParts;
