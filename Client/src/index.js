import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './utils/registerServiceWorker';
import App from "./components/App.js";

ReactDOM.render(
	<App />,
	document.getElementById("render")
);


registerServiceWorker();
