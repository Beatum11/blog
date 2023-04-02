import React from 'react';
import '../cssFiles/menu.css';
import logo from '../images/writing.png';

const MenuItem = ({second, third, userName=null, secondHandler, thirdHandler}) => {


  const userNameHandler = () => {
    if(userName !== null){
      return <li className='user-name'>| {userName}</li>
    } else{
      return null;
    }
  }


  return (
    <div className='menu-container'>
        <div className='logo-part'>
            <img src={logo}></img>
            <p>Blog</p>
        </div>
        <ul>
            <li>Main</li>
            <li onClick={secondHandler}>{second}</li>
            <li onClick={thirdHandler}>{third}</li>
            {userNameHandler()}
        </ul>
    </div>
  )
}

export default MenuItem;