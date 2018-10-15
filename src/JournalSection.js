import React, { Component } from 'react'
import Data from './response.json'

class JournalSection extends Component {
	
  render() {
	  
	  console.log(Data.articles)
	  
    return (
      <div className="journal-section">
		
		{Data.articles.map((article, index) => {
		
		return <div>
			<div className='time-container'>
				{article.data_time}
			</div>
			<div className='image-container'>
			</div>
			<div className='article-number'>
				{index+1}
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
