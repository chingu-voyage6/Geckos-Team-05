import React from 'react';
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";
import SearchPanel from "./SearchPanel.js";


const App = () => {
	return (
		<div>
			<header>
					<h1 className="logo"></h1>
				  	<div className="nav-bar">
			  			<ul className="categories">
							    <li className="nav-item"><a href="#" >LIVE</a></li>
							    <li className="nav-item"><a href="#">BUSINESS</a></li>
			    				<li className="nav-item"><a href="#" >TECH</a></li>
			    				<li className="nav-item"><a href="#" >LIFESTYLE</a></li>
						</ul>
						<SearchPanel />
					</div>
			</header>

			<div id="top-articles">
				<TopArticles /> 
			</div>

			<div id="bottom-articles">
				<BottomArticles />
			</div>			
		</div>
	)
}

export default App