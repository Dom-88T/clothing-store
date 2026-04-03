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
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-[295px] flex flex-col group cursor-pointer">
      <div className="relative h-[298px] rounded-[20px] overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105" 
        />
        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full capitalize">
          {category}
        </span>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="px-2">
        <h3 className="text-lg font-medium mb-2 transition-colors duration-300 group-hover:text-gray-700 line-clamp-2">{title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-600">({rating.count})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold transition-colors duration-300 group-hover:text-black">${price}</span>
        </div>
      </div>
      <div className="h-1 w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default ProductCard;