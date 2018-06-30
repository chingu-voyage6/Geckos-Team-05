import React from "react";
import ReactDOM from "react-dom";

// import App from "./App.js";
import registerServiceWorker from './registerServiceWorker';
// import App1 from "./App1.js";
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";


ReactDOM.render(

	<TopArticles />,
	document.getElementById("to-render-1")
);

ReactDOM.render(
	<BottomArticles />,
	document.getElementById("to-render-2")
);


registerServiceWorker();