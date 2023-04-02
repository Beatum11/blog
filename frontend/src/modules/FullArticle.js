import React from 'react';
import '../cssFiles/full-article.css';
import Menu from './Menu';
import Footer from './Footer';
import { useNavigate, useLocation } from 'react-router-dom';

const FullArticle = () => {

    const navigate = useNavigate();
    const {state} = useLocation();

    const dateGenerator = () => {
        const date = new Date;
        return <p className='color'>You opened this article at {date.getHours()}:{date.getMinutes()}</p>
    }

  return (
    <>
        <Menu loggedIn={true}/>
        <div className='fullArticle-container'>
            <h1>{state.title}</h1>
            <p className='fullArticle-text'>{state.text}</p>
            <p className='fullArticle-author color'>by {state.author}</p>
            {dateGenerator()}
        </div>
        <Footer/>
    </>
    
  )
}

export default FullArticle;