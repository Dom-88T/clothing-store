import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Using DummyJSON instead of FakeStore API (which was experiencing 503 errors)
const BASE_URL = 'https://dummyjson.com';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit = 8) => `products?limit=${limit}&skip=0`,
      // Transform response to match FakeStore structure for compatibility
      transformResponse: (response) => {
        if (response.products) {
          return response.products.map(product => ({
            ...product,
            rating: {
              rate: product.rating,
              count: Math.floor(Math.random() * 500) + 100, // Fallback count since DummyJSON doesn't include review counts
            },
            image: product.thumbnail || product.images?.[0] || product.image,
          }));
        }
        return [];
      },
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
      // Transform response for category endpoint
      transformResponse: (response) => {
        if (response.products) {
          return response.products.map(product => ({
            ...product,
            rating: {
              rate: product.rating,
              count: Math.floor(Math.random() * 500) + 100,
            },
            image: product.thumbnail || product.images?.[0] || product.image,
          }));
        }
        return [];
      },
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      // Transform single product response
      transformResponse: (response) => {
        if (response && response.id) {
          return {
            ...response,
            rating: {
              rate: response.rating,
              count: Math.floor(Math.random() * 500) + 100,
            },
            image: response.thumbnail || response.images?.[0] || response.image,
          };
        }
        return response;
      },
    }),
  }),
});


export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productsApi;
