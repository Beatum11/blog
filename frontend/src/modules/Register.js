import React, { useState } from 'react';
import '../cssFiles/register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };

    const onPostHandler = async (e) => {

      e.preventDefault();

      try{
          await axios.post("https://pastoral-wind-perfume.glitch.me/users", user)
          .then((response) => {
              console.log(response);
              navigate('/', {state: {
                menuBool: true,
                userName: user.name
              }});
            })
            .catch((error) => {
              console.log(error);
            });

        await setUser({
          name: '',
          email: '',
          password: ''
      });
    } catch(error){
      console.log(error);
    }
  }


  return (
    <div className='register-container'>

        <form className='register-form' onSubmit={onPostHandler}>
        <h1>Register</h1>
        <label>Your name:</label>
        <input name={'name'} type={'text'} 
        placeholder={'Write your name here'} onChange={onChangeHandler}
        value={user.name}/>

        <label>Your email:</label>
        <input name={'email'} type={'email'} 
        placeholder={'Write your email here'} onChange={onChangeHandler}
        value={user.email}/>

        <label>Your password:</label>
        <input name={'password'} type={'password'} 
        placeholder={'Write your password here'} onChange={onChangeHandler}
        value={user.password} />
        
        <button className='cool-button' type={'submit'}>Submit</button>
        </form>
    </div>
  );
}

export default Register;