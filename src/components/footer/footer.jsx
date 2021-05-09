import React from "react";
import { NavLink } from "react-router-dom";

import "../../resources/css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="column">
              <NavLink exact to="/" className="nav-logo-footer">
                <div className="footerLogo">
                  <h2>Spatikal</h2>
                </div>
              </NavLink>
              {/* <ul className="list-unstyled">
                                <li>Shanti Nagar</li>
                                <li>Bhilai</li>
                                <li>Chattisgarh- 769850</li>
                            </ul> */}
            </div>
          </div>
          <hr />
          <div className="row displayFlex details">
            <div className="column">
              <NavLink exact to="/about" className="nav-logo-footer">
                <h3> About Us </h3>
              </NavLink>
            </div>
            <div className="column">
              <NavLink exact to="/contact" className="nav-logo-footer">
                <h3>Contact Us</h3>
              </NavLink>
            </div>
          </div>
          <hr />
          <div className="row displayFlex social">
            {/* <div className="column">
                            <i className="fab fa-linkedin"></i>
                        </div> */}
            <div className="column">
              <a href="https://www.instagram.com/_spatikal_">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="column">
              <a href="https://www.facebook.com/Spatikal-104889145028341">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="row terms">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Spatikal | All rights reserved |
              Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
