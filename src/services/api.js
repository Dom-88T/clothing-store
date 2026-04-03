import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://fakestoreapi.com';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit = 8) => (limit ? `products?limit=${limit}` : 'products'),
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});


export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productsApi;
