import React from 'react';
import Header from '../../Header/Header';

import Banner from './Banner';
import BestSellers from './BestSellers';
import Blogs from './Blogs';
import Carousel from './Carousel';
import Contact from './Contact';
import FeaturedProduct from './FeaturedProduct';
import HomeBanner from './HomeBanner';
import Instagram from './Instagram';
import Modal from './Modal';
import Offers from './Offers';
import VideoBanner from './VideoBanner';

const Home = () => {
    return (
        
        <div className="page-wrapper">
      <div className="background" style={{backgroundImage: 'url(assets/images/demos/demo-24/slider/back-1.jpg)'}}>
          <Banner></Banner>
          <Carousel></Carousel>
          <Offers></Offers>
          <BestSellers></BestSellers>
          <HomeBanner></HomeBanner>
          <FeaturedProduct></FeaturedProduct>
          <VideoBanner></VideoBanner>
          
          </div>
          <Contact></Contact>
          <Blogs></Blogs>
          <Instagram></Instagram>
          <Modal></Modal>
          <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
          </div>

    );
};

export default Home;