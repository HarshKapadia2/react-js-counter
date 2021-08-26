import { useState } from "react";
import "../css/app.css";
import Counter from "./Counter";
import Initializer from "./Initializer";

function App() {
	const [maxVal, setMaxVal] = useState(1000);
	const [initialVal, setInitialVal] = useState(1);

	const receiveMaxVal = (newMaxVal) => setMaxVal(newMaxVal);

	const receiveInitialVal = (newInitialVal) => setInitialVal(newInitialVal);

	return (
		<main>
			<h1>Counter</h1>

			<Initializer
				receiveMaxVal={receiveMaxVal}
				receiveInitialVal={receiveInitialVal}
			/>

			<Counter maxVal={maxVal} initialVal={initialVal} />

			<footer>
				Made by{" "}
				<a
					href="https://harshkapadia.bio.link"
					rel="noreferrer"
					target="_blank"
				>
					Harsh Kapadia
				</a>{" "}
				|{" "}
				<a
					href="https://github.com/HarshKapadia2/react-js-counter"
					rel="noreferrer"
					target="_blank"
				>
					GitHub repo
				</a>
			</footer>
		</main>
	);
}

export default App;
