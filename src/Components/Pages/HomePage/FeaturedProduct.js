import React from 'react';

const FeaturedProduct = () => {
    return (
        <section className="featured-products">
            <div className="container">
                <div className="heading">
                    <p className="heading-cat">Featured Products </p>
                    <h3 className="heading-title">Featured Products</h3>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7 products">
                        <div className="col-6">
                            <div className="product product-10 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-24/featured-products/product-1-1.jpg" alt="Product image" className="product-image" />
                                        <img src="assets/images/demos/demo-24/featured-products/product-1-2.jpg" alt="Product image" className="product-image-hover" />
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
                                            <a href="product.html">UA Spawn Low</a>
                                        </h3>{/* End .product-title */}
                                        <div className="product-price">
                                            $77.99
                                        </div>{/* End .product-price */}
                                    </div>
                                    <div className="product-detail">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                            </div>{/* End .ratings */}
                                            <span className="ratings-text">( 3 Reviews )</span>
                                        </div>{/* End .rating-container */}
                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active" style={{ background: '#34529d' }}><span className="sr-only">Color name</span></a>
                                            <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav */}
                                    </div>
                                </div>{/* End .product-body */}
                            </div>{/* End .product */}
                        </div>
                        <div className="col-6">
                            <div className="product product-10 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-sale">sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-24/featured-products/product-2-1.jpg" alt="Product image" className="product-image" />
                                        <img src="assets/images/demos/demo-24/featured-products/product-2-2.jpg" alt="Product image" className="product-image-hover" />
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
                                            <a href="product.html">The North Face Fanorak 2.0</a>
                                        </h3>{/* End .product-title */}
                                        <div className="product-price">
                                            <span className="new-price">$76.99</span>
                                            <span className="old-price">Was $109.99</span>
                                        </div>{/* End .product-price */}
                                    </div>
                                    <div className="product-detail">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                            </div>{/* End .ratings */}
                                            <span className="ratings-text">( 1 Reviews )</span>
                                        </div>{/* End .rating-container */}
                                        <div className="product-nav product-nav-dots" style={{ visibility: 'hidden' }}>
                                            <a href="#" className="active" style={{ background: '#34529d' }}><span className="sr-only">Color name</span></a>
                                            <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav */}
                                    </div>
                                </div>{/* End .product-body */}
                            </div>{/* End .product */}
                        </div>
                        <div className="col-6">
                            <div className="product product-10 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-sale">sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-24/featured-products/product-3-1.jpg" alt="Product image" className="product-image" />
                                        <img src="assets/images/demos/demo-24/featured-products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
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
                                            <a href="product.html">Osprey Talia</a>
                                        </h3>{/* End .product-title */}
                                        <div className="product-price">
                                            <span className="new-price">$67.50</span>
                                            <span className="old-price">Was $150.00</span>
                                        </div>{/* End .product-price */}
                                    </div>
                                    <div className="product-detail">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                            </div>{/* End .ratings */}
                                            <span className="ratings-text">( 6 Reviews )</span>
                                        </div>{/* End .rating-container */}
                                        <div className="product-nav product-nav-dots" style={{ visibility: 'hidden' }}>
                                            <a href="#" className="active" style={{ background: '#34529d' }}><span className="sr-only">Color name</span></a>
                                            <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav */}
                                    </div>
                                </div>{/* End .product-body */}
                            </div>{/* End .product */}
                        </div>
                        <div className="col-6">
                            <div className="product product-10 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-24/featured-products/product-4-1.jpg" alt="Product image" className="product-image" />
                                        <img src="assets/images/demos/demo-24/featured-products/product-4-2.jpg" alt="Product image" className="product-image-hover" />
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
                                            <a href="product.html">Ignite Limitless Leather</a>
                                        </h3>{/* End .product-title */}
                                        <div className="product-price">
                                            $52.66
                                        </div>{/* End .product-price */}
                                    </div>
                                    <div className="product-detail">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                            </div>{/* End .ratings */}
                                            <span className="ratings-text">( 6 Reviews )</span>
                                        </div>{/* End .rating-container */}
                                        <div className="product-nav product-nav-dots" style={{ visibility: 'hidden' }}>
                                            <a href="#" className="active" style={{ background: '#34529d' }}><span className="sr-only">Color name</span></a>
                                            <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav */}
                                    </div>
                                </div>{/* End .product-body */}
                            </div>{/* End .product */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-8 col-12">
                        <div className="product product-10 product-lg text-center">
                            <figure className="product-media">
                                <span className="product-label label-deal">deal of the day</span>
                                <a href="product.html">
                                    <img src="assets/images/demos/demo-24/featured-products/product-5.jpg" alt="Product image" className="product-image" />
                                </a>
                                <div className="product-action-vertical">
                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                </div>{/* End .product-action-vertical */}
                            </figure>{/* End .product-media */}
                            <div className="deal">
                                <div className="deal-countdown offer-countdown" data-until="+11d" />{/* End .deal-countdown */}
                            </div>
                            <div className="product-body">
                                <div className="product-intro">
                                    <h3 className="product-title">
                                        <a href="product.html">Troy Lee Designs A1 MIPS Bike Helmet</a>
                                    </h3>{/* End .product-title */}
                                    <div className="product-price">
                                        $139.00
                                    </div>{/* End .product-price */}
                                </div>
                                <div className="product-detail">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                        </div>{/* End .ratings */}
                                        <span className="ratings-text">( 3 Reviews )</span>
                                    </div>{/* End .rating-container */}
                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{ background: '#666666' }}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{ background: '#cc6666' }}><span className="sr-only">Color name</span></a>
                                    </div>{/* End .product-nav */}
                                </div>
                                <div className="product-action">
                                    <a href="#" className="btn-cart"><span>add to cart</span></a>
                                    <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                                </div>{/* End .product-action */}
                            </div>{/* End .product-body */}
                        </div>{/* End .product */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;