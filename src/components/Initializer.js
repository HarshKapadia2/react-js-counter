import { useState } from "react";
import "../css/initializer.css";

const Initializer = ({ receiveMaxVal, receiveInitialVal }) => {
	const [maxVal, setMaxVal] = useState(1000);
	const [initialVal, setInitialVal] = useState(1);

	return (
		<div id="initializer">
			<div className="initializer-input-wrapper">
				<input
					id="initial-input"
					onChange={(e) => setInitialVal(Number(e.target.value))}
					value={initialVal}
					type="number"
					placeholder="Enter initial value"
				></input>
				<button
					className="btn"
					onClick={() => receiveInitialVal(initialVal)}
				>
					Set Initial Value
				</button>
			</div>

			<div className="initializer-input-wrapper">
				<input
					id="max-val-input"
					onChange={(e) => setMaxVal(Number(e.target.value))}
					value={maxVal}
					type="number"
					placeholder="Enter maximum value"
				></input>
				<button className="btn" onClick={() => receiveMaxVal(maxVal)}>
					Set Maximum Value
				</button>
			</div>
		</div>
	);
};

export default Initializer;
