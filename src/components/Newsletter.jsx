import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mb-1 sm:mb-2 leading-tight">
            Stay up to date about
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
            our latest offers
          </h2>
        </div>
        {/* Right: Form */}
        <div className="w-full lg:w-auto flex flex-col gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 sm:px-6 py-3 rounded-full bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
          />
          <button className="w-full px-4 sm:px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;