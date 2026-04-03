import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-900 rounded-3xl p-8">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white mb-2">
            Stay up to date about
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
            our latest offers
          </h2>
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-auto flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-3 rounded-full bg-white text-gray-800 font-medium focus:outline-none"
          />
          <button className="w-full px-6 py-3 rounded-full bg-white text-black font-bold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;