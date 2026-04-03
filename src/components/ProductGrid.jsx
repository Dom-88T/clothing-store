import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../services/api'; 
import ProductCard from './ProductCard';

function ProductGrid() {
  const [showAll, setShowAll] = useState(false); 
  const limit = showAll ? null : 8; 
  const { data: products = [], isLoading, error } = useGetProductsQuery(limit); // Use RTK Query hook for fetching, handles loading/error/data automatically

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-red-600">
        Failed to load products
      </div>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
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