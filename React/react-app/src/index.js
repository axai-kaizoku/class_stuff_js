import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './store-front.css';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { catalogApi } from './redux/apiSlice';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

// We've mounted both the store as well as the RTK query API interface into the React app. This is necessary
// The default <App /> was removed in favour of a succinct and directly mounted router from the router.js file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApiProvider api={catalogApi}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</ApiProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
