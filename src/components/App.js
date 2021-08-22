import { useState } from "react";
import "../css/app.css";
import Counter from "./Counter";
import Initializer from "./Initializer";

function App() {
	const [maxVal, setMaxVal] = useState(1000);
	const [initialVal, setInitialVal] = useState(1);

	const receiveMaxVal = (newMaxVal) => {
		setMaxVal(newMaxVal);
	};

	const receiveInitialVal = (newInitialVal) => {
		setInitialVal(newInitialVal);
	};

	return (
		<main>
			<h1>Counter</h1>
			<div id="flex-body">
				<Initializer
					receiveMaxVal={receiveMaxVal}
					receiveInitialVal={receiveInitialVal}
				/>

				<Counter maxVal={maxVal} initialVal={initialVal} />
			</div>
		</main>
	);
}

export default App;
