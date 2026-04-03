import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col md:flex-row justify-center text-center text-black space-y-4 md:space-y-0 md:space-x-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
        <p className="text-gray-600 text-base">International Brands</p>
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">2,000+</h2>
        <p className="text-gray-600 text-base">High-Quality Products</p>
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold">30,000+</h2>
        <p className="text-gray-600 text-base">Happy Customers</p>
      </div>
    </div>
  );
};

export default Stats;