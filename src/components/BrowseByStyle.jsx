import React from 'react';
import { useNavigate } from 'react-router-dom';

import casual from '/styles/casual.svg';
import formal from '/styles/formal.svg';
import party from '/styles/party.svg';
import gym from '/styles/gym.svg';

const styles = [
  { image: casual, title: 'Casual', isWide: false },
  { image: formal, title: 'Formal', isWide: true },
  { image: party, title: 'Party', isWide: true },
  { image: gym, title: 'Gym', isWide: false }
];

const StyleCard = ({ image, title, isWide }) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`relative group cursor-pointer rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden ${isWide ? 'col-span-2' : 'col-span-1'} h-40 sm:h-52 lg:h-72 bg-gray-100 hover:bg-gray-200 transition-colors`}
      onClick={() => navigate(`/category/${title.toLowerCase()}`)}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <h3 className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-lg sm:text-2xl font-bold text-white drop-shadow-lg">
        {title}
      </h3>
    </div>
  );
};

const BrowseByStyle = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center uppercase mb-8 sm:mb-12 lg:mb-16 tracking-tight"
            style={{ fontFamily: 'Integral CF' }}>
          Browse by Style
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 auto-rows-max">
          {styles.map((style, index) => (
            <StyleCard 
              key={index}
              image={style.image}
              title={style.title}
              isWide={style.isWide}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;