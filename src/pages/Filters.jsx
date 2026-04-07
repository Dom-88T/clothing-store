import React from 'react';

const Filters = ({ filters, setFilters, onClose }) => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center md:hidden mb-4">
        <h3 className="text-lg font-bold">Filters</h3>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-black text-2xl"
        >
          ×
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h4 className="font-bold mb-4 text-lg">Price Range</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value={[0, 50]}
              checked={
                filters.priceRange[0] === 0 && filters.priceRange[1] === 50
              }
              onChange={(e) => {
                const values = e.target.value.split(',').map(Number);
                setFilters({
                  ...filters,
                  priceRange: values,
                });
              }}
              className="mr-3"
            />
            $0 - $50
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value={[50, 100]}
              checked={
                filters.priceRange[0] === 50 && filters.priceRange[1] === 100
              }
              onChange={(e) => {
                const values = e.target.value.split(',').map(Number);
                setFilters({
                  ...filters,
                  priceRange: values,
                });
              }}
              className="mr-3"
            />
            $50 - $100
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value={[100, 200]}
              checked={
                filters.priceRange[0] === 100 && filters.priceRange[1] === 200
              }
              onChange={(e) => {
                const values = e.target.value.split(',').map(Number);
                setFilters({
                  ...filters,
                  priceRange: values,
                });
              }}
              className="mr-3"
            />
            $100 - $200
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value={[200, 500]}
              checked={
                filters.priceRange[0] === 200 && filters.priceRange[1] === 500
              }
              onChange={(e) => {
                const values = e.target.value.split(',').map(Number);
                setFilters({
                  ...filters,
                  priceRange: values,
                });
              }}
              className="mr-3"
            />
            $200 - $500
          </label>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="font-bold mb-4 text-lg">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="all"
              checked={filters.selectedCategory === 'all'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedCategory: e.target.value,
                })
              }
              className="mr-3"
            />
            All Categories
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="electronics"
              checked={filters.selectedCategory === 'electronics'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedCategory: e.target.value,
                })
              }
              className="mr-3"
            />
            Electronics
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="jewelery"
              checked={filters.selectedCategory === 'jewelery'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedCategory: e.target.value,
                })
              }
              className="mr-3"
            />
            Jewelry
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="men's clothing"
              checked={filters.selectedCategory === "men's clothing"}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedCategory: e.target.value,
                })
              }
              className="mr-3"
            />
            Men's Clothing
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="women's clothing"
              checked={filters.selectedCategory === "women's clothing"}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedCategory: e.target.value,
                })
              }
              className="mr-3"
            />
            Women's Clothing
          </label>
        </div>
      </div>

      {/* Apply Button for Mobile */}
      <button
        onClick={onClose}
        className="md:hidden w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
