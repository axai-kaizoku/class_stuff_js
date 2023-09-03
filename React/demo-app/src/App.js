import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ProductItem from './Components/ProductItem';
import dealsList from './Sources/dealProducts';
import allProductsList from './Sources/allProducts';
import Footer from './Components/Footer';

class App extends Component {
	state = {
		cartCount: 0,
	};

	handleBuyNow = () => {
		this.setState((prevState) => ({
			cartCount: prevState.cartCount + 1,
		}));
	};

	render() {
		const { cartCount } = this.state;
		return (
			<div className="App">
				<div className="header">
					<Navbar count={cartCount} />
					<Banner />
				</div>

				<div className="products-section">
					<h2 className="title">Deals of the Day</h2>
					<ul className="products-row-list">
						{dealsList.map((eachObj) => (
							<ProductItem
								key={eachObj.id}
								product={eachObj}
								handleBuyNow={this.handleBuyNow}
							/>
						))}
					</ul>
				</div>
				<div className="products-section">
					<h2 className="title">All products</h2>
					<ul className="products-row-list">
						{allProductsList.map((eachObj) => (
							<ProductItem
								key={eachObj.id}
								product={eachObj}
								handleBuyNow={this.handleBuyNow}
							/>
						))}
					</ul>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
