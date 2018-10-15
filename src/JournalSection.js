import React, { Component } from 'react'
import Data from './response.json'
import { ReactComponent as Arrow } from './Assets/Icons/arrow.svg'

class JournalSection extends Component {
	
	
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

	
	
  render() {
	  
	  console.log(Data.articles)
	  
	  
    return (
      <div className="journal-section">
		
		{Data.articles.map((article, index) => {
		
		return <div>
			<div className='date-container'>
				{this.extractDMY(article.data_time)}
			</div>
			<div className='image-container'>
				<img src={article.assets[0].image_url} />
			</div>
			<div className='article-number'>
				{index+1}/{Data.articles.length}
			</div>
			<div className='buttons-container'>
				<Arrow className='arrow-left arrow'/>
				<Arrow className='arrow'/>
				
			</div>	
			<div className='text-container'>
				<h1>{article.title}</h1>
				<p>{article.body}</p>
				<a href={article.url}>LINK</a>
			</div>
			</div>
		
	})}
      </div>
    );
  }
}

export default JournalSection
