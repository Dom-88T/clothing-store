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
    <section className="py-16 px-10 bg-white">
      <h2 
        className="text-[48px] font-bold text-center mb-12" 
        style={{
          fontFamily: 'Integral CF',
          fontWeight: 700,
          lineHeight: '100%',
          width: '100%'
        }}
      >
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center">
                {testimonial.avatar && (
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-2" />
                )}
                <span className="font-semibold">{testimonial.name}</span>
                {testimonial.verified && <span className="ml-2 text-green-500">✅ Verified Buyer</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;