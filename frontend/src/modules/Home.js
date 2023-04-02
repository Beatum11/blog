import React, { useState, useEffect } from 'react';
import '../cssFiles/home.css';
import Menu from './Menu';
import Article from './Article';
import Footer from '../modules/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const {state} = useLocation();

  
  const stateBoolTest = () => {

    if(state !== null){
      if(state.menuBool === false){
        return <Menu loggedIn={false}/>
      }
    }
    

    if(state !== null){
      if(state.menuBool !== null && 
         state.userName !== null){
        return <Menu loggedIn={state.menuBool} userName={state.userName}/>;
      }
    } else{
      return <Menu loggedIn={false}/>
    } 
  }

  
  const [articles, setArticles] = useState([]);


    useEffect(() => {
      fetch('https://pastoral-wind-perfume.glitch.me/posts')
        .then(response => response.json())
        .then(data => setArticles(data.posts));
    }, []);

    
    const posts = articles.map(article => 
      <li key={article._id} onClick={() => {
        navigate('/article', {state: {
          author: article.author,
          title: article.title,
          text: article.text,
        }})
      }}>  
        <Article author={article.author} title={article.title}/>
      </li>
      );
  
  
    return (

      <div className='home-container'>
        {stateBoolTest()}
        <ul>
          {posts}
        </ul>
        <Footer/>
      </div>

    
  )
}

export default Home;