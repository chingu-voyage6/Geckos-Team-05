import React from 'react';
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";
import SearchedArticles from "./PopUp.js";
import SearchBox from "./SearchBox.js";

const App = () => {
	return (
		<div>
			<header>
					<h1 class="logo"></h1>
				  	<div class="nav-bar">
			  			<ul class="categories">
							    <li class="nav-item"><a href="#" >LIVE</a></li>
							    <li class="nav-item"><a href="#">BUSINESS</a></li>
			    				<li class="nav-item"><a href="#" >TECH</a></li>
			    				<li class="nav-item"><a href="#" >LIFESTYLE</a></li>
						</ul>
						<SearchBox />
					</div>
			</header>


			<div className="overlay">
				<div className="popup">
					<div className="popupcontrols">
						<span className="popupclose">X</span>
					</div>
					<div className="popupcontent">
						<SearchedArticles />
					</div>
				</div>
			</div>

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