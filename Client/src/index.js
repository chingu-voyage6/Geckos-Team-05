import React from "react";
import ReactDOM from "react-dom";

// import App from "./App.js";
import registerServiceWorker from './registerServiceWorker';
// import App1 from "./App1.js";
import ArticleData from "./APITop.js";
import BottomArticles from "./APIBottom.js";


ReactDOM.render(

	<ArticleData />,
	document.getElementById("to-render-1")
);

ReactDOM.render(
	<BottomArticles />,
	document.getElementById("to-render-2")
);


registerServiceWorker();