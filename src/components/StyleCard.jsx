import React from 'react';

const StyleCard = ({ image, label }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
      <img 
        src={image} 
        alt={label} 
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">{label}</h3>
      </div>
    </div>
  );
};

export default StyleCard;