import React from 'react';


const TopBanner = () => {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center">
        <span>Sign up and get 20% off to your first order.&nbsp;</span>
        <a href="#" className="underline ml-1 font-semibold">Sign Up Now</a>
      </div>
    </div>
  );
};

export default TopBanner;
