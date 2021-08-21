import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";

ReactDOM.render(
	<React.StrictMode>
		<noscript>You need to enable JavaScript to run this app.</noscript>

		<App />
	</React.StrictMode>,
	document.querySelector("body")
);
