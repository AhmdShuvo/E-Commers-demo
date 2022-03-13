import React from 'react';

const HomeBanner = () => {
    return (
        <div>
             <section className="banners stretch mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 banner-lg">
                <img src="assets/images/demos/demo-24/banners/banner-4.jpg" />
                <div className="intro">
                  <div className="title">
                    <h3><i>Trending</i></h3>
                  </div>
                  <div className="content">
                    <h4>Camping &amp; Hiking</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Donec odio. Quisque volutpat mattis eros.</p>
                  </div>
                  <div className="action">
                    <a href="category.html">Discover Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 banner-sm-div">
                <div className="col-lg-6 col-md-6 col-sm-6 banner-sm font-black">
                  <img src="assets/images/demos/demo-24/banners/banner-5.jpg" />
                  <div className="intro">
                    <div className="title">
                      <h3>Women's</h3>
                    </div>
                    <div className="content">
                      <h4>Active &amp;<br /> Fitness</h4>
                    </div>
                    <div className="action">
                      <a href="category.html">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 banner-sm font-white">
                  <img src="assets/images/demos/demo-24/banners/banner-6.jpg" />
                  <div className="intro">
                    <div className="title">
                      <h3>New Arrivals</h3>
                    </div>
                    <div className="content">
                      <h4>Deepest discount<br /> of the season</h4>
                    </div>
                    <div className="action">
                      <a href="category.html">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 banner-sm font-white">
                  <img src="assets/images/demos/demo-24/banners/banner-7.jpg" />
                  <div className="intro">
                    <div className="title">
                      <h3>men's</h3>
                    </div>
                    <div className="content">
                      <h4>Surf Gear &amp;<br />Accessories</h4>
                    </div>
                    <div className="action">
                      <a href="category.html">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 banner-sm font-black">
                  <img src="assets/images/demos/demo-24/banners/banner-8.jpg" />
                  <div className="intro">
                    <div className="title">
                      <h3>men's</h3>
                    </div>
                    <div className="content">
                      <h4>outerwear<br />collection</h4>
                    </div>
                    <div className="action">
                      <a href="category.html">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default HomeBanner;