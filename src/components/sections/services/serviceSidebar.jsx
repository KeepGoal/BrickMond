import React from "react";
import { FaArrowDown, FaArrowRight, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { COMPANY_PHONE_NUMBER } from "../../../config/project";

const ServiceSidebar = (props) => {
  const { contactImage } = props;
  return (
    <div className="right-item">
      <div className="item-one mb-30 pb-30">
        <div className="image">
          <img src={contactImage} alt="image" />
        </div>
        <h3>Available</h3>
        <h3 className="text-capitalize mt-2 mb-30">for any type of Service</h3>
        <Link to="/contact">
          Contact Us{" "}
          <i>
            <FaArrowRight />
          </i>
        </Link>
      </div>
      <div className="item-two bg-image mb-30">
        <i className="ring-animation d-inline-flex justify-content-center align-items-center">
          <FaPhoneVolume />
        </i>
        <h3 className="text-capitalize">Have any questions?</h3>
        <h3 className="text-capitalize mt-2 mb-30">call us today!</h3>
        <div className="line">
          <span className="sm_line"></span> <span className="big_line"></span>
        </div>
        <a href={`tel:${COMPANY_PHONE_NUMBER}`}>{COMPANY_PHONE_NUMBER}</a>
      </div>
      {/* <div className="item-three sub-bg">
        <div className="content">
          <h3>Download Brochures</h3>
          <p>
            We have facility to produce advance work various industrial
            applications based on
          </p>
        </div>
        <a href="#0">
          <i>
            <FaArrowDown />
          </i>{" "}
          Download Now
        </a>
      </div> */}
    </div>
  );
};

export default ServiceSidebar;
