import React from 'react';

import TopBanner from '../components/TopBanner.jsx';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import Brands from '../components/Brands.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import BrowseByStyle from '../components/BrowseByStyle.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white">
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
   