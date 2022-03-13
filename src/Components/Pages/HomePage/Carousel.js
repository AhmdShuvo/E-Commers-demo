import React from 'react';

const Carousel = () => {
    return ( 

        // CAROUSSEL ///
        <section className="logos">
        <div className="container">
          <hr className="mb-4" />
          <div className="heading">
            <p className="heading-cat">trending brands</p>
          </div>
          <div className="owl-carousel mb-5 owl-simple" data-toggle="owl" data-owl-options="{
                  &quot;nav&quot;: true, 
                  &quot;dots&quot;: false,
                  &quot;margin&quot;: 30,
                  &quot;loop&quot;: false,
                  &quot;responsive&quot;: {
                      &quot;0&quot;: {
                          &quot;items&quot;:2
                      },
                      &quot;420&quot;: {
                          &quot;items&quot;:3
                      },
                      &quot;600&quot;: {
                          &quot;items&quot;:4
                      },
                      &quot;900&quot;: {
                          &quot;items&quot;:5
                      },
                      &quot;1024&quot;: {
                          &quot;items&quot;:6
                      }
                  }
              }">
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/1.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/2.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/3.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/4.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/5.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/6.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/demos/demo-24/brands/1.png" alt="Brand Name" />
            </a>
          </div>{/* End .owl-carousel */}
        </div>
      </section>
    );
};

export default Carousel;