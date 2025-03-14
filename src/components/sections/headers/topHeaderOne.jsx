import React from "react";
import { FaLocationDot, FaPaperPlane, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE_NUMBER,
} from "../../../config/project";
const TopHeaderOne = () => {
  return (
    <div className="header-top d-none d-xl-block">
      <div className="container">
        <div className="header-top-wrp">
          <div className="logo">
            <Link href="/" className="logo">
              {" "}
              <img src={"/images/logo/logo.svg"} alt="logo" />
            </Link>
          </div>
          <ul className="info">
            <li>
              <i className="primary-color">
                <FaPaperPlane />
              </i>{" "}
              <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
            </li>
            <li className="bor-left ms-4 ps-4">
              <i className="primary-color">
                <FaLocationDot />
              </i>{" "}
              <a href="JavaScript:void(0)"> {COMPANY_ADDRESS}</a>
            </li>
            <li className="bor-left fw-bold ms-4 ps-4">
              <i className="primary-color">
                <FaPhoneVolume />
              </i>{" "}
              <a href={`tel:${COMPANY_PHONE_NUMBER}`}>{COMPANY_PHONE_NUMBER}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
