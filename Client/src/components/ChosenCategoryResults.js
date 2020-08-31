import React from 'react';
import date_utils from '../utils/date_utils';


class ChosenCategoryResults extends React.Component {
	constructor (props){
		super (props);
		this.state = {
			array: [],
			defaultImg: ('../../assets/updating.jpg')
		}
	}

	render () {
				let array = this.props.resultsCategory;

				let CategoryComponents = array.map((val) => {
					if (val.urlToImage == null ) {
						return (
							<SearchedResults
							  id = {val.source.id + val.publishedAt}
							  imageUrl = {this.state.defaultImg}
					          headline = {val.title}
					          content = {val.description}
					          linkUrl = {val.url}
					          date = {val.publishedAt}
					   		/>
						)
					} else {
						return (
							<SearchedResults
								  id = {val.source.id + val.publishedAt}
								  imageUrl = {val.urlToImage}
						          headline = {val.title}
						          content = {val.description}
						          linkUrl = {val.url}
						           date = {val.publishedAt}
						    />
						)
					}
				})

		return (
			<div className ="searched-articles">
		     	<div className="timeline">
		        	{CategoryComponents}

		        </div>
		    </div>
		)
	}

}

class SearchedResults extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    	<div className = "timeline-box">
	    	  <div className="circle"></div>
	      	  <div className = "search-content" key={this.props.id}>
		          <div className='search-info'>
		          	  <div className = "date">
			      	  	  {this.props.date}
			      	  </div>
		              <h5 className="search-headline">{this.props.headline}</h5>
		              <p className ="search-p">{this.props.content}</p>
		              <a className = "searchlink" href={this.props.linkUrl}>Read More</a>
		          </div>
		          <div className='search-image'>
		              <img src={this.props.imageUrl} className={["image-fit", "image-style"].join(' ')}/>
		          </div>
		      </div>

	    </div>

    );
  }
}

export default ChosenCategoryResults;
