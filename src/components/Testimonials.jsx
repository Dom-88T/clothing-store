import React from 'react';
import { FaStar } from 'react-icons/fa'; 


const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has been a fantastic addition to my wardrobe.",
    verified: true,
  },
  {
    name: 'Alex K.',
    rating: 5,
    quote: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options, right from trendy tops to stylish outerwear, suits my fashion needs perfectly.",
    verified: true,
  },
  {
    name: 'James L.',
    rating: 5,
    quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled with Shop.co's curated collection. I've purchased several items, and each one has exceeded my expectations.",
    verified: true,
  },

];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16" 
        style={{
          fontFamily: 'Integral CF',
          fontWeight: 700,
          lineHeight: '1.2',
          width: '100%'
        }}
      >
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4 gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center flex-col gap-2">
                {testimonial.avatar && (
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                )}
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-sm sm:text-base">{testimonial.name}</span>
                  {testimonial.verified && <span className="text-green-500 text-xs mt-1">✅ Verified Buyer</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;