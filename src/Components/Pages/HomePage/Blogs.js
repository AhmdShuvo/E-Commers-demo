import React from 'react';

const Blogs = () => {
    return (
        <section className="blog mb-6">
        <div className="container">
          <div className="heading">
            <p className="heading-cat">Our Fresh News</p>
            <h3 className="heading-title">New Blog Posts</h3>
          </div>
          <div className="owl-carousel owl-simple mb-4" data-toggle="owl" data-owl-options="{
                    &quot;nav&quot;: true, 
                    &quot;dots&quot;: false,
                    &quot;items&quot;: 3,
                    &quot;margin&quot;: 20,
                    &quot;loop&quot;: false,
                    &quot;responsive&quot;: {
                        &quot;0&quot;: {
                            &quot;items&quot;:1,
                            &quot;dots&quot;:true
                        },
                        &quot;520&quot;: {
                            &quot;items&quot;:2,
                            &quot;dots&quot;:true
                        },
                        &quot;768&quot;: {
                            &quot;items&quot;:3
                        }
                    }
                }">
            <article className="entry">
              <figure className="entry-media">
                <a href="single.html">
                  <img src="assets/images/demos/demo-24/blog/blog-1.jpg" alt="image desc" />
                </a>
              </figure>{/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Nov 22, 2018</a>, 0 Comments
                </div>{/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Sed adipiscing ornare.</a>
                </h3>{/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">read more</a>
                </div>{/* End .entry-content */}
              </div>{/* End .entry-body */}
            </article>{/* End .entry */}
            <article className="entry">
              <figure className="entry-media">
                <a href="single.html">
                  <img src="assets/images/demos/demo-24/blog/blog-2.jpg" alt="image desc" />
                </a>
              </figure>{/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Nov 22, 2018</a>, 0 Comments
                </div>{/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Aenean dignissim pellentesque.</a>
                </h3>{/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">read more</a>
                </div>{/* End .entry-content */}
              </div>{/* End .entry-body */}
            </article>{/* End .entry */}
            <article className="entry">
              <figure className="entry-media">
                <a href="single.html">
                  <img src="assets/images/demos/demo-24/blog/blog-3.jpg" alt="image desc" />
                </a>
              </figure>{/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Nov 22, 2018</a>, 0 Comments
                </div>{/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Quisque volutpat mattis.</a>
                </h3>{/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">read more</a>
                </div>{/* End .entry-content */}
              </div>{/* End .entry-body */}
            </article>{/* End .entry */}
          </div>{/* End .owl-carousel */}
        </div>
      </section>
    );
};

export default Blogs;