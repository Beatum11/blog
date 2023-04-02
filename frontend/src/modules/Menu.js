import React, { useState } from 'react';
import '../cssFiles/menu.css';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';



const Menu = ({loggedIn, userName}) => {

    const navigate = useNavigate();

    const onRegisterHandler = () => {
        navigate('/register');
    }

    const onLogOutHandler = () => {
        navigate('/', {state: {menuBool: false}});
    }

    const onLogInHandler = () => {
        navigate('/login');
    }

    const onPostHandler = () => {
        navigate('/post', {state: {nameOfUser: userName}})
    }


    if(loggedIn){
        return(
            <MenuItem second={'Post'} third={'Log Out'} 
                                      userName={userName}
                                      secondHandler={onPostHandler}
                                      thirdHandler={onLogOutHandler}/>
        );
    } else{
        return(
            <MenuItem second={'Log In'} third={'Register'} 
                      secondHandler={onLogInHandler}
                      thirdHandler={onRegisterHandler}/>
        );
    }
}

export default Menu;