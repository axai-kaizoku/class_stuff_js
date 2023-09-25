import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:3030';

export const catalogApi = createApi({
	reducerPath: 'catalogApi',
	baseQuery: fetchBaseQuery({
		baseUrl: apiBaseUrl,
		prepareHeaders: (headers) => {
			headers.set('Content-type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	endpoints: (build) => ({
		getProducts: build.query({
			query: () => 'products',
			providedTags: ['Products'],
		}),
		getProduct: build.query({
			query: (id) => `products/${id}`,
			providesTags: ['Product'],
		}),
		updateLikes: build.mutation({
			query: ({ id, likes }) => {
				return {
					url: `products/${id}`,
					method: 'PATCH',
					body: { likes: likes >= 0 ? likes : 0 },
				};
			},
			invalidatesTags: ['Products', 'Product'],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductQuery,
	useUpdateLikesMutation,
} = catalogApi;
