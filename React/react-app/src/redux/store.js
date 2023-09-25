import { configureStore } from '@reduxjs/toolkit';
import { catalogApi } from './apiSlice';

export const store = configureStore({
	reducer: {
		[catalogApi.reducerPath]: catalogApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(catalogApi.middleware),
});
