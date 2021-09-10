import { useState, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ maxVal, initialVal, nonce }) => {
	const [val, setVal] = useState(initialVal.toString());

	useEffect(() => {
		setVal(initialVal.toString());
	}, [initialVal, nonce]);

	const offsetVal = (offset) => {
		let intVal = parseInt(val);
		if (intVal + offset <= maxVal) intVal += offset;
		else intVal = maxVal;
		setVal(intVal.toString());
	};

	return (
		<div id="counter">
			<button
				id="decrement-btn"
				className="btn"
				title="Decrement"
				onClick={() => offsetVal(-1)}
			>
				-
			</button>

			<input
				type="number"
				title="Counter value"
				id="counter-val"
				value={val}
				max={maxVal}
				onChange={(e) => setVal(e.target.value)}
			></input>

			<button
				id="increment-btn"
				className="btn"
				title="Increment"
				onClick={() => offsetVal(+1)}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
