import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './utils/registerServiceWorker';
import App from "./components/App.js";

import "./style.css";
import "./day.css";
import "./night.css";

ReactDOM.render(
	<App />,
	document.getElementById("render")
);


registerServiceWorker();
