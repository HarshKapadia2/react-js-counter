import { useRef } from "react";
import "../css/initializer.css";

const Initializer = ({ receiveMaxVal, receiveInitialVal }) => {
	const initialInput = useRef();
	const maxValInput = useRef();

	const sendMaxVal = () => {
		if (maxValInput.current.value === "") receiveMaxVal(1000);
		else receiveMaxVal(Number(maxValInput.current.value));
	};

	const sendInitialVal = () => {
		if (initialInput.current.value === "") receiveInitialVal(1);
		else receiveInitialVal(Number(initialInput.current.value));
	};

	return (
		<div id="initializer">
			<div className="initializer-input-wrapper">
				<input
					id="initial-input"
					ref={initialInput}
					type="number"
					placeholder="Enter initial value"
				></input>
				<button className="btn" onClick={sendInitialVal}>
					Set Initial Value
				</button>
			</div>

			<div className="initializer-input-wrapper">
				<input
					id="max-val-input"
					ref={maxValInput}
					type="number"
					placeholder="Enter maximum value"
				></input>
				<button className="btn" onClick={sendMaxVal}>
					Set Maximum Value
				</button>
			</div>
		</div>
	);
};

export default Initializer;
