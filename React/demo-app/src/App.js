import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { getProductDetails, getProductList } from './productLoader';
import Products from './api';

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
					element={<ProductList />}>
					<Route
						path="productlist/:productId"
						element={<ProductDetails />}
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

// import React from "react"
// import { useParams } from "react-router-dom"

// export default function VanDetail() {
//     const params = useParams()
//     const [van, setVan] = React.useState(null)

//     React.useEffect(() => {
//         fetch(`/api/vans/${params.id}`)
//             .then(res => res.json())
//             .then(data => setVan(data.vans))
//     }, [params.id])

//     return (
//         <div className="van-detail-container">
//             {van ? (
//                 <div className="van-detail">
//                     <img src={van.imageUrl} />
//                     <i className={`van-type ${van.type} selected`}>
//                         {van.type}
//                     </i>
//                     <h2>{van.name}</h2>
//                     <p className="van-price"><span>${van.price}</span>/day</p>
//                     <p>{van.description}</p>
//                     <button className="link-button">Rent this van</button>
//                 </div>
//             ) : <h2>Loading...</h2>}
//         </div>
//     )
// }
