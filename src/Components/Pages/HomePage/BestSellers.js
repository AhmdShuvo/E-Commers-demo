import React from 'react';

const BestSellers = () => {
    return (
        <section className="best-sellers">
        <div className="container">
          <div className="heading">
            <p className="heading-cat">favourite from every category</p>
            <h3 className="heading-title">Best Sellers</h3>
          </div>
          <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow text-center" data-toggle="owl" data-owl-options="{
                  &quot;nav&quot;: true, 
                  &quot;dots&quot;: false,
                  &quot;margin&quot;: 30,
                  &quot;loop&quot;: false,
                  &quot;responsive&quot;: {
                      &quot;0&quot;: {
                          &quot;items&quot;:2
                      },
                      &quot;768&quot;: {
                        &quot;items&quot;:3
                      },
                      &quot;992&quot;: {
                          &quot;items&quot;:3
                      },
                      &quot;1200&quot;: {
                        &quot;items&quot;:4
                      }
                  }
              }">
            <div className="product product-10 text-center">
              <figure className="product-media">
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-1-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-1-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">Small Sleeping Bag</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    $299.99
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
            <div className="product product-10 text-center">
              <figure className="product-media">
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-2-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-2-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">Watertight Jacket</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    $76.99
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 1 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
            <div className="product product-10 text-center">
              <figure className="product-media">
                <span className="product-label label-sale">sale</span>
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-3-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">Y-3 by Yohji Yamamoto</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$239.99</span>
                    <span className="old-price">Was $400.00</span>
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
            <div className="product product-10 text-center">
              <figure className="product-media">
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-4-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-4-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">Marmot Empire Daypack</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    $59.99
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 1 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
            <div className="product product-10 text-center">
              <figure className="product-media">
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-5-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-5-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">On Cloudflyer</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    $127.99
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
            <div className="product product-10 text-center">
              <figure className="product-media">
                <a href="product.html">
                  <img src="assets/images/demos/demo-24/best-sellers/product-6-1.jpg" alt="Product image" className="product-image" />
                  <img src="assets/images/demos/demo-24/best-sellers/product-6-2.jpg" alt="Product image" className="product-image-hover" />
                </a>
                <div className="product-action-vertical">
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>{/* End .product-action-vertical */}
              </figure>{/* End .product-media */}
              <div className="product-body">
                <div className="product-action">
                  <a href="#" className="btn-cart"><span>add to cart</span></a>
                  <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                </div>{/* End .product-action */}
                <div className="product-intro">
                  <h3 className="product-title">
                    <a href="product.html">Alphaskin Sport Bra</a>
                  </h3>{/* End .product-title */}
                  <div className="product-price">
                    $34.99
                  </div>{/* End .product-price */}
                </div>
                <div className="product-detail">
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#d64042'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>
              </div>{/* End .product-body */}
            </div>{/* End .product */}
          </div>
        </div>
      </section>
    );
};

export default BestSellers;