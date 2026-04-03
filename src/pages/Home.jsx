import React from 'react';

import TopBanner from '../components/TopBanner';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import BrowseByStyle from '../components/BrowseByStyle';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="min-h-screen">
      <TopBanner/>
      <NavBar/>
      <Hero />
      <Brands />
      <ProductGrid />
      <BrowseByStyle />
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
   