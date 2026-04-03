import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'Versace', imgUrl: '/brands/VersaceLogo.svg' },
    { name: 'Zara', imgUrl: '/brands/ZaraLogo.svg' },
    { name: 'Gucci', imgUrl: '/brands/GucciLogo.svg' },
    { name: 'Prada', imgUrl: '/brands/PradaLogo.svg' },
    { name: 'Calvin Klein', imgUrl: '/brands/CalvienKlienLogo.svg' }
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between flex-wrap gap-8">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.imgUrl}
              alt={brand.name}
              className="h-8 md:h-10 w-auto filter invert opacity-75 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
   