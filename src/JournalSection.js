import React, { Component } from 'react'
import Data from './response.json'
import { ReactComponent as Arrow } from './Assets/Icons/arrow.svg'

class JournalSection extends Component {
	
	state = {
		articleShown: 1,
		showAll: false
	}
	
// Function to extract date/month/year from the date_time string 	
	
	extractDMY (date) {
		
		const answer_array = date.split('-');
		const year = answer_array[0]
		const month = answer_array[1]
		
// Assign day a value and add a suffix to a number 
		const day = answer_array[2].split('T')[0]
		const daySuffix = this.addSuffix(day)
		const monthName = this.getMonthName(month) 
		return (
		<div className='article-date'>
			<div className='article-day'>
				{daySuffix}
			</div>
			<div className='article-month-year'>
				{monthName} {year}
			</div>
		</div>
		
		)
	}
	
// Function to add suffix to a DD
	
addSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}
	
//	Function to get month name from date	
 getMonthName(monthNumber) {
	var monthNames = [
		 "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	 ];
	 
//Remove first character from a string if it is 0	 
	 var monthNuberNew = monthNumber.replace(/^0+/, '')
	 var monthName = monthNames[monthNuberNew - 1]
	 return monthName	
 }


//Functions to change which article is shown

/* 

The 'articleShown' value can not be more then the number of the articles in the array, 
when the state of 'articleShown' reaches the length of the array -1, it sets the articleShown state back to 0
and restarts the slide show.
Same principle applies to the 'slideLeft()' fuction, 
with the difference that when the state 'articleShown' hits 0,
it goes back to the last article.

*/

slideRight() {
	if (this.state.articleShown < Data.articles.length - 1) {
		this.setState({
			articleShown: this.state.articleShown + 1
		})	
	} else {
		this.setState({
			articleShown: 0
		})	
	}
}

slideLeft() {
	if (this.state.articleShown > 0) {
		this.setState({
			articleShown: this.state.articleShown - 1
	})	
	} else {
		this.setState({
			articleShown: Data.articles.length - 1 
		})
	}
}

  render() {
    return (
      <div className="journal-section">
		
		{Data.articles.map((article, index) => {
		return (this.state.articleShown === index) && 
			<div key={index}
			className='article-container'>
			<div className='date-image-nav-container'>
				<div className='date-image-container'>
				<div className='date-container'>
				{this.extractDMY(article.data_time)}
			</div>
				<img alt= {`related to ${article.title}`} src={article.assets[0].image_url} />
		 </div>
		   			<div className='navigate-container'>
			<p className='article-number'>
				{index+1}/{Data.articles.length}
			</p>
			<p className='view-all-button'>VIEW ALL POSTS</p>
			<div className='buttons-container'>
				<button onClick={this.slideLeft.bind(this)} aria-label='slide left'>
					<Arrow className='arrow-left arrow'/></button>
				<button onClick={this.slideRight.bind(this)} aria-label='slide right'>
					<Arrow className='arrow'/></button>
				
			</div>
			</div>
			</div>
			<div className='text-container'>
				<h1>{article.title}</h1>
				<p>{article.body}<a href={article.url}> (+)</a></p>
			</div>
			</div>
		
	})}
      </div>
    );
  }
}

export default JournalSection
