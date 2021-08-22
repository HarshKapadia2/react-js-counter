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
		<div id="initial-container">
			<div id="input-field">
				<input id="text-field" ref={initialInput}></input>
				<button className="init-btn" onClick={sendInitialVal}>
					Set Initial Value
				</button>
			</div>

			<div id="input-field">
				<input id="text-field" ref={maxValInput}></input>
				<button className="init-btn" onClick={sendMaxVal}>
					Set Maximum Value
				</button>
			</div>
		</div>
	);
};

export default Initializer;
