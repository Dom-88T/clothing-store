import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../services/api';
import TopBanner from '../components/TopBanner.jsx';
import NavBar from '../components/NavBar.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Filters from './Filters.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { data: allProducts = [], isLoading } = useGetProductsQuery();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    selectedCategory: category || 'all',
  });

  // Filter products by category
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      filters.selectedCategory === 'all' ||
      product.category.toLowerCase() === filters.selectedCategory.toLowerCase() ||
      category.toLowerCase() === product.category.toLowerCase();

    const priceMatch =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    return categoryMatch && priceMatch;
  });

  return (
    <>
      <TopBanner />
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {' '} &gt; {' '}
          <span className="capitalize">{category}</span>
        </div>

        {/* Category Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold capitalize mb-2">{category} Clothing</h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block md:w-64 flex-shrink-0`}
          >
            <Filters
              filters={filters}
              setFilters={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No products found in this category
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Category;
