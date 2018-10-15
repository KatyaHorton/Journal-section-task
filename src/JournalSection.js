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
