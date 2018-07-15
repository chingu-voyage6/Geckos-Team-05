import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './utils/registerServiceWorker';

import App from "./components/App.js";


// search box is in the header, separated from Body
// so I rendered it with the different location 
// ReactDOM.render(
// 	<SearchBox />,
// 	document.getElementById("search")
// );

ReactDOM.render(
	<App />,
	document.getElementById("render")
);


registerServiceWorker();

