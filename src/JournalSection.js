import React, { Component } from 'react'
import Data from './response.json'

class JournalSection extends Component {
	
	
// Function to extract date/month/year from the date_time string 	
	
	extractDMY (date) {
		
		const answer_array = date.split('-');
		const year = answer_array[0]
		const month = answer_array[1]
		const day = answer_array[2].split('T')[0]
		console.log('splited_array: ', answer_array)
		console.log('year: ', year)
		console.log('month: ', month)
		console.log('day: ', day)
	}
	
  render() {
	  
	  console.log(Data.articles)
	  
    return (
      <div className="journal-section">
		
		{Data.articles.map((article, index) => {
		
		return <div>
			<div className='time-container'>
				{this.extractDMY(article.data_time)}
			</div>
			<div className='image-container'>
				<img src={article.assets[0].image_url} />
			</div>
			<div className='article-number'>
				{index+1}/{Data.articles.length}
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
