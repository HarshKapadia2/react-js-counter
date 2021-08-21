import { useRef } from "react";
import "../css/initializer.css";

const Initializer = ({ receiveMaxVal, receiveInitialVal }) => {
	const initialInput = useRef();
	const maxValInput = useRef();

	const sendMaxVal = () => {
		receiveMaxVal(Number(maxValInput.current.value));
	};

	const sendInitialVal = () => {
		receiveInitialVal(Number(initialInput.current.value));
	};

	return (
		<div id="initialization">
			<input id="initial-input" ref={initialInput}></input>
			<button className="btn" onClick={sendInitialVal}>
				Set Initial Value
			</button>

			<input id="max-val-input" ref={maxValInput}></input>
			<button className="btn" onClick={sendMaxVal}>
				Set Maximum Value
			</button>
		</div>
	);
};

export default Initializer;
