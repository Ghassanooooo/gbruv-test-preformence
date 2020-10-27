// react
import React from "react";

// application
import { Link } from "react-router-dom";
import theme from "../data/theme";
import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";

// data stubs

export default function Footer() {
  const informationLinks = [
    { title: "About Us", url: "" },
    { title: "Delivery Information", url: "" },
    { title: "Privacy Policy", url: "" },
    { title: "Brands", url: "" },
    { title: "Contact Us", url: "" },
    { title: "Returns", url: "" },
    { title: "Site Map", url: "" },
  ];

  const accountLinks = [
    { title: "Store Location", url: "" },
    { title: "Order History", url: "" },
    { title: "Wish List", url: "" },
    { title: "Newsletter", url: "" },
    { title: "Specials", url: "" },
    { title: "Gift Certificates", url: "" },
    { title: "Affiliate", url: "" },
  ];

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">Classic Body</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Quick Links</h3>

              <ul className="quick-links">
                <li>
                  <Link to="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <a>Faq's</a>
                  </Link>
                </li>
                <li>
                  <Link to="/website-map">
                    <a>Website Map</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Information</h3>

              <ul className="information-links">
                <li>
                  <Link to="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/sizing-guide">
                    <a>Sizing Guide</a>
                  </Link>
                </li>
                <li>
                  <Link to="/website-map">
                    <a>Website Map</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Contact Us</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  Location: 2750 Quadra Street <br /> Victoria, Canada
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  Call Us: <a to="tel:(+123) 456-7898">(+123) 456-7898</a>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  Email Us:{" "}
                  <a to="mailto:support@novine.com">support@novine.com</a>
                </li>
                <li>
                  <i className="fas fa-fax"></i>
                  Fax: <a to="tel:+123456">+123456</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>Copyright @ 2020 Classic Body.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
