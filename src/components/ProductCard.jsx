import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ image, title, rating, price, category }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating.rate);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < fullStars ? "text-yellow-400" : "text-gray-300"} 
          size={16}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full h-48 sm:h-64 rounded-lg sm:rounded-2xl overflow-hidden mb-4 bg-white">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105" 
        />
        <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black text-white text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full capitalize font-medium">
          {category}
        </span>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-medium mb-2 transition-colors duration-300 group-hover:text-gray-700 line-clamp-2 leading-tight">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            {renderStars()}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">({rating.count})</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base sm:text-lg font-bold text-black">${price.toFixed(2)}</span>
        </div>
      </div>
      <div className="h-1 w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default ProductCard;