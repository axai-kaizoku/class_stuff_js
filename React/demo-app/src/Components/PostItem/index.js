import React from 'react';
import './index.css';
import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa6';
import { BiShareAlt } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';

class PostItem extends React.Component {
	state = {
		isLiked: false,
	};
	render() {
		// console.log(this.props.postDetails);
		const { postDetails } = this.props;
		return (
			<li className="post-list-item">
				<div className="post-profile-container">
					<img
						className="post-profile-image"
						src={postDetails.userImageURL}
						alt={postDetails.user}
					/>
					<p className="post-profile-username">{postDetails.user}</p>
				</div>
				<img
					src={postDetails.largeImageURL}
					alt="post-img"
					className="post-image"
					onDoubleClick={() => {
						this.setState({
							isLiked: true,
						});
					}}
				/>
				<div className="post-details-container">
					<div className="actions-container">
						<button
							className="action-button"
							onClick={() => {
								this.setState({
									isLiked: !this.state.isLiked,
								});
							}}>
							{!this.state.isLiked ? (
								<BsHeart className="action-icon like-icon" />
							) : (
								<FcLike className="action-icon liked-icon" />
							)}
						</button>
						<button className="action-button">
							<FaRegComment className="action-icon" />
						</button>
						<button className="action-button">
							<BiShareAlt className="action-icon" />
						</button>
					</div>
					<p className="post-likes-count">{`${
						this.state.isLiked ? postDetails.likes + 1 : postDetails.likes
					} likes`}</p>
				</div>
			</li>
		);
	}
}

export default PostItem;
