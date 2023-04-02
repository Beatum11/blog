import React from 'react';
import '../cssFiles/article.css';

const Article = ({title, author}) => {

  return (
    <div className='article-container'>
        <h1>{title}</h1>
        <p>By {author}</p>
    </div>
  )
}

export default Article;