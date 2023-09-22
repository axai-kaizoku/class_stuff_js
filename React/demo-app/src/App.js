import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { getProductDetails, getProductList } from './productLoader';

const App = () => {
	return (
		<Router>
			<nav>
				<img
					style={{ borderRadius: '50%' }}
					src="//picsum.photos/50"
					alt="picsum"
				/>
				<div>
					<Link
						to="/"
						className="link">
						Home
					</Link>
					<Link
						to="/productlist"
						className="link">
						ProductList
					</Link>
					<Link
						to="/shoppingcart"
						className="link">
						ShoppingCart
					</Link>
					<Link
						to="/checkout"
						className="link">
						Checkout
					</Link>
				</div>
			</nav>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/productlist"
					element={<ProductList />}
					loader={getProductList}>
					<Route
						path=":productId"
						element={<ProductDetails />}
						loader={getProductDetails}
					/>
				</Route>
				<Route
					path="/shoppingcart"
					element={<ShoppingCart />}
				/>
				<Route
					path="/checkout"
					element={<Checkout />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
