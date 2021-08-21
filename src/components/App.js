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

			<div>
				Functional requirements
				<ul>
					<li>
						The counter can be initialised with a certain value. If
						no value is present at initialisation then the counter
						will start at 1.
					</li>
					<li>
						The counter can be initialised with a max value. If no
						max value is present, then assume that the max value
						will be 1000. If a max value is present then the counter
						can be incremented to only that max value.
					</li>
					<li>The user can also type a value into the counter.</li>
				</ul>
			</div>

			<Initializer
				receiveMaxVal={receiveMaxVal}
				receiveInitialVal={receiveInitialVal}
			/>

			<Counter maxVal={maxVal} initialVal={initialVal} />
		</main>
	);
}

export default App;
