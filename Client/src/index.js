import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './utils/registerServiceWorker';

import "./style.css";

import TopArticles from "./components/APITop.js";
import BottomArticles from "./components/APIBottom.js";

ReactDOM.render(

	<TopArticles />,
	document.getElementById("to-render-1")
);

ReactDOM.render(
	<BottomArticles />,
	document.getElementById("to-render-2")
);


registerServiceWorker();
