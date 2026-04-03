import React from 'react';
import CouplePic from '/icons/CouplePic.svg';
import StarIcon from '/icons/StarIcon.svg';

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* LEFT SIDE - TEXT AND STATS */}
          <div className="w-full lg:w-[45%]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight uppercase tracking-tight mb-4 sm:mb-6"
  style={{ fontFamily: 'Integral CF' }} >
              Find clothes that matches your style
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
               style={{ fontFamily: 'Satoshi' }}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base">
              Shop Now
            </button>

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-16">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">200+</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">International Brands</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">2,000+</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">High-Quality Products</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">30,000+</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - COUPLE IMAGE WITH LARGE STAR */}
          <div className="w-full lg:w-[55%] flex justify-end items-center mt-6 sm:mt-8 lg:mt-0 relative">
            {/* STAR - POSITIONED ON LEFT SIDE OF IMAGE */}
            <img 
              src={StarIcon} 
              alt="Star" 
              className="absolute left-0 top-8 sm:top-12 lg:top-16 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 z-20" 
            />
            
            {/* COUPLE IMAGE - LARGER, ON RIGHT SIDE */}
            <div className="w-full max-w-lg lg:max-w-2xl">
              <img 
                src={CouplePic} 
                alt="Fashion Couple"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;