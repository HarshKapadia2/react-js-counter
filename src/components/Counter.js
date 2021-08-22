import { useState, useRef, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ maxVal, initialVal }) => {
	const counterValSpan = useRef();

	const [val, setVal] = useState(initialVal);

	useEffect(() => {
		counterValSpan.current.value = String(val);
	}, [val]);

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

	const inputChangeVal = () => {
		setVal(Number(counterValSpan.current.value));
	};

	return (
		<div id="counter">
			<button id="decrement-btn" title="Decrement" onClick={decrement}>
				<div id="decrement">-</div>
			</button>

			<input
				type="number"
				title="Counter value"
				id="counter-val"
				max={maxVal}
				ref={counterValSpan}
				onChange={inputChangeVal}
			></input>

			<button id="increment-btn" title="Increment" onClick={increment}>
				<div id="increment">+</div>
			</button>
		</div>
	);
};

export default Counter;
