import { useState, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ maxVal, initialVal }) => {
	const [val, setVal] = useState(initialVal);

	useEffect(() => {
		setVal(initialVal);
	}, [initialVal]);

	const increment = () => {
		if (val < maxVal) setVal(val + 1);
		else setVal(maxVal);
	};

	const decrement = () => {
		if (val <= maxVal) setVal(val - 1);
		else setVal(maxVal);
	};

	return (
		<div id="counter">
			<button
				id="decrement-btn"
				className="btn"
				title="Decrement"
				onClick={decrement}
			>
				-
			</button>

			<input
				type="number"
				title="Counter value"
				id="counter-val"
				value={val}
				max={maxVal}
				onChange={(e) => setVal(Number(e.target.value))}
			></input>

			<button
				id="increment-btn"
				className="btn"
				title="Increment"
				onClick={increment}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
