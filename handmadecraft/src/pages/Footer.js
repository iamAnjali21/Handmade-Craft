import React, { Fragment } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

function Footer() {
  return (
    <Fragment>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            {/* Logo & Contact Info */}
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="d-flex align-items-center mb-4">
                <img src="/assets/logo.webp" className="img-fluid logo-image" alt="Craftora Logo" />
                <div className="d-flex flex-column">
                  <strong className="logo-text">Craftora</strong>
                  <small className="logo-slogan">Handmade with Love</small>
                </div>
              </div>

              <p className="mb-2">
                <i className="custom-icon bi-globe me-1"></i>
                <a href="#" className="site-footer-link">www.craftora.com</a>
              </p>

              <p className="mb-2">
                <i className="custom-icon bi-telephone me-1"></i>
                <a href="tel: 123-456-7890" className="site-footer-link">123-456-7890</a>
              </p>

              <p>
                <i className="custom-icon bi-envelope me-1"></i>
                <a href="mailto:support@craftora.com" className="site-footer-link">support@craftora.com</a>
              </p>
            </div>

            {/* Company Links */}
            <div className="col-lg-2 col-md-3 col-6 ms-lg-auto">
              <h6 className="site-footer-title">Company</h6>
              <ul className="footer-menu">
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">About Us</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Our Story</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Gallery</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="site-footer-title">Support</h6>
              <ul className="footer-menu">
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQs</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Shipping & Returns</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
              <h6 className="site-footer-title">New craft</h6>

              <form className="custom-form newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <h6 className="site-footer-title">Get updates on new crafts & offers</h6>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">👤</span>
                  <input
                    type="email"
                    name="newsletter-email"
                    id="newsletter-email"
                    className="form-control"
                    placeholder="yourname@gmail.com"
                    required
                  />
                  <button type="submit" className="form-control">
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
       <div className="site-footer-bottom" style={{ backgroundColor: "#578FCA" }}>
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-12 d-flex align-items-center">
                <p className="copyright-text">Copyright © Craftora 2022</p>
                <ul className="footer-menu d-flex">
                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy Policy</a></li>
                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">Terms</a></li>
                </ul>
              </div>

              <div className="col-lg-5 col-12 mt-2 mt-lg-0">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link ">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-12 mt-2 d-flex align-items-center mt-lg-0">
                <p>Design by <a className="sponsored-link" rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a></p>
              </div>

              <a className="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center" href="#top"></a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
