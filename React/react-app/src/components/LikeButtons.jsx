export default function LikeButtons({
	value,
	onIncrement,
	onDecrement,
	disabled,
}) {
	return (
		<div className="like-btns">
			<button
				onClick={onIncrement}
				disabled={disabled}>
				👍🏽
			</button>
			<span className="like-count">{value}</span>
			<button
				onClick={onDecrement}
				disabled={disabled}>
				👎🏽
			</button>
		</div>
	);
}
