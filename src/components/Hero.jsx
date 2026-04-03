import React from 'react';
import CouplePic from '/icons/CouplePic.svg';
import StarIcon from '/icons/StarIcon.svg';

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          
          <div className="w-full md:w-1/2 max-w-xl">
            <h1 className="text-[60.8px] font-black leading-[60.8px] uppercase tracking-tight mb-6 pl-6 md:pl-0"
  style={{ fontFamily: 'Integral CF' }} >
              Find clothes that matches your style
            </h1>
            <p className="text-[16px] leading-[22px] text-gray-600 mb-8"
               style={{ fontFamily: 'Satoshi' }}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-900 transition-colors">
              Shop Now
            </button>

            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <h3 className="text-[40px] font-bold">200+</h3>
                <p className="text-gray-600 text-sm">International Brands</p>
              </div>
              <div>
                <h3 className="text-[40px] font-bold">2,000+</h3>
                <p className="text-gray-600 text-sm">High-Quality Products</p>
              </div>
              <div>
                <h3 className="text-[40px] font-bold">30,000+</h3>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <img 
                src={CouplePic} 
                alt="Fashion Couple"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                style={{ transform: 'scale(1.9)' }}
              />
              <img src={StarIcon} alt="Star" className="absolute top-40 left-8 w-12 h-12 md:top-48 md:left-12 md:w-14 md:h-14 z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;