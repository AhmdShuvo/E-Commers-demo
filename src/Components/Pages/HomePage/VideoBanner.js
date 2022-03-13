import React from 'react';

const VideoBanner = () => {
    return (
        <section className="video-banner">
          <img src="assets/images/demos/demo-24/video-banner/banner.jpg" alt="" />
          <div className="intro video">
            <div className="title">
              <h3><i>Spring / Summer</i></h3>
            </div>
            <div className="content">
              <h4>New &amp; Stylish<br />Collection 2019</h4>
            </div>
            <div className="action">
              <a href="https://www.youtube.com/watch?v=YbJOTdZBX1g" className="btn-iframe"><i className="icon-play" /></a>
            </div>
          </div>
        </section>
    );
};

export default VideoBanner;