import React from 'react';

const Offers = () => {
    return (
        <section className="banners center">
          <div className="container">
            <div className="row">
              <div className="banner col-lg-4 col-md-6 col-sm-6">
                <img src="assets/images/demos/demo-24/banners/banner-1.jpg" />
                <div className="intro">
                  <div className="title">
                    <h3>Online mega deal</h3>
                  </div>
                  <div className="content">
                    <h4>Camping Gear<br />&amp; Accessories</h4>
                  </div>
                  <div className="action">
                    <a href="category.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="banner percent col-lg-4 col-md-6 col-sm-6">
                <img src="assets/images/demos/demo-24/banners/banner-2.jpg" />
                <div className="intro">
                  <div className="title">
                    <h3>Summer</h3>
                    <h4>Clearance</h4>
                  </div>
                  <div className="img-percent">
                    <img src="assets/images/demos/demo-24/banners/percent.png" width={190} height={75} />
                  </div>
                  <div className="content">
                    <h4>* Donec sit amet vulputate<br /> velit.Aenean tempus nisl</h4>
                  </div>
                  <div className="action">
                    <a href="category.html">Discover Now</a>
                  </div>
                </div>
              </div>
              <div className="banner col-lg-4  col-md-6 col-sm-6">
                <img src="assets/images/demos/demo-24/banners/banner-3.jpg" />
                <div className="intro">
                  <div className="title">
                    <h3>Lightning Deals</h3>
                  </div>
                  <div className="content">
                    <h4>Sports &amp;<br />Outdoors</h4>
                  </div>
                  <div className="action">
                    <a href="category.html">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Offers;