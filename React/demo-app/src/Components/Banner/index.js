import './index.css';

const Banner = () => {
	return (
		<div className="banner-container">
			<div className="text-container">
				<h1>
					The CHRISTMAS SALE
					<br />
					is now back!
				</h1>

				<p>
					Get your favourite device at an unbeleivable price and win many cool
					surprises <br />
					Christmas Discounts available on all gadgets from just Rs.299 only
				</p>
				<button className="btn">Explore Now</button>
			</div>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDUSt7BIQDsLD5jHCVbdQBO7T7dRubvrtvQ&usqp=CAU"
				alt="banner-pic"
				className="banner-image"
			/>
		</div>
	);
};

export default Banner;
