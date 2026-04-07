import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogo from '/icons/ShopLogo.svg';
import CartIcon from '/icons/CartIcon.svg';

const NavBar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/category/${search.trim().toLowerCase()}`);
      setSearch('');
    }
  };

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <img src={ShopLogo} alt="Shop.co Logo" className="h-8 w-auto" />

      <ul className="hidden md:flex list-none space-x-8 text-lg items-center">
        <li className="cursor-pointer hover:text-gray-600">Shop</li>
        <li className="cursor-pointer hover:text-gray-600">On Sale</li>
        <li className="cursor-pointer hover:text-gray-600">New Arrivals</li>
        <li className="cursor-pointer hover:text-gray-600">Brands</li>
      </ul>

      <div className="hidden md:flex items-center flex-grow max-w-md mx-8 space-x-3">
        <div className="flex-grow bg-gray-100 rounded-full p-2">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent text-black w-full focus:outline-none px-4"
          />
        </div>

        <button onClick={() => navigate('/cart')} aria-label="Cart" className="relative hover:bg-gray-100 p-2 rounded-full transition-colors">
          {<img src={CartIcon} alt="Cart" className="h-10 w-10" /> }
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>

      <div className="flex md:hidden items-center flex-grow mx-2 space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button onClick={() => navigate('/cart')} aria-label="Cart" className="relative p-2">
          <img src={CartIcon} alt="Cart" className="h-10 w-10" />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;