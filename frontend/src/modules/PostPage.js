import React, { useState } from 'react';
import axios from 'axios';
import '../cssFiles/post.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from './Menu';

const PostPage = () => {

  const {state} = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    author: state.nameOfUser,
    title: '',
    text: ''
  });

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
          try{
            await axios.post("https://pastoral-wind-perfume.glitch.me/posts", post)
            .then((response) => {
                console.log(response);
                navigate('/', {state: {menuBool: true, userName: state.nameOfUser}});
              })
              .catch((error) => {
                console.log(error);
              });

          await setPost({
            author: '',
            title: '',
            text: ''
        });
      } catch(error){
        console.log(error);
      }
  }


  return (
    <div>
      <Menu loggedIn={true} userName={post.author}/>
      <div className='postPage-container'>
      <form onSubmit={onSubmitHandler}>
        <label>Title:</label>
        <input className='textSize' type={'text'}
         onChange={onChangeHandler} value={post.title} name={'title'}
         placeholder={'Write your title here'}/>

        <label>Text of the post:</label>
        <textarea className='textSize' rows={4} cols={50}
         onChange={onChangeHandler} value={post.text} name={'text'} />

        <button className='cool-button'>Post</button>

      </form>
    </div>
    </div>
  )

}


export default PostPage;