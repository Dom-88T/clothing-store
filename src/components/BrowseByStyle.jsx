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
      className={`relative group cursor-pointer rounded-3xl overflow-hidden ${isWide ? 'col-span-2' : 'col-span-1'} h-[260px] bg-gray-100 hover:bg-gray-200 transition-colors`}
      onClick={() => navigate(`/category/${title.toLowerCase()}`)}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
        {title}
      </h3>
    </div>
  );
};

const BrowseByStyle = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-black text-center uppercase mb-12 tracking-tight"
            style={{ fontFamily: 'Integral CF' }}>
          Browse by Style
        </h2>
        <div className="grid grid-cols-3 gap-6">
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