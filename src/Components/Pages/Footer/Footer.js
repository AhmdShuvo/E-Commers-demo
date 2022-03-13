import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-3">
        <div className="container service">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
                  <p>Orders $50 or more</p>
                </div>{/* End .icon-box-content */}
              </div>{/* End .icon-box */}
            </div>{/* End .col-sm-6 col-lg-4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
                  <p>Within 30 days</p>
                </div>{/* End .icon-box-content */}
              </div>{/* End .icon-box */}
            </div>{/* End .col-sm-6 col-lg-4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon">
                  <i className="icon-info-circle" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title */}
                  <p>When you sign up</p>
                </div>{/* End .icon-box-content */}
              </div>{/* End .icon-box */}
            </div>{/* End .col-sm-6 col-lg-4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
                  <p>24/7 amazing services</p>
                </div>{/* End .icon-box-content */}
              </div>{/* End .icon-box */}
            </div>{/* End .col-sm-6 col-lg-4 */}
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="widget widget-about">
                  <img src="assets/images/demos/demo-24/logo.png" className="footer-logo" alt="Footer Logo" width={110} height={25} />
                  <p>Praesent dapibus, neque id cursus ucibus, tortor  neque egestas augue, eu vulputate magna eros eu erat. </p>
                  <div className="social-icons">
                    <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                    <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                    <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                    <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube" /></a>
                    <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest" /></a>
                  </div>{/* End .soial-icons */}
                </div>{/* End .widget about-widget */}
              </div>{/* End .col-sm-12 col-lg-3 */}
              <div className="col-lg-3 col-sm-4 col-md-4">
                <div className="widget">
                  <h4 className="widget-title">useful links</h4>{/* End .widget-title */}
                  <ul className="widget-list">
                    <li><a href="about.html">About Molla</a></li>
                    <li><a href="#">How to shop on Molla</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="login.html">Log in</a></li>
                  </ul>{/* End .widget-list */}
                </div>{/* End .widget */}
              </div>{/* End .col-sm-4 col-lg-3 */}
              <div className="col-lg-3 col-sm-4 col-md-4">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                  <ul className="widget-list">
                    <li><a href="#">Payment Methods</a></li>
                    <li><a href="#">Money-back guarantee!</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>{/* End .widget-list */}
                </div>{/* End .widget */}
              </div>{/* End .col-sm-4 col-lg-3 */}
              <div className="col-lg-3 col-sm-4 col-md-4">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                  <ul className="widget-list">
                    <li><a href="#">Sign In</a></li>
                    <li><a href="cart.html">View Cart</a></li>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>{/* End .widget-list */}
                </div>{/* End .widget */}
              </div>{/* End .col-sm-64 col-lg-3 */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>{/* End .footer-copyright */}
            <figure className="footer-payments">
              <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
            </figure>{/* End .footer-payments */}
          </div>{/* End .widget-about-info */}
        </div>{/* End .container */}
      </footer>
    );
};

export default Footer;