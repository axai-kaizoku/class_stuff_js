import React from 'react';
import PostItem from '../PostItem';
import { ThreeCircles } from 'react-loader-spinner';
import { FaSearch } from 'react-icons/fa';
import './index.css';

class InstaPosts extends React.Component {
	apiStatusConstants = {
		initial: 'INITIAL',
		inProgress: 'INPROGRESS',
		success: 'SUCCESS',
		failure: 'FAILURE',
	};

	state = {
		allPosts: [],
		postResults: [],
		apiStatus: this.apiStatusConstants.initial,
		searchInput: '',
	};

	componentDidMount = () => {
		this.getInstaPosts();
	};

	renderInstaPostsLoaderView = () => {
		return (
			<div className="loader-container">
				<ThreeCircles
					type="Rings"
					height="50"
					width="50"
					color="#ffb6c1"
				/>
			</div>
		);
	};

	onTryAgain = () => this.getInstaPosts();

	onSearchInput = (e) => {
		console.log(e.target.value);
		this.setState({
			searchInput: e.target.value,
		});
	};

	renderInstaPostsFailureView = () => {
		return (
			<div className="failure-container">
				<img
					src="https://res.cloudinary.com/saiuttej/image/upload/v1686398773/Insta%20Share%20Project%20Assets/failure_view_w1rby9.png"
					alt="failure-view"
					className="failure-alert-icon"
				/>
				<p className="failure-desc">Something went wrong. Please try again.</p>
				<button
					className="failure-retry-button"
					onClick={this.onTryAgain}>
					Try again
				</button>
			</div>
		);
	};

	renderInstaPostsSuccessView = () => {
		const { postResults } = this.state;
		return (
			<ul>
				{postResults.map((post) => (
					<PostItem
						key={post.id}
						postDetails={post}
					/>
				))}
			</ul>
		);
	};

	renderInstaPostsSwitch = () => {
		switch (this.state.apiStatus) {
			case this.apiStatusConstants.success:
				return this.renderInstaPostsSuccessView();
			case this.apiStatusConstants.inProgress:
				return this.renderInstaPostsLoaderView();
			case this.apiStatusConstants.failure:
				return this.renderInstaPostsFailureView();

			default:
				return null;
		}
	};

	getInstaPosts = async () => {
		this.setState({
			apiStatus: this.apiStatusConstants.inProgress,
		});
		const url =
			'https://pixabay.com/api/?key=37174385-5b3a05820e1a9a74a0ee55daa&image_type=photo&pretty=true';

		const options = {
			method: 'GET',
		};

		const response = await fetch(url, options);

		if (response.ok) {
			// request is successful
			const data = await response.json();
			this.setState({
				allPosts: data.hits,
				postResults: data.hits,
				apiStatus: this.apiStatusConstants.success,
			});
			// console.log(this.state.allPosts);
			// console.log(this.state.apiStatus);
		} else {
			// request is unsuccessful
			this.setState({
				apiStatus: this.apiStatusConstants.failure,
			});
			// console.log(this.state.allPosts);
			// console.log(this.state.apiStatus);
		}
	};

	onSearchButtonClicked = () => {
		const { searchInput, allPosts } = this.state;
		const filteredPosts = allPosts.filter((post) => {
			let user = post.user.toLowerCase();
			let searchedUser = searchInput.toLowerCase();
			if (user.includes(searchedUser)) return true;
			return false;
		});
		this.setState({
			postResults: filteredPosts,
		});
	};

	render() {
		return (
			<div className="bg-container">
				<div className="content-container">
					<div className="search-container">
						<input
							type="search"
							placeholder="Search User"
							className="search-input-field"
							value={this.state.searchInput}
							onChange={this.onSearchInput}
						/>
						<div className="search-icon-container">
							<button
								className="search-icon-button"
								onClick={this.onSearchButtonClicked}>
								<FaSearch className="search-icon" />
							</button>
						</div>
					</div>
					{/* 
						// Here, I want to check if the request is successful, pending or failure
				 */}
					{this.renderInstaPostsSwitch()}
				</div>
			</div>
		);
	}
}

export default InstaPosts;
