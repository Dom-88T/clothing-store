import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../services/api'; 
import ProductCard from './ProductCard';

// FALLBACK PRODUCTS - Shows if API is down
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/200?text=White+Tshirt",
    category: "shirt",
    rating: { rate: 4.5, count: 150 }
  },
  {
    id: 2,
    title: "Black Denim Jeans",
    price: 79.99,
    image: "https://via.placeholder.com/200?text=Denim+Jeans",
    category: "pants",
    rating: { rate: 4.8, count: 200 }
  },
  {
    id: 3,
    title: "Summer Casual Dress",
    price: 49.99,
    image: "https://via.placeholder.com/200?text=Summer+Dress",
    category: "dress",
    rating: { rate: 4.6, count: 120 }
  },
  {
    id: 4,
    title: "Premium Winter Jacket",
    price: 149.99,
    image: "https://via.placeholder.com/200?text=Winter+Jacket",
    category: "jacket",
    rating: { rate: 4.9, count: 300 }
  },
  {
    id: 5,
    title: "Comfortable Sneakers",
    price: 89.99,
    image: "https://via.placeholder.com/200?text=Sneakers",
    category: "shoes",
    rating: { rate: 4.7, count: 250 }
  },
  {
    id: 6,
    title: "Stylish Sunglasses",
    price: 119.99,
    image: "https://via.placeholder.com/200?text=Sunglasses",
    category: "accessories",
    rating: { rate: 4.4, count: 180 }
  },
  {
    id: 7,
    title: "Elegant Blazer",
    price: 139.99,
    image: "https://via.placeholder.com/200?text=Blazer",
    category: "jacket",
    rating: { rate: 4.8, count: 220 }
  },
  {
    id: 8,
    title: "Casual Polo Shirt",
    price: 39.99,
    image: "https://via.placeholder.com/200?text=Polo+Shirt",
    category: "shirt",
    rating: { rate: 4.5, count: 160 }
  },
];

function ProductGrid() {
  const [showAll, setShowAll] = useState(false); 
  const limit = showAll ? null : 8; 
  const { data: products, isLoading, error } = useGetProductsQuery(limit);

  // USE FALLBACK IF API FAILS OR NO DATA
  const displayProducts = (products && products.length > 0) ? products : FALLBACK_PRODUCTS;

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center py-16 px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                category={product.category}
              />
            </Link>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;